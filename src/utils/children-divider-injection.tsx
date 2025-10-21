import React, { Children, isValidElement, cloneElement } from 'react'
import type { BlockConfig, DividerConfig, GridDividerConfig } from '../types'
import { shouldGenerateDivider, generateDividerConfig } from './divider-auto-detection'

type ComponentType = { displayName?: string; name?: string }

type BlockElementProps = {
  id?: string
  children?: React.ReactNode
  divider?: boolean | DividerConfig
  noDivider?: boolean
  [key: string]: unknown
}

/**
 * Extract block props from a React element
 */
function extractBlockProps(element: React.ReactElement): {
  id: string
  divider?: boolean | DividerConfig
  noDivider?: boolean
} | null {
  const props = element.props as BlockElementProps
  if (!props.id) return null

  return {
    id: props.id,
    divider: props.divider,
    noDivider: props.noDivider
  }
}

/**
 * Create a divider element with the given configuration
 * Note: We'll pass a factory function to avoid circular imports
 */
function createDividerElement(
  config: ReturnType<typeof generateDividerConfig>,
  key: string,
  DividerComponent: React.ComponentType<Record<string, unknown>>
): React.ReactElement {
  return React.createElement(DividerComponent, {
    key: `auto-divider-${key}`,
    targetId: config.targetId,
    position: config.position,
    size: config.size,
    className: config.className,
    handle: config.handle,
    'aria-label': config['aria-label']
  })
}

/**
 * Result of divider injection with template info
 */
export interface DividerInjectionResult {
  children: React.ReactNode
  templateItems: Array<{
    id: string
    type: 'block' | 'divider'
    sizeUnit?: 'px' | 'fr' | 'auto'
    size?: number
    dividerSize?: number
  }>
}

/**
 * Process children and inject automatic dividers
 * Returns both processed children and template information
 */
export function injectAutomaticDividers(
  children: React.ReactNode,
  dividers: 'auto' | 'manual' | 'none',
  dividerConfig?: GridDividerConfig,
  blocks?: Record<string, BlockConfig>,
  DividerComponent?: React.ComponentType<Record<string, unknown>>
): DividerInjectionResult {
  if (dividers !== 'auto' || !DividerComponent) {
    // For manual/none mode, just return children with block info
    const childArray = Children.toArray(children)
    const templateItems = childArray
      .filter(isValidElement)
      .map(child => {
        const blockProps = extractBlockProps(child)
        if (!blockProps) return null
        const blockConfig = blocks?.[blockProps.id]
        return {
          id: blockProps.id,
          type: 'block' as const,
          sizeUnit: blockConfig?.sizeUnit || 'fr',
          size: blockConfig?.defaultSize || 1
        }
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)

    return {
      children,
      templateItems
    }
  }

  const childArray = Children.toArray(children)
  const result: React.ReactNode[] = []
  const templateItems: DividerInjectionResult['templateItems'] = []

  // Process each child and potentially add dividers
  childArray.forEach((child, index) => {
    if (!isValidElement(child)) {
      result.push(child)
      return
    }

    // Extract block information
    const blockProps = extractBlockProps(child)
    if (!blockProps) {
      result.push(child)
      return
    }

    // Add the block itself
    result.push(child)

    // Add block to template
    const currentBlockConfig: BlockConfig = {
      id: blockProps.id,
      type: 'block',
      sizeUnit: 'fr',
      defaultSize: 1
    }

    // Override with actual block config if available
    if (blocks?.[blockProps.id]) {
      Object.assign(currentBlockConfig, blocks[blockProps.id])
    }

    templateItems.push({
      id: currentBlockConfig.id,
      type: 'block',
      sizeUnit: currentBlockConfig.sizeUnit || 'fr',
      size: currentBlockConfig.defaultSize || 1
    })

    // Check if we should add a divider after this block
    const isLastChild = index === childArray.length - 1
    const nextChild = index < childArray.length - 1 ? childArray[index + 1] : null

    // Get next block information for smart detection
    let nextBlockProps: { id: string } | null = null
    if (isValidElement(nextChild)) {
      const extracted = extractBlockProps(nextChild)
      if (extracted) {
        nextBlockProps = { id: extracted.id }
      }
    }

    const nextBlockConfig: BlockConfig | null = nextBlockProps ? {
      id: nextBlockProps.id,
      type: 'block',
      sizeUnit: 'fr',
      defaultSize: 1
    } : null

    // Override with actual block config if available
    if (nextBlockConfig && blocks?.[nextBlockConfig.id]) {
      Object.assign(nextBlockConfig, blocks[nextBlockConfig.id])
    }

    // Check if we should generate a divider
    const shouldGenerate = shouldGenerateDivider(
      currentBlockConfig,
      isLastChild,
      dividers,
      blockProps.divider,
      blockProps.noDivider
    )

    if (shouldGenerate) {
      // Generate divider configuration
      const dividerConfigResult = generateDividerConfig(
        currentBlockConfig,
        nextBlockConfig,
        blockProps.divider,
        dividerConfig
      )

      // Create and add the divider element
      const dividerElement = createDividerElement(
        dividerConfigResult,
        `${blockProps.id}-${index}`,
        DividerComponent
      )

      result.push(dividerElement)

      // Add divider to template
      templateItems.push({
        id: `${blockProps.id}-divider-${index}`,
        type: 'divider',
        dividerSize: dividerConfigResult.size
      })
    }
  })

  return {
    children: result,
    templateItems
  }
}

/**
 * Extended result type that includes nested group template items
 */
export interface RecursiveInjectionResult {
  children: React.ReactNode
  templateItemsByGroup: Record<string, DividerInjectionResult['templateItems']>
}

/**
 * Recursively process children including nested Block.Group components
 * Returns both processed children and template items for all groups
 */
export function processChildrenRecursively(
  children: React.ReactNode,
  dividers: 'auto' | 'manual' | 'none',
  dividerConfig?: GridDividerConfig,
  blocks?: Record<string, BlockConfig>,
  DividerComponent?: React.ComponentType<Record<string, unknown>>
): RecursiveInjectionResult {
  const templateItemsByGroup: Record<string, DividerInjectionResult['templateItems']> = {}

  if (dividers !== 'auto') {
    return {
      children,
      templateItemsByGroup
    }
  }

  const processedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    // Check if this is a Block.Group or Block component
    const displayName = (child.type as ComponentType)?.displayName || (child.type as ComponentType)?.name
    const isBlockGroup = displayName === 'Block.Group' || displayName === 'BlockGroup'
    const isBlock = displayName === 'Block'

    if (isBlockGroup) {
      // Recursively process the group's children
      const childProps = child.props as BlockElementProps
      const result = injectAutomaticDividers(
        childProps.children,
        dividers,
        dividerConfig,
        blocks,
        DividerComponent
      )

      // Store template items for this group
      const groupId = childProps.id
      if (groupId) {
        templateItemsByGroup[groupId] = result.templateItems
      }

      // Continue recursing to find nested groups
      const nestedResult = processChildrenRecursively(
        result.children,
        dividers,
        dividerConfig,
        blocks,
        DividerComponent
      )

      // Merge nested template items
      Object.assign(templateItemsByGroup, nestedResult.templateItemsByGroup)

      // Return the group with processed children
      // React 19 has stricter cloneElement types - we need to assert the props type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      return cloneElement(child, {
        ...(child.props as Record<string, unknown>),
        children: nestedResult.children
      } as Partial<unknown> & { children: React.ReactNode })
    } else if (isBlock) {
      // For regular blocks, check if they have nested groups in their children
      const childProps = child.props as BlockElementProps
      const hasNestedGroups = Children.toArray(childProps.children).some(grandChild => {
        if (!isValidElement(grandChild)) return false
        const grandChildDisplayName = (grandChild.type as ComponentType)?.displayName || (grandChild.type as ComponentType)?.name
        return grandChildDisplayName === 'Block.Group' || grandChildDisplayName === 'BlockGroup'
      })

      if (hasNestedGroups) {
        const nestedResult = processChildrenRecursively(
          childProps.children,
          dividers,
          dividerConfig,
          blocks,
          DividerComponent
        )

        // Merge nested template items
        Object.assign(templateItemsByGroup, nestedResult.templateItemsByGroup)

        // React 19 has stricter cloneElement types - we need to assert the props type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        return cloneElement(child, {
          ...(child.props as Record<string, unknown>),
          children: nestedResult.children
        } as Partial<unknown> & { children: React.ReactNode })
      }
    }

    return child
  })

  return {
    children: processedChildren,
    templateItemsByGroup
  }
}
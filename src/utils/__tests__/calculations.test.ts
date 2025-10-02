import { describe, it, expect } from 'vitest'
import {
  getFlexSpacePx,
  pxPerFr,
  clamp,
  isCollapsed,
  applyCollapseLogic,
  calculateConstrainedSize,
  generateGridTemplate,
  frToPx,
  pxToFr,
  findAdjacentBlock,
  isZeroSum
} from '../calculations'

describe('calculations utilities', () => {
  describe('getFlexSpacePx', () => {
    it('calculates available flex space correctly', () => {
      expect(getFlexSpacePx(1000, 300, 50)).toBe(650)
      expect(getFlexSpacePx(500, 200, 0)).toBe(300)
      expect(getFlexSpacePx(100, 120, 10)).toBe(0) // Cannot be negative
    })
  })

  describe('pxPerFr', () => {
    it('calculates pixels per fr unit correctly', () => {
      expect(pxPerFr(600, 3)).toBe(200)
      expect(pxPerFr(100, 2)).toBe(50)
      expect(pxPerFr(0, 1)).toBe(0)
      expect(pxPerFr(100, 0)).toBe(0) // Edge case: no fr units
    })
  })

  describe('clamp', () => {
    it('clamps values to min/max bounds', () => {
      expect(clamp(5, 0, 10)).toBe(5)
      expect(clamp(-5, 0, 10)).toBe(0)
      expect(clamp(15, 0, 10)).toBe(10)
      expect(clamp(5, 8, 10)).toBe(8) // Value below minimum
    })
  })

  describe('isCollapsed', () => {
    it('determines if value is collapsed', () => {
      expect(isCollapsed(50, 100)).toBe(true)
      expect(isCollapsed(100, 100)).toBe(true)
      expect(isCollapsed(150, 100)).toBe(false)
      expect(isCollapsed(50, 0)).toBe(false) // Collapse disabled
    })
  })

  describe('applyCollapseLogic', () => {
    it('applies collapse logic correctly', () => {
      // Normal resize
      expect(applyCollapseLogic(150, 100, 0, 0, 200)).toBe(150) // No collapse

      // Collapse when below threshold
      expect(applyCollapseLogic(80, 100, 90, 10, 200)).toBe(10)

      // Expand from collapsed state
      expect(applyCollapseLogic(50, 80, 90, 10, 200)).toBe(200)

      // Stay collapsed if small change
      expect(applyCollapseLogic(15, 80, 90, 10, 200)).toBe(15)
    })
  })

  describe('calculateConstrainedSize', () => {
    it('calculates size with constraints', () => {
      expect(calculateConstrainedSize(50, 100, 0, 200)).toBe(150)
      expect(calculateConstrainedSize(-50, 100, 0, 200)).toBe(50)
      expect(calculateConstrainedSize(150, 100, 0, 200)).toBe(200) // Max constraint

      // With inverted delta (start dividers)
      expect(calculateConstrainedSize(50, 100, 0, 200, true)).toBe(50)
      expect(calculateConstrainedSize(-50, 100, 0, 200, true)).toBe(150)
    })
  })

  describe('generateGridTemplate', () => {
    it('generates CSS grid template with dividers', () => {
      const blocks = [
        {
          id: 'block1',
          sizeUnit: 'px' as const,
          size: 200,
          dividerPosition: 'end' as const,
          dividerSize: 8
        },
        {
          id: 'block2',
          sizeUnit: 'fr' as const,
          size: 1,
          dividerPosition: 'none' as const
        }
      ]

      const template = generateGridTemplate(blocks, 'root')
      // CSS variables are now scoped by grid ID
      expect(template).toBe('var(--root-block1-size, 200px) 8px var(--root-block2-size, 1fr)')
    })

    it('handles auto sizing', () => {
      const blocks = [
        {
          id: 'block1',
          sizeUnit: 'auto' as const,
          size: 'auto' as const,
          dividerPosition: 'start' as const,
          dividerSize: 4
        }
      ]

      const template = generateGridTemplate(blocks, 'root')
      expect(template).toBe('4px auto')
    })
  })

  describe('frToPx and pxToFr', () => {
    it('converts between fr units and pixels', () => {
      expect(frToPx(2, 100)).toBe(200)
      expect(frToPx(0.5, 100)).toBe(50)

      expect(pxToFr(200, 100)).toBe(2)
      expect(pxToFr(50, 100)).toBe(0.5)
      expect(pxToFr(100, 0)).toBe(0) // Edge case
    })
  })

  describe('findAdjacentBlock', () => {
    const blocks = ['a', 'b', 'c', 'd']

    it('finds adjacent blocks correctly', () => {
      expect(findAdjacentBlock(0, blocks, 'start')).toBe(null) // No previous
      expect(findAdjacentBlock(0, blocks, 'end')).toBe('b')

      expect(findAdjacentBlock(2, blocks, 'start')).toBe('b')
      expect(findAdjacentBlock(2, blocks, 'end')).toBe('d')

      expect(findAdjacentBlock(3, blocks, 'end')).toBe(null) // No next
    })

    it('handles invalid indices', () => {
      expect(findAdjacentBlock(-1, blocks, 'start')).toBe(null)
      expect(findAdjacentBlock(10, blocks, 'end')).toBe(null)
    })
  })

  describe('isZeroSum', () => {
    it('checks zero-sum constraint', () => {
      expect(isZeroSum(10, -10)).toBe(true)
      expect(isZeroSum(5, -5)).toBe(true)
      expect(isZeroSum(10, -9)).toBe(false)
      expect(isZeroSum(0.0001, -0.0001, 0.001)).toBe(true) // Within tolerance
    })
  })
})
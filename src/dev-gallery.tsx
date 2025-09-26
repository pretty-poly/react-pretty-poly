import React, { useState } from 'react'
import BasicGridExample from '../examples/basic-grid'
import ComprehensiveExample from '../examples/comprehensive'
import DashboardExample from '../examples/dashboard'
// import VSCodeCloneExample from '../examples/vscode-clone' // Temporarily disabled due to JSX errors

interface ExampleInfo {
  name: string
  description: string
  component: React.ComponentType
  key: string
}

const examples: ExampleInfo[] = [
  {
    name: 'Basic Grid',
    description: 'Simple resizable layout with sidebar and main content area',
    component: BasicGridExample,
    key: 'basic-grid'
  },
  {
    name: 'Comprehensive',
    description: 'Full feature showcase: responsive modes, nested layouts, collapse/expand',
    component: ComprehensiveExample,
    key: 'comprehensive'
  },
  {
    name: 'Dashboard',
    description: 'Dashboard layout with charts, metrics, and customizable panels',
    component: DashboardExample,
    key: 'dashboard'
  }
  // Temporarily disabled due to JSX syntax errors:
  // {
  //   name: 'VS Code Clone',
  //   description: 'VS Code-style interface with activity bar, sidebar, editor, and panel',
  //   component: VSCodeCloneExample,
  //   key: 'vscode-clone'
  // }
]

export default function ExampleGallery() {
  const [selectedExample, setSelectedExample] = useState<string>('comprehensive')

  const currentExample = examples.find(ex => ex.key === selectedExample) || examples[0]
  const ExampleComponent = currentExample.component

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '300px',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #e1e5e9',
          padding: '20px',
          overflow: 'auto'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            PrettyPoly Examples
          </h1>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            Interactive examples showcasing polymorphic grid layouts
          </p>
        </div>

        <div>
          <h3 style={{
            fontSize: '16px',
            margin: '0 0 12px 0',
            color: '#374151'
          }}>
            Examples
          </h3>

          {examples.map((example) => (
            <div
              key={example.key}
              onClick={() => setSelectedExample(example.key)}
              style={{
                padding: '12px',
                margin: '0 0 8px 0',
                backgroundColor: selectedExample === example.key ? '#e0e7ff' : '#ffffff',
                border: selectedExample === example.key ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                if (selectedExample !== example.key) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6'
                }
              }}
              onMouseOut={(e) => {
                if (selectedExample !== example.key) {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                }
              }}
            >
              <div style={{
                fontWeight: selectedExample === example.key ? 'bold' : 'normal',
                color: selectedExample === example.key ? '#1e40af' : '#1f2937',
                marginBottom: '4px',
                fontSize: '14px'
              }}>
                {example.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.3'
              }}>
                {example.description}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#fef3c7',
          border: '1px solid #f59e0b',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#92400e',
            marginBottom: '4px'
          }}>
            💡 Pro Tip
          </div>
          <div style={{
            fontSize: '11px',
            color: '#92400e',
            lineHeight: '1.3'
          }}>
            Try resizing panels by dragging the dividers. Double-click to collapse/expand.
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Header */}
        <div style={{
          height: '60px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e1e5e9',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937'
          }}>
            {currentExample.name}
          </h2>
          <span style={{
            marginLeft: '12px',
            fontSize: '14px',
            color: '#6b7280',
            fontStyle: 'italic'
          }}>
            {currentExample.description}
          </span>
        </div>

        {/* Example container */}
        <div style={{
          height: 'calc(100vh - 60px)',
          position: 'relative'
        }}>
          <ExampleComponent />
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import ExampleSelector from './example-selector'

// Development entry point for testing the library
const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')

const root = createRoot(container)
root.render(<ExampleSelector />)
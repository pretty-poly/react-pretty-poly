import React, { useState, useEffect } from "react";
import BasicGridExample from "../examples/basic-grid";
import ComprehensiveExample from "../examples/comprehensive";
import DashboardExample from "../examples/dashboard";
import VSCodeStyleContentExample from "../examples/vscode-style-content";
import BlockContentShowcase from "../examples/block-content-showcase";
import SimpleContentExample from "../examples/simple-content-example";
import VSCodeActivityBarExample from "../examples/vscode-activity-bar";
// import VSCodeCloneExample from '../examples/vscode-clone' // Temporarily disabled due to JSX errors

interface ExampleInfo {
  name: string;
  description: string;
  component: React.ComponentType;
  key: string;
}

const examples: ExampleInfo[] = [
  {
    name: "Basic Grid",
    description: "Simple resizable layout with sidebar and main content area",
    component: BasicGridExample,
    key: "basic-grid",
  },
  {
    name: "Simple Content Example",
    description: "Basic usage of Block.Header, Block.Content, Block.Footer with tabs and toolbars",
    component: SimpleContentExample,
    key: "simple-content",
  },
  {
    name: "Comprehensive",
    description:
      "Full feature showcase: responsive modes, nested layouts, collapse/expand",
    component: ComprehensiveExample,
    key: "comprehensive",
  },
  {
    name: "Dashboard",
    description:
      "Dashboard layout with charts, metrics, and customizable panels",
    component: DashboardExample,
    key: "dashboard",
  },
  {
    name: "VS Code Style Content",
    description:
      "VS Code-style interface with tabs, toolbars, scrollable content, and status bars",
    component: VSCodeStyleContentExample,
    key: "vscode-content",
  },
  {
    name: "Block Content Showcase",
    description:
      "Demonstrates all scroll modes, structured content, and the new Block content system",
    component: BlockContentShowcase,
    key: "block-content",
  },
  {
    name: "VS Code Activity Bar",
    description:
      "Complete VS Code-style activity bar with vertical sidebar, tooltips, and badge notifications",
    component: VSCodeActivityBarExample,
    key: "vscode-activity-bar",
  },
];

export default function ExampleSelector() {
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [showSelector, setShowSelector] = useState<boolean>(true);

  // Check URL for example parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const exampleParam = urlParams.get("example");

    if (exampleParam && examples.find((ex) => ex.key === exampleParam)) {
      setSelectedExample(exampleParam);
      setShowSelector(false);
    }
  }, []);

  // Update URL when example changes
  const selectExample = (key: string) => {
    setSelectedExample(key);
    setShowSelector(false);

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?example=${key}`;
    window.history.pushState({}, "", newUrl);
  };


  // If an example is selected, show it full page
  if (!showSelector && selectedExample) {
    const currentExample = examples.find((ex) => ex.key === selectedExample);
    if (currentExample) {
      const ExampleComponent = currentExample.component;

      return (
        <div style={{ height: "100vh", position: "relative" }}>
          {/* Floating back button */}

          <ExampleComponent />
        </div>
      );
    }
  }

  // Show example selector
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "40px",
      }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "40px", maxWidth: "600px" }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#1e293b",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
          }}
        >
          PrettyPoly Examples
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          Interactive examples showcasing polymorphic grid layouts designed for
          full-page applications
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {examples.map((example) => (
          <button
            key={example.key}
            onClick={() => selectExample(example.key)}
            style={{
              padding: "32px",
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s ease",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#3b82f6";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(59, 130, 246, 0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1e293b",
                margin: "0 0 12px 0",
              }}
            >
              {example.name}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                margin: 0,
                lineHeight: "1.5",
                flex: 1,
              }}
            >
              {example.description}
            </p>
            <div
              style={{
                marginTop: "16px",
                fontSize: "12px",
                color: "#3b82f6",
                fontWeight: "500",
              }}
            >
              View Example →
            </div>
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#1e40af",
          }}
        >
          <strong>💡 Pro Tip:</strong> Each example runs in full-page mode. Try
          resizing panels by dragging dividers and double-clicking to
          collapse/expand sections.
        </div>
      </div>
    </div>
  );
}

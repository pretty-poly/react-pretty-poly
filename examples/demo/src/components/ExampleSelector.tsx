import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutPreview } from "./LayoutPreview";
import BasicDashboard from "../examples/basic-dashboard";
import IDELayout from "../examples/ide-layout";
import EmailClient from "../examples/email-client";

interface ExampleInfo {
  name: string;
  description: string;
  component: React.ComponentType;
  key: string;
}

const examples: ExampleInfo[] = [
  {
    name: "Basic Dashboard",
    description: "Clean three-column dashboard with sidebar, main content, and activity panel",
    component: BasicDashboard,
    key: "basic-dashboard",
  },
  {
    name: "IDE Layout",
    description: "Code editor interface with file tree, editor, terminal, and properties panel",
    component: IDELayout,
    key: "ide-layout",
  },
  {
    name: "Email Client",
    description: "Email interface with folder list, message list, and preview pane",
    component: EmailClient,
    key: "email-client",
  },
];

export default function ExampleSelector() {
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [showSelector, setShowSelector] = useState<boolean>(true);

  // Check URL for example parameter and handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const exampleParam = urlParams.get("example");

      if (exampleParam && examples.find((ex) => ex.key === exampleParam)) {
        setSelectedExample(exampleParam);
        setShowSelector(false);
      } else {
        setSelectedExample("");
        setShowSelector(true);
      }
    };

    // Handle initial load
    handlePopState();

    // Listen for browser back/forward button
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Update URL when example changes
  const selectExample = (key: string) => {
    setSelectedExample(key);
    setShowSelector(false);

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?example=${key}`;
    window.history.pushState({}, "", newUrl);
  };

  const goBack = () => {
    // Use browser back to navigate, popstate listener will handle state updates
    window.history.back();
  };

  // If an example is selected, show it full page
  if (!showSelector && selectedExample) {
    const currentExample = examples.find((ex) => ex.key === selectedExample);
    if (currentExample) {
      const ExampleComponent = currentExample.component;

      return (
        <div className="h-screen relative">
          {/* Floating back button */}
          <Button
            onClick={goBack}
            className="absolute top-4 right-4 z-50"
            variant="outline"
          >
            Back to Examples
          </Button>
          <ExampleComponent />
        </div>
      );
    }
  }

  // Show example selector
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            PrettyPoly Demo Examples
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interactive examples showcasing polymorphic grid layouts with shadcn/ui integration.
            Click any example to see it in full-screen mode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example) => (
            <Card
              key={example.key}
              className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              onClick={() => selectExample(example.key)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{example.name}</CardTitle>
                <CardDescription className="text-sm">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <LayoutPreview layout={example.key as 'basic-dashboard' | 'ide-layout' | 'email-client'} />
                <Button variant="outline" className="w-full">
                  View Example →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <p className="text-blue-800 text-sm">
                <strong>💡 Pro Tip:</strong> Each example runs in full-page mode. Try
                resizing panels by dragging dividers and double-clicking to
                collapse/expand sections. These examples demonstrate how PrettyPoly
                works seamlessly with shadcn/ui components.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
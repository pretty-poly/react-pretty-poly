import { createFileRoute, Navigate } from "@tanstack/react-router";
import { DemoDocsShell } from "@/docs/DemoDocsShell";
import { DEFAULT_EXAMPLE_ID, getExample } from "@/examples/registry";

export const Route = createFileRoute("/examples/$exampleId")({
  component: ExampleDocsRoute,
});

function ExampleDocsRoute() {
  const { exampleId } = Route.useParams();
  const example = getExample(exampleId);

  if (!example) {
    return (
      <Navigate
        to="/examples/$exampleId"
        params={{ exampleId: DEFAULT_EXAMPLE_ID }}
        replace
      />
    );
  }

  return <DemoDocsShell example={example} />;
}

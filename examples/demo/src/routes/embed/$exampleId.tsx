import { createFileRoute, Navigate } from "@tanstack/react-router";
import { DEFAULT_EXAMPLE_ID, getExample } from "@/examples/registry";

export const Route = createFileRoute("/embed/$exampleId")({
  component: EmbeddedExampleRoute,
});

function EmbeddedExampleRoute() {
  const { exampleId } = Route.useParams();
  const example = getExample(exampleId);

  if (!example) {
    return (
      <Navigate
        to="/embed/$exampleId"
        params={{ exampleId: DEFAULT_EXAMPLE_ID }}
        replace
      />
    );
  }

  const ExampleComponent = example.component;

  return <ExampleComponent />;
}

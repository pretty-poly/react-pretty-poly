import { createFileRoute, Navigate } from "@tanstack/react-router";
import { DEFAULT_EXAMPLE_ID } from "@/examples/registry";

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  return (
    <Navigate
      to="/examples/$exampleId"
      params={{ exampleId: DEFAULT_EXAMPLE_ID }}
      replace
    />
  );
}

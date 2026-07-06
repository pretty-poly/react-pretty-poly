# PrettyPoly Product Direction

PrettyPoly helps React applications create polymorphic user interfaces: screens
where several pieces of task context can be visible, resized, hidden, or moved
between simple panel arrangements without forcing the app into a special shell.

The goal is a small set of layout building blocks that can live inside an
ordinary React app.

## What PrettyPoly Is For

- Dense task surfaces where users benefit from more than one context at once.
- App panels such as lists, details, previews, inspectors, filters, timelines,
  compose forms, metrics, notes, or logs.
- Products like email clients, CRMs, admin tools, data tools, and IDE-like
  workflows where panels are useful but the app should still own its state and
  behavior.
- Source-copy installation through shadcn, so consumers can adapt the code to
  their design system and constraints.

## Design Principles

- Stay small. Prefer fewer primitives that compose well.
- Let the consuming app own commands, routing, data loading, permissions,
  keyboard shortcuts, and domain state.
- Keep panel layout separate from application workflow.
- Make `grid-system` excellent before adding broad optional layers.
- Treat optional primitives as helpers, not as a second application framework.

## Non-Goals

PrettyPoly is not trying to provide:

- A command system, command palette, global keybinding layer, or menu framework.
- A full application shell or workbench.
- A clone of another product's layout manager.
- A plugin architecture.
- A required view model, routing model, data model, or state container.

## Current Stability

`grid-system` is the stable center of the alpha. It contains the core grid,
blocks, dividers, hooks, and grid utilities.

`grid-sidebar` is optional and small.

`grid-primitives` and `grid-tabs` remain installable in `v0.4.1`, but they are
under review. They should not be used as evidence that PrettyPoly intends to own
application commands, saved layouts, or complex app-shell behavior.

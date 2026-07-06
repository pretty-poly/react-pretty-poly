# PrettyPoly Current State Review

PrettyPoly is an alpha shadcn source registry for React resizable panel grids.
The stable center is `grid-system`: copied source that lets a normal React app
place existing app content into resizable CSS Grid panels without adopting a
specialized application shell.

## Core

These pieces match the intended direction and should remain the center of the
library:

- Resizable CSS Grid layouts with recursive `group` and `block` configuration.
- `Grid`, `Block`, generated overlay dividers, explicit divider modes, and block
  composition helpers for headers, content, footers, and toolbars.
- Resize math, constraints, collapse/expand behavior, and persistence
  reconciliation.
- Basic responsive modes for adapting panel layouts to smaller viewports.
- The source-registry workflow: installable files live in `components/`,
  `hooks/`, and `lib/`, with `registry.json` as the public entrypoint.

## Needs Review

These pieces may be useful, but they should not be treated as settled product
direction until they are simplified and tested against real consumer usage:

- `ViewRegistry`: potentially a light optional lookup helper for mapping view
  ids to components. It may fit PrettyPoly if it stays small and does not become
  an application plugin system.
- `BlockTabs`: useful for apps that need multiple related contexts in a panel,
  but the current tab state includes editor-shaped features such as dirty,
  pinned, history, and scroll state. Those should be reviewed for generality.
- Runtime split APIs: useful for letting users add panels when needed, but they
  must stay focused on panel geometry rather than content ownership or app
  workflow.
- `ViewRenderer` and `NewTabDropdown`: convenient with `ViewRegistry`, but they
  currently make tab creation and view instantiation feel more framework-like
  than the core grid.

## Likely Overreach

These pieces pull PrettyPoly toward being an app framework instead of a small
layout primitive library:

- `CommandService`: command registration, global keybindings, command metadata,
  and command-palette-oriented APIs are app-level concerns.
- `LayoutService`: saved layout objects and block-to-view assignments create a
  second app-state owner beside the consuming app.
- Public copy that implies PrettyPoly should provide command systems, app
  workbenches, global menus, app shells, or advanced layout managers.

## Repo Hygiene Risk

The tracked `src/` tree contains older implementation copies in addition to the
current installable source under `components/`, `hooks`, and `lib`. Root
TypeScript and lint checks exclude most of `src/`; only tests under `src/**` are
part of the active harness. That means old implementation files can drift
silently and confuse future work.

Follow-up work should either remove the inactive implementation copies or make
their purpose explicit enough that only tests remain active under `src/`.

## Recommended Follow-Up Path

1. Keep `grid-system` as the stable package center and continue improving its
   type surface, tests, and docs.
2. Preserve `ViewRegistry` temporarily for review, but define it as an optional
   component lookup helper, not a plugin architecture.
3. Split or remove `CommandService` and `LayoutService` from the public registry
   in a follow-up alpha unless a concrete consumer need justifies them.
4. Simplify tabs and runtime split APIs where they pull content state,
   application workflow, or editor assumptions into PrettyPoly.
5. Clean the inactive `src/` implementation copies after the public registry
   surface is settled.

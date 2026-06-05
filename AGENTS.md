# mon_agenda — agent guide

## Stack
- Vue 3 (`<script setup>` SFCs) + Vite 8 + Tailwind CSS v4
- Vue Router 5 (web history), **no Pinia/Vuex/TypeScript**
- Font Awesome via CDN-free icon classes (`fa-regular`, `fa-solid`)
- **Node.js ≥20.19 required** (Vite 8 constraint)

## Commands
| Command | What it does |
|---------|-------------|
| `npm run dev` | Dev server (Vite) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

No lint, typecheck, or test tooling is configured.

## Project structure

```
src/
  main.js          — entry: createApp + router, no store
  App.vue          — layout: Header + SideBar + <RouterView> + BottomNav
  router/index.js  — 5 routes: /, /accueil, /calendrier, /listes, /notes, /medias
  style.css        — Tailwind v4 @theme with custom palette (--color-deep, --color-surface, etc.)
  views/           — page-level components (Accueil, Calendar, Listes, Notes)
  components/      — reusable components (editors, nav, calendar bits)
public/mock/       — JSON files served as static assets
```

## Data layer
- **No API client / store.** Views use raw `fetch()` in `onMounted()` to load mock JSON from `/mock/...`.
- Mock files: `checklists.json` (list summary), `checklist_N.json` (detail), `notes.json`
- **Gotcha:** `checklist_N.json` wraps data as `"checklist": [ { ... } ]` — an array with one object. `Listes.vue` assigns `selectedList.value = data.checklist` (array).
- Editor components receive data via props, emit `save`/`cancel`/`delete` events back to the view.

## Data flow pattern (used by both Listes and Notes)
1. View fetches summary list → renders grid
2. Click item → fetch detail → show editor component
3. Editor emits save/cancel/delete → view handles state updates

## Tailwind v4 specifics
- **No `tailwind.config.*`** — all customization via `@theme` block in `style.css`
- Custom tokens: `--color-deep`, `--color-surface`, `--color-raised`, `--color-border`, `--color-cream`, `--color-muted`, `--color-accent`, `--color-success`, `--color-subtle`
- Spacing: `xs`(4px), `sm`(8px), `md`(12px), `lg`(16px), `xl`(24px), `2xl`(32px)
- Import: `@import "tailwindcss"` (Tailwind v4 CSS-first approach)

## Conventions
- UI text is in French
- IDs are strings (e.g. `"1"`, not `1`)
- Dates use French locale (`toLocaleDateString('fr-FR')`) or ISO strings in mock data
- Checklist items have `id`, `label`, `checked` fields
- Notes have `id`, `name`, `text`, `updated_at` fields

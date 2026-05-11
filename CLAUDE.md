# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No linter or test suite is configured.

## Architecture

**Frontend-only React + Vite + Tailwind app.** No backend, no auth, no external API calls.

### Data flow

1. All form state lives in `App.jsx` as a single `form` object (shape defined by `DEFAULT_FORM` in `src/data/options.js`)
2. Every form section receives `form` + `onChange(field, value)` as props
3. `useEffect` in `App.jsx` calls `buildPrompt(form)` on every change → result passed to `PromptPreview`

### Key files

- `src/data/options.js` — single source of truth for all dropdown/checkbox options and `DEFAULT_FORM`
- `src/lib/buildPrompt.js` — pure function that maps form state to a structured markdown prompt string
- `src/components/form/Section*.jsx` — one component per form section, stateless
- `src/components/ui/` — reusable primitives: `FormField`, `MultiSelectButtons`, `CheckboxGroup`

### Conditional logic (in `App.jsx`)

- `websiteType === 'Landing page'` → preselects a fixed set of sections
- `goal === 'Generovat leady'` → `buildPrompt` adds lead-gen specific instructions
- `textSource === 'Generovat s AI'` → `buildPrompt` adds AI copy generation instruction
- `backend === 'Python backend'` → `buildPrompt` adds FastAPI note
- `features.includes('Ukládání leadů')` → `buildPrompt` adds database/integration note

### Adding a new form field

1. Add the option constant and default value to `src/data/options.js`
2. Add the UI in the relevant `Section*.jsx`
3. Handle any conditional logic in `App.jsx` → `handleChange`
4. Add the output to `buildPrompt` in `src/lib/buildPrompt.js`

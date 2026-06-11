# Architecture

Záznamy klíčových architektonických rozhodnutí. Nejnovější nahoře.

---

### Kvalitnější prompty + MCP napojení — 2026-06-11

Builder generuje výrazně lepší prompty a umožňuje napojit Claude na externí
nástroje přes MCP (Figma, Supabase, Context7, GitHub, Vercel).

**Co se přidalo:**
- `src/lib/promptShared.js` — sdílený modul s kvalitními bloky promptu
  (`QUALITY_BAR`, `CONVERSION_COPY`, `ANTI_PATTERNS`) a sestavovačem MCP bloku
  (`buildMcpBlock`). Používá ho web i app builder → jeden zdroj kvality.
- `MCP_INTEGRATIONS` v `src/data/options.js` — data-driven seznam MCP serverů
  (id, label, popis, needsUrl, setupHint).
- Pole `mcpIntegrations: []` a `figmaUrl: ''` v obou výchozích formulářích.
- `src/components/form/SectionMcp.jsx` — sdílená sekce pro výběr MCP nástrojů
  s podmíněným polem na Figma URL a info boxem o nutnosti připojit MCP server.

**Klíčová rozhodnutí:**
- MCP je oddělené od volby technologie. Supabase jako *databáze* (Tech stack /
  Databáze) ≠ Supabase *MCP* (živý nástroj, kterým Claude zakládá tabulky při stavbě).
- MCP feature negeneruje běžící integraci — appka je čistě frontend. Vytváří jen
  správné instrukce do promptu + návod, že si uživatel musí MCP server připojit sám.
- Sdílený `promptShared.js` místo kopírování bloků mezi web/app builderem (DRY).
- MCP blok v promptu se generuje jen když je něco vybráno; pořadí položek je dané
  definicí v `MCP_INTEGRATIONS`, ne pořadím kliknutí.
- Sekce číslovány průběžně; přidání MCP přečíslovalo navazující sekce.

// Sdílené bloky promptu používané jak pro web (buildPrompt), tak pro
// aplikace (buildPromptApp). Jeden zdroj kvalitní laťky → konzistentní výstup.

import { MCP_INTEGRATIONS } from '../data/options'

// Nepřekročitelná laťka kvality výstupu — platí pro web i aplikaci.
export const QUALITY_BAR = [
  '## KVALITNÍ LAŤKA (nepřekročitelná)',
  '- Vizuální hierarchie: jasné pořadí důležitosti — velikost, váha a barva písma řízená účelem, ne náhodou.',
  '- Spacing: konzistentní škála (4/8px grid), dostatek bílého prostoru, žádné nalepené prvky.',
  '- Typografie: max 2 rodiny fontů, body ≥16px, jasná škála nadpisů a řádkování.',
  '- Barvy & kontrast: omezená paleta s jasným accentem, kontrast textu splňuje WCAG AA.',
  '- Responzivita: mobile-first, ověřeno na 360px, 768px a 1280px bez horizontálního scrollu.',
  '- Stavy UI: ošetři prázdný, načítací, chybový i úspěšný stav — ne jen "happy path".',
  '- Mikro-interakce: jemné hover/focus/transition stavy, vždy viditelný focus pro klávesnici.',
  '- Přístupnost: sémantické HTML, alt texty, plná ovladatelnost z klávesnice.',
]

// Konverzní a copy principy — primárně pro weby/landing pages.
export const CONVERSION_COPY = [
  '## KONVERZE & COPY',
  '- Jeden primární cíl a jedno hlavní CTA na obrazovku — nerozcestníkuj pozornost.',
  '- Copy konkrétní > abstraktní ("Ušetříš 3 hodiny týdně", ne "Buď produktivnější").',
  '- Struktura sdělení: problém uživatele → řešení → důkaz → akce (StoryBrand).',
  '- Social proof umísti blízko CTA — reference, čísla, loga, záruka.',
  '- Hlavní hodnota i CTA viditelné bez scrollování (above the fold).',
]

// Čeho se vyvarovat — společné pro web i aplikaci.
export const ANTI_PATTERNS = [
  '## ČEMU SE VYHNI',
  '- Žádný generický "AI vzhled" — bezúčelné gradienty, náhodné emoji, glassmorphism bez důvodu.',
  '- Žádné lorem ipsum — piš reálné, kontextové texty (pokud klient texty nedodá).',
  '- Žádné nakupené sekce bez rytmu — drž konzistentní vertikální spacing.',
  '- Žádné zastaralé knihovny ani deprecated API.',
]

// Mapa id → instrukce do promptu pro daný MCP server.
const MCP_PROMPT_INSTRUCTIONS = {
  figma:
    '- **Figma (Dev Mode MCP)** — načti návrh z Figmy a postav UI přesně podle něj: komponenty, spacing, barvy, typografii i design tokens.',
  supabase:
    '- **Supabase MCP** — databázové schéma, migrace a RLS politiky vytvářej přímo přes Supabase MCP, ne jen jako SQL v textu.',
  context7:
    '- **Context7 MCP** — před použitím knihoven a frameworků si přes Context7 ověř aktuální API a syntaxi, ať kód není zastaralý.',
  github:
    '- **GitHub MCP** — práci verzuj přímo přes GitHub MCP: větve, commity, PR i issues.',
  vercel:
    '- **Vercel MCP** — deploy, čtení logů a správu env proměnných řeš přes Vercel MCP.',
}

// Sestaví blok MCP / DESIGN ZDROJE. Vrací prázdné pole, když nic není vybráno.
export function buildMcpBlock(form) {
  const { mcpIntegrations = [], figmaUrl = '' } = form
  if (mcpIntegrations.length === 0) return []

  const lines = ['## MCP / DESIGN ZDROJE']
  lines.push('Mám připojené tyto MCP servery — aktivně je využij:')

  // Zachovej pořadí z MCP_INTEGRATIONS (definované, ne podle kliknutí).
  for (const { id } of MCP_INTEGRATIONS) {
    if (!mcpIntegrations.includes(id)) continue
    lines.push(MCP_PROMPT_INSTRUCTIONS[id])
    if (id === 'figma' && figmaUrl) {
      lines.push(`  Soubor / frame: ${figmaUrl}`)
    }
  }
  lines.push('')
  return lines
}

import {
  QUALITY_BAR,
  CONVERSION_COPY,
  ANTI_PATTERNS,
  buildMcpBlock,
} from './promptShared'

const GOAL_INSTRUCTIONS = {
  'Generovat leady':
    'Zaměř se na: silné CTA, optimalizaci formulářů, prvky důvěry, mobile-first design, sledování odeslání formuláře.',
  'Prezentovat firmu':
    'Zaměř se na: jasnou prezentaci hodnot a příběhu firmy, profesionální vizuál, reference a důkazy důvěryhodnosti.',
  'Získat poptávky':
    'Zaměř se na: jednoduchý poptávkový formulář, viditelné kontaktní údaje, jasnou nabídku a CTA opakované v celé stránce.',
  'Rezervovat konzultaci':
    'Zaměř se na: rezervační/kalendářní flow, odstranění tření v procesu, připomenutí hodnoty konzultace a social proof.',
  'Budovat důvěru':
    'Zaměř se na: reference, case studies, certifikace, transparentnost a konzistentní profesionální tón.',
}

export function buildPrompt(form) {
  const {
    projectName,
    projectDescription,
    websiteType,
    goal,
    targetAudience,
    mainCta,
    outputLanguage,
    textSource,
    toneOfVoice,
    images,
    logo,
    styles,
    colorPreference,
    inspirationWebsites,
    layoutType,
    sections,
    features,
    techStack,
    backend,
    database,
    integrations,
    seo,
    legal,
    security,
    extraNotes,
  } = form

  const lines = []

  // 1. ROLE
  lines.push('## ROLE')
  lines.push(
    'Jsi senior webový designer, UX designer a frontend developer. Stavíš weby, ' +
      'které vypadají profesionálně a převádějí návštěvníky na zákazníky. ' +
      'Řídíš se principy z Refactoring UI (vizuální hierarchie, spacing, typografie) ' +
      'a Don\'t Make Me Think (srozumitelnost a bezbariérový flow).',
  )
  lines.push('')

  // 2. KONTEXT PROJEKTU
  lines.push('## KONTEXT PROJEKTU')
  if (projectName) lines.push(`Název projektu: ${projectName}`)
  if (projectDescription) lines.push(`Popis projektu: ${projectDescription}`)
  if (websiteType) lines.push(`Typ webu: ${websiteType}`)
  if (targetAudience) lines.push(`Cílová skupina: ${targetAudience}`)
  lines.push('')

  // 3. CÍL
  lines.push('## CÍL')
  if (goal) {
    lines.push(`Obchodní cíl: ${goal}`)
    if (GOAL_INSTRUCTIONS[goal]) {
      lines.push(GOAL_INSTRUCTIONS[goal])
    }
  }
  if (mainCta) lines.push(`Hlavní CTA: ${mainCta}`)
  lines.push('')

  // 4. DESIGN & OBSAH
  lines.push('## DESIGN & OBSAH')
  if (outputLanguage)
    lines.push(`Jazyk webu: ${outputLanguage} — veškeré texty na webu piš v tomto jazyce.`)
  if (toneOfVoice.length > 0) lines.push(`Tón komunikace: ${toneOfVoice.join(', ')}`)
  if (styles.length > 0) lines.push(`Styl: ${styles.join(', ')}`)
  if (colorPreference) lines.push(`Barevné preference: ${colorPreference}`)
  if (textSource) {
    lines.push(`Text: ${textSource}`)
    if (textSource === 'Generovat s AI') {
      lines.push(
        'Vygeneruj veškeré texty v odpovídajícím tónu zaměřeném na konverzi.',
      )
    } else if (textSource === 'Kombinace') {
      lines.push(
        'Část textů dodá klient, zbytek vygeneruj v odpovídajícím tónu zaměřeném na konverzi a jasně označ, které části jsi doplnil.',
      )
    }
  }
  if (images) lines.push(`Obrázky: ${images}`)
  if (logo) lines.push(`Logo: ${logo}`)
  if (inspirationWebsites) {
    lines.push(`Inspirační weby:`)
    lines.push(inspirationWebsites)
  }
  lines.push('')

  // 5. STRUKTURA
  lines.push('## STRUKTURA')
  if (layoutType) lines.push(`Layout: ${layoutType}`)
  if (sections.length > 0) lines.push(`Sekce: ${sections.join(', ')}`)
  lines.push('')

  // 6. FUNKCE
  lines.push('## FUNKCE')
  if (features.length > 0) {
    lines.push(features.join(', '))
    if (features.includes('Ukládání leadů')) {
      lines.push(
        'Poznámka: Implementuj ukládání leadů — nastav databázi a integrace podle toho.',
      )
    }
  } else {
    lines.push('Žádné speciální funkce nejsou požadovány.')
  }
  lines.push('')

  // 7. TECH STACK
  lines.push('## TECH STACK')
  if (techStack) {
    if (techStack === 'Nechat na Claudovi') {
      lines.push('Stack: Vyber nejvhodnější technologii sám na základě požadavků projektu.')
    } else {
      lines.push(`Stack: ${techStack}`)
    }
  }
  if (backend && backend !== 'Žádný') {
    if (backend === 'Nechat na Claudovi') {
      lines.push('Backend: Vyber nejvhodnější backendové řešení sám na základě požadavků projektu.')
    } else {
      lines.push(`Backend: ${backend}`)
      if (backend === 'Python backend') {
        lines.push('Použij Python (FastAPI) pro backendovou logiku.')
      }
    }
  }
  if (database && database !== 'Žádná') lines.push(`Databáze: ${database}`)
  if (integrations.length > 0)
    lines.push(`Integrace: ${integrations.join(', ')}`)

  // Kontrola konzistence tech stacku, backendu a dat
  const needsPersistence =
    features.includes('Ukládání leadů') ||
    features.includes('CMS / admin') ||
    features.includes('Rezervační systém') ||
    features.includes('Newsletter')
  if (needsPersistence && techStack === 'HTML/CSS/JS') {
    lines.push(
      'Upozornění na konzistenci: Vybrané funkce vyžadují ukládání dat, ale tech stack je statický (HTML/CSS/JS). Doplň serverless funkce + databázi nebo zvol robustnější stack.',
    )
  }
  if (needsPersistence && backend === 'Žádný') {
    lines.push(
      'Upozornění na konzistenci: Vybrané funkce vyžadují ukládání dat, ale backend je nastaven na "Žádný". Zvol vhodný backend nebo BaaS (např. Supabase).',
    )
  }
  if (
    techStack.includes('Supabase') &&
    database &&
    database !== 'Žádná' &&
    database !== 'Supabase'
  ) {
    lines.push(
      `Upozornění na konzistenci: Tech stack počítá se Supabase, ale jako databáze je zvolena ${database}. Sjednoť na jednom řešení.`,
    )
  }
  lines.push('')

  // 8. SEO
  lines.push('## SEO')
  if (seo.length > 0) {
    lines.push(seo.join(', '))
  } else {
    lines.push('Žádné speciální SEO požadavky nejsou definovány.')
  }
  lines.push('')

  // 9. PRÁVNÍ & COMPLIANCE
  lines.push('## PRÁVNÍ & COMPLIANCE')
  if (legal.length > 0) {
    lines.push(legal.join(', '))
  } else {
    lines.push('Žádné právní požadavky nejsou definovány.')
  }
  lines.push('')

  // 10. KVALITNÍ LAŤKA + KONVERZE + ANTI-PATTERNY
  lines.push(...QUALITY_BAR)
  lines.push('')
  lines.push(...CONVERSION_COPY)
  lines.push('')
  lines.push(...ANTI_PATTERNS)
  lines.push('')

  // 11. ZABEZPEČENÍ
  lines.push('## ZABEZPEČENÍ')
  if (security.length > 0) {
    lines.push(security.join(', '))
    if (security.includes('Platební brána (Stripe, GoPay...)')) {
      lines.push('Poznámka: Implementuj platební bránu bezpečně — API klíče pouze server-side, webhook ověření podpisem.')
    }
    if (security.includes('Row-Level Security (RLS databáze)')) {
      lines.push('Poznámka: Zapni RLS na všech tabulkách a definuj minimální potřebné politiky.')
    }
    if (security.includes('Ochrana API klíčů (server-side only)')) {
      lines.push('Poznámka: Žádné API klíče ve frontend kódu ani env proměnných s VITE_/NEXT_PUBLIC_ prefixem.')
    }
  } else {
    lines.push('Žádné speciální bezpečnostní požadavky nejsou definovány.')
  }
  lines.push('')

  // 12. MCP / DESIGN ZDROJE (jen když je něco vybráno)
  const mcpBlock = buildMcpBlock(form)
  if (mcpBlock.length > 0) lines.push(...mcpBlock)

  // 13. VÝSTUP
  lines.push('## VÝSTUP')
  lines.push('Prosím:')
  lines.push('1. Navrhni celkovou strukturu webu')
  lines.push('2. Vytvoř detailní UI layout pro každou sekci')
  lines.push('3. Vygeneruj kompletní, produkčně připravený kód')
  if (extraNotes) {
    lines.push('')
    lines.push('## POZNÁMKY')
    lines.push(extraNotes)
  }

  return lines.join('\n')
}

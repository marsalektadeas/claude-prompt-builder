export function buildPrompt(form) {
  const {
    projectName,
    websiteType,
    goal,
    targetAudience,
    mainCta,
    textSource,
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
    extraNotes,
  } = form

  const lines = []

  // 1. ROLE
  lines.push('## ROLE')
  lines.push(
    'Jsi senior webový designer, UX designer a frontend developer.',
  )
  lines.push('')

  // 2. KONTEXT PROJEKTU
  lines.push('## KONTEXT PROJEKTU')
  if (projectName) lines.push(`Název projektu: ${projectName}`)
  if (websiteType) lines.push(`Typ webu: ${websiteType}`)
  if (targetAudience) lines.push(`Cílová skupina: ${targetAudience}`)
  lines.push('')

  // 3. CÍL
  lines.push('## CÍL')
  if (goal) {
    lines.push(`Obchodní cíl: ${goal}`)
    if (goal === 'Generovat leady') {
      lines.push(
        'Zaměř se na: silné CTA, optimalizaci formulářů, prvky důvěry, mobile-first design, sledování odeslání formuláře.',
      )
    }
  }
  if (mainCta) lines.push(`Hlavní CTA: ${mainCta}`)
  lines.push('')

  // 4. DESIGN & OBSAH
  lines.push('## DESIGN & OBSAH')
  if (styles.length > 0) lines.push(`Styl: ${styles.join(', ')}`)
  if (colorPreference) lines.push(`Barevné preference: ${colorPreference}`)
  if (textSource) {
    lines.push(`Text: ${textSource}`)
    if (textSource === 'Generovat s AI') {
      lines.push(
        'Vygeneruj veškeré texty v odpovídajícím tónu zaměřeném na konverzi.',
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
  if (techStack) lines.push(`Stack: ${techStack}`)
  if (backend && backend !== 'Žádný') {
    lines.push(`Backend: ${backend}`)
    if (backend === 'Python backend') {
      lines.push('Použij Python (FastAPI) pro backendovou logiku.')
    }
  }
  if (database && database !== 'Žádná') lines.push(`Databáze: ${database}`)
  if (integrations.length > 0)
    lines.push(`Integrace: ${integrations.join(', ')}`)
  lines.push('')

  // 8. SEO
  lines.push('## SEO')
  if (seo.length > 0) {
    lines.push(seo.join(', '))
  } else {
    lines.push('Žádné speciální SEO požadavky nejsou definovány.')
  }
  lines.push('')

  // 9. POŽADAVKY
  lines.push('## POŽADAVKY')
  lines.push('- Mobile-first design')
  lines.push('- Čisté, moderní UI')
  lines.push('- Zaměřeno na konverzi')
  lines.push('- Kód připravený pro produkci')
  lines.push('')

  // 9. VÝSTUP
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

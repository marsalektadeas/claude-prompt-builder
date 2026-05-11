export function buildPromptApp(form) {
  const {
    projectName,
    projectDescription,
    appType,
    appGoal,
    targetAudience,
    screens,
    mainUserJourney,
    entities,
    dataModelNotes,
    authMethods,
    roles,
    appFeatures,
    techStack,
    backend,
    database,
    integrations,
    security,
    legal,
    extraNotes,
  } = form

  const lines = []

  // 1. ROLE
  lines.push('## ROLE')
  lines.push('Jsi senior full-stack developer a software architect.')
  lines.push('')

  // 2. KONTEXT PROJEKTU
  lines.push('## KONTEXT PROJEKTU')
  if (projectName) lines.push(`Název projektu: ${projectName}`)
  if (projectDescription) lines.push(`Popis: ${projectDescription}`)
  if (appType.length > 0) lines.push(`Typ aplikace: ${appType.join(', ')}`)
  if (appGoal) lines.push(`Obchodní cíl: ${appGoal}`)
  if (targetAudience) lines.push(`Cílová skupina: ${targetAudience}`)
  lines.push('')

  // 3. USER FLOW
  lines.push('## USER FLOW')
  if (screens.length > 0) lines.push(`Obrazovky: ${screens.join(', ')}`)
  if (mainUserJourney) {
    lines.push('Hlavní uživatelský průchod:')
    lines.push(mainUserJourney)
  }
  if (screens.length === 0 && !mainUserJourney) lines.push('Není specifikován.')
  lines.push('')

  // 4. DATOVÝ MODEL
  lines.push('## DATOVÝ MODEL')
  if (entities.length > 0) lines.push(`Entity: ${entities.join(', ')}`)
  if (dataModelNotes) lines.push(dataModelNotes)
  if (entities.length === 0 && !dataModelNotes) lines.push('Není specifikován.')
  lines.push('')

  // 5. AUTENTIZACE & ROLE
  lines.push('## AUTENTIZACE & ROLE')
  if (authMethods.length > 0) lines.push(`Přihlášení: ${authMethods.join(', ')}`)
  if (roles.length > 0) {
    lines.push(`Role: ${roles.join(', ')}`)
    if (roles.length > 1) {
      lines.push('Implementuj role-based access control — každá role vidí jen to, k čemu má oprávnění.')
    }
  }
  if (authMethods.length === 0 && roles.length === 0) lines.push('Není požadována autentizace.')
  lines.push('')

  // 6. FUNKCE
  lines.push('## FUNKCE')
  if (appFeatures.length > 0) {
    lines.push(appFeatures.join(', '))
    if (appFeatures.includes('Real-time aktualizace (WebSocket)')) {
      lines.push('Poznámka: Použij WebSocket nebo SSE pro real-time synchronizaci dat.')
    }
    if (appFeatures.includes('Platby a předplatné')) {
      lines.push('Poznámka: Implementuj platební systém bezpečně — API klíče pouze server-side.')
    }
    if (appFeatures.includes('Multi-tenant (více organizací)')) {
      lines.push('Poznámka: Každá organizace musí mít striktně izolovaná data — RLS nebo tenant ID na všech dotazech.')
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
  if (integrations.length > 0) lines.push(`Integrace: ${integrations.join(', ')}`)
  lines.push('')

  // 8. ZABEZPEČENÍ
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

  // 9. PRÁVNÍ & COMPLIANCE
  lines.push('## PRÁVNÍ & COMPLIANCE')
  if (legal.length > 0) {
    lines.push(legal.join(', '))
  } else {
    lines.push('Žádné právní požadavky nejsou definovány.')
  }
  lines.push('')

  // 10. POŽADAVKY
  lines.push('## POŽADAVKY')
  lines.push('- Čistý, modulární kód připravený pro produkci')
  lines.push('- Responzivní UI (mobile-friendly)')
  lines.push('- Bezpečné zacházení s daty uživatelů')
  lines.push('- Jasná struktura projektu a pojmenování')
  lines.push('')

  // 11. VÝSTUP
  lines.push('## VÝSTUP')
  lines.push('Prosím:')
  lines.push('1. Navrhni architekturu aplikace a strukturu projektu')
  lines.push('2. Definuj datový model a API endpoints')
  lines.push('3. Vytvoř detailní UI layout pro každou obrazovku')
  lines.push('4. Vygeneruj kompletní, produkčně připravený kód')
  if (extraNotes) {
    lines.push('')
    lines.push('## POZNÁMKY')
    lines.push(extraNotes)
  }

  return lines.join('\n')
}

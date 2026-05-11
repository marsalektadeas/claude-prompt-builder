export const WEBSITE_TYPES = [
  'Prezentační web',
  'Landing page',
  'Servisní web',
  'Portfolio',
  'Microsite',
]

export const GOALS = [
  'Generovat leady',
  'Prezentovat firmu',
  'Získat poptávky',
  'Rezervovat konzultaci',
  'Budovat důvěru',
]

export const TEXT_SOURCES = [
  'Dodá klient',
  'Generovat s AI',
  'Kombinace',
]

export const IMAGE_OPTIONS = [
  'Dodá klient',
  'Generováno AI',
  'Stock',
  'Kombinace',
]

export const LOGO_OPTIONS = [
  'Dodáno',
  'Placeholder',
  'Generovat jednoduchý koncept',
]

export const STYLES = [
  'Minimální',
  'Luxusní',
  'Korporátní',
  'Moderní',
  'Prémiový',
  'Čistě medicínský',
  'Tmavě elegantní',
]

export const LAYOUT_TYPES = ['Jedna stránka', 'Více stránek']

export const SECTIONS = [
  'Hero',
  'O nás',
  'Služby',
  'Výhody',
  'Reference',
  'Proces',
  'FAQ',
  'Kontaktní formulář',
  'Patička',
  'Blog',
  'Stránka díků',
]

export const FEATURES = [
  'Kontaktní formulář',
  'Vícekrokový formulář',
  'Newsletter',
  'Rezervační systém',
  'Blog',
  'Jazykové verze',
  'CMS / admin',
  'Ukládání leadů',
  'API integrace',
]

export const TECH_STACKS = [
  'Nechat na Claudovi',
  'HTML/CSS/JS',
  'React',
  'Next.js + Tailwind',
  'Next.js + Tailwind + backend',
  'Next.js + Tailwind + Supabase',
]

export const BACKENDS = ['Žádný', 'Jednoduchý backend', 'Python backend']

export const DATABASES = ['Žádná', 'Supabase', 'Firebase', 'Airtable', 'Jiná']

export const INTEGRATIONS = [
  'Google Analytics',
  'Google Tag Manager',
  'Meta Pixel',
  'Hotjar',
  'Ecomail',
  'Mailchimp',
  'HubSpot',
  'Pipedrive',
  'reCAPTCHA',
  'Webhook',
]

export const SEO_OPTIONS = [
  'Meta title a description',
  'Open Graph (sdílení na sítích)',
  'Sitemap.xml',
  'Robots.txt',
  'Strukturovaná data (schema.org)',
  'URL struktura (SEO-friendly)',
  'Optimalizace rychlosti (Core Web Vitals)',
  'Alt texty obrázků',
  'Napojení na Google Search Console',
]

export const LEGAL_OPTIONS = [
  'Cookies lišta (GDPR consent)',
  'Privacy Policy (zásady ochrany osobních údajů)',
  'Terms & Conditions (obchodní podmínky)',
  'Cookies Policy',
  'Správa souhlasů (consent management)',
]

// ─── APP MODE OPTIONS ────────────────────────────────────────────────────────

export const APP_TYPES = [
  'SaaS (software as a service)',
  'Interní nástroj / admin panel',
  'Marketplace',
  'E-commerce platforma',
  'Dashboard / analytika',
  'CRM / CMS',
  'Mobilní aplikace (PWA)',
  'Sociální síť / komunita',
]

export const APP_GOALS = [
  'Automatizovat firemní procesy',
  'Spravovat a vizualizovat data',
  'Generovat příjmy (platby, předplatné)',
  'Zlepšit komunikaci v týmu',
  'Prodávat produkty nebo služby',
  'Sledovat metriky a výkon',
  'Budovat komunitu uživatelů',
]

export const USER_FLOW_SCREENS = [
  'Onboarding / registrace',
  'Přihlášení',
  'Dashboard / přehled',
  'Seznam / tabulka záznamů',
  'Detail záznamu',
  'Formulář pro vytvoření / editaci',
  'Profil uživatele',
  'Nastavení účtu',
  'Notifikace',
  'Platby / fakturace',
  'Admin panel',
  'Analytika / reporty',
  'Vyhledávání / filtrování',
  'Chat / komunikace',
]

export const DATA_ENTITIES = [
  'Uživatel (User)',
  'Organizace / Firma',
  'Produkt / Položka',
  'Objednávka / Transakce',
  'Dokument / Soubor',
  'Zpráva / Konverzace',
  'Notifikace',
  'Platba / Faktura',
  'Kategorie / Tag',
  'Role / Oprávnění',
  'Log / Aktivita',
  'Nastavení (Settings)',
]

export const AUTH_METHODS = [
  'Email + heslo',
  'Google OAuth',
  'GitHub OAuth',
  'Magic link (email)',
  'SSO (enterprise)',
  'Anonymní uživatel',
]

export const ROLE_OPTIONS = [
  'Superadmin',
  'Admin',
  'Manager',
  'Uživatel (User)',
  'Viewer (jen čtení)',
  'Guest / anonymní',
]

export const APP_FEATURES = [
  'Dashboard s přehledy',
  'Tabulka s filtrováním a řazením',
  'CRUD operace (vytvoření, editace, smazání)',
  'Fulltextové vyhledávání',
  'Export (CSV, PDF)',
  'Import dat',
  'In-app notifikace',
  'Email notifikace',
  'Push notifikace',
  'Real-time aktualizace (WebSocket)',
  'Komentáře / diskuse',
  'Nahrávání souborů',
  'Platby a předplatné',
  'Fakturace',
  'Multi-tenant (více organizací)',
  'Vícejazyčnost (i18n)',
  'Dark mode',
  'Audit log',
  'API pro třetí strany (REST / GraphQL)',
]

export const DEFAULT_APP_FORM = {
  projectName: '',
  projectDescription: '',
  appType: '',
  appGoal: '',
  targetAudience: '',
  screens: [],
  mainUserJourney: '',
  entities: [],
  dataModelNotes: '',
  authMethods: [],
  roles: [],
  appFeatures: [],
  techStack: '',
  backend: '',
  database: '',
  integrations: [],
  security: [],
  legal: [],
  extraNotes: '',
}

// ─── SECURITY ────────────────────────────────────────────────────────────────

export const SECURITY_HINTS = {
  'Autentizace uživatelů (login / registrace)': 'Přihlašovací systém s účty — uživatel se zaregistruje, přihlásí a vidí jen svá data.',
  'Role-based access control (RBAC)': 'Různá oprávnění pro různé role — např. admin vidí vše, běžný uživatel jen své věci.',
  'Two-factor authentication (2FA)': 'Druhý krok ověření při přihlášení — SMS kód nebo authenticator appka pro vyšší bezpečnost.',
  'Platební brána (Stripe, GoPay...)': 'Napojení na platební systém pro přijímání online plateb kartou nebo bankou.',
  'PCI DSS compliance (platební bezpečnost)': 'Standard bezpečnosti pro weby zpracovávající platby — chrání data platebních karet.',
  'Ochrana API klíčů (server-side only)': 'API klíče (pro AI, mapy, SMS...) musí být jen na serveru — nikdy ve frontend kódu.',
  'Row-Level Security (RLS databáze)': 'Pravidla v databázi zajistí, že každý uživatel vidí jen svá data — i při úniku kódu.',
  'Rate limiting (ochrana endpointů)': 'Omezení počtu požadavků za minutu — brání zneužití formulářů, přihlášení a API.',
  'CORS konfigurace': 'Určení, které domény smí volat vaše API — zabraňuje požadavkům z neoprávněných webů.',
  'Content Security Policy (CSP)': 'HTTP hlavička říkající prohlížeči, odkud smí načítat skripty — chrání před XSS útoky.',
  'Input validace & sanitizace': 'Ověření a vyčištění všech dat od uživatele na serveru — prevence SQL injection a XSS.',
  'Šifrování citlivých dat': 'Citlivé informace (hesla, osobní data) uložené šifrovaně — při úniku databáze jsou nečitelné.',
  'Audit log (záznam akcí)': 'Záznam důležitých akcí v systému (kdo se přihlásil, co změnil) pro dohledatelnost.',
  'DDoS / bot ochrana': 'Ochrana před automatizovanými útoky a boty — např. Cloudflare, reCAPTCHA nebo rate limiting.',
}

export const SECURITY_OPTIONS = [
  'Autentizace uživatelů (login / registrace)',
  'Role-based access control (RBAC)',
  'Two-factor authentication (2FA)',
  'Platební brána (Stripe, GoPay...)',
  'PCI DSS compliance (platební bezpečnost)',
  'Ochrana API klíčů (server-side only)',
  'Row-Level Security (RLS databáze)',
  'Rate limiting (ochrana endpointů)',
  'CORS konfigurace',
  'Content Security Policy (CSP)',
  'Input validace & sanitizace',
  'Šifrování citlivých dat',
  'Audit log (záznam akcí)',
  'DDoS / bot ochrana',
]

export const DEFAULT_FORM = {
  projectName: '',
  projectDescription: '',
  websiteType: '',
  goal: '',
  targetAudience: '',
  mainCta: '',
  textSource: '',
  images: '',
  logo: '',
  styles: [],
  colorPreference: '',
  inspirationWebsites: '',
  layoutType: '',
  sections: [],
  features: [],
  techStack: '',
  backend: '',
  database: '',
  integrations: [],
  seo: [],
  legal: [],
  security: [],
  extraNotes: '',
}

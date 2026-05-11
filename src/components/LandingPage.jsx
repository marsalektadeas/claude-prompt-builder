import { useState } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Vyplň dotazník',
    description: 'Projdi sekce a vyber co projekt potřebuje — typ, design, funkce, tech stack, SEO, zabezpečení, právní požadavky.',
  },
  {
    number: '02',
    title: 'Zkopíruj prompt',
    description: 'Strukturovaný prompt pro Claudea se generuje v reálném čase. Jedním klikem ho zkopíruješ do schránky.',
  },
  {
    number: '03',
    title: 'Pusť Claudea do práce',
    description: 'Vlož prompt do Claude.ai a dostaneš kompletní, produkčně připravený kód přesně podle tvých požadavků.',
  },
]

const FOR_WHO = [
  {
    icon: '💼',
    title: 'Podnikatelé',
    description: 'Chceš rychle otestovat nápad bez programátora? Prompt builder ti pomůže zadat Claudeovi přesně co potřebuješ — bez technického žargonu.',
  },
  {
    icon: '🎨',
    title: 'Designéři & freelanceři',
    description: 'Potřebuješ dodat klientovi prototyp nebo hotový kód? Strukturovaný prompt ti ušetří hodiny opravování a nejasností.',
  },
  {
    icon: '⚡',
    title: 'Vývojáři',
    description: 'Nastartuj nový projekt za minuty. Prompt s tech stackem, databází, autentizací a bezpečnostními požadavky máš hned.',
  },
]

const FAQS = [
  {
    q: 'Musím být developer, abych to použil?',
    a: 'Ne. Stačí vyplnit formulář — co projekt potřebuje, jak má vypadat a co má umět. Strukturovaný prompt pro Claudea vygenerujeme my.',
  },
  {
    q: 'Funguje to s Claude.ai?',
    a: 'Ano. Zkopíruj vygenerovaný prompt a vlož ho přímo do claude.ai. Funguje i s Claude API.',
  },
  {
    q: 'Pro jaké projekty to funguje?',
    a: 'Pro weby (landing page, prezentační web, portfolio, microsite) i aplikace (SaaS, admin panel, marketplace, dashboard, e-commerce platforma a další).',
  },
  {
    q: 'Je to zdarma?',
    a: 'Ano, Claude Prompt Builder je zcela zdarma. Potřebuješ jen vlastní přístup ke Claudeovi.',
  },
  {
    q: 'Co když nevím, co zadat?',
    a: 'Vyplň jen to co víš. Čím víc informací, tím přesnější výsledek — ale i s minimem dostaneš solidní základ pro práci s Claudem.',
  },
  {
    q: 'Proč nestačí jen napsat Claudeovi co chci?',
    a: 'Claude funguje nejlépe se strukturovaným promptem, který pokrývá roli, kontext, cíl, design, funkce, tech stack i požadavky. Tohle sestavení trvá zkušenému člověku 15–30 minut. Prompt builder to zvládne za 2.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span className="text-gray-900 font-medium">{q}</span>
        <span className={`text-gray-400 text-2xl flex-shrink-0 leading-none transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <p className="pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">Claude Prompt Builder</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#jak-to-funguje" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">Jak to funguje</a>
            <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">FAQ</a>
            <button
              onClick={onStart}
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Vyzkoušet zdarma
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              Funguje s Claude.ai i Claude API
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Postav web nebo appku<br />s Claudem.{' '}
              <span className="text-indigo-400">Správně napoprvé.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Vyplň dotazník, zkopíruj prompt a pusť Claudea do práce.
              Bez tápání, bez opakování, bez zbytečných iterací.
            </p>
            <div className="flex flex-wrap gap-3 mb-14">
              <button
                onClick={onStart}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Vyzkoušet zdarma →
              </button>
              <a
                href="#jak-to-funguje"
                className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors"
              >
                Jak to funguje
              </a>
            </div>
          </div>

          {/* Mock prompt preview */}
          <div className="bg-gray-900 rounded-t-2xl border border-gray-800 border-b-0 overflow-hidden max-w-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="ml-2 text-xs text-gray-600">vygenerovaný prompt</span>
            </div>
            <pre className="px-5 py-4 text-xs text-gray-400 leading-relaxed font-mono select-none">{`## ROLE
Jsi senior webový designer, UX designer a frontend developer.

## KONTEXT PROJEKTU
Název projektu: Acme Studio
Typ webu: Landing page
Cílová skupina: Majitelé malých firem, 30–50 let

## CÍL
Obchodní cíl: Generovat leady
Hlavní CTA: Rezervovat bezplatnou konzultaci

## DESIGN & OBSAH
Styl: Moderní, Prémiový
Barevné preference: Tmavě modrá, zlatá
Text: Generovat s AI`}</pre>
          </div>
        </div>
      </section>

      {/* Jak to funguje */}
      <section id="jak-to-funguje" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Postup</p>
            <h2 className="text-3xl font-bold text-gray-900">Jak to funguje</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-gray-100 mb-4 leading-none">{step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co pokrývá */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Obsah</p>
            <h2 className="text-3xl font-bold text-gray-900">Všechno, co Claudeovi říct musíš</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Prompt builder pokrývá oba typy projektů. Na každý detail pamatuje za tebe.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: 'Web',
                color: 'indigo',
                items: ['Typ a cíl webu', 'Design & obsah', 'Struktura stránek', 'Funkce', 'Tech stack', 'Integrace', 'SEO', 'Zabezpečení', 'Právní & GDPR'],
              },
              {
                label: 'Aplikace',
                color: 'violet',
                items: ['Typ aplikace', 'User flow & obrazovky', 'Datový model', 'Autentizace & role', 'Funkce', 'Tech stack', 'Integrace', 'Zabezpečení', 'Právní & GDPR'],
              },
            ].map((col) => (
              <div key={col.label} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className={`inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-xs font-semibold ${col.color === 'indigo' ? 'bg-indigo-50 text-indigo-700' : 'bg-violet-50 text-violet-700'}`}>
                  {col.label}
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${col.color === 'indigo' ? 'bg-indigo-400' : 'bg-violet-400'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">Pro koho</p>
            <h2 className="text-3xl font-bold text-gray-900">Kdo to používá</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {FOR_WHO.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">Časté otázky</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 px-6">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Připravený zkusit to?</h2>
          <p className="text-indigo-200 mb-8 max-w-md mx-auto">Zdarma, bez registrace. Jen vyplň dotazník a zkopíruj prompt.</p>
          <button
            onClick={onStart}
            className="px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Spustit builder →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="text-gray-500 text-sm">Claude Prompt Builder</span>
          </div>
          <p className="text-gray-600 text-xs">Není affiliate s Anthropic. Claude je produkt Anthropic.</p>
        </div>
      </footer>

    </div>
  )
}

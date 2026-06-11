import { useState, useEffect, useMemo } from 'react'
import { DEFAULT_FORM, DEFAULT_APP_FORM } from './data/options'
import { buildPrompt } from './lib/buildPrompt'
import { buildPromptApp } from './lib/buildPromptApp'
import SectionBasicInfo from './components/form/SectionBasicInfo'
import SectionContentDesign from './components/form/SectionContentDesign'
import SectionStructure from './components/form/SectionStructure'
import SectionFeatures from './components/form/SectionFeatures'
import SectionTechStack from './components/form/SectionTechStack'
import SectionIntegrations from './components/form/SectionIntegrations'
import SectionSEO from './components/form/SectionSEO'
import SectionLegal from './components/form/SectionLegal'
import SectionSecurity from './components/form/SectionSecurity'
import SectionExtraNotes from './components/form/SectionExtraNotes'
import SectionAppBasicInfo from './components/form/SectionAppBasicInfo'
import SectionUserFlow from './components/form/SectionUserFlow'
import SectionDataModel from './components/form/SectionDataModel'
import SectionAuth from './components/form/SectionAuth'
import SectionAppFeatures from './components/form/SectionAppFeatures'
import SectionMcp from './components/form/SectionMcp'
import LandingPage from './components/LandingPage'
import PromptPreview from './components/PromptPreview'

const LANDING_PAGE_SECTIONS = ['Hero', 'Výhody', 'Reference', 'FAQ', 'Kontaktní formulář', 'Stránka díků']

const STORAGE_KEY = 'cpb:state:v1'

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

// Formulář má obsah, pokud se aspoň jedno pole liší od výchozího prázdného stavu
function formHasContent(form) {
  return Object.values(form).some((v) =>
    Array.isArray(v) ? v.length > 0 : typeof v === 'string' && v.trim() !== '',
  )
}

export default function App() {
  const saved = loadState()
  const [view, setView] = useState('landing')
  const [mode, setMode] = useState(saved?.mode === 'app' ? 'app' : 'web')
  const [webForm, setWebForm] = useState({ ...DEFAULT_FORM, ...(saved?.webForm || {}) })
  const [appForm, setAppForm] = useState({ ...DEFAULT_APP_FORM, ...(saved?.appForm || {}) })
  const [mobilePane, setMobilePane] = useState('form')
  const [prompt, setPrompt] = useState('')

  const form = mode === 'web' ? webForm : appForm
  const setForm = mode === 'web' ? setWebForm : setAppForm

  function handleChange(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'websiteType') {
        if (value === 'Landing page') {
          next.sections = LANDING_PAGE_SECTIONS
        } else if (prev.websiteType === 'Landing page') {
          // Odchod z Landing page — zruš automaticky předvybrané sekce
          next.sections = []
        }
      }
      return next
    })
  }

  function handleModeChange(newMode) {
    if (newMode === mode) return
    setMode(newMode)
  }

  useEffect(() => {
    setPrompt(mode === 'web' ? buildPrompt(form) : buildPromptApp(form))
  }, [form, mode])

  // Perzistence do localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, webForm, appForm }))
    } catch {
      // localStorage nedostupný (např. privátní režim) — ignoruj
    }
  }, [mode, webForm, appForm])

  const hasContent = useMemo(() => formHasContent(form), [form])

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('builder')} />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center flex-wrap gap-3">
        <button
          onClick={() => setView('landing')}
          aria-label="Zpět na úvodní stránku"
          className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
        >←</button>
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900">Claude Prompt Builder</h1>

        {/* Mode toggle */}
        <div className="ml-4 flex items-center bg-gray-100 rounded-lg p-1 gap-1">
          <button
            onClick={() => handleModeChange('web')}
            className={`px-3 py-1 text-sm rounded-md font-medium transition-all ${
              mode === 'web'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => handleModeChange('app')}
            className={`px-3 py-1 text-sm rounded-md font-medium transition-all ${
              mode === 'app'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Aplikace
          </button>
        </div>

        <span className="text-xs text-gray-400 ml-1 hidden sm:inline">
          {mode === 'web' ? 'pro generování webů' : 'pro generování aplikací'}
        </span>
      </header>

      {/* Mobilní přepínač Formulář / Náhled (jen < lg) */}
      <div className="lg:hidden flex border-b border-gray-200 bg-white">
        <button
          onClick={() => setMobilePane('form')}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            mobilePane === 'form'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500'
          }`}
        >
          Formulář
        </button>
        <button
          onClick={() => setMobilePane('preview')}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            mobilePane === 'preview'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500'
          }`}
        >
          Náhled promptu
        </button>
      </div>

      {/* Split layout — na mobilu jeden panel přes taby, na lg+ vedle sebe */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Form */}
        <div
          className={`w-full lg:w-1/2 overflow-y-auto border-r border-gray-200 bg-white ${
            mobilePane === 'form' ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="p-4 sm:p-6 flex flex-col gap-8">
            {mode === 'web' ? (
              <>
                <SectionBasicInfo form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionContentDesign form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionStructure form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionFeatures form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionTechStack form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionIntegrations form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionMcp form={form} onChange={handleChange} title="7. Napojení na nástroje (MCP)" />
                <div className="border-t border-gray-100" />
                <SectionSEO form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionLegal form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionSecurity form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionExtraNotes form={form} onChange={handleChange} />
              </>
            ) : (
              <>
                <SectionAppBasicInfo form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionUserFlow form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionDataModel form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionAuth form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionAppFeatures form={form} onChange={handleChange} />
                <div className="border-t border-gray-100" />
                <SectionTechStack form={form} onChange={handleChange} title="6. Tech stack" />
                <div className="border-t border-gray-100" />
                <SectionIntegrations form={form} onChange={handleChange} title="7. Integrace" />
                <div className="border-t border-gray-100" />
                <SectionMcp form={form} onChange={handleChange} title="8. Napojení na nástroje (MCP)" />
                <div className="border-t border-gray-100" />
                <SectionSecurity form={form} onChange={handleChange} title="9. Zabezpečení" />
                <div className="border-t border-gray-100" />
                <SectionLegal form={form} onChange={handleChange} title="10. Právní & compliance" />
                <div className="border-t border-gray-100" />
                <SectionExtraNotes form={form} onChange={handleChange} title="11. Poznámky" />
              </>
            )}
          </div>
        </div>

        {/* RIGHT: Preview */}
        <div
          className={`w-full lg:w-1/2 overflow-y-auto bg-gray-50 p-4 sm:p-6 ${
            mobilePane === 'preview' ? 'block' : 'hidden'
          } lg:block`}
        >
          <PromptPreview prompt={prompt} hasContent={hasContent} />
        </div>
      </div>
    </div>
  )
}

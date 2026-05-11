import { useState, useEffect } from 'react'
import { DEFAULT_FORM, DEFAULT_APP_FORM, SECTIONS } from './data/options'
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
import LandingPage from './components/LandingPage'
import PromptPreview from './components/PromptPreview'

const LANDING_PAGE_SECTIONS = ['Hero', 'Výhody', 'Reference', 'FAQ', 'Kontaktní formulář', 'Stránka díků']

export default function App() {
  const [view, setView] = useState('landing')
  const [mode, setMode] = useState('web')
  const [webForm, setWebForm] = useState(DEFAULT_FORM)
  const [appForm, setAppForm] = useState(DEFAULT_APP_FORM)
  const [prompt, setPrompt] = useState('')

  const form = mode === 'web' ? webForm : appForm
  const setForm = mode === 'web' ? setWebForm : setAppForm

  function handleChange(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'websiteType' && value === 'Landing page') {
        next.sections = LANDING_PAGE_SECTIONS
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

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('builder')} />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <button onClick={() => setView('landing')} className="text-gray-400 hover:text-gray-600 transition-colors text-sm">←</button>
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

        <span className="text-xs text-gray-400 ml-1">
          {mode === 'web' ? 'pro generování webů' : 'pro generování aplikací'}
        </span>
      </header>

      {/* Split layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Form */}
        <div className="w-1/2 overflow-y-auto border-r border-gray-200 bg-white">
          <div className="p-6 flex flex-col gap-8">
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
                <SectionSecurity form={form} onChange={handleChange} title="8. Zabezpečení" />
                <div className="border-t border-gray-100" />
                <SectionLegal form={form} onChange={handleChange} title="9. Právní & compliance" />
                <div className="border-t border-gray-100" />
                <SectionExtraNotes form={form} onChange={handleChange} title="10. Poznámky" />
              </>
            )}
          </div>
        </div>

        {/* RIGHT: Preview */}
        <div className="w-1/2 overflow-y-auto bg-gray-50 p-6">
          <PromptPreview prompt={prompt} />
        </div>
      </div>
    </div>
  )
}

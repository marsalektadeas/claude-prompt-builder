import { useState, useEffect } from 'react'
import { DEFAULT_FORM, SECTIONS } from './data/options'
import { buildPrompt } from './lib/buildPrompt'
import SectionBasicInfo from './components/form/SectionBasicInfo'
import SectionContentDesign from './components/form/SectionContentDesign'
import SectionStructure from './components/form/SectionStructure'
import SectionFeatures from './components/form/SectionFeatures'
import SectionTechStack from './components/form/SectionTechStack'
import SectionIntegrations from './components/form/SectionIntegrations'
import SectionExtraNotes from './components/form/SectionExtraNotes'
import PromptPreview from './components/PromptPreview'

const LANDING_PAGE_SECTIONS = ['Hero', 'Výhody', 'Reference', 'FAQ', 'Kontaktní formulář', 'Stránka díků']

export default function App() {
  const [form, setForm] = useState(DEFAULT_FORM)
  const [prompt, setPrompt] = useState('')

  function handleChange(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }

      // Conditional logic: landing page preselects sections
      if (field === 'websiteType' && value === 'Landing page') { // Landing page zůstává stejně
        next.sections = LANDING_PAGE_SECTIONS
      }

      return next
    })
  }

  useEffect(() => {
    setPrompt(buildPrompt(form))
  }, [form])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900">Claude Prompt Builder</h1>
        <span className="text-xs text-gray-400 ml-1">pro generování webů</span>
      </header>

      {/* Split layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: Form */}
        <div className="w-1/2 overflow-y-auto border-r border-gray-200 bg-white">
          <div className="p-6 flex flex-col gap-8">
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
            <SectionExtraNotes form={form} onChange={handleChange} />
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

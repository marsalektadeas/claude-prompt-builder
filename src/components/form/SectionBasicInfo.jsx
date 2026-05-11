import FormField from '../ui/FormField'
import { WEBSITE_TYPES, GOALS } from '../../data/options'

export default function SectionBasicInfo({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">1. Základní info</h2>

      <FormField label="Název projektu">
        <input
          type="text"
          value={form.projectName}
          onChange={(e) => onChange('projectName', e.target.value)}
          placeholder="např. Acme Studio"
          className="input"
        />
      </FormField>

      <FormField label="Popis projektu">
        <textarea
          value={form.projectDescription}
          onChange={(e) => onChange('projectDescription', e.target.value)}
          placeholder="Stručně popiš projekt, kontext, čím se firma zabývá, co je důležité..."
          rows={3}
          className="input resize-none"
        />
      </FormField>

      <FormField label="Typ webu">
        <select value={form.websiteType} onChange={(e) => onChange('websiteType', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {WEBSITE_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </FormField>

      <FormField label="Cíl">
        <select value={form.goal} onChange={(e) => onChange('goal', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {GOALS.map((g) => <option key={g}>{g}</option>)}
        </select>
      </FormField>

      <FormField label="Cílová skupina">
        <input
          type="text"
          value={form.targetAudience}
          onChange={(e) => onChange('targetAudience', e.target.value)}
          placeholder="např. Majitelé firem, 30–50 let"
          className="input"
        />
      </FormField>

      <FormField label="Hlavní CTA">
        <input
          type="text"
          value={form.mainCta}
          onChange={(e) => onChange('mainCta', e.target.value)}
          placeholder="např. Rezervovat bezplatnou konzultaci"
          className="input"
        />
      </FormField>
    </div>
  )
}

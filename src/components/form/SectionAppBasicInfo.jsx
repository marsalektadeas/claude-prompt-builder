import FormField from '../ui/FormField'
import { APP_TYPES, APP_GOALS } from '../../data/options'

export default function SectionAppBasicInfo({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">1. Základní info</h2>

      <FormField label="Název projektu">
        <input
          type="text"
          value={form.projectName}
          onChange={(e) => onChange('projectName', e.target.value)}
          placeholder="např. TaskFlow, AdminHub"
          className="input"
        />
      </FormField>

      <FormField label="Popis projektu">
        <textarea
          value={form.projectDescription}
          onChange={(e) => onChange('projectDescription', e.target.value)}
          placeholder="Stručně popiš aplikaci, kontext, problém který řeší..."
          rows={3}
          className="input resize-none"
        />
      </FormField>

      <FormField label="Typ aplikace">
        <select value={form.appType} onChange={(e) => onChange('appType', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {APP_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </FormField>

      <FormField label="Obchodní cíl">
        <select value={form.appGoal} onChange={(e) => onChange('appGoal', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {APP_GOALS.map((g) => <option key={g}>{g}</option>)}
        </select>
      </FormField>

      <FormField label="Cílová skupina">
        <input
          type="text"
          value={form.targetAudience}
          onChange={(e) => onChange('targetAudience', e.target.value)}
          placeholder="např. Projektový manažeři v malých firmách"
          className="input"
        />
      </FormField>
    </div>
  )
}

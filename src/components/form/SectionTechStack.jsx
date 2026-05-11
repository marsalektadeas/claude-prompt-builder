import FormField from '../ui/FormField'
import { TECH_STACKS, BACKENDS, DATABASES } from '../../data/options'

export default function SectionTechStack({ form, onChange, title = '5. Tech stack' }) {
  const highlightDb = form.features?.includes('Ukládání leadů')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">{title}</h2>

      <FormField label="Stack">
        <select value={form.techStack} onChange={(e) => onChange('techStack', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {TECH_STACKS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </FormField>

      <FormField label="Backend">
        <select value={form.backend} onChange={(e) => onChange('backend', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {BACKENDS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </FormField>

      <FormField label="Databáze" highlight={highlightDb}>
        <select value={form.database} onChange={(e) => onChange('database', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {DATABASES.map((d) => <option key={d}>{d}</option>)}
        </select>
      </FormField>
    </div>
  )
}

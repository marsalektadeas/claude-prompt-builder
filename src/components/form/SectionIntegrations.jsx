import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { INTEGRATIONS } from '../../data/options'

export default function SectionIntegrations({ form, onChange, title = '6. Integrace' }) {
  const highlight = form.features?.includes('Ukládání leadů')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">{title}</h2>

      <FormField label="Vyberte integrace" highlight={highlight}>
        <CheckboxGroup
          options={INTEGRATIONS}
          value={form.integrations}
          onChange={(v) => onChange('integrations', v)}
        />
      </FormField>
    </div>
  )
}

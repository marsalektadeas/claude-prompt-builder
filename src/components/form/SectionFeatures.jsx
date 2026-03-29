import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { FEATURES } from '../../data/options'

export default function SectionFeatures({ form, onChange }) {
  const highlightDb = form.features.includes('Ukládání leadů')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">4. Funkce</h2>

      <FormField label="Vyberte funkce" highlight={highlightDb}>
        <CheckboxGroup
          options={FEATURES}
          value={form.features}
          onChange={(v) => onChange('features', v)}
        />
      </FormField>
    </div>
  )
}

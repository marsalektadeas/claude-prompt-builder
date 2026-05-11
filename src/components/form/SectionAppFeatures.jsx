import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { APP_FEATURES } from '../../data/options'

export default function SectionAppFeatures({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">5. Funkce</h2>

      <FormField label="Vyberte funkce aplikace">
        <CheckboxGroup
          options={APP_FEATURES}
          value={form.appFeatures}
          onChange={(v) => onChange('appFeatures', v)}
        />
      </FormField>
    </div>
  )
}

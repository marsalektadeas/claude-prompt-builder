import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { USER_FLOW_SCREENS } from '../../data/options'

export default function SectionUserFlow({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">2. User flow</h2>

      <FormField label="Obrazovky / stránky aplikace">
        <CheckboxGroup
          options={USER_FLOW_SCREENS}
          value={form.screens}
          onChange={(v) => onChange('screens', v)}
        />
      </FormField>

      <FormField label="Hlavní uživatelský průchod">
        <textarea
          value={form.mainUserJourney}
          onChange={(e) => onChange('mainUserJourney', e.target.value)}
          placeholder="Popiš klíčový flow — co uživatel dělá od vstupu do aplikace po dosažení cíle..."
          rows={3}
          className="input resize-none"
        />
      </FormField>
    </div>
  )
}

import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { LEGAL_OPTIONS } from '../../data/options'

export default function SectionLegal({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">8. Právní & compliance</h2>

      <FormField label="Vyberte požadavky">
        <CheckboxGroup
          options={LEGAL_OPTIONS}
          value={form.legal}
          onChange={(v) => onChange('legal', v)}
        />
      </FormField>
    </div>
  )
}

import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { SECURITY_OPTIONS } from '../../data/options'

export default function SectionSecurity({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">9. Zabezpečení</h2>

      <FormField label="Bezpečnostní požadavky">
        <CheckboxGroup
          options={SECURITY_OPTIONS}
          value={form.security}
          onChange={(v) => onChange('security', v)}
        />
      </FormField>
    </div>
  )
}

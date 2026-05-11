import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { SECURITY_OPTIONS, SECURITY_HINTS } from '../../data/options'

export default function SectionSecurity({ form, onChange, title = '9. Zabezpečení' }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">{title}</h2>

      <FormField label="Bezpečnostní požadavky">
        <CheckboxGroup
          options={SECURITY_OPTIONS}
          value={form.security}
          onChange={(v) => onChange('security', v)}
          hints={SECURITY_HINTS}
        />
      </FormField>
    </div>
  )
}

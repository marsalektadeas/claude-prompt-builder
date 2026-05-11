import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { AUTH_METHODS, ROLE_OPTIONS } from '../../data/options'

export default function SectionAuth({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">4. Autentizace & role</h2>

      <FormField label="Metody přihlášení">
        <CheckboxGroup
          options={AUTH_METHODS}
          value={form.authMethods}
          onChange={(v) => onChange('authMethods', v)}
        />
      </FormField>

      <FormField label="Role uživatelů">
        <CheckboxGroup
          options={ROLE_OPTIONS}
          value={form.roles}
          onChange={(v) => onChange('roles', v)}
        />
      </FormField>
    </div>
  )
}

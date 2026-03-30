import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { SEO_OPTIONS } from '../../data/options'

export default function SectionSEO({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">8. SEO</h2>

      <FormField label="SEO nastavení">
        <CheckboxGroup
          options={SEO_OPTIONS}
          value={form.seo}
          onChange={(v) => onChange('seo', v)}
        />
      </FormField>
    </div>
  )
}

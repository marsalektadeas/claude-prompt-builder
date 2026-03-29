import FormField from '../ui/FormField'
import MultiSelectButtons from '../ui/MultiSelectButtons'
import { LAYOUT_TYPES, SECTIONS } from '../../data/options'

export default function SectionStructure({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">3. Struktura</h2>

      <FormField label="Typ layoutu">
        <div className="flex gap-3">
          {LAYOUT_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onChange('layoutType', t)}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                form.layoutType === t
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </FormField>

      <FormField label="Sekce">
        <MultiSelectButtons options={SECTIONS} value={form.sections} onChange={(v) => onChange('sections', v)} />
      </FormField>
    </div>
  )
}

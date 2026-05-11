import FormField from '../ui/FormField'
import CheckboxGroup from '../ui/CheckboxGroup'
import { DATA_ENTITIES, DATA_ENTITY_HINTS } from '../../data/options'

export default function SectionDataModel({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">3. Datový model</h2>

      <FormField label="Hlavní entity">
        <CheckboxGroup
          options={DATA_ENTITIES}
          value={form.entities}
          onChange={(v) => onChange('entities', v)}
          hints={DATA_ENTITY_HINTS}
        />
      </FormField>

      <FormField label="Poznámky k datovému modelu">
        <textarea
          value={form.dataModelNotes}
          onChange={(e) => onChange('dataModelNotes', e.target.value)}
          placeholder="Vztahy mezi entitami, specifické požadavky, omezení..."
          rows={3}
          className="input resize-none"
        />
      </FormField>
    </div>
  )
}

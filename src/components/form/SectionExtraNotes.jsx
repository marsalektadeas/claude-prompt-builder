import FormField from '../ui/FormField'

export default function SectionExtraNotes({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">10. Poznámky</h2>

      <FormField label="Cokoliv dalšího?">
        <textarea
          value={form.extraNotes}
          onChange={(e) => onChange('extraNotes', e.target.value)}
          placeholder="Speciální požadavky, omezení, reference..."
          rows={4}
          className="input resize-none"
        />
      </FormField>
    </div>
  )
}

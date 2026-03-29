import FormField from '../ui/FormField'
import MultiSelectButtons from '../ui/MultiSelectButtons'
import { TEXT_SOURCES, IMAGE_OPTIONS, LOGO_OPTIONS, STYLES } from '../../data/options'

export default function SectionContentDesign({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">2. Obsah & design</h2>

      <FormField label="Zdroj textu">
        <select value={form.textSource} onChange={(e) => onChange('textSource', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {TEXT_SOURCES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </FormField>

      <FormField label="Obrázky">
        <select value={form.images} onChange={(e) => onChange('images', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {IMAGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </FormField>

      <FormField label="Logo">
        <select value={form.logo} onChange={(e) => onChange('logo', e.target.value)} className="input">
          <option value="">Vyberte...</option>
          {LOGO_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </FormField>

      <FormField label="Styl">
        <MultiSelectButtons options={STYLES} value={form.styles} onChange={(v) => onChange('styles', v)} />
      </FormField>

      <FormField label="Barevné preference">
        <input
          type="text"
          value={form.colorPreference}
          onChange={(e) => onChange('colorPreference', e.target.value)}
          placeholder="např. Tmavě modrá + zlaté akcenty"
          className="input"
        />
      </FormField>

      <FormField label="Inspirační weby">
        <textarea
          value={form.inspirationWebsites}
          onChange={(e) => onChange('inspirationWebsites', e.target.value)}
          placeholder="např. stripe.com, linear.app"
          rows={3}
          className="input resize-none"
        />
      </FormField>
    </div>
  )
}

import FormField from '../ui/FormField'
import { MCP_INTEGRATIONS } from '../../data/options'

export default function SectionMcp({ form, onChange, title = 'Napojení na nástroje (MCP)' }) {
  const selected = form.mcpIntegrations || []

  function toggle(id) {
    if (selected.includes(id)) {
      onChange('mcpIntegrations', selected.filter((v) => v !== id))
    } else {
      onChange('mcpIntegrations', [...selected, id])
    }
  }

  const figmaSelected = selected.includes('figma')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">{title}</h2>

      <p className="text-sm text-gray-500 -mt-1">
        Živé nástroje, se kterými Claude pracuje při stavbě (čte Figma design, zakládá
        tabulky, ověřuje dokumentaci…). Není to volba technologie — tu řeší Tech stack a Databáze.
      </p>

      <FormField label="Které nástroje má Claude k dispozici?">
        <div className="flex flex-col gap-2">
          {MCP_INTEGRATIONS.map((mcp) => {
            const checked = selected.includes(mcp.id)
            return (
              <label
                key={mcp.id}
                className={`flex items-start gap-2.5 cursor-pointer rounded-lg border p-3 transition-colors ${
                  checked ? 'border-indigo-300 bg-indigo-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(mcp.id)}
                  className="w-4 h-4 mt-0.5 accent-indigo-600 cursor-pointer flex-shrink-0"
                />
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-gray-800">{mcp.label}</span>
                  <span className="text-xs text-gray-500">{mcp.description}</span>
                </span>
              </label>
            )
          })}
        </div>
      </FormField>

      {figmaSelected && (
        <FormField label="Odkaz na Figma soubor nebo frame">
          <input
            type="url"
            value={form.figmaUrl || ''}
            onChange={(e) => onChange('figmaUrl', e.target.value)}
            placeholder="https://www.figma.com/file/…"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      )}

      {selected.length > 0 && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5 text-xs text-amber-800 leading-relaxed">
          <span className="font-semibold">Pozor:</span> tyto nástroje musíš mít připojené ve
          svém Claude klientovi (Claude Code / Desktop). Prompt jen řekne Claudovi, aby je použil —
          sám je nepřipojí. Pokud je nemáš nastavené, Claude je nebude moct využít.
        </div>
      )}
    </div>
  )
}

export default function FormField({ label, children, highlight }) {
  return (
    <div className={`flex flex-col gap-1 ${highlight ? 'ring-2 ring-amber-400 rounded-lg p-3' : ''}`}>
      <label className="text-sm font-medium text-gray-700">
        {label}
        {highlight && <span className="ml-2 text-xs text-amber-600 font-semibold">⚡ Required for lead storage</span>}
      </label>
      {children}
    </div>
  )
}

export default function CheckboxGroup({ options, value, onChange, hints }) {
  function toggle(option) {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => {
        const hint = hints?.[option]
        return (
          <label key={option} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggle(option)}
              className="w-4 h-4 accent-indigo-600 cursor-pointer flex-shrink-0"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">{option}</span>
            {hint && (
              <span className="relative group/hint flex-shrink-0" onClick={(e) => e.preventDefault()}>
                <span className="text-xs text-gray-400 cursor-help border border-gray-300 rounded-full w-4 h-4 inline-flex items-center justify-center hover:bg-gray-100 leading-none select-none">?</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 z-10 hidden group-hover/hint:block w-56 text-xs bg-gray-900 text-white rounded-md px-2.5 py-2 pointer-events-none shadow-lg">
                  {hint}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900" />
                </span>
              </span>
            )}
          </label>
        )
      })}
    </div>
  )
}

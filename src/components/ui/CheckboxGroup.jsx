export default function CheckboxGroup({ options, value, onChange }) {
  function toggle(option) {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => toggle(option)}
            className="w-4 h-4 accent-indigo-600 cursor-pointer"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">{option}</span>
        </label>
      ))}
    </div>
  )
}

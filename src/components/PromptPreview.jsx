import { useState } from 'react'

export default function PromptPreview({ prompt }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const isEmpty = prompt.trim().length < 50

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">Vygenerovaný prompt</h2>
        <button
          onClick={handleCopy}
          disabled={isEmpty}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            copied
              ? 'bg-green-500 text-white'
              : isEmpty
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {copied ? 'Zkopírováno!' : 'Kopírovat prompt'}
        </button>
      </div>

      <div className="flex-1 relative">
        <textarea
          readOnly
          value={prompt}
          className="w-full h-full min-h-[500px] p-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 font-mono leading-relaxed resize-none focus:outline-none"
          placeholder="Vyplňte formulář vlevo pro vygenerování promptu..."
        />
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-gray-400 text-sm text-center px-6">
              Začněte vyplňovat formulář<br />a váš prompt se zobrazí zde
            </p>
          </div>
        )}
      </div>

      {!isEmpty && (
        <p className="text-xs text-gray-400 text-right">
          {prompt.length} znaků
        </p>
      )}
    </div>
  )
}

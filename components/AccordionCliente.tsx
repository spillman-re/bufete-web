"use client"
import { useState, useMemo } from "react"

interface Question {
  id: string
  question: string
  answer: string
  answered_at: string | null
}

export default function AccordionClient({ questions }: { questions: Question[] }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 5

  const totalPages = Math.ceil(questions.length / PAGE_SIZE)

  const paginatedQuestions = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return questions.slice(start, start + PAGE_SIZE)
  }, [page, questions])

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-3">
        {paginatedQuestions.map(q => {
          const isOpen = openId === q.id
          return (
            <div
              key={q.id}
              className={`relative rounded-xl overflow-hidden shadow-sm transition ${
                isOpen ? "bg-[var(--accent)]/5" : "bg-white"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : q.id)}
                className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-[var(--accent)]/10 transition"
              >
                <span className={`font-medium transition-colors ${isOpen ? "text-[var(--accent)]" : "text-slate-800"}`}>
                  {q.question}
                </span>
                <span className="text-xl text-[var(--accent)]">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 transition-all duration-300 overflow-hidden">
                  <p className="text-sm text-slate-700">{q.answer}</p>
                  {q.answered_at && (
                    <p className="mt-2 text-xs text-slate-400">
                      Respondida: {new Date(q.answered_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}

              {/* Línea lateral */}
              {isOpen && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] rounded-r" />}
            </div>
          )
        })}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 rounded bg-[var(--accent)]/20 hover:bg-[var(--accent)]/30 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="px-2 py-1 font-medium">{page} / {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 rounded bg-[var(--accent)]/20 hover:bg-[var(--accent)]/30 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </>
  )
}

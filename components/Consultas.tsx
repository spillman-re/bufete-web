import { supabase } from "@/lib/supabase/server"
import AccordionClient from "./AccordionCliente"

export default async function Consultas() {
  const { data: questions, error } = await supabase
    .from("public_questions")
    .select("id, question, answer, answered_at")
    .not("answer", "is", null)
    .order("answered_at", { ascending: false })

  if (error) {
    console.error(error)
    return null
  }

  return (
    <section className="container py-32" id="consultas">
      {/* Encabezado */}
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
          Consultas públicas
        </p>
        <h2 className="font-serif text-3xl md:text-4xl">
          Preguntas y respuestas
        </h2>
        <p className="mt-2 text-muted">
          Explora nuestras respuestas a preguntas frecuentes y obtén claridad legal.
        </p>
      </div>

      {/* Accordion interactivo */}
      <AccordionClient questions={questions ?? []} />

      {/* Formulario */}
      <div className="bg-white p-8 rounded-xl shadow max-w-2xl mx-auto mt-16">
        <h3 className="font-serif text-xl text-[var(--accent)] mb-4">
          Haz tu pregunta
        </h3>
        <PublicQuestionForm />
      </div>
    </section>
  )
}

// Formulario compacto
function PublicQuestionForm() {
  return (
    <form className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Tu nombre (opcional)"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[var(--accent)]"
        />
        <input
          type="email"
          placeholder="Correo (opcional)"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>
      <textarea
        placeholder="Tu pregunta"
        required
        className="w-full border rounded px-3 py-2 resize-none focus:ring-2 focus:ring-[var(--accent)]"
        rows={3}
      />
      <button
        type="submit"
        className="bg-[var(--accent)] text-black py-2 px-4 rounded font-medium hover:opacity-90 transition w-full sm:w-auto"
      >
        Enviar pregunta
      </button>
    </form>
  )
}

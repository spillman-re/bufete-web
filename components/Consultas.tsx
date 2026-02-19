import { supabase } from "@/lib/supabase/server"
import AccordionClient from "./AccordionCliente"
import PublicQuestionForm from "./PublicQuestionForm" // Asegúrate de crear este archivo

export default async function Consultas() {
  // Obtenemos solo las preguntas que ya tienen una respuesta (publicadas)
  const { data: questions, error } = await supabase
    .from("public_questions")
    .select("id, question, answer, answered_at")
    .not("answer", "is", null)
    .order("answered_at", { ascending: false })

  if (error) {
    console.error("Error cargando preguntas:", error)
    // No retornamos null para no romper la página, mostramos el contenedor vacío
  }

  return (
    <section className="container py-32 mx-auto px-6" id="consultas">
      {/* Encabezado */}
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-bold mb-2">
          Consultas públicas
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
          Preguntas y respuestas
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Explora nuestras respuestas a preguntas frecuentes y obtén claridad legal. 
          Si no encuentras lo que buscas, puedes enviarnos tu propia duda de forma anónima.
        </p>
      </div>

      {/* Accordion interactivo (Client Component) */}
      <div className="min-h-[200px]">
        {questions && questions.length > 0 ? (
          <AccordionClient questions={questions} />
        ) : (
          <p className="text-slate-400 italic">No hay consultas publicadas recientemente.</p>
        )}
      </div>

      {/* Contenedor del Formulario */}
      <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 max-w-2xl mx-auto mt-24">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl text-slate-900 mb-2">
            ¿Tiene una duda legal?
          </h3>
          <p className="text-sm text-slate-500">
            Envíe su pregunta y la responderemos en esta sección a la brevedad.
          </p>
        </div>
        
        {/* Formulario Interactivo (Client Component) */}
        <PublicQuestionForm />
        
        <p className="text-[10px] text-center uppercase tracking-widest text-slate-400 mt-6">
          Su privacidad es importante. Las preguntas publicadas no muestran datos personales.
        </p>
      </div>
    </section>
  )
}
import { supabase } from "@/lib/supabase/server";
import QuestionListContainer from "./QuestionListContainer";

export default async function AdminQuestions() {
  // Obtenemos preguntas pendientes (sin respuesta)
  const { data: questions } = await supabase
    .from("public_questions")
    .select("*")
    // Trae las que NO tienen respuesta O donde la respuesta sea un string vacío
    .or('answer.is.null,answer.eq.""')
    .order("created_at", { ascending: false });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {questions && questions.length > 0 ? (
        <QuestionListContainer initialQuestions={questions} />
      ) : (
        <div className="p-12 text-center text-slate-400">
          No hay preguntas nuevas por responder.
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { answerQuestion } from "@/app/actions/questions";
import { MessageSquareReply, Send, User, Mail } from "lucide-react";

export default function QuestionListContainer({ initialQuestions }: { initialQuestions: any[] }) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleAnswer(e: React.FormEvent<HTMLFormElement>, id: string) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answer = formData.get("answer") as string;

    setLoadingId(id);
    const result = await answerQuestion(id, answer);
    
    if (result.success) {
      // Recargamos para limpiar la lista (Server Action hace el revalidatePath)
      window.location.reload();
    } else {
      alert("Error al publicar la respuesta");
    }
    setLoadingId(null);
  }

  return (
    <div className="divide-y divide-slate-100">
      {initialQuestions.map((q) => (
        <div key={q.id} className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
          <div className="flex gap-4 items-start mb-6">
            <div className="bg-[var(--accent)]/10 p-3 rounded-full text-[var(--accent)] shrink-0">
              <MessageSquareReply size={20} />
            </div>
            <div className="space-y-3 w-full">
              <div>
                <p className="text-slate-800 font-medium text-lg leading-snug">
                  {q.question}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-tighter">
                  ID: {q.id.split('-')[0]} • Recibida: {new Date(q.created_at).toLocaleDateString()}
                </p>
              </div>

              {/* INFO PRIVADA DEL REMITENTE (Solo visible aquí en el Admin) */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-sm">
                  <User size={12} className="text-[var(--accent)]" />
                  <span className="text-[11px] font-bold text-slate-600 truncate max-w-[150px]">
                    {q.user_name || "Anónimo"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-sm">
                  <Mail size={12} className="text-[var(--accent)]" />
                  <span className="text-[11px] font-bold text-slate-600 truncate max-w-[200px]">
                    {q.user_email || "Sin correo"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => handleAnswer(e, q.id)} className="space-y-4 ml-0 md:ml-14">
            <textarea
              name="answer"
              required
              rows={3}
              placeholder="Escribe la respuesta legal profesional que se publicará..."
              className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all bg-white"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loadingId === q.id}
                className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2 disabled:opacity-50 shadow-md"
              >
                {loadingId === q.id ? "Publicando..." : "Publicar Respuesta"}
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}
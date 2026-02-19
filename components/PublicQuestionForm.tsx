"use client";

import { useState } from "react";
import { submitQuestion } from "@/app/actions/questions";

export default function PublicQuestionForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    const result = await submitQuestion(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
        <p className="text-green-700 font-medium">¡Pregunta enviada con éxito!</p>
        <p className="text-green-600 text-sm mt-1">Un administrador la revisará pronto.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs font-bold uppercase tracking-widest text-green-700"
        >
          Hacer otra pregunta
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Tu nombre (opcional)"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Correo (opcional)"
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
        />
      </div>
      <textarea
        name="question"
        placeholder="Escribe tu duda legal aquí..."
        required
        className="w-full border rounded px-3 py-2 resize-none focus:ring-2 focus:ring-[var(--accent)] outline-none text-black"
        rows={3}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[var(--accent)] text-black py-3 px-6 rounded font-bold hover:opacity-90 transition w-full sm:w-auto disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar pregunta"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm">Ocurrió un error, intenta de nuevo.</p>
      )}
    </form>
  );
}
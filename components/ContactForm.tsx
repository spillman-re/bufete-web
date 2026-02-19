"use client";

import { useState } from "react";
import { ShieldCheck, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";

interface Area {
  title: string;
}

export default function ContactForm({ areas }: { areas: Area[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    try {
      const result = await sendContactEmail(formData);
      if (result?.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  // ESTADO: MENSAJE DE ÉXITO
  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-12 text-center text-slate-800 animate-in fade-in zoom-in duration-500 shadow-2xl border border-slate-100">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="font-serif text-3xl mb-3 text-[var(--primary)]">¡Consulta Enviada!</h3>
        <p className="text-slate-500 leading-relaxed mb-8">
          Gracias por confiar en nosotros. Un especialista revisará su caso y le contactará a la brevedad posible.
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="text-[var(--accent)] font-bold text-xs uppercase tracking-[0.2em] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  // ESTADO: FORMULARIO
  return (
    <form action={handleSubmit} className="relative z-10 bg-white rounded-2xl p-8 md:p-12 shadow-2xl space-y-5 text-slate-800 border border-slate-50">
      
      {/* Campo: Nombre */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Nombre Completo</label>
        <input 
          name="name" 
          type="text" 
          required 
          placeholder="Ej. Juan Pérez" 
          className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)]/50 focus:bg-white outline-none transition-all placeholder:text-slate-300" 
        />
      </div>

      {/* Grid: Correo y Teléfono */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Correo Electrónico</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="tu@email.com" 
            className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)]/50 focus:bg-white outline-none transition-all placeholder:text-slate-300" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Teléfono / WhatsApp</label>
          <input 
            name="phone" 
            type="tel" 
            required 
            placeholder="+505 0000-0000" 
            className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)]/50 focus:bg-white outline-none transition-all placeholder:text-slate-300" 
          />
        </div>
      </div>

      {/* Campo: Área de Interés */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Especialidad Requerida</label>
        <div className="relative">
          <select 
            name="area" 
            required 
            className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]/50 cursor-pointer appearance-none transition-all"
          >
            <option value="">Seleccionar área legal</option>
            {areas?.map((area) => (
              <option key={area.title} value={area.title}>{area.title}</option>
            ))}
          </select>
          {/* Flecha decorativa del select */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Campo: Mensaje */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Detalles del caso</label>
        <textarea 
          name="message" 
          rows={4} 
          required 
          placeholder="Describa brevemente su situación..." 
          className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:bg-white transition-all placeholder:text-slate-300" 
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--primary)] text-white py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-sm hover:bg-black transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {status === "sending" ? (
          "Procesando..."
        ) : (
          <>
            Enviar consulta 
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      {/* Alerta de Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
          <AlertCircle size={16} />
          <p className="text-xs font-medium">Hubo un problema al enviar. Inténtelo de nuevo.</p>
        </div>
      )}

      {/* Pie del formulario */}
      <div className="flex items-center justify-center gap-2 text-slate-400 pt-4 border-t border-slate-50">
        <ShieldCheck size={14} className="text-[var(--accent)]" />
        <p className="text-[10px] uppercase tracking-tighter font-medium">
          Privacidad garantizada bajo secreto profesional
        </p>
      </div>
    </form>
  );
}
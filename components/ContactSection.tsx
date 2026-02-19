import { supabase } from "@/lib/supabase/server"
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm"; // Importamos el que creamos arriba

export default async function ContactSection() {
  const { data: areas } = await supabase
    .from("practice_areas")
    .select("title")
    .eq("is_active", true)
    .order("title");

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[var(--primary)] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <div className="space-y-12 md:space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold mb-4">Contacto</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Agenda una <br /> consulta legal</h2>
              <p className="mt-6 text-slate-400 max-w-md text-lg leading-relaxed">
                Brindamos asesoría legal profesional y confidencial para personas y empresas en <span className="text-white font-medium">Chinandega, Nicaragua</span>.
              </p>
            </div>

            <div className="mt-12 md:mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <ContactItem icon={<MapPin className="text-[var(--accent)]" size={20} />} title="Ubicación" detail="Chinandega, Nicaragua" />
              <ContactItem icon={<Phone className="text-[var(--accent)]" size={20} />} title="Teléfono" detail="+505 8888-8888" />
              <ContactItem icon={<Mail className="text-[var(--accent)]" size={20} />} title="Email" detail="contacto@bufetejuridico.com" />
              <ContactItem icon={<Clock className="text-[var(--accent)]" size={20} />} title="Horario" detail="Lunes a Viernes — 8:00 AM a 5:00 PM" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--accent)]/10 blur-3xl rounded-full z-0 pointer-events-none" />
            {/* Llamamos al cliente y le pasamos los datos */}
            <ContactForm areas={areas || []} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent)] transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{title}</p>
        <p className="text-slate-200 font-medium">{detail}</p>
      </div>
    </div>
  );
}
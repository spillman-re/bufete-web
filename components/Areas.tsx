import { supabase } from "@/lib/supabase/server"
import { Scale, Users, Briefcase, Building2 } from "lucide-react"

// Mantenemos los iconos por slug, pero la imagen vendrá de la DB
const AREA_ICONS: Record<string, any> = {
  civil: <Scale size={24} />,
  penal: <Building2 size={24} />,
  laboral: <Users size={24} />,
  mercantil: <Briefcase size={24} />,
}

export default async function Areas() {  
  // Agregamos 'image_url' a la selección
  const { data: areas, error } = await supabase
    .from("practice_areas")
    .select("id, title, description, slug, image_url")
    .eq("is_active", true)
    .order("created_at")

  if (error || !areas) return null;

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Áreas de práctica
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--primary)]">
            Especialidades legales
          </h2>
          <p className="mt-4 text-slate-500">
            Contamos con experiencia en distintas ramas del derecho, ofreciendo
            asesoría clara, responsable y profesional.
          </p>
        </div>

        {/* Lista Refinada */}
        <div className="flex flex-col border-t border-slate-100">
          {areas.map((area) => (
            <div 
              key={area.id}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-14 border-b border-slate-100 transition-all duration-300 hover:bg-slate-50/80 px-2 md:px-6"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 w-full">
                {/* Icono */}
                <div className="text-slate-400 group-hover:text-[var(--accent)] transition-colors duration-300 mt-1 shrink-0">
                  {AREA_ICONS[area.slug] || <Scale size={24} />}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--primary)] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mb-6 md:mb-0">
                    {area.description}
                  </p>
                  
                  {/* Imagen para MÓVIL (Usa image_url de la DB) */}
                  {area.image_url && (
                    <div className="block md:hidden w-full h-48 rounded-xl overflow-hidden shadow-sm border border-slate-100">
                      <img 
                        src={area.image_url} 
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Imagen para LAPTOP (Usa image_url de la DB) */}
              {area.image_url && (
                <div className="hidden lg:block absolute right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-90 group-hover:scale-100">
                  <div className="w-64 h-40 rounded-xl overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <img 
                      src={area.image_url} 
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { supabase } from "@/lib/supabase/server"

const AREA_IMAGES: Record<string, string> = {
  civil: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  penal: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab",
  laboral: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  mercantil: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
}

export default async function Areas() {  
  const { data: areas, error } = await supabase
  .from("practice_areas")
  .select("id, title, description, slug")
  .eq("is_active", true)
  .order("created_at")


  if (error) {
    console.error(error)
    return null
  }

  return (
    <section className="container py-32">
      {/* encabezado */}
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
          Áreas de práctica
        </p>
        <h2 className="font-serif text-3xl md:text-4xl">
          Especialidades legales
        </h2>
        <p className="mt-4 text-muted">
          Contamos con experiencia en distintas ramas del derecho, ofreciendo
          asesoría clara, responsable y profesional.
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <article
            key={area.id}
            className="group overflow-hidden rounded-xl border hover:border-[var(--accent)] transition"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={AREA_IMAGES[area.slug] ?? AREA_IMAGES.civil}
                alt={area.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-muted">
                {area.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

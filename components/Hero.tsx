import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="
          absolute inset-0
          bg-[url('https://cxvmjzdfklewbclnndjq.supabase.co/storage/v1/object/public/images/photo-1431540015161-0bf868a2d407.avif')]
          bg-cover
          bg-center
          scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[var(--primary)]/90
          via-[var(--primary)]/75
          to-[var(--primary)]/90
        "
      />

      {/* Detalle lateral (solo visible en desktop para evitar ruido en móvil) */}
      <span className="hidden md:block absolute left-0 top-0 h-full w-1 bg-[var(--accent)]" />

      {/* Contenido */}
      <div
        className="
          relative z-10
          container mx-auto px-6
          pt-20 md:pt-0
        "
      >
        <div className="max-w-3xl">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-[var(--accent)] mb-4 font-semibold">
            Bufete jurídico integral
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.1] mb-6">
            Soluciones legales sólidas,
            <br className="hidden sm:block" />
            <span className="text-slate-100"> claras y confiables</span>
          </h1>

          <p className="text-sm md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            Asesoramos y representamos a personas y empresas con el más alto estándar de profesionalismo y responsabilidad ética.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              className="bg-[var(--accent)] text-black px-8 py-4 rounded font-bold text-center hover:scale-105 transition-transform"
            >
              Solicitar consulta
            </Link>
            <Link
              href="#areas"
              className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded font-medium text-center hover:bg-white/10 transition-all"
            >
              Nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
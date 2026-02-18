import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-24 pt-32">
      <div className="relative bg-[var(--primary)] text-white rounded-xl px-10 py-20 overflow-hidden">
        {/* detalle decorativo */}
        <span className="absolute top-0 left-0 h-full w-1 bg-[var(--accent)]" />

        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4">
          Bufete jurídico integral
        </p>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
          Soluciones legales sólidas,
          <br />
          claras y confiables
        </h1>

        <p className="mt-6 text-lg text-slate-200 max-w-2xl">
          Asesoramos y representamos a personas y empresas en distintas áreas
          del derecho, con un enfoque profesional, cercano y responsable.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <Link
            href="#contacto"
            className="bg-[var(--accent)] text-black px-6 py-3 rounded font-medium hover:opacity-90 transition"
          >
            Solicitar consulta
          </Link>

          <Link
            href="#areas"
            className="text-sm font-medium text-white underline underline-offset-4 hover:text-[var(--accent)] transition"
          >
            Ver áreas de práctica
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--primary)] shadow-lg text-white">



      <div className="container h-24 flex items-center justify-between">
        {/* Branding */}
        <a href="/" className="flex flex-col">
          <span className="text-2xl leading-none font-serif text-white">
            Bufete Jurídico
          </span>
          <span className="text-xs tracking-widest uppercase text-[var(--accent)] mt-1">
            Abogados & Consultores
          </span>
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link
            href="#areas"
            className="hover:text-[var(--accent)] transition"
          >
            Áreas
          </Link>
          <Link
            href="#team"
            className="hover:text-[var(--accent)] transition"
          >
            Equipo
          </Link>
          <Link
            href="#consultas"
            className="hover:text-[var(--accent)] transition"
          >
            Consultas
          </Link>
          <Link
            href="#contacto"
            className="hover:text-[var(--accent)] transition"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:inline-block bg-[var(--accent)] text-black px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition"
        >
          Consulta legal
        </Link>
      </div>
    </header>
  )
}

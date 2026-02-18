import Link from "next/link"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="container mx-auto py-16 px-6 md:grid md:grid-cols-3 md:gap-12">
        {/* MARCA */}
        <div className="mb-10 md:mb-0">
          <h3 className="font-serif text-2xl text-white mb-4">Bufete Jurídico</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Asesoría legal profesional, ética y responsable para personas y
            empresas en Chinandega.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div className="mb-10 md:mb-0">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Inicio" },
              { href: "/areas", label: "Áreas de práctica" },
              { href: "/equipo", label: "Equipo" },
              { href: "/consultas", label: "Consultas" },
              { href: "#contacto", label: "Contacto" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Chinandega, Nicaragua</li>
            <li>+505 8888-8888</li>
            <li>
              <Link
                href="mailto:contacto@bufetejuridico.com"
                className="hover:text-white transition-colors duration-200"
              >
                contacto@bufetejuridico.com
              </Link>
            </li>
            <li>Lunes a Viernes · 8:00 – 17:00</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Bufete Jurídico. Todos los derechos reservados.</span>
          <div className="mt-3 md:mt-0 flex gap-4">
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaLinkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

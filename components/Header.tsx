"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔒 Bloquear scroll cuando menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Áreas", href: "#areas" },
    { name: "Equipo", href: "#team" },
    { name: "Preguntas", href: "#consultas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled || isOpen
              ? "bg-[var(--primary)] shadow-md"
              : "bg-[var(--primary)]/40 backdrop-blur-md"
          }
          text-white
        `}
      >
        <div className="container mx-auto h-20 md:h-24 flex items-center justify-between px-6">
          {/* Branding (intacto) */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://st3.depositphotos.com/3324741/34654/v/450/depositphotos_346540338-stock-illustration-lady-justice-themis-sword-scales.jpg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl leading-none font-serif">
                Bufete Jurídico
              </span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-[var(--accent)] mt-1">
                Abogados & Consultores
              </span>
            </div>
          </Link>

          {/* Navegación Desktop (intacta) */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-[var(--accent)] text-black px-6 py-3 text-sm font-medium rounded hover:brightness-110 transition-all"
            >
              Consulta legal
            </Link>
          </nav>

          {/* Hamburguesa */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (fuera del header, correcto) */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[var(--primary)]
          flex flex-col items-center justify-center gap-8
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-serif text-white hover:text-[var(--accent)] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="#contacto"
          onClick={() => setIsOpen(false)}
          className="bg-[var(--accent)] text-black px-10 py-4 text-lg font-medium rounded mt-4"
        >
          Consulta legal
        </Link>
      </div>
    </>
  );
}

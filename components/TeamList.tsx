"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";

export default function TeamList({ team }: { team: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Detectar móvil sin romper SSR
  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth < 640;
      setItemsPerPage(isMobile ? 1 : 3);
      setCurrentPage(1); // importante para no quedar en página inválida
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(team.length / itemsPerPage);
  const currentMembers = team.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="px-4 md:px-0 w-full">
      {/* Grid: 1 columna en móvil, 2 en tablet, 3 en laptop */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {currentMembers.map((member) => (
          <article
            key={member.id}
            className="group relative w-full max-w-[350px] md:max-w-none h-[450px] md:h-[480px] rounded-xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/10"
          >
            {/* Imagen */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={
                  member.photo_url ??
                  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                }
                alt={member.full_name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            </div>

            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-left">
              <h3 className="font-serif text-xl md:text-2xl text-white leading-tight">
                {member.full_name}
              </h3>
              <p className="text-[var(--accent)] font-semibold text-xs tracking-widest uppercase mt-1">
                {member.role_title}
              </p>

              <div className="mt-3 overflow-hidden transition-all duration-500 max-h-32 md:max-h-0 md:group-hover:max-h-32">
                <p className="text-xs text-slate-200 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex gap-4 mt-4 text-white/80">
                  <Linkedin
                    size={18}
                    className="cursor-pointer hover:text-[var(--accent)]"
                  />
                  <Mail
                    size={18}
                    className="cursor-pointer hover:text-[var(--accent)]"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 disabled:opacity-20 active:bg-slate-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Página actual / total */}
          <div className="px-4 py-2 rounded-full border border-slate-300 text-sm font-semibold text-slate-600">
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 disabled:opacity-20 active:bg-slate-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

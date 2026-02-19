import AdminQuestions from "@/components/admin/AdminQuestions";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar o Header simple del Admin */}
      <nav className="bg-[var(--primary)] text-white p-6 shadow-md">
        <h1 className="font-serif text-2xl">Panel Administrativo - Bufete</h1>
      </nav>

      <main className="container mx-auto py-12 px-6 space-y-24">
        
        {/* Sección: Responder Preguntas */}
        <section id="admin-preguntas">
          <div className="mb-8">
            <h2 className="text-2xl font-serif text-slate-900">Gestión de Consultas</h2>
            <p className="text-slate-500">Responde las dudas legales de los usuarios.</p>
          </div>
          <AdminQuestions />
        </section>

        {/* Sección: Áreas de Práctica (Próximamente) */}
        <section id="admin-areas">
          <div className="mb-8 border-t pt-12">
            <h2 className="text-2xl font-serif text-slate-900">Áreas de Práctica</h2>
          </div>
          <div className="bg-white p-8 rounded-xl border border-dashed text-center text-slate-400">
            Componente de Áreas aquí...
          </div>
        </section>

        {/* Sección: Equipo (Próximamente) */}
        <section id="admin-team">
           {/* ... CRUD Equipo ... */}
        </section>

      </main>
    </div>
  );
}
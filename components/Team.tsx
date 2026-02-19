import { supabase } from "@/lib/supabase/server";
import TeamList from "./TeamList";

export default async function Team() {
  const { data: team, error } = await supabase
    .from("team_members")
    .select("id, full_name, role_title, bio, photo_url")
    .eq("is_active", true)
    .order("order_index");

  if (error || !team) return null;

  return (
    <section className="container py-24 md:py-32">
      <div className="mb-16 max-w-2xl px-4 md:px-0">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
          Nuestro equipo
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--primary)]">
          Profesionales que te respaldan
        </h2>
        <p className="mt-4 text-slate-600">
          Abogados con experiencia, criterio y compromiso en cada caso.
        </p>
      </div>

      <TeamList team={team} />
    </section>
  );
}
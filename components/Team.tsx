import { supabase } from "@/lib/supabase/server";

export default async function Team() {
  const { data: team, error } = await supabase
    .from("team_members")
    .select("id, full_name, role_title, bio, photo_url")
    .eq("is_active", true)
    .order("order_index");

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <section className="container py-32">
      {/* header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
          Nuestro equipo
        </p>
        <h2 className="font-serif text-3xl md:text-4xl">
          Profesionales que te respaldan
        </h2>
        <p className="mt-4 text-muted">
          Abogados con experiencia, criterio y compromiso en cada caso.
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team?.map((member) => (
          <article
            key={member.id}
            className="group relative overflow-hidden rounded-xl border transition hover:border-[var(--accent)]"
          >
            {/* imagen */}
            <div className="relative h-96">
              <img
                src={
                  member.photo_url ??
                  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                }
                alt={member.full_name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* overlay animado */}
            <div
              className="
                    absolute inset-0 flex flex-col justify-end p-6
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    opacity-100 translate-y-0
                    md:opacity-0 md:translate-y-6
                    md:group-hover:opacity-100 md:group-hover:translate-y-0
                    transition-all duration-500
                ">
              <h3 className="font-serif text-xl text-white">
                {member.full_name}
              </h3>
              <p className="text-sm text-[var(--accent)]">
                {member.role_title}
              </p>

              {member.bio && (
                <p className="mt-3 text-sm text-slate-200 leading-snug line-clamp-3 md:line-clamp-4">
                  {member.bio}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

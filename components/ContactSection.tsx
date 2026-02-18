export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-32 bg-[var(--primary)] text-white"
    >
      <div className="container grid gap-16 lg:grid-cols-2 items-start">
        {/* INFO BUFETE */}
        <div>
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Contacto
          </p>

          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Agenda una consulta legal
          </h2>

          <p className="mt-6 text-slate-200 max-w-md">
            Brindamos asesoría legal profesional y confidencial para personas y
            empresas en <strong>Chinandega, Nicaragua</strong>.
          </p>

          <ul className="mt-12 space-y-6 text-sm">
            <li className="flex items-start gap-4">
              <LocationIcon />
              <span className="text-slate-200">
                Chinandega, Nicaragua
              </span>
            </li>

            <li className="flex items-start gap-4">
              <PhoneIcon />
              <span className="text-slate-200">
                +505 8888-8888
              </span>
            </li>

            <li className="flex items-start gap-4">
              <MailIcon />
              <span className="text-slate-200">
                contacto@bufetejuridico.com
              </span>
            </li>

            <li className="flex items-start gap-4">
              <ClockIcon />
              <span className="text-slate-200">
                Lunes a Viernes — 8:00 AM a 5:00 PM
              </span>
            </li>
          </ul>
        </div>

        {/* FORMULARIO */}
        <form className="bg-white text-black rounded-xl p-10 shadow-xl space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                required
                className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Correo
              </label>
              <input
                type="email"
                required
                className="w-full rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Área de interés
            </label>
            <select className="w-full rounded-md border px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
              <option value="">Seleccionar área</option>
              <option>Derecho Civil</option>
              <option>Derecho Penal</option>
              <option>Derecho Laboral</option>
              <option>Derecho Mercantil</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              rows={5}
              required
              className="w-full rounded-md border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Enviar consulta
          </button>

          <p className="text-xs text-muted text-center">
            Tratamos tu información con estricta confidencialidad.
          </p>
        </form>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <path d="M12 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z" />
      <path d="M12 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.8 19.8 0 0 1 .08 1.39 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.6a2 2 0 0 1-.45 2L6.09 7.91a16 16 0 0 0 8 8l1.59-1.09a2 2 0 0 1 2-.45c.83.25 1.7.45 2.6.57A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Team from "@/components/Team";
import ContactSection from "@/components/ContactSection";
import Consultas from "@/components/Consultas";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="areas">
        <Areas />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="consultas">
        <Consultas />
      </section>
    </>
  );
}

import { About } from "@/components/About";
import { AiLeadership } from "@/components/AiLeadership";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <ScrollReveal />
      <Header />
      <Hero />
      <About />
      <AiLeadership />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

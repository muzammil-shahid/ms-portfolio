import { About } from "@/components/About";
import { AiLeadership } from "@/components/AiLeadership";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      <Hero />
      <About />
      <AiLeadership />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

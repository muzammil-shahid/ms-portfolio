import Image from "next/image";
import { ChevronDown, Mail, MapPin, Phone, Trophy } from "lucide-react";

const stack = ["React", "TypeScript", "Next.js", "Redux", "WordPress", "PHP"];

export function Hero() {
  return (
    <section id="home" className="fold-hero relative overflow-hidden">
      {/* Minimal dot-grid backdrop, fading out toward the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_42%,black,transparent)]" />

      {/* Background glows for depth and energy */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-primary-600/15 rounded-full blur-3xl animate-breathe" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-3xl animate-breathe [animation-delay:4s]" />

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 animate-fade-in-up">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/40 to-purple-600/40 rounded-full blur-md" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-950">
                <Image
                  src="/img/muzammilshahid.png"
                  alt="Muhammad Muzammil - Software Engineering Leader"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up [animation-delay:0.1s]">
            I&apos;m <span className="gradient-text">Muzammil.</span>
            <span className="sr-only"> Muhammad Muzammil</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-dark-300 font-light mb-8 animate-fade-in-up [animation-delay:0.2s]">
            Lead Software Engineer
          </h2>

          {/* Punchy one-line positioning */}
          <p className="text-xl md:text-2xl text-dark-200 font-light max-w-3xl mx-auto mb-4 leading-snug animate-fade-in-up [animation-delay:0.3s]">
            I help B2B SaaS and enterprise teams turn ambiguous product
            engineering problems into{" "}
            <span className="gradient-text font-semibold">
              shipped, high-performing outcomes
            </span>
            .
          </p>

          {/* Supporting line */}
          <p className="body-copy max-w-3xl mx-auto mb-6 animate-fade-in-up [animation-delay:0.4s]">
            More than a decade leading frontend architecture, scaling web
            performance, and building full-stack applications for global users.
            Currently,
            leading a team of 10+ engineers at DigitalOcean, creating
            intuitive, high-impact interfaces that drive tangible business
            outcomes.
          </p>

          {/* Acquisition highlight badge */}
          <div className="badge-border-glow inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary-500/30 bg-gradient-to-r from-primary-600/10 to-purple-600/10 animate-fade-in-up [animation-delay:0.5s] hover:border-primary-400/60 hover:shadow-lg hover:shadow-primary-500/20">
            <Trophy size={16} className="text-primary-400 shrink-0" />
            <span className="text-sm md:text-base text-dark-200">
              Led Cloudways{" "}
              Engineering Through{" "}
              <span className="gradient-text font-semibold">
                $350M Acquisition
              </span>{" "}
              by{" "}
              DigitalOcean
            </span>
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-8">
            {stack.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-dark-800/60 border border-dark-700 rounded-full text-sm font-medium text-dark-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + i * 0.08}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-dark-400 mb-10 animate-fade-in-up [animation-delay:1.1s]">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary-500 shrink-0" />
              <span>+92-(311)-230-4414</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary-500 shrink-0" />
              <span>
                <a
                  href="mailto:muzammilshahid.gt@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  muzammilshahid.gt@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-500 shrink-0" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:1.2s]">
            <a href="#projects" className="btn-primary px-8 py-3">
              View My Work
            </a>
            <a href="#about" className="btn-outline px-8 py-3">
              More About Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-4 left-1/2 ![transform:translateX(-50%)] text-dark-500 hover:text-primary-500 transition-colors duration-300"
        aria-label="Scroll to About"
      >
        <ChevronDown size={24} className="animate-scroll-hint" />
      </a>
    </section>
  );
}

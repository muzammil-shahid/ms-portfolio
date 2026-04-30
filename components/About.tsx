import { Award, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Team Leadership",
    body: "As a proven leader, Successfully led and mentored 10+ engineers at DigitalOcean, driving professional growth and high-quality solution delivery.",
  },
  {
    icon: Zap,
    title: "Performance Strategist",
    body: "Streamlined deployments and boosted performance by integrating CI/CD (GitHub Pipelines) and optimizing Core Web Vitals.",
  },
  {
    icon: Award,
    title: "Full-Stack Expertise",
    body: "8+ years experience in developing web apps, including React, TypeScript, Node.js, PHP, Custom WordPress Development and more.",
  },
  {
    icon: Target,
    title: "Business Impact",
    body: "Significantly increased sales and user engagement by contributing to Conversion Rate Optimization (CRO) initiatives and key business campaigns.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 section-padding bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-2xl font-semibold text-dark-100">
              Lead Software Engineer & Technical Leader
            </h3>
            <p className="text-dark-400 leading-relaxed">
              Results-oriented Information Technology professional with a proven
              track record since 2015. Possessing comprehensive expertise in
              developing and deploying full-stack web applications and services,
              including those currently utilized by leading global companies.
              Proficient in user-centered design, wireframing, and information
              architecture, prioritizing usability and simplicity.
            </p>
            <p className="text-dark-400 leading-relaxed">
              I also served as a Marketing Technologist, effectively bridging the
              gap between Marketing Operations (MKTOPS) and engineering. In this
              capacity, I&apos;ve actively contributed to Conversion Rate
              Optimization (CRO) initiatives and various other business-critical
              campaigns.
            </p>
            <p className="text-dark-400 leading-relaxed">
              I possess robust organizational and leadership skills, refined
              through direct team lead experience, and excel in fostering
              collaborative environments through effective communication. A
              dedicated team player with a passion for continuous learning and
              professional growth.
            </p>
            <a
              href="/Resume-MuzammilShahid.pdf"
              download="Resume-MuzammilShahid.pdf"
              className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Download Resume
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
              >
                <div className="text-primary-500 mb-4">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-semibold text-dark-100 mb-2">
                  {title}
                </h4>
                <p className="text-dark-400 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

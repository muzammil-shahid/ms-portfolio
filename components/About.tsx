import { Award, Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Team Leadership",
    body: "Led and mentored a team of 10+ engineers at DigitalOcean, driving professional growth and high-quality solution delivery.",
  },
  {
    icon: Zap,
    title: "Performance Strategist",
    body: "Streamlined deployments and boosted performance by integrating CI/CD (GitHub Pipelines) and optimizing Core Web Vitals.",
  },
  {
    icon: Award,
    title: "Full-Stack Expertise",
    body: "10+ years experience in developing web apps, including React, TypeScript, Node.js, PHP, Custom WordPress Development and more.",
  },
  {
    icon: Target,
    title: "Business Impact",
    body: "Significantly increased sales and user engagement by contributing to Conversion Rate Optimization (CRO) initiatives and key business campaigns.",
  },
];

export function About() {
  return (
    <section id="about" className="fold-band">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading" data-reveal>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-rule" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-reveal>
            <h3 className="text-2xl md:text-2xl font-semibold text-dark-100">
              Lead Software Engineer & Technical Leader
            </h3>
            <p className="text-dark-400 leading-relaxed">
              I&apos;ve been building web applications since 2015. My work spans
              full-stack applications and services used today by leading global
              companies, built with a strong bias toward usability and
              simplicity. My engineering leadership and technical contributions
              at Cloudways were part of the journey that led to its{" "}
              <span className="text-dark-200 font-medium">
                $350M acquisition by DigitalOcean
              </span>
              .
            </p>
            <p className="text-dark-400 leading-relaxed">
              Along the way, I&apos;ve also worked as a Marketing Technologist,
              bridging marketing operations and engineering on Conversion Rate
              Optimization (CRO) and business-critical campaigns. That
              experience taught me to own outcomes, not just code.
            </p>
            <p className="text-dark-400 leading-relaxed">
              I lead through communication and collaboration, and I&apos;m a
              firm believer in continuous learning. Away from the keyboard,
              you&apos;ll find me playing chess, snooker, or table tennis.
            </p>
            <a
              href="/Resume-MuzammilShahid.pdf"
              download="Resume-MuzammilShahid.pdf"
              className="btn-primary px-8 py-3"
            >
              Download Resume
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={i * 100}
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

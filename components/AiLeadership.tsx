import { BrainCircuit, Compass, Sparkles, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "AI-Augmented Development",
    body: "Scaling engineering throughput with AI-assisted workflows that accelerate delivery across teams while keeping code quality, reviews, and ownership firmly human-guided.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    body: "Embedding AI into CI/CD pipelines, code review, and testing - transforming repetitive engineering overhead into automated, reliable guardrails that let teams focus on product.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Ready Architecture",
    body: "Designing scalable frontend architectures prepared for AI-driven features, from LLM-powered user experiences to data-informed personalization at production scale.",
  },
  {
    icon: Compass,
    title: "Leading Teams Through Change",
    body: "Guiding engineers through the AI transition with mentorship, clear adoption strategies, and a culture of experimentation so teams evolve instead of getting disrupted.",
  },
];

const stats = [
  { value: "10+", label: "Years Engineering" },
  { value: "10+", label: "Engineers Led" },
  { value: "$350M", label: "Acquisition Journey" },
];

export function AiLeadership() {
  return (
    <section id="ai" className="fold-base relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="section-heading">
          <h2 className="section-title">
            AI meets <span className="gradient-text">Engineering Leadership</span>
          </h2>
          <div className="section-rule mb-6" />
          <p className="body-copy max-w-3xl mx-auto">
            The best engineering teams don&apos;t just adopt AI — they&apos;re
            led through it. I combine a decade of hands-on engineering with
            leadership that turns AI from a buzzword into shipped, measurable
            outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative p-8 bg-dark-800/40 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-purple-600/20 border border-primary-500/20 flex items-center justify-center text-primary-500 group-hover:text-primary-400 transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-dark-100">{title}</h3>
              </div>
              <p className="text-dark-400 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl border border-dark-700 bg-gradient-to-r from-primary-600/10 via-dark-800/40 to-purple-600/10 p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-dark-400 text-sm font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

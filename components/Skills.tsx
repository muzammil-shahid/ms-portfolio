type Skill = { letter: string; color: string; name: string };

const frontend: Skill[] = [
  { letter: "J", color: "bg-yellow-500", name: "JavaScript" },
  { letter: "R", color: "bg-blue-500", name: "ReactJS" },
  { letter: "T", color: "bg-blue-600", name: "TypeScript" },
  { letter: "N", color: "bg-gray-800", name: "Next.js" },
  { letter: "R", color: "bg-purple-600", name: "Redux" },
  { letter: "H", color: "bg-orange-500", name: "HTML5" },
  { letter: "C", color: "bg-blue-400", name: "CSS/SCSS" },
  { letter: "T", color: "bg-cyan-500", name: "Tailwind CSS" },
  { letter: "B", color: "bg-purple-700", name: "Bootstrap" },
  { letter: "j", color: "bg-blue-700", name: "jQuery" },
];

const backend: Skill[] = [
  { letter: "P", color: "bg-indigo-600", name: "PHP" },
  { letter: "L", color: "bg-red-500", name: "Laravel" },
  { letter: "M", color: "bg-orange-600", name: "MySQL" },
  { letter: "S", color: "bg-gray-600", name: "SQL" },
  { letter: "A", color: "bg-green-600", name: "AJAX" },
  { letter: "W", color: "bg-emerald-600", name: "WebSocket" },
];

const tools: Skill[] = [
  { letter: "W", color: "bg-blue-800", name: "WordPress" },
  { letter: "G", color: "bg-orange-700", name: "Git" },
  { letter: "C", color: "bg-green-700", name: "CI/CD" },
  { letter: "D", color: "bg-blue-600", name: "Docker" },
];

function SkillGrid({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="bg-dark-800/30 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover">
      <h3 className="text-xl font-semibold text-primary-400 mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((s) => (
          <div
            key={`${title}-${s.name}`}
            className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-lg border border-dark-600 hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div
              className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
            >
              {s.letter}
            </div>
            <span className="text-dark-200 font-medium text-sm group-hover:text-primary-400 transition-colors">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const strengths = [
  {
    title: "Collaboration",
    body: "Facilitated cross-functional teamwork, ensuring seamless collaboration and achieving a successful product launch even within highly aggressive timelines.",
  },
  {
    title: "Adaptability",
    body: "Rapidly adapted to emergent technologies, significantly boosting productivity through proactive, self-guided research and continuous learning initiatives.",
  },
  {
    title: "Problem Solving",
    body: "Learning and solving challenges has been a part of work life since beginning and I enjoy it as much every time because I love to code and passionate towards tech.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 section-padding bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <SkillGrid title="Frontend Technologies" skills={frontend} />
          <SkillGrid title="Backend & Database" skills={backend} />
          <SkillGrid title="Tools & Platforms" skills={tools} />
        </div>
        <div className="bg-dark-800/30 rounded-xl p-8 border border-dark-700">
          <h3 className="text-2xl font-semibold text-primary-400 mb-6 text-center">
            Professional Strengths
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-dark-700/50 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-all duration-300 card-hover text-center"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-3">
                  {s.title}
                </h4>
                <p className="text-dark-400 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";

type Project = {
  type: string;
  status: string;
  title: string;
  href: string;
  description: string;
  tech: string[];
  achievements: string[];
};

const projects: Project[] = [
  {
    type: "SaaS Platform",
    status: "Production",
    title: "Cloudways Platform",
    href: "https://unified.cloudways.com",
    description:
      "Designed and developed Cloudways Website and SaaS Platform, worked on frontend to enhance performance and user experience. Delivered a robust, high-availability solution to support seamless cloud hosting management.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "Micro-frontend",
    ],
    achievements: [
      "Improved performance by implementing lazy loading and optimization",
      "Led team of 10+ engineers",
      "Implemented micro frontend architecture",
      "Migrated legacy AngularJS to modern React",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "Cloudways Website & Blog",
    href: "https://www.cloudways.com/en/",
    description:
      "Developed and launched the official Cloudways website and blog, focusing on a secure, high-performance, and user-friendly online presence. By implementing custom features, enabling multilingual support, and optimizing for strong Core Web Vitals, we boosted user engagement and elevated brand visibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    achievements: [
      "Enhanced brand visibility through modern design",
      "Optimized website speed and performance",
      "Ensured mobile responsiveness",
      "Implemented custom security features",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "PureVPN Website & Blog",
    href: "https://www.purevpn.com",
    description:
      "Developed and launched PureVPN's official website and blog, delivering a secure, high-performance website with seamless user experience. Implemented custom features, optimized speed, and ensured mobile responsiveness to enhance engagement and brand visibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    achievements: [
      "Enhanced brand visibility through modern design",
      "Optimized website speed and performance",
      "Ensured mobile responsiveness",
      "Implemented custom security features",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "Ivacy Website",
    href: "https://www.ivacy.com",
    description:
      "Developed and launched Ivacy's official website, delivering a secure, high-performance website with seamless user experience. Implemented custom features, optimized speed, and ensured mobile responsiveness to enhance engagement and brand visibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    achievements: [
      "Enhanced brand visibility through modern design",
      "Optimized website speed and performance",
      "Ensured mobile responsiveness",
    ],
  },
  {
    type: "Booking Website",
    status: "Live",
    title: "Simply Park and Fly",
    href: "https://www.simplyparkandfly.co.uk",
    description:
      "an official website that serves as a comparison engine for airport parking services across major UK airports. It helps users easily find and book affordable and reliable parking options, such as Meet & Greet/Valet and Park & Ride services.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel"],
    achievements: [
      "Increased User Engagement & Bookings",
      "Streamlined Partner Integrations",
      "Optimized website speed and performance",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "Blossom Nursery & Preschool",
    href: "https://www.theblossomnursery.com/",
    description:
      "Developed Blossom Nursery and Preschool's official website an early childhood education and childcare provider located in the UAE, delivering a secure, high-performance website with seamless user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
    achievements: [
      "Enhanced brand visibility through modern design",
      "Optimized website speed and performance",
      "Ensured mobile responsiveness",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="fold-base">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-rule" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-dark-800/30 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                  {p.type}
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium">
                  {p.status}
                </span>
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-2xl font-bold text-dark-100 mb-4 group-hover:text-dark-200 transition-colors duration-300 flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="w-5 h-5 text-dark-400 group-hover:text-dark-200 transition-all duration-300 transform group-hover:translate-x-1" />
                </h3>
              </a>
              <p className="text-dark-400 mb-6 leading-relaxed">{p.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-300 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-dark-700 text-dark-300 rounded-lg text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-300 mb-3">
                  Key Achievements:
                </h4>
                <div className="space-y-2">
                  {p.achievements.map((a) => (
                    <div key={a} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-dark-400 text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

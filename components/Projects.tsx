import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Project = {
  type: string;
  status: string;
  title: string;
  href: string;
  /** Screenshot in public/img/projects (optional) */
  image?: string;
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
    image: "/img/projects/cloudways-platform.jpg",
    description:
      "Designed and developed the Cloudways Unified Platform, the SaaS console that connects seamlessly with the Cloudways website to carry users from signup through to managing their cloud infrastructure. Worked across the frontend and middleware on a micro-frontend architecture, driving performance, scalability, and user experience. Delivered a robust, high-availability solution trusted for day-to-day cloud hosting management at scale.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "Micro-frontend",
      "Laravel",
      "Mixpanel",
      "Customer.io",
    ],
    achievements: [
      "Architected a micro-frontend platform with module federation, enabling multiple teams to ship independently",
      "Migrated the legacy AngularJS console to a modern React and TypeScript architecture without disrupting users",
      "Led a team of 10+ engineers delivering across frontend and middleware",
      "Boosted load performance through route-level code splitting, lazy loading, and Core Web Vitals optimization",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "Cloudways Website & Blog",
    href: "https://www.cloudways.com/en/",
    image: "/img/projects/cloudways-website.jpg",
    description:
      "Developed and launched the official Cloudways website and blog on a fully customized WordPress theme, built around Custom Post Types for a flexible content architecture, with multilingual support and strong Core Web Vitals. Engineered the complete marketing funnel end to end, visitors are tracked across the entire journey and identified as users at signup, with behavioral events dispatched to Mixpanel and Customer.io, while Hotjar provides on-page analytics and session insights.",
    tech: [
      "HTML5",
      "CSS3",
      "jQuery",
      "JavaScript",
      "WordPress",
      "PHP",
      "Hotjar",
    ],
    achievements: [
      "Built a fully customized WordPress theme on Custom Post Types for a flexible, scalable content architecture",
      "Engineered end-to-end funnel tracking that identifies visitors as users at signup",
      "Integrated Mixpanel, Customer.io, and Hotjar for behavioral events and session insights",
      "Delivered multilingual support with strong Core Web Vitals across the site and blog",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "PureVPN Website & Blog",
    href: "https://www.purevpn.com",
    image: "/img/projects/purevpn.jpg",
    description:
      "Developed and maintained PureVPN's official website and blog, serving a high-traffic global audience of security-conscious users. Built conversion-focused landing pages for seasonal campaigns and product launches on a custom WordPress stack, resolving cross-browser compatibility issues and keeping every page fast and fully responsive.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    achievements: [
      "Shipped high-converting landing pages under tight campaign deadlines",
      "Maintained a high-traffic website and blog serving a global audience",
      "Resolved cross-browser compatibility issues across legacy and modern browsers",
      "Kept every page fast and fully responsive on all devices",
    ],
  },
  {
    type: "Corporate Website",
    status: "Live",
    title: "Ivacy Website",
    href: "https://www.ivacy.com",
    image: "/img/projects/ivacy.jpg",
    description:
      "Developed and launched the official website for Ivacy, PureVPN's sister VPN brand, building on a shared WordPress foundation while giving the brand its own distinct identity. Implemented custom theme features, pricing and deal pages, optimized load times, and ensured a fully responsive experience across devices to drive engagement and brand visibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
      achievements: [
        "Built a custom WordPress theme with distinct branding and features for Ivacy",
        "Optimized load times and Core Web Vitals for a fast, responsive user experience",
        "Kept every page fast and fully responsive on all devices",
      ],
  },
  // {
  //   type: "Booking Website",
  //   status: "Live",
  //   title: "Simply Park and Fly",
  //   href: "https://www.simplyparkandfly.co.uk",
  //   image: "/img/projects/simplyparkandfly.jpg",
  //   description:
  //     "an official website that serves as a comparison engine for airport parking services across major UK airports. It helps users easily find and book affordable and reliable parking options, such as Meet & Greet/Valet and Park & Ride services.",
  //   tech: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel"],
  //   achievements: [
  //     "Increased User Engagement & Bookings",
  //     "Streamlined Partner Integrations",
  //     "Optimized website speed and performance",
  //   ],
  // },
  // {
  //   type: "Corporate Website",
  //   status: "Live",
  //   title: "Blossom Nursery & Preschool",
  //   href: "https://www.theblossomnursery.com/",
  //   description:
  //     "Developed Blossom Nursery and Preschool's official website an early childhood education and childcare provider located in the UAE, delivering a secure, high-performance website with seamless user experience.",
  //   tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
  //   achievements: [
  //     "Enhanced brand visibility through modern design",
  //     "Optimized website speed and performance",
  //     "Ensured mobile responsiveness",
  //   ],
  // },
];

export function Projects() {
  return (
    <section id="projects" className="fold-base">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading" data-reveal>
          <h2 className="section-title">
            A few things I&apos;ve <span className="gradient-text">built</span>.
          </h2>
          <div className="section-rule" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-reveal-delay={(i % 2) * 100}
              className="bg-dark-800/30 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              {p.image && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/snap block rounded-lg overflow-hidden border border-dark-700 mb-6"
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1280}
                    height={720}
                    className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover/snap:scale-[1.03]"
                  />
                </a>
              )}
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

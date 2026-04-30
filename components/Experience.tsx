import { Building2, Calendar, MapPin } from "lucide-react";

type Job = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    title: "Lead Software Engineer",
    company: "DigitalOcean",
    location: "Karachi, PK",
    period: "09/2022 - Present",
    summary:
      "Led a team of more than 10 engineers in the development of scalable applications, resulting in increased department productivity.",
    bullets: [
      "Successfully implemented a micro frontend architecture utilizing module federation",
      "Migrated a legacy AngularJS application to a modern React functional architecture",
      "Spearheaded a continuous integration/continuous deployment (CI/CD) initiative",
      "Mentored junior engineers and established a knowledge sharing program",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Cloudways",
    location: "Karachi, PK",
    period: "03/2018 - 08/2022",
    summary:
      "Led a team of multiple software engineers, while also serving as a Front-end Developer at Cloudways.",
    bullets: [
      "Specialized in modern front-end technologies, including React.js, Redux, RTK Query, TypeScript, and Tailwind CSS",
      "Translated UX wireframes and mockups into highly responsive and interactive web features",
      "Actively participated in an Agile team, contributing to scrum ceremonies",
    ],
  },
  {
    title: "UI-UX Engineer / Web Developer",
    company: "VigiSec Solutions Pvt. Ltd",
    location: "Karachi, PK",
    period: "01/2017 - 03/2018",
    summary:
      "Lead Multiple projects simultaneously in a deadline driven environment and responsible for all their web development work.",
    bullets: [
      "Developing responsive websites using HTML5, CSS3, Sass, Javascript",
      "Developing Custom Themes on WordPress CMS",
      "Customize theme with Custom Post Types (CPT) and Custom Taxonomies (CT)",
      "Customize theme with Custom Fields and Advance Custom Fields (ACF)",
    ],
  },
  {
    title: "Front-end Web Developer",
    company: "PureVPN",
    location: "Karachi, PK",
    period: "06/2015 - 12/2016",
    summary:
      "Responsible for the design and development of web pages. Effectively develops in a clean, well structured, easily maintainable format.",
    bullets: [
      "Address and quickly fix browser compatibility issues",
      "Deployment of code via VCS (GIT)",
      "Design and development of web pages and graphics",
    ],
  },
  {
    title: "Associate Front-end Web Developer",
    company: "Aekpani Networks",
    location: "Karachi, PK",
    period: "12/2014 - 06/2015",
    summary:
      "Responsible for the design and development of web pages and graphics (Logos and Banners).",
    bullets: [
      "Web page design and development",
      "Graphics design including logos and banners",
      "Frontend development with modern web standards",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto" />
        </div>
        <div className="space-y-8 md:ml-2">
          {jobs.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="relative bg-dark-800/30 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full border-4 border-dark-950 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-primary-400 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={16} className="text-dark-400 shrink-0" />
                    <span className="text-dark-300 font-semibold">
                      {job.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-dark-400 shrink-0" />
                    <span className="text-dark-400">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-dark-400 shrink-0" />
                    <span className="text-dark-400">{job.period}</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {job.summary}
                  </p>
                  <div className="space-y-2">
                    {job.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-dark-400 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

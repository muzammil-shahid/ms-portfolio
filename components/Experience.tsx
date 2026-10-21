"use client";

import {
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { useState } from "react";

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
    title: "Engineering Manager",
    company: "DigitalOcean",
    location: "Karachi, PK",
    period: "03/2026 - Present",
    summary:
      "Drives frontend architecture for the Cloudways Unified platform, collaborating cross-functionally across backend, design, and QA to deliver high-performing, enterprise-grade user experiences.",
    bullets: [
      "Leading the frontend architecture for the Cloudways Unified platform, designing scalable and maintainable solutions",
      "Developing and implementing user-facing features to improve usability, performance, and overall platform experience",
      "Collaborating closely with backend, design, and QA teams to ensure seamless integration and high-quality releases",
      "Optimizing frontend code for performance, scalability, and responsiveness across devices and browsers",
      "Managing deployment processes and CI/CD pipelines using GitHub Actions to automate builds, tests, and releases efficiently",
      "Contributing to best practices in frontend development, including code reviews, modular architecture, and reusable components",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "DigitalOcean",
    location: "Karachi, PK",
    period: "09/2022 - 03/2026",
    summary:
      "Led a team of 10+ engineers building scalable applications, driving measurable gains in department productivity and delivery velocity.",
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
      "Managed a cross-functional team of software engineers while maintaining hands-on frontend development at Cloudways.",
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

const INITIAL_VISIBLE = 2;

export function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="fold-base">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading" data-reveal>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-rule" />
        </div>
        <div className="space-y-8">
          {jobs.map((job, i) => (
            <div
              key={`${job.company}-${job.period}`}
              // Initial cards use scroll-reveal; collapsed ones stay in the HTML
              // (crawlable for SEO) and are only hidden visually until expanded
              {...(i < INITIAL_VISIBLE ? { "data-reveal": true } : {})}
              className={`relative bg-dark-800/30 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover ${
                i >= INITIAL_VISIBLE
                  ? expanded
                    ? "animate-fade-in-up"
                    : "hidden"
                  : ""
              }`}
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full border-4 border-dark-950 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-dark-200 mb-2">
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

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="btn-outline px-6 py-2.5 text-sm"
          >
            {expanded ? (
              <>
                Show less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show all {jobs.length} roles
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const LINKEDIN_RECOMMENDATIONS =
  "https://www.linkedin.com/in/muzammil09/details/recommendations/";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  profile: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Paul Haverstock",
    role: "VP of Engineering",
    image: "/img/testimonials/paul.jpg",
    profile: "https://www.linkedin.com/in/haverstock/",
    text: "Muzammil and I worked together at Cloudways. He made significant contributions to the technical design and implementation of our redesigned user experience. Passionate, hard working, extremely capable, a fast and diligent learner, very collaborative and easy to work with are words that come to mind when I think of Muzammil.\n\nThrough his technical mastery, a positive, \u201ccan-do\u201d attitude and his collaborative approach, Muzammil raised the level of the team around him while also being highly productive individually. These are the qualities of engineering leadership that made him so valuable to our efforts.\n\nI would encourage anyone considering Muzammil for a position to make him a part of your team. I would very much welcome the chance to work with Muzammil again.",
  },
  {
    name: "Shaheer Gadit",
    role: "CEO at Articos · Partner at Disrupt.com",
    image: "/img/testimonials/shaheer.jpg",
    profile: "https://www.linkedin.com/in/shaheer-gadit/",
    text: "I had the pleasure of working with Muzammil on multiple projects during my time at DigitalOcean. Muzammil is hardworking, collaborative, and a natural leader. He stands out as an engineer who doesn't just deliver excellent code, but also deeply considers user experience and business impact. Muzammil significantly contributed to the success of our projects\u2014it's clear that we wouldn't have achieved our goals without him. I always enjoyed our conversations about various technologies and consistently learned from his insights.\n\nI highly recommend Muzammil as a valuable asset to any team.",
  },
  {
    name: "Muhammad Uzair",
    role: "Head of Experience & Activation, Managed Hosting at DigitalOcean",
    image: "/img/testimonials/uzair.jpg",
    profile: "https://www.linkedin.com/in/muzair/",
    text: "Muzammil is a standout Full-stack Engineer. We worked together under some very challenging deadlines, and he never missed a beat. He delivers clean, efficient code and maintains a positive attitude even when the workload is heavy. He's a true asset to any engineering team.",
  },
  {
    name: "Hoor Durrani",
    role: "Leading Creative at Ahya Technologies · xCareem (Uber Inc.)",
    image: "/img/testimonials/hoor.jpg",
    profile: "https://www.linkedin.com/in/hoor-durrani-8359a116a/",
    text: "What I really liked about Muzammil was his humble attitude and his strong work ethic. He was always ready to help anyone, whether they were new to the job or part of a different team. He was really good at solving problems and would quickly help us figure things out.\n\nAny company would be lucky to have Muzammil. He's a skilled engineer, but even more, he's the kind of person who helps everyone around him get better. He would be a huge asset to any team.",
  },
];

// Cards are rendered twice so the track can wrap around seamlessly
const loop = [...testimonials, ...testimonials];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  function step() {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.clientWidth + 32 /* gap-8 */ : el?.clientWidth ?? 0;
  }

  function scroll(direction: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    // Wrap backward: jump (instantly) into the second copy first
    if (direction === -1 && el.scrollLeft < step() / 2) {
      el.scrollLeft += half;
    }
    el.scrollBy({ left: direction * step(), behavior: "smooth" });
  }

  // Seamless forward wrap: once into the duplicate copy, jump back silently
  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    }
  }

  // Autoplay, paused on hover and disabled for reduced-motion users
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) scroll(1);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="fold-band">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading" data-reveal>
          <h2 className="section-title">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="section-rule mb-6" />
          <p className="body-copy max-w-2xl mx-auto">
            Recommendations from leaders and colleagues I&apos;ve worked with,
            taken from LinkedIn.
          </p>
        </div>

        <div
          data-reveal
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            {loop.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="snap-start shrink-0 w-full md:w-[calc(50%-1rem)] flex flex-col p-8 bg-dark-800/30 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <Quote
                  className="w-8 h-8 text-primary-500/60 mb-4"
                  aria-hidden
                />
                <blockquote className="text-dark-300 leading-relaxed flex-1 whitespace-pre-line">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-dark-700">
                  <a
                    href={t.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-500/30 shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-dark-100 font-semibold group-hover:text-primary-400 transition-colors">
                        {t.name}
                      </div>
                      <div className="text-dark-400 text-sm">{t.role}</div>
                    </div>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-dark-600 text-dark-300 hover:border-primary-500 hover:text-primary-400 transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-dark-600 text-dark-300 hover:border-primary-500 hover:text-primary-400 transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mt-10" data-reveal>
          <a
            href={LINKEDIN_RECOMMENDATIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-2.5 text-sm"
          >
            <Linkedin className="w-4 h-4" />
            View all recommendations
          </a>
        </div>
      </div>
    </section>
  );
}

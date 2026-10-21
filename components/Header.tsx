"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI Leadership", highlight: false },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      // Section counts as "active" when it crosses the middle band of the viewport
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <nav className="section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">&lt;MS /&gt;</div>
          <div className="hidden md:flex items-center space-x-8">
            {nav.map((item) =>
              item.highlight ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 font-medium ${
                    active === item.href
                      ? "border-primary-400 bg-primary-600/25 shadow-lg shadow-primary-500/20"
                      : "border-primary-500/40 bg-primary-600/10 hover:border-primary-400 hover:bg-primary-600/20"
                  }`}
                >
                  <Sparkles size={14} className="text-primary-400" />
                  <span className="gradient-text font-semibold">
                    {item.label}
                  </span>
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors duration-300 font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-purple-600 after:transition-all after:duration-300 ${
                    active === item.href
                      ? "text-primary-400 after:w-full"
                      : "text-dark-300 hover:text-primary-500 after:w-0"
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <button
            type="button"
            className="md:hidden text-dark-300 hover:text-primary-500 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden flex flex-col gap-4 pt-6 pb-2 border-t border-dark-800 mt-4">
            {nav.map((item) =>
              item.highlight ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <Sparkles size={14} className="text-primary-400" />
                  <span className="gradient-text">{item.label}</span>
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    active === item.href
                      ? "text-primary-400"
                      : "text-dark-300 hover:text-primary-500"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <nav className="section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">&lt;MS /&gt;</div>
          <div className="hidden md:flex items-center space-x-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-dark-300 hover:text-primary-500 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
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
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-dark-300 hover:text-primary-500 transition-colors duration-300 font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

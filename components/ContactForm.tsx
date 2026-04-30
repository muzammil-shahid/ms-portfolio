"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const EMAIL = "muzammilshahid.gt@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muzammil09/";

export function ContactForm() {
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `From: ${name}`,
      `Reply-To: ${from}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setPending(false);
  }

  return (
    <div className="bg-dark-800/30 rounded-xl p-8 border border-dark-700">
      <h3 className="text-2xl font-semibold text-dark-100 mb-6">Send Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            placeholder="Project discussion, Job opportunity, etc."
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-y min-h-[140px]"
            placeholder="Tell me about your project, requirements, or just say hello to connect :)"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full px-8 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-dark-600">
        <p className="text-dark-400 text-sm text-center">
          Or reach out directly via{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            email
          </a>{" "}
          or{" "}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

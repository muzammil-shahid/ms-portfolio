"use client";

import { CheckCircle2, Send, XCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const EMAIL = "muzammilshahid.gt@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muzammil09/";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "pending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Fallback: open the visitor's mail client if no form service is configured
    if (!WEB3FORMS_KEY) {
      const body = [`From: ${name}`, `Reply-To: ${from}`, "", message].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("pending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email: from,
          subject,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-dark-800/30 rounded-xl p-8 border border-dark-700">
      <h3 className="text-2xl font-semibold text-dark-100 mb-6">Send Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="sr-only">
            Your full name
          </label>
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
          <label htmlFor="email" className="sr-only">
            Your email address
          </label>
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
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
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
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
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
          disabled={status === "pending"}
          className="w-full px-8 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {status === "pending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <div className="flex items-center gap-2 p-4 bg-green-600/10 border border-green-600/30 rounded-lg text-green-400 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 p-4 bg-red-600/10 border border-red-600/30 rounded-lg text-red-400 text-sm">
            <XCircle className="w-5 h-5 shrink-0" />
            Something went wrong. Please try again or email me directly at{" "}
            {EMAIL}.
          </div>
        )}
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

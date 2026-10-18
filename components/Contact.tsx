import { ExternalLink, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

const EMAIL = "muzammilshahid.gt@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muzammil09/";

export function Contact() {
  return (
    <section id="contact" className="fold-band">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-rule mb-6" />
          <p className="body-copy max-w-2xl mx-auto">
            I welcome the opportunity to connect and discuss potential projects,
            creative ideas, or how I can contribute to your vision.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-dark-100 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="tel:+923112304414"
                className="flex items-start gap-4 p-4 bg-dark-800/30 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover group"
              >
                <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-dark-400 text-sm font-medium">Phone</p>
                  <p className="text-dark-200 group-hover:text-primary-400 transition-colors">
                    +92-(311)-230-4414
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 p-4 bg-dark-800/30 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover group"
              >
                <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-dark-400 text-sm font-medium">Email</p>
                  <p className="text-dark-200 group-hover:text-primary-400 transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 bg-dark-800/30 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover group">
                <div className="text-primary-500 group-hover:text-primary-400 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-dark-400 text-sm font-medium">Location</p>
                  <p className="text-dark-200 group-hover:text-primary-400 transition-colors">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-dark-100 mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-dark-800 text-center">
          <p className="text-dark-500">
            © {new Date().getFullYear()} Muhammad Muzammil. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

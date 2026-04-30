import Image from "next/image";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-950">
                <Image
                  src="/img/muzammilshahid.png"
                  alt="Muhammad Muzammil - Software Engineer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              I&apos;m <span className="gradient-text">Muzammil.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-dark-300 font-light">
              Software Engineer
            </h2>
          </div>
          <p className="text-lg md:text-xl text-dark-400 max-w-4xl mx-auto leading-relaxed">
            Bringing over 8+ years of expertise in building scalable web
            applications, where I combine strong coding practices with a focus on
            usability. My expertise spans technologies such as{" "}
            <span className="text-primary-500 font-semibold">
              React, TypeScript, Next.js, Redux, WordPress, and PHP
            </span>
            , ensuring both powerful functionality and seamless user flows.
            Currently, I am leading a team of over 10+ engineers at DigitalOcean,
            dedicated to creating intuitive, high-impact interfaces that drive
            tangible business outcomes. In my spare time, I enjoy playing chess,
            snooker, and table tennis.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-dark-400">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary-500 shrink-0" />
              <span>+92-(311)-230-4414</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary-500 shrink-0" />
              <span>
                <a
                  href="mailto:muzammilshahid.gt@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  muzammilshahid.gt@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-500 shrink-0" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-dark-600 hover:border-primary-500 text-dark-300 hover:text-primary-500 rounded-lg font-semibold transition-all duration-300"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-dark-500 hover:text-primary-500 transition-colors duration-300"
        aria-label="Scroll to About"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

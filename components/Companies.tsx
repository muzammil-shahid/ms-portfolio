import Image from "next/image";

type Company = {
  name: string;
  src: string;
  width: number;
  height: number;
  /* Per-logo height so wordmarks look optically equal: logos that
     include a tall icon get a larger box than text-only wordmarks. */
  sizeClass: string;
};

const companies: Company[] = [
  {
    name: "Cloudways",
    src: "/img/companies/cloudways.svg",
    width: 128,
    height: 29,
    sizeClass: "h-6 md:h-7",
  },
  {
    name: "PureVPN",
    src: "/img/companies/purevpn.png",
    width: 833,
    height: 294,
    sizeClass: "h-9 md:h-10",
  },
  {
    name: "Ivacy VPN",
    src: "/img/companies/ivacy.svg",
    width: 819,
    height: 306,
    sizeClass: "h-10 md:h-11",
  },
  {
    name: "Disrupt.com",
    src: "/img/companies/disrupt.svg",
    width: 183,
    height: 30,
    sizeClass: "h-6 md:h-7",
  },
];

export function Companies() {
  return (
    <section id="companies" className="py-14 section-padding border-y border-dark-800/60">
      <div className="max-w-5xl mx-auto" data-reveal>
        <p className="text-center text-sm uppercase tracking-[0.2em] text-dark-500 mb-10">
          Companies I&apos;ve worked with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 max-w-3xl mx-auto">
          {companies.map((c) => (
            <div key={c.name} className="flex items-center justify-center">
              <Image
                src={c.src}
                alt={`${c.name} logo`}
                title={c.name}
                width={c.width}
                height={c.height}
                className={`${c.sizeClass} w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 [filter:brightness(0)_invert(1)]`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

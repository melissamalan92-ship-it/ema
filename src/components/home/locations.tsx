import Image from "next/image";
import Link from "next/link";

export function Locations() {
  return (
    <section id="locations" className="bg-navy-primary px-10 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Where To Find Us ]
          </span>
          <h2 className="font-serif text-[40px] font-normal leading-[1.2] text-bg-warm">
            Our Locations
          </h2>
          <p className="max-w-[380px] font-body text-base leading-[1.7] text-bg-warm/70">
            Contact your nearest branch for more information on how we can
            help you, or click a pin to find out more.
          </p>
          <Link
            href="#contact"
            className="mt-1 rounded-lg bg-bg-warm px-7 py-3 text-sm font-semibold text-navy-primary transition-opacity hover:opacity-90"
          >
            Find out more
          </Link>
        </div>

        <div className="relative aspect-[772/682] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/Locations- colour.png"
            alt="EMA locations across South Africa"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

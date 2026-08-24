import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-[900px] flex-col items-center gap-6 px-10 pb-28 pt-20 text-center"
    >
      <h1 className="text-[56px] font-bold leading-[1.1] text-bg-warm">
        E Malan &amp; Associates
      </h1>
      <p className="font-serif text-2xl italic text-[#8fb0ff]">
        since 1983
      </p>

      <p className="max-w-[560px] text-lg leading-[1.7] text-[#cddaf0]">
        Working over four decades with over 2,500 companies nationwide.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#contact"
          className="rounded-full bg-bg-warm px-8 py-4 text-[15px] font-semibold text-navy-primary transition-opacity hover:opacity-90"
        >
          Contact us
        </Link>
        <Link
          href="#services"
          className="rounded-full border border-[rgba(253,255,248,0.4)] px-8 py-4 text-[15px] font-semibold text-bg-warm transition-colors hover:bg-[rgba(253,255,248,0.1)]"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}

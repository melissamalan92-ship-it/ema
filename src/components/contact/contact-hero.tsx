import { Reveal } from "@/components/home/reveal";

export function ContactHero() {
  return (
    <section className="flex min-h-[560px] items-center justify-center bg-navy-primary px-5 sm:px-8 lg:px-20">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
        <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[72px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
          Find your <em className="italic text-blue-accent">practice</em>
        </h1>
        <p className="max-w-[640px] font-body text-[16px] lg:text-[22px] leading-[1.6] tracking-[0.02em] text-cream">
          Reach out to your nearest branch, or get in touch for general
          enquiries — we&rsquo;re here to help.
        </p>
      </Reveal>
    </section>
  );
}

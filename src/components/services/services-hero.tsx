import { Reveal } from "@/components/home/reveal";

export function ServicesHero() {
  return (
    <section className="bg-navy-primary px-10 pb-28 pt-32">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
        <h1 className="font-serif text-[64px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
          Everything your{" "}
          <em className="italic text-blue-accent">business</em>
          <br />
          needs to <em className="italic text-blue-accent">grow</em>.
        </h1>
        <p className="max-w-[640px] font-body text-[22px] leading-[1.6] tracking-[0.02em] text-cream">
          A full range of professional services to support your business at
          every stage.
        </p>
      </Reveal>
    </section>
  );
}

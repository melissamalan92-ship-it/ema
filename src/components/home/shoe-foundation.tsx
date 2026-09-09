import Image from "next/image";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export function ShoeFoundation() {
  return (
    <section id="shoe-foundation" className="bg-bg-warm px-10 py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-5 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Social Responsibility ]
          </span>
          <h2 className="max-w-[420px] font-serif text-[38px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Proudly supporting
            <br />
            <em className="italic text-blue-accent">The Shoe Foundation.</em>
          </h2>
          <p className="max-w-[420px] font-body text-base leading-[1.7] text-ink-soft">
            Through The Shoe Foundation, we&rsquo;re committed to making a
            positive impact in the communities where we live and work.
          </p>
          <CtaLink href="#contact">Find out more</CtaLink>
        </Reveal>

        <Reveal
          delay={120}
          className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(16,38,62,0.35)]"
        >
          <Image
            src="/images/Charity-colour.png"
            alt="Child walking to school, supported by The Shoe Foundation"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="480px"
          />
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

export function ShoeContactSection() {
  return (
    <section className="bg-shoe-blue px-10 py-24">
      <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
        <span className="font-display text-[28px] text-cream/70">
          Contact
        </span>
        <h2 className="font-display text-[32px] font-normal text-blue-accent">
          The Shoe Foundation
        </h2>
        <p className="max-w-[560px] font-body text-[17px] leading-[1.6] text-cream">
          The Shoe Foundation operates under E Malan &amp; Associates. Our
          coordinator Zubeida works closely with our learners, families and
          donors, ensuring every scholar receives the support they need
          throughout their journey.
        </p>
        <p className="font-body text-[17px] font-bold leading-[1.6] text-cream">
          For donations, sponsorships or general enquiries, get in touch
          with Zubeida.
        </p>
        <CtaLink href="/contact" variant="cream" className="mt-2">
          Contact Us
        </CtaLink>
      </Reveal>

      <Reveal
        delay={150}
        className="mx-auto mt-20 flex max-w-[960px] flex-col items-center gap-4 text-center"
      >
        <Image
          src="/images/shoes.png"
          alt=""
          width={500}
          height={500}
          className="w-[130px]"
          aria-hidden
        />
        <p className="whitespace-nowrap font-display text-[20px] leading-[1.5] text-shoe-yellow">
          In memory of [Name] &mdash; a legacy carried forward through
          opportunity and education.
        </p>
      </Reveal>
    </section>
  );
}

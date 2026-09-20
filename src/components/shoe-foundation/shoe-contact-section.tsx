import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { ShoeContactButton } from "./contact-modal";

export function ShoeContactSection() {
  return (
    <section className="bg-shoe-blue px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
        <h2 className="lg:whitespace-nowrap font-display text-[30px] sm:text-[38px] lg:text-[48px] font-normal leading-[1.15] text-blue-accent">
          <span className="text-cream/70">Contact</span> The Shoe Foundation
        </h2>
        <p className="max-w-[560px] font-body text-[14px] lg:text-[17px] leading-[1.6] text-cream">
          The Shoe Foundation operates under E Malan &amp; Associates. Our
          coordinator Zubeida works closely with our learners, families and
          donors, ensuring every scholar receives the support they need
          throughout their journey.
        </p>
        <p className="font-body text-[14px] lg:text-[17px] font-bold leading-[1.6] text-cream">
          For donations, sponsorships or general enquiries, get in touch with
          Zubeida.
        </p>
        <ShoeContactButton variant="cream" className="mt-2">
          Contact Us
        </ShoeContactButton>
      </Reveal>

      <Reveal
        delay={150}
        className="mx-auto mt-16 flex max-w-[960px] flex-col items-center gap-4 text-center"
      >
        <Image
          src="/images/shoes-trimmed.png"
          alt=""
          width={433}
          height={176}
          className="w-[180px]"
          aria-hidden
        />
        <p className="font-display text-[17px] lg:text-[20px] leading-[1.5] text-shoe-yellow">
          In memory of Dana, a legacy carried forward through opportunity and
          education.
        </p>
      </Reveal>
    </section>
  );
}

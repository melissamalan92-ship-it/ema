import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-10 lg:gap-16">
        {/* Phones read this as an inline stat — number beside its label, left
            aligned with the copy below. Desktop keeps the centred lockup with
            the shoes illustration between the two. */}
        <Reveal className="flex flex-row items-center gap-4 text-left lg:flex-col lg:items-center lg:gap-4 lg:text-center">
          <span className="font-display text-[56px] font-normal leading-none text-blue-accent lg:text-[110px]">
            42
          </span>
          {/* Decorative only, and too dominant on a phone — desktop keeps it.
              shoes-trimmed.png is shoes.png with its transparent padding cropped
              off, so the stack spaces on the artwork rather than on dead pixels. */}
          <Image
            src="/images/shoes-trimmed.png"
            alt=""
            width={433}
            height={176}
            className="hidden w-[248px] lg:block"
            aria-hidden
          />
          <p className="max-w-[210px] font-display text-[18px] leading-[1.25] text-blue-accent lg:max-w-none lg:whitespace-nowrap lg:text-[28px] lg:leading-[1.15]">
            learners being put through school and counting
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start gap-5 text-left"
        >
          <h2 className="font-display text-[29px] sm:text-[33px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-shoe-blue">
            About The Shoe Foundation
          </h2>
          <p className="max-w-[520px] font-body text-[14px] lg:text-[17px] leading-[1.6] text-ink">
            The Shoe Foundation began in 2012 with just one student, raising
            the funds needed to support her throughout five years of high
            school and on to university.
          </p>
          <p className="max-w-[520px] font-body text-[14px] lg:text-[17px] leading-[1.6] text-ink">
            More than 13 years later, the Foundation continues to help
            learners complete their secondary education, providing the
            support and opportunities they need to{" "}
            <strong className="font-bold">
              learn, grow and build a brighter future.
            </strong>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

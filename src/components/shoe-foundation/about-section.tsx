import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-10 lg:gap-16">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="font-display text-[72px] lg:text-[110px] font-normal leading-none text-blue-accent">
            42
          </span>
          {/* shoes-trimmed.png is shoes.png with its transparent padding cropped
              off, so the stack spaces on the artwork rather than on dead pixels. */}
          <Image
            src="/images/shoes-trimmed.png"
            alt=""
            width={433}
            height={176}
            className="w-[248px]"
            aria-hidden
          />
          <p className="lg:whitespace-nowrap font-display text-[28px] leading-[1.15] text-blue-accent">
            learners being put through school and counting
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start gap-5 text-left"
        >
          <h2 className="font-display text-[27px] sm:text-[33px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-shoe-blue">
            About The Shoe Foundation
          </h2>
          <p className="max-w-[520px] font-body text-[17px] leading-[1.6] text-ink">
            The Shoe Foundation began in 2012 with just one student, raising
            the funds needed to support her throughout five years of high
            school and on to university.
          </p>
          <p className="max-w-[520px] font-body text-[17px] leading-[1.6] text-ink">
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

import Image from "next/image";
import { Reveal } from "@/components/home/reveal";

export function AboutSection() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[0.9fr_1.1fr] items-center gap-16">
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-display text-[110px] font-normal leading-none text-blue-accent">
            42
          </span>
          <div className="relative -mt-2 flex items-center justify-center">
            <Image
              src="/images/shoes.png"
              alt=""
              width={500}
              height={500}
              className="w-[220px]"
              aria-hidden
            />
          </div>
          <p className="-mt-4 max-w-[280px] font-display text-[28px] leading-[1.15] text-blue-accent">
            learners being put through school and counting
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start gap-5 text-left"
        >
          <h2 className="font-display text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-shoe-blue">
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
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";
import { Container } from "@/components/ui/container";

export function TrainingSection() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 pb-10 lg:pb-20 pt-14">
      <Container>
      <div className="relative mr-24 rounded-[32px] bg-navy-primary p-11 pl-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <Reveal className="flex flex-col items-start text-left">
            <span className="font-body text-[13px] text-cream/60">
              SAIPA Training &amp; Learnerships
            </span>
            <h2 className="mt-2 font-serif text-[25px] sm:text-[30px] lg:text-[34px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
              Building
              <br />
              <em className="italic text-blue-accent">experience</em>
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <p className="max-w-[460px] font-body text-[14px] leading-[1.6] text-cream/80">
                <strong className="font-semibold text-cream">
                  As a SAIPA Accredited Training Centre,
                </strong>{" "}
                EMA gives aspiring Professional Accountants the practical
                experience to build their careers.
              </p>
              <p className="max-w-[460px] font-body text-[14px] leading-[1.6] text-cream/80">
                Our structured learnership combines hands-on experience,
                professional development and mentorship, helping trainees
                turn knowledge into real-world expertise.
              </p>
            </div>

            <CtaLink href="/contact" variant="cream" className="mt-6">
              Contact Us
            </CtaLink>
          </Reveal>

          <Reveal delay={120} className="relative -mb-[77px] -mr-[77px] ml-auto w-[63%]">
            <Image
              src="/images/Saipa.png"
              alt="SAIPA accredited training centre"
              width={476}
              height={722}
              className="w-full rounded-2xl bg-white p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
            />
          </Reveal>
        </div>
      </div>
      </Container>
    </section>
  );
}

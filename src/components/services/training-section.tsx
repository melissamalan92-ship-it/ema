import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

export function TrainingSection() {
  return (
    <section className="bg-bg-warm py-20">
      <div className="relative mr-24 rounded-r-[32px] bg-navy-primary p-14 pl-10">
        <div className="grid grid-cols-2 items-center gap-16">
          <Reveal className="flex flex-col items-start gap-1 text-left">
            <h2 className="font-serif text-[42px] font-normal leading-[1.1] tracking-[-0.01em] text-cream">
              Building
              <br />
              <em className="italic text-blue-accent">experience</em>
            </h2>
            <p className="font-serif text-[22px] font-bold text-cream">
              SAIPA Training &amp; Learnerships
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <p className="max-w-[480px] font-body text-[22px] leading-[1.5] text-cream/85">
                <strong className="font-semibold text-cream">
                  As a SAIPA Accredited Training Centre,
                </strong>{" "}
                EMA gives aspiring Professional Accountants the practical
                experience to build their careers.
              </p>
              <p className="max-w-[480px] font-body text-[22px] leading-[1.5] text-cream/85">
                Our structured learnership combines hands-on experience,
                professional development and mentorship, helping trainees
                turn knowledge into real-world expertise.
              </p>
            </div>

            <CtaLink href="#contact" variant="cream" className="mt-6">
              Contact Us
            </CtaLink>
          </Reveal>

          <Reveal delay={120} className="relative -mb-24 -mr-24 ml-auto w-[85%]">
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
    </section>
  );
}

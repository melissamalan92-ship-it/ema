import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

export function TrainingSection() {
  return (
    <section className="relative z-10 bg-navy-primary px-10 py-20">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-center gap-16">
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

        <Reveal delay={120} className="relative">
          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 h-[70%] w-[85%] -translate-x-1/2 rounded-full opacity-40 blur-[60px]"
            style={{ background: "var(--cream)" }}
          />
          <div className="relative -mb-20 -mr-12 ml-auto w-[88%]">
            <div
              className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-full opacity-30 blur-[40px]"
              style={{ background: "var(--ink)" }}
            />
            <Image
              src="/images/Saipa.png"
              alt="SAIPA accredited training centre"
              width={476}
              height={722}
              className="relative w-full rounded-2xl bg-white p-10 shadow-[0_50px_90px_-20px_rgba(0,0,0,0.55)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

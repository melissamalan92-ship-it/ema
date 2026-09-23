import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";

export function ScholarMessageSection() {
  return (
    <section className="bg-bg-warm px-5 pb-10 pt-10 sm:px-8 lg:px-20 lg:py-20">
      <Container>
        <div className="relative rounded-[24px] bg-shoe-blue p-6 lg:mr-24 lg:rounded-[32px] lg:pb-14 lg:pl-10 lg:pr-14 lg:pt-10">
          {/* Phones: heading and photo share the top row, quote spans beneath.
              Desktop: heading over quote in the left column, photo on the
              right spanning both rows. */}
          <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-5 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="col-start-1 row-start-1 text-left">
              <h2 className="font-display text-[26px] font-normal leading-[1.2] text-cream sm:text-[30px] lg:text-[34px]">
                A message from our
                <br />
                <em className="italic text-shoe-yellow">First Scholar</em>
              </h2>
            </Reveal>

            <Reveal
              delay={120}
              className="relative col-start-2 row-start-1 w-[120px] lg:col-start-2 lg:row-span-2 lg:-mb-[88px] lg:-mr-20 lg:ml-auto lg:w-[calc(100%-35px)] lg:max-w-[420px] lg:self-start"
            >
              <Image
                src="/images/Nontsikelelo%20Fokazi.jpg"
                alt="Nontsikelelo Fokasi, The Shoe Foundation's first scholar"
                width={1200}
                height={900}
                className="aspect-[215/187] w-full rounded-2xl object-cover object-bottom shadow-[0_40px_80px_-25px_rgba(0,0,0,0.55)] lg:aspect-auto lg:object-center"
              />
            </Reveal>

            <Reveal
              delay={60}
              className="col-span-2 col-start-1 row-start-2 flex flex-col items-start gap-6 text-left lg:col-span-1 lg:row-start-2"
            >
              <p className="font-body text-[14px] leading-[1.7] text-cream/90 lg:max-w-[440px] lg:text-[16px]">
                During my time with The Shoe Foundation, I recieved such
                genuine support, guidance, and encouragement to help me become
                the best version of myself. Their support turned a stressful
                situation into a journey I could actually enjoy, letting me
                focus on my studies without the weight holding me back. That
                kind of care is a true reflection of The Shoe
                Foundation&rsquo;s heart, it&rsquo;s not just about funding,
                it&rsquo;s about lifting people up with kindness and real
                support. Thank you to The Shoe foundation.{" "}
                <span className="ml-[70px] font-display text-[19.3px] text-shoe-yellow lg:hidden">
                  Nontsikelelo Fokasi
                </span>
              </p>
              <p className="hidden font-display text-shoe-yellow lg:block lg:self-end lg:text-[30px]">
                Nontsikelelo Fokasi
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

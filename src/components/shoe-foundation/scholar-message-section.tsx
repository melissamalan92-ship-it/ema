import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";

export function ScholarMessageSection() {
  return (
    <section className="bg-bg-warm px-20 py-20">
      <Container>
      <div className="relative mr-24 rounded-[32px] bg-shoe-blue pb-14 pl-10 pr-14 pt-10">
        <div className="grid grid-cols-2 items-center gap-16">
          <Reveal className="flex flex-col items-start gap-6 text-left">
            <h2 className="font-display text-[34px] font-normal leading-[1.2] text-cream">
              A message from our
              <br />
              <em className="italic text-shoe-yellow">First Scholar</em>
            </h2>
            <p className="max-w-[440px] font-body text-[16px] leading-[1.7] text-cream/90">
              During my time with The Shoe Foundation, I recieved such
              genuine support, guidance, and encouragement to help me become
              the best version of myself. Their support turned a stressful
              situation into a journey I could actually enjoy, letting me
              focus on my studies without the weight holding me back. That
              kind of care is a true reflection of The Shoe
              Foundation&rsquo;s heart, it&rsquo;s not just about funding,
              it&rsquo;s about lifting people up with kindness and real
              support. Thank you to The Shoe foundation.
            </p>
            <p className="self-end font-display text-[30px] text-shoe-yellow">
              Nontsikelelo Fokasi
            </p>
          </Reveal>

          <Reveal
            delay={120}
            // self-start pins the photo to the top of the row so its position
            // no longer depends on its own height; the text column now sets the
            // banner height, and the negative margin keeps the photo out of that
            // calculation so it can hang past the bottom edge.
            className="relative -mb-[88px] -mr-20 ml-auto w-[calc(100%-35px)] self-start"
          >
            <Image
              src="/images/Nontsikelelo%20Fokazi.jpg"
              alt="Nontsikelelo Fokasi, The Shoe Foundation's first scholar"
              width={1200}
              height={900}
              className="w-full rounded-2xl object-cover shadow-[0_40px_80px_-25px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
        </div>
      </div>
      </Container>
    </section>
  );
}

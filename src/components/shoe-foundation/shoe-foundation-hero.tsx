import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";
import { ShoeFoundationVideo } from "./shoe-foundation-video";

export function ShoeFoundationHero() {
  return (
    <section className="bg-shoe-blue px-5 sm:px-8 lg:px-20 pb-20 pt-20">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] items-center gap-8 lg:gap-12">
        <Reveal className="flex flex-col items-center gap-5">
          <Image
            src="/images/shoe%20foundation%20logo.png"
            alt="The Shoe Foundation"
            width={280}
            height={343}
            className="w-full max-w-[200px]"
            priority
          />
          <p className="lg:whitespace-nowrap text-center font-display text-[22px] leading-[1.35] text-shoe-yellow">
            Supporting learners through school
          </p>
        </Reveal>

        <Reveal delay={120} className="relative w-full lg:-mr-10 lg:w-[calc(100%+2.5rem)]">
          <ShoeFoundationVideo />
        </Reveal>
      </Container>

      <Reveal
        delay={220}
        className="mx-auto mt-16 max-w-[860px] text-center"
      >
        <p
          data-glow
          className="font-body text-[18px] font-bold leading-[1.6] text-cream"
        >
          &ldquo;Education is the most powerful weapon which you can use to
          change the world.&rdquo; Nelson Mandela
        </p>
      </Reveal>
    </section>
  );
}

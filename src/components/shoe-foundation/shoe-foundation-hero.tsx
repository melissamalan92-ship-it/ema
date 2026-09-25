import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";
import { ShoeFoundationVideo } from "./shoe-foundation-video";

export function ShoeFoundationHero() {
  return (
    <section className="bg-shoe-blue px-5 pb-10 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-20">
      {/* Phones stack: video, logo lockup, then the quote at full width.
          There isn't room beside a 150px logo for a second column of text,
          so the quote takes the whole measure — as it does on desktop.
          Desktop: logo left, video right, quote centred underneath. */}
      <Container className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-x-12 lg:gap-y-0">
        <Reveal
          delay={120}
          className="order-1 w-full lg:order-none lg:col-start-2 lg:row-start-1 lg:-mr-10 lg:w-[calc(100%+2.5rem)]"
        >
          <ShoeFoundationVideo />
        </Reveal>

        <Reveal className="order-2 flex flex-col items-center gap-3 lg:order-none lg:col-start-1 lg:row-start-1 lg:gap-5">
          <Image
            src="/images/shoe%20foundation%20logo.png"
            alt="The Shoe Foundation"
            width={280}
            height={343}
            className="w-full max-w-[119px] sm:max-w-[165px] lg:max-w-[200px]"
            priority
          />
          <p className="text-center font-display text-[16px] leading-[1.35] text-shoe-yellow sm:text-[19px] lg:whitespace-nowrap lg:text-[22px]">
            Supporting learners through school
          </p>
        </Reveal>

        <Reveal
          delay={220}
          className="order-3 w-full text-center lg:order-none lg:col-span-2 lg:row-start-2 lg:mx-auto lg:mt-16 lg:max-w-[860px]"
        >
          <p
            data-glow
            className="font-body text-[14px] font-bold leading-[1.6] text-cream lg:text-[18px]"
          >
            &ldquo;Education is the most powerful weapon which you can use to
            change the world.&rdquo; Nelson Mandela
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";
import { ShoeFoundationVideo } from "./shoe-foundation-video";

export function ShoeFoundationHero() {
  return (
    <section className="bg-shoe-blue px-5 pb-10 pt-10 sm:px-8 lg:px-20 lg:pb-20 lg:pt-20">
      {/* Phones: video across the top, then the logo lockup and the quote
          side by side. Desktop: logo left, video right, quote underneath. */}
      <Container className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-7 lg:grid-cols-[0.6fr_1.4fr] lg:gap-x-12 lg:gap-y-0">
        <Reveal
          delay={120}
          className="order-1 col-span-2 w-full lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:-mr-10 lg:w-[calc(100%+2.5rem)]"
        >
          <ShoeFoundationVideo />
        </Reveal>

        <Reveal className="order-2 flex flex-col items-center gap-2.5 lg:order-none lg:col-start-1 lg:row-start-1 lg:gap-5">
          <Image
            src="/images/shoe%20foundation%20logo.png"
            alt="The Shoe Foundation"
            width={280}
            height={343}
            className="w-full max-w-[120px] lg:max-w-[200px]"
            priority
          />
          <p className="text-center font-display text-[13px] leading-[1.3] text-shoe-yellow lg:whitespace-nowrap lg:text-[22px] lg:leading-[1.35]">
            Supporting learners through school
          </p>
        </Reveal>

        <Reveal
          delay={220}
          className="order-3 lg:order-none lg:col-span-2 lg:row-start-2 lg:mx-auto lg:mt-16 lg:max-w-[860px] lg:text-center"
        >
          <p
            data-glow
            className="font-body text-[13px] font-bold leading-[1.55] text-cream lg:text-[18px] lg:leading-[1.6]"
          >
            &ldquo;Education is the most powerful weapon which you can use to
            change the world.&rdquo; Nelson Mandela
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

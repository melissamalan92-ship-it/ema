import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { ShoeFoundationVideo } from "./shoe-foundation-video";

export function ShoeFoundationHero() {
  return (
    <section className="bg-shoe-blue px-10 pb-20 pt-20">
      <div className="mx-auto grid max-w-[1300px] grid-cols-[0.85fr_1.15fr] items-center gap-12">
        <Reveal className="flex justify-center">
          <Image
            src="/images/shoe%20foundation%20logo.png"
            alt="The Shoe Foundation"
            width={280}
            height={343}
            className="w-full max-w-[300px]"
            priority
          />
        </Reveal>

        <Reveal delay={120} className="relative -mr-10 w-[calc(100%+2.5rem)]">
          <ShoeFoundationVideo />
        </Reveal>
      </div>

      <Reveal
        delay={220}
        className="mx-auto mt-16 max-w-[860px] text-center"
      >
        <p className="font-body text-[18px] font-bold leading-[1.6] text-cream">
          &ldquo;Education is the most powerful weapon which you can use to
          change the world.&rdquo; Nelson Mandela
        </p>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { Container } from "@/components/ui/container";

export function ShoeFoundation() {
  return (
    <section id="shoe-foundation" className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-20">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5 text-left lg:pl-9">
          <span className="font-body text-[14px] lg:text-[16px] text-ink-soft">
            More than just accounting
          </span>
          <h2 className="max-w-[420px] font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Proudly supporting
            <br />
            <em className="italic text-blue-accent">The Shoe Foundation.</em>
          </h2>
          <p className="max-w-[400px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink-soft">
            Through The Shoe Foundation, we&rsquo;re committed to making a
            positive impact in the communities where we live and work.
          </p>
          <CtaLink
            href="/shoe-foundation"
            variant="dark"
            className="mt-2 hidden lg:inline-flex"
          >
            Learn More
          </CtaLink>
        </Reveal>

        <div className="h-full lg:border-l lg:border-ink/20">
          <Reveal
            delay={120}
            className="group relative mx-auto aspect-[4/5] w-1/2 overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(16,38,62,0.35)] lg:ml-auto lg:mr-[57px] lg:w-[380px] lg:max-w-full"
          >
            <Image
              src="/images/Charity-colour.png"
              alt="Child walking to school, supported by The Shoe Foundation"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="480px"
            />
          </Reveal>
        </div>

        {/* On phones the CTA follows the image and sits centred under it. */}
        <Reveal delay={180} className="flex justify-center lg:hidden">
          <CtaLink href="/shoe-foundation" variant="dark">
            Learn More
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}

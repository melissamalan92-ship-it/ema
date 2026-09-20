import { Reveal } from "@/components/home/reveal";
import { TestimonialsCarousel } from "./testimonials-carousel";

export function TestimonialsSection() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-3 text-center">
        <h2 className="font-display text-[27px] sm:text-[33px] lg:text-[40px] font-normal leading-[1.15] text-shoe-blue">
          Testimonials
        </h2>
        <p className="font-body text-[17px] leading-[1.5] text-ink-soft">
          Stories from the learners and families The Shoe Foundation has
          supported.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <TestimonialsCarousel />
      </Reveal>
    </section>
  );
}

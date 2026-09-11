import { Quote } from "lucide-react";
import { Reveal } from "@/components/home/reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-3 text-center">
        <h2 className="font-serif text-[40px] font-normal leading-[1.15] text-shoe-blue">
          Testimonials
        </h2>
        <p className="font-body text-[17px] leading-[1.5] text-ink-soft">
          Stories from the learners and families The Shoe Foundation has
          supported.
        </p>
      </Reveal>

      <Reveal
        delay={100}
        className="mx-auto mt-12 flex max-w-[640px] flex-col items-center gap-4 rounded-2xl border border-dashed border-shoe-blue/25 bg-white/60 px-10 py-16 text-center"
      >
        <Quote className="size-8 text-shoe-blue/40" strokeWidth={1.5} />
        <p className="font-body text-[16px] text-ink-soft">
          Testimonials coming soon.
        </p>
      </Reveal>
    </section>
  );
}

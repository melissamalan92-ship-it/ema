"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "As a parent of a child supported by the Shoe Foundation, I would gladly express my heartfelt gratitude as they have helped a lot. From school outings to fundraisers organized by the school the foundation has helped tremendously as they handled all of those matters. Their constant contact with the students show their care and support. All I can say is thank you.",
    author: "Gradner Leonard",
    role: "Parent",
  },
  {
    quote:
      "My experience with the Shoe Foundation has been truly life-changing. The support I've received from school supplies to mentorship has helped me stay focused on my studies and believe in myself. The Foundation has not only given me opportunities to grow academically. I'm proud to be part of a program that genuinely cares about our future.",
    author: "Vuyolwethu Prince Ndlovu",
    role: "Camps Bay High School",
  },
  {
    quote:
      "My experience as a student supported by the Shoe Foundation has been great. I have been given opportunities by the support of the foundation as they have helped me both academically and in times of struggle. For the paid outings to the fundraisers all I can say is thank you for all that has been done.",
    author: "Caitlin Leonard",
    role: "Student",
  },
  {
    quote:
      "Being a Shoe Foundation student at Camps Bay has truly changed my life. The scholarship has allowed me to fully experience all the opportunities that Camps Bay offers, from excelling in academics, thanks to their academic aid, to joining sports teams, cultural events, like the privilege of watching plays such as Spring Awakening and The Tempest as well as leadership activities. Without the Foundation's support, many of these experiences might not have been possible. I've grown in confidence, discovered new passions, and learned the value of giving back to my community. I'm deeply grateful to the Shoe Foundation for believing in me and helping me make the most of my education.",
    author: "Zayb Williams",
    role: "Student",
  },
];

const ARROW =
  "flex size-10 shrink-0 items-center justify-center rounded-full border border-shoe-blue/25 text-shoe-blue transition-colors duration-200 hover:bg-shoe-blue hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shoe-blue";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const total = TESTIMONIALS.length;
  const go = (step: number) => {
    setIndex((i) => (i + step + total) % total);
    setExpanded(false);
  };
  const show = (i: number) => {
    setIndex(i);
    setExpanded(false);
  };
  const active = TESTIMONIALS[index];

  const dots = (
    <div className="flex items-center gap-2">
      {TESTIMONIALS.map((testimonial, i) => (
        <button
          key={testimonial.author}
          type="button"
          onClick={() => show(i)}
          aria-label={`Show testimonial from ${testimonial.author}`}
          aria-current={i === index}
          className={`size-2 rounded-full transition-colors duration-200 ${
            i === index ? "bg-shoe-blue" : "bg-shoe-blue/25"
          }`}
        />
      ))}
    </div>
  );

  const prev = (
    <button
      type="button"
      onClick={() => go(-1)}
      className={ARROW}
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="size-5" strokeWidth={1.75} />
    </button>
  );

  const next = (
    <button
      type="button"
      onClick={() => go(1)}
      className={ARROW}
      aria-label="Next testimonial"
    >
      <ChevronRight className="size-5" strokeWidth={1.75} />
    </button>
  );

  return (
    <div className="mx-auto mt-6 flex max-w-[720px] items-center gap-5 lg:mt-12">
      {/* Arrows flank the card on desktop; on phones they would eat half the
          width, so they move into the footer row beside the dots. */}
      <span className="hidden lg:block">{prev}</span>

      <div className="flex-1 rounded-[20px] border border-shoe-blue/10 bg-white px-5 py-6 shadow-[0_18px_46px_-34px_rgba(36,63,74,0.5)] lg:px-9 lg:py-9">
        {/* The min-height only applies once the full quote is always shown;
            on phones the clamp keeps collapsed cards the same height. */}
        <div
          className="flex flex-col items-center justify-center gap-4 text-center lg:min-h-[358px]"
          aria-live="polite"
        >
          <Quote className="size-6 shrink-0 text-shoe-blue/30" strokeWidth={1.5} />

          {/* Keyed on the index so each testimonial fades in as it arrives. */}
          <div
            key={index}
            className="flex animate-[testimonial-in_450ms_cubic-bezier(0.16,1,0.3,1)_both] flex-col items-center gap-3 lg:gap-5"
          >
            <p
              className={`font-body text-[13px] leading-[1.65] text-ink lg:line-clamp-none lg:text-[15px] ${
                expanded ? "" : "line-clamp-4"
              }`}
            >
              {active.quote}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="font-body text-[12px] font-semibold text-shoe-blue underline underline-offset-2 lg:hidden"
            >
              {expanded ? "See less" : "See more"}
            </button>

            <div className="flex flex-col items-center gap-0.5">
              <span className="font-display text-[20px] leading-tight text-shoe-blue lg:text-[23px]">
                {active.author}
              </span>
              <span className="font-body text-[13px] text-ink-soft">
                {active.role}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 lg:mt-6">
          <span className="lg:hidden">{prev}</span>
          {dots}
          <span className="lg:hidden">{next}</span>
        </div>
      </div>

      <span className="hidden lg:block">{next}</span>
    </div>
  );
}

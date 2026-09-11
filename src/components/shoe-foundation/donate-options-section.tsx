import { HandCoins, Gift, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

const OPTIONS = [
  {
    icon: HandCoins,
    title: "Make a contribution",
    description:
      "Every contribution makes a difference, helping support a learner throughout their school journey.",
  },
  {
    icon: Gift,
    title: "Make a larger donation",
    description:
      "Make a greater one-off contribution to help us support more learners and expand their educational opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Sponsor a learner",
    description:
      "Support one learner throughout their five years of high school and become part of their journey towards a brighter future.",
  },
];

export function DonateOptionsSection() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <Reveal className="mx-auto mb-14 flex max-w-[640px] flex-col items-center gap-3 text-center">
        <h2 className="font-display text-[48px] font-normal leading-[1.15] text-shoe-blue">
          How can you donate?
        </h2>
        <p className="font-body text-[18px] leading-[1.5] text-ink">
          Every contribution creates opportunity. Choose how you&rsquo;d
          like to make a difference.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-8">
        {OPTIONS.map((option, i) => (
          <Reveal
            key={option.title}
            delay={i * 80}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-shoe-yellow/50 text-shoe-blue transition-colors duration-300 group-hover:bg-shoe-yellow">
              <option.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="font-body text-[19px] font-bold text-shoe-blue">
              {option.title}
            </h3>
            <p className="max-w-[280px] font-body text-[14px] leading-[1.6] text-blue-accent">
              {option.description}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <CtaLink href="#donate" variant="dark">
          Contact Us
        </CtaLink>
      </div>
    </section>
  );
}

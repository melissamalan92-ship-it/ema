import { HandCoins, Gift, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { ShoeContactButton } from "./contact-modal";

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
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Reveal className="mx-auto mb-8 flex max-w-[720px] sm:mb-14 flex-col items-center gap-3 text-center">
        <h2 className="font-display text-[29px] sm:text-[38px] lg:text-[48px] font-normal leading-[1.15] text-shoe-blue">
          How can you donate?
        </h2>
        <p className="font-body text-[14px] lg:text-[18px] leading-[1.5] text-ink">
          Every contribution creates opportunity. Choose how you&rsquo;d like to
          make a difference.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {OPTIONS.map((option, i) => (
          // On phones the icon sits inline with the title, so each option is
          // two tight rows instead of three stacked blocks.
          <Reveal
            key={option.title}
            delay={i * 80}
            className="group flex items-start gap-3 text-left sm:flex-col sm:items-center sm:text-center"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-accent/15 text-blue-accent transition-colors duration-300 group-hover:bg-shoe-yellow group-hover:text-shoe-blue sm:size-11">
              <option.icon className="size-4 sm:size-5" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1 sm:items-center sm:gap-3">
              <h3 className="font-body text-[14px] font-bold text-shoe-blue lg:text-[19px]">
                {option.title}
              </h3>
              <p className="font-body text-[14px] leading-[1.55] text-blue-accent sm:max-w-[280px] sm:leading-[1.6]">
                {option.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:mt-14">
        <ShoeContactButton variant="dark">Contact Us</ShoeContactButton>
      </div>
    </section>
  );
}

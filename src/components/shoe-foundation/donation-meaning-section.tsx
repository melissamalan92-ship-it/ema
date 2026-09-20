import { Reveal } from "@/components/home/reveal";
import { ShoeContactButton } from "./contact-modal";

export function DonationMeaningSection() {
  return (
    <section className="bg-shoe-blue px-5 sm:px-8 lg:px-20 py-14 lg:py-24">
      <Reveal className="mx-auto flex max-w-[800px] flex-col items-center gap-8 text-center">
        <h2 className="font-display text-[32px] sm:text-[42px] lg:text-[56px] font-normal leading-[1.1] text-shoe-yellow">
          What does your donation mean?
        </h2>

        <div className="flex flex-col gap-5">
          <p className="font-body text-[19px] leading-[1.6] text-cream">
            Your donation directly supports a learner throughout their high
            school journey.
          </p>
          <p className="font-body text-[19px] leading-[1.6] text-cream">
            In partnership with Camps Bay High School, we provide five years of
            support from Grade 8 to Matric, covering school fees, uniforms,
            books, stationery, transport and other essential needs.
          </p>
          <p className="font-body text-[19px] leading-[1.6] text-cream">
            We stay connected with our learners and their families throughout,
            supporting their progress both in and beyond the classroom.
          </p>
          <p className="font-body text-[19px] leading-[1.6] text-cream">
            When you give to The Shoe Foundation, you&rsquo;re not simply
            donating &mdash; you&rsquo;re investing in a child&rsquo;s future.
          </p>
        </div>

        <ShoeContactButton variant="cream" className="mt-2">
          Contact Us
        </ShoeContactButton>
      </Reveal>
    </section>
  );
}

import type { Metadata } from "next";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

export const metadata: Metadata = {
  title: "Careers | EMA",
  description: "Join the team at E Malan & Associates.",
};

export default function CareersPage() {
  return (
    <main className="min-w-[1040px] overflow-x-hidden">
      <Nav />
      <section className="flex min-h-[560px] items-center justify-center bg-navy-primary px-10">
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Work with <em className="italic text-blue-accent">us</em>.
          </h1>
          <p className="max-w-[560px] font-body text-[19px] leading-[1.6] text-cream/80">
            We&rsquo;re not currently advertising any open roles, but
            we&rsquo;re always glad to hear from good people. Send us your
            CV and a note about what you&rsquo;re looking for, and
            we&rsquo;ll keep you in mind as our team grows.
          </p>
          <CtaLink href="/contact" variant="cream" className="mt-2">
            Get in Touch
          </CtaLink>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}

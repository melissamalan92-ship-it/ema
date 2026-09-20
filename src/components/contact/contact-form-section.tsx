import { Reveal } from "@/components/home/reveal";
import { ContactForm } from "./contact-form";
import { Container } from "@/components/ui/container";

export function ContactFormSection() {
  return (
    <section className="bg-navy-primary px-20 py-28">
      <Container className="grid grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-6 text-left">
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Let&apos;s talk
            <br />
            <em className="italic text-blue-accent">business.</em>
          </h2>
          <p className="max-w-[420px] font-body text-[22px] leading-[1.5] text-cream/85">
            Not sure which branch to reach out to?{" "}
            <strong className="font-bold text-cream">
              Contact us here for general enquiries
            </strong>{" "}
            and we&apos;ll point you in the right direction.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="rounded-[28px] bg-bg-warm p-10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.4)]"
        >
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}

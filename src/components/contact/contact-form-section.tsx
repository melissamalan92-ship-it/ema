import { Reveal } from "@/components/home/reveal";

const FIELDS = [
  { name: "name", label: "Name", type: "input" },
  { name: "business", label: "Business Name", type: "input" },
  { name: "subject", label: "Subject", type: "input" },
] as const;

export function ContactFormSection() {
  return (
    <section className="bg-navy-primary px-10 py-28">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-6 text-left">
          <h2 className="font-serif text-[54px] font-normal leading-[1.1] tracking-[-0.01em] text-cream">
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
          className="rounded-[28px] bg-white p-10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.4)]"
        >
          <form className="flex flex-col gap-8">
            {FIELDS.map((field) => (
              <label key={field.name} className="flex flex-col gap-2">
                <span className="font-body text-[18px] text-ink">
                  {field.label}
                </span>
                <input
                  type="text"
                  name={field.name}
                  className="border-b border-ink/20 bg-transparent py-2 font-body text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
                />
              </label>
            ))}

            <label className="flex flex-col gap-2">
              <span className="font-body text-[18px] text-ink">Message</span>
              <textarea
                name="message"
                rows={5}
                className="resize-none rounded-md border border-ink/20 bg-transparent p-3 font-body text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
              />
            </label>

            <button
              type="submit"
              className="mt-2 self-start rounded-lg bg-ink px-8 py-3.5 font-body text-[16px] font-bold text-cream transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

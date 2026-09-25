import Image from "next/image";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";
import { Container } from "@/components/ui/container";

export function DecadesSection() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-9 lg:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 lg:gap-16">
        <Reveal className="flex w-full lg:w-[67%] flex-col items-start gap-4 lg:border-r lg:border-ink/20 text-left">
          <span className="font-body text-[14px] lg:text-[16px] text-ink-soft">
            Our story
          </span>
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Decades of
            <br />
            <em className="italic text-blue-accent">experience.</em>
            <br />
            Built for <em className="italic text-blue-accent">today.</em>
          </h2>
          <CtaLink
            href="/contact"
            variant="dark"
            className="mt-auto hidden lg:inline-flex"
          >
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal delay={120} className="lg:-ml-[127px] flex flex-col gap-4 text-left">
          <p className="max-w-[590px] font-body text-[14px] lg:text-[19px] leading-[1.6] text-ink-soft">
            Established in 1983, EMA has worked across South Africa
            providing accounting, tax and advisory services to businesses
            of every size. We are a member of the South African Institute
            of Professional Accountants (SAIPA), and our commitment to
            understanding each client&rsquo;s individual needs has kept
            many relationships strong for over twenty years.
          </p>
          <p className="max-w-[590px] font-body text-[14px] lg:text-[19px] leading-[1.6] text-ink-soft">
            What began as a single practice has grown steadily rather than
            quickly &mdash; opening offices where clients needed them, and
            adding specialists as the work asked for it. In that time
            we&rsquo;ve seen businesses through changing tax regimes, new
            company law and the move from paper ledgers to cloud software,
            adapting each time without changing the way we prefer to work.
          </p>
        </Reveal>

        {/* On phones the CTA follows the story rather than interrupting it. */}
        <Reveal delay={180} className="lg:hidden">
          <CtaLink href="/contact" variant="dark">
            Contact Us
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}

const OFFICE_PHOTOS = [
  { src: "/images/accounting-office-1.png", alt: "A client arriving at an EMA reception desk" },
  { src: "/images/accounting-office-2.png", alt: "EMA accountants working through figures together" },
  { src: "/images/accounting-office-3.png", alt: "The EMA team at work in the office" },
];

export function ApproachSection() {
  return (
    <section className="relative z-10 bg-navy-primary px-5 sm:px-8 lg:px-20 pb-9 lg:pb-32 pt-10 lg:pt-20">
      <Container>
        <Reveal className="mx-auto mb-16 flex max-w-[1000px] flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            More expertise,{" "}
            <br />
            <em className="italic text-blue-accent">under one roof.</em>
          </h2>
          <p className="font-body text-[14px] lg:text-[19px] leading-[1.5] text-cream/70">
            As EMA has grown, so has the expertise behind it. Our group brings
            together specialised teams across multiple branches, working
            together to provide integrated financial and business support.
          </p>
          <p className="font-body text-[14px] lg:text-[19px] leading-[1.5] text-cream/70">
            It means you can draw on a tax specialist, a payroll team or a
            company secretarial expert without starting a new relationship each
            time. The people who already know your business stay involved, and
            the right expertise is brought in around them.
          </p>
        </Reveal>

        {/* Phones run the row edge to edge — a landscape crop three across
            leaves each photo ~86px tall, too small to read a face — so the
            crop turns portrait below lg to buy back the height. */}
        {/* The -mt matches the extra height the taller phone crop adds, so the
            row grows up into the banner and its overhang stays put. */}
        <Reveal className="-mx-5 -mb-14 -mt-[30px] grid grid-cols-3 gap-2 sm:-mx-2 sm:gap-3 lg:-mx-[15%] lg:-mb-56 lg:mt-0 lg:gap-5">
          {OFFICE_PHOTOS.map((photo) => (
            // The wrapper carries the scroll reveal so the image is free to
            // own the hover transform.
            <div key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={673}
                height={512}
                sizes="(max-width: 1023px) 33vw, 460px"
                className="aspect-[2/3] w-full rounded-[14px] object-cover lg:aspect-[13/10] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]"
              />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

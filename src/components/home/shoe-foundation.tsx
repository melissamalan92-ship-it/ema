import Image from "next/image";
import Link from "next/link";

export function ShoeFoundation() {
  return (
    <section id="shoe-foundation" className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div className="flex flex-col items-start gap-5 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Social Responsibility ]
          </span>
          <h2 className="max-w-[420px] font-serif text-[36px] font-normal leading-[1.2] text-ink">
            Proudly supporting
            <br />
            <em className="italic text-blue-accent">The Shoe Foundation.</em>
          </h2>
          <p className="max-w-[420px] font-body text-base leading-[1.7] text-ink-soft">
            Through The Shoe Foundation, we&rsquo;re committed to making a
            positive impact in the communities where we live and work.
          </p>
          <Link
            href="#contact"
            className="mt-1 rounded-lg bg-navy-primary px-7 py-3 text-sm font-semibold text-bg-warm transition-opacity hover:opacity-90"
          >
            Find out more
          </Link>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/shoe foundation-kid.png"
            alt="Person walking, supported by The Shoe Foundation"
            fill
            className="object-cover"
            sizes="480px"
          />
        </div>
      </div>
    </section>
  );
}

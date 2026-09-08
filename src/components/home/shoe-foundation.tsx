import Image from "next/image";
import Link from "next/link";

export function ShoeFoundation() {
  return (
    <section id="shoe-foundation" className="bg-bg-warm px-10 py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.1fr_0.9fr] items-center gap-16">
        <div className="flex flex-col items-start gap-5 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-navy-secondary">
            [ Social Responsibility ]
          </span>
          <h2 className="max-w-[420px] text-[32px] font-semibold leading-[1.25] text-ink">
            Proudly supporting
            <br />
            <em className="font-serif font-normal italic text-navy-secondary">
              The Shoe Foundation.
            </em>
          </h2>
          <p className="max-w-[420px] text-base leading-[1.7] text-ink-soft">
            Through The Shoe Foundation, we&rsquo;re committed to making a
            positive impact in the communities where we live and work.
          </p>
          <Link
            href="#contact"
            className="mt-1 rounded-full bg-navy-primary px-7 py-3 text-sm font-semibold text-bg-warm transition-opacity hover:opacity-90"
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

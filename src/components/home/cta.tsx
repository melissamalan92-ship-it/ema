import Link from "next/link";

export function Cta() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-40 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #fdfff8 0%, #e6e9e4 30%, #d0e0df 55%, rgba(208,224,223,0) 100%)",
        }}
      />

      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 px-10">
        <h2 className="font-serif text-[42px] font-normal leading-[1.2] text-ink">
          Looking for a trusted partner.
        </h2>
        <p className="max-w-[480px] text-base leading-[1.7] text-ink-soft">
          E Malan &amp; Associates strives to make you feel comfortable and
          confident in your accounts. Schedule a call today to find out
          more.
        </p>
        <Link
          href="#contact"
          className="mt-2 rounded-full bg-navy-primary px-8 py-4 text-[15px] font-semibold text-bg-warm transition-opacity hover:opacity-90"
        >
          Schedule a Call
        </Link>
      </div>
    </section>
  );
}

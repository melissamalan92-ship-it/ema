import Link from "next/link";

export function Cta() {
  return (
    <section
      className="relative px-10 py-20 text-center"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #101f2e 0%, #243b78 55%, #4375cd 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6">
        <h2 className="font-serif text-[42px] font-normal leading-[1.2] text-bg-warm">
          Looking for a trusted partner.
        </h2>
        <p className="max-w-[480px] text-base leading-[1.7] text-[#cddaf0]">
          E Malan &amp; Associates strives to make you feel comfortable and
          confident in your accounts. Schedule a call today to find out
          more.
        </p>
        <Link
          href="#contact"
          className="mt-2 rounded-full bg-bg-warm px-8 py-4 text-[15px] font-semibold text-navy-primary transition-opacity hover:opacity-90"
        >
          Schedule a Call
        </Link>
      </div>
    </section>
  );
}

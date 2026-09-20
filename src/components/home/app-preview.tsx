import Image from "next/image";
import { Reveal } from "./reveal";
import { Container } from "@/components/ui/container";

function AppleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.7 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.9-.4 7.1 1.2 9.5.8 1.2 1.7 2.5 2.9 2.4 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.6-.9.9-1.5 1.3-2.6-2.5-1-2.9-2.9-2.5-3.9-1.4-.1 0 0 0 0Z" />
      <path d="M14.4 5.8c.6-.8 1-1.9.9-3-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
    </svg>
  );
}

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 3.5 19 12 5 20.5V3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function StoreBadges({ compact = false }: { compact?: boolean }) {
  const box = compact
    ? "inline-flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-cream"
    : "inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80 hover:shadow-lg";
  const small = compact ? "text-[8px]" : "text-[10px]";
  const big = compact
    ? "-mt-0.5 text-[13px] font-semibold"
    : "-mt-0.5 text-lg font-semibold";
  const iconSize = compact ? 15 : 20;

  return (
    <>
      <span className={box}>
        <AppleIcon size={iconSize} />
        <span className="flex flex-col items-start leading-tight">
          <span className={small}>Download on the</span>
          <span className={big}>App Store</span>
        </span>
      </span>
      <span className={box}>
        <PlayIcon size={compact ? 14 : 18} />
        <span className="flex flex-col items-start leading-tight">
          <span className={small}>Get it on</span>
          <span className={big}>Google Play</span>
        </span>
      </span>
    </>
  );
}

export function AppPreview() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-20">
      <Container>
        <div className="relative -mx-5 rounded-[24px] bg-navy-primary p-6 sm:-mx-8 lg:mx-0 lg:ml-24 lg:rounded-[32px] lg:p-12">
          <div
            className="pointer-events-none absolute -bottom-32 right-0 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-[120px]"
            style={{ background: "var(--blue-accent)" }}
          />
          <div className="relative grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <Reveal className="relative w-full lg:-ml-[129px] lg:w-[312px]">
              <div className="flex items-stretch gap-4 lg:block">
                <div className="w-[125px] shrink-0 transition-transform duration-500 ease-out lg:w-auto lg:hover:-translate-y-2">
                  <Image
                    src="/images/phone%20colour.png"
                    alt="Hand holding a phone with the EMA app"
                    width={518}
                    height={741}
                    className="w-full rounded-2xl shadow-[0_40px_80px_-25px_rgba(0,0,0,0.6)] transition-shadow duration-500 group-hover:shadow-[0_50px_90px_-20px_rgba(0,0,0,0.7)]"
                    priority
                  />
                </div>
                {/* Phones show the badges beside the image; desktop keeps them
                under the copy. */}
                <div className="flex flex-col items-start justify-center gap-2 lg:hidden">
                  <StoreBadges compact />
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="flex flex-col items-start gap-6 text-left"
            >
              <h2 className="font-serif text-[27px] sm:text-[32px] lg:text-[38px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
                Your accountants <br />
                in your <em className="italic text-blue-accent">pocket</em>.
              </h2>
              <p className="max-w-[420px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-cream/70">
                We&rsquo;re building an app that brings the same clarity we
                bring to every client relationship straight to your phone. It
                will put your numbers, key documents and upcoming deadlines in
                one place, so you can see where things stand without having to
                ask. We&rsquo;ll let you know the moment it&rsquo;s ready to
                download.
              </p>

              <div className="mt-10 hidden flex-wrap items-center gap-3 lg:flex">
                <StoreBadges />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

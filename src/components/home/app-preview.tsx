import Image from "next/image";

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.7 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.9-.4 7.1 1.2 9.5.8 1.2 1.7 2.5 2.9 2.4 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.6-.9.9-1.5 1.3-2.6-2.5-1-2.9-2.9-2.5-3.9-1.4-.1 0 0 0 0Z" />
      <path d="M14.4 5.8c.6-.8 1-1.9.9-3-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

export function AppPreview() {
  return (
    <section className="bg-navy-primary px-10 py-[120px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.8fr_1.2fr] items-center gap-16">
        <div className="mx-auto w-full max-w-[360px]">
          <Image
            src="/images/phone%20colour.png"
            alt="Hand holding a phone with the EMA app"
            width={518}
            height={741}
            className="w-full rounded-2xl"
            priority
          />
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ EMA App ]
          </span>
          <h2 className="font-serif text-[40px] font-normal leading-[1.2] text-bg-warm">
            Your accounts,{" "}
            <em className="italic text-blue-accent">in your pocket</em>.
          </h2>
          <p className="max-w-[440px] font-body text-base leading-[1.7] text-bg-warm/70">
            We&rsquo;re building an app that brings the same clarity we
            bring to every client relationship straight to your phone.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-3 rounded-xl bg-navy-secondary px-5 py-3 text-bg-warm">
              <AppleIcon />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px]">Download on the</span>
                <span className="-mt-0.5 text-lg font-semibold">App Store</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-3 rounded-xl bg-navy-secondary px-5 py-3 text-bg-warm">
              <PlayIcon />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px]">Get it on</span>
                <span className="-mt-0.5 text-lg font-semibold">Google Play</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

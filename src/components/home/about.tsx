import Link from "next/link";

export function About() {
  return (
    <section id="about" className="bg-bg-grey px-10 pb-[120px] pt-[100px]">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-ink-soft">
          [ From Complexity to Clarity ]
        </span>
        <h2 className="text-[38px] font-bold leading-[1.25] text-ink">
          <span className="font-normal text-navy-secondary">
            Straightforward accounting,
          </span>{" "}
          built for growth and long-term impact.
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-ink-soft">
          For over four decades we&rsquo;ve paired old-fashioned diligence
          with modern financial thinking, so you always know exactly where
          you stand and where you&rsquo;re headed.
        </p>
        <Link
          href="#contact"
          className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-navy-primary hover:text-blue-accent"
        >
          Get in touch
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

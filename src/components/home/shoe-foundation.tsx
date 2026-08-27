import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

const LOGO_PATH = path.join(process.cwd(), "public/images/shoe-foundation-logo.png");
const hasLogo = fs.existsSync(LOGO_PATH);

export function ShoeFoundation() {
  return (
    <section
      className="px-10 py-24 text-center"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #243b78 0%, #1c3252 55%, #101f2e 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[480px] flex-col items-center gap-5 rounded-[32px] border-2 border-blue-accent bg-bg-grey p-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)]">
        {hasLogo ? (
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl">
            <Image
              src="/images/shoe-foundation-logo.png"
              alt="The Shoe Foundation"
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>
        ) : (
          <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-dashed border-ink/30 text-center text-[10px] leading-tight text-ink-soft">
            Logo goes here
          </div>
        )}
        <h2 className="font-serif text-[28px] font-normal text-ink">
          Proud Partner of The Shoe Foundation
        </h2>
        <p className="text-sm leading-[1.6] text-ink-soft">
          This foundation helps fund learners fully through five years of
          secondary education.
        </p>
        <Link
          href="#contact"
          className="mt-2 rounded-full bg-navy-primary px-7 py-3 text-sm font-semibold text-bg-warm transition-opacity hover:opacity-90"
        >
          Find Out More
        </Link>
      </div>
    </section>
  );
}

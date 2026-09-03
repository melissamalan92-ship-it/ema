import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

const LOGO_PATH = path.join(process.cwd(), "public/images/shoe-foundation-logo.png");
const hasLogo = fs.existsSync(LOGO_PATH);

export function ShoeFoundation() {
  return (
    <section className="bg-navy-primary px-10 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-5 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Social Responsibility ]
          </span>
          <h2 className="max-w-[440px] text-[32px] font-semibold leading-[1.25] text-bg-warm">
            Proudly supporting{" "}
            <em className="font-serif font-normal italic text-blue-accent">
              The Shoe Foundation
            </em>
            .
          </h2>
          <p className="max-w-[440px] text-base leading-[1.7] text-bg-warm/70">
            Through The Shoe Foundation, we&rsquo;re committed to making a
            positive impact in the communities where we live and work. The
            foundation helps fund learners fully through five years of
            secondary education.
          </p>
          <Link
            href="#contact"
            className="mt-1 text-sm font-semibold text-bg-warm underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Learn more about The Shoe Foundation
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6">
          {hasLogo ? (
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-bg-warm">
              <Image
                src="/images/shoe-foundation-logo.png"
                alt="The Shoe Foundation"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          ) : (
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl border border-dashed border-bg-warm/40 text-center text-[10px] leading-tight text-bg-warm/60">
              Logo goes here
            </div>
          )}
          <div className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center rounded-2xl border border-dashed border-bg-warm/30 bg-bg-warm/5 text-center text-xs leading-relaxed text-bg-warm/50">
            Shoe Foundation photo
            <br />
            placeholder
          </div>
        </div>
      </div>
    </section>
  );
}

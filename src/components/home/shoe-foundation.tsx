import Image from "next/image";
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
          "linear-gradient(120deg, #101f2e 0%, #243b78 55%, #4375cd 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[480px] flex-col items-center gap-5 rounded-[28px] border border-[rgba(253,255,248,0.18)] bg-[rgba(253,255,248,0.1)] p-10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
        {hasLogo ? (
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl">
            <Image
              src="/images/shoe-foundation-logo.png"
              alt="The Shoe Foundation"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-dashed border-[rgba(253,255,248,0.3)] text-center text-[10px] leading-tight text-bg-warm/50">
            Logo goes here
          </div>
        )}
        <h2 className="font-serif text-[28px] font-normal text-bg-warm">
          Proud Partner of The Shoe Foundation
        </h2>
        <p className="text-sm leading-[1.6] text-[#cddaf0]">
          This foundation helps fund learners fully through five years of
          secondary education.
        </p>
      </div>
    </section>
  );
}

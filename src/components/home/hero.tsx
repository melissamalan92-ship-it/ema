import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-6 px-10 py-24 text-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 900px 500px at 50% 0%, #33507e 0%, #16385f 45%, #042144 100%)",
      }}
    >
      <Logo size="lg" variant="light" />
      <h1 className="max-w-[620px] text-[44px] font-semibold leading-[1.2] text-bg-warm">
        Accounting services{" "}
        <em className="font-serif font-normal italic text-blue-accent">
          designed
        </em>{" "}
        for{" "}
        <em className="font-serif font-normal italic text-blue-accent">
          growth
        </em>
        .
      </h1>
      <p className="text-base text-bg-warm/70">
        Trusted expertise since 1983
      </p>
    </section>
  );
}

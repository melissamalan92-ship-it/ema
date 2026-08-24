import { SERVICES } from "./services";

export function Hero() {
  return (
    <section id="services" className="relative">
      <div className="relative h-[620px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/ema%20video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(16,31,46,0.8) 0%, rgba(16,31,46,0.4) 55%, rgba(16,31,46,0.18) 100%), linear-gradient(180deg, rgba(16,31,46,0.1) 0%, rgba(16,31,46,0.7) 100%)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-[1180px] flex-col justify-center px-10">
          <h1 className="max-w-[620px] text-[52px] font-semibold leading-[1.2] text-bg-warm">
            Accounting services{" "}
            <em className="font-serif font-normal italic text-[#8fb0ff]">
              designed
            </em>{" "}
            for{" "}
            <em className="font-serif font-normal italic text-[#8fb0ff]">
              growth
            </em>
            .
          </h1>
          <p className="mt-5 max-w-[480px] text-lg leading-[1.7] text-[#dbe1ee]">
            Working since 1983 with over 2,500 companies.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-6 grid max-w-[1180px] grid-cols-6 px-10">
        {SERVICES.map((service, i) => (
          <span
            key={service.title}
            className="flex h-12 items-center justify-center rounded-md bg-bg-warm text-xs font-semibold tracking-[0.08em] text-navy-primary shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-6">
        {SERVICES.map((service, i) => (
          <div
            key={service.title}
            className={`flex min-h-[260px] flex-col justify-end gap-3 bg-bg-mint px-6 pb-10 pt-24 ${
              i > 0 ? "border-l border-[#b9cdcb]" : ""
            }`}
          >
            <h3 className="font-serif text-xl font-normal text-ink">
              {service.title}
            </h3>
            <p className="text-sm leading-[1.6] text-ink-soft">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

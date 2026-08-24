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

      <div className="mx-auto grid max-w-[1180px] grid-cols-6 gap-5 px-10 py-16">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 rounded-2xl border border-[rgba(253,255,248,0.16)] bg-[rgba(253,255,248,0.07)] p-5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(16,31,46,0.55)] text-bg-warm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {service.icon}
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-bg-warm">
                {service.title}
              </h3>
            </div>
            <p className="text-xs leading-[1.6] text-[#cddaf0]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

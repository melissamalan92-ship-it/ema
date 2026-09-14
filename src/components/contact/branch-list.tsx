import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";
import { LOCATIONS } from "@/components/home/locations-data";

export function BranchList() {
  return (
    <section className="bg-bg-warm px-10 py-20">
      <Container>
        <Reveal className="mx-auto mb-14 flex max-w-[560px] flex-col items-center gap-3 text-center">
          <span className="font-body text-[16px] text-ink-soft/70">
            Where to find us
          </span>
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Our <em className="italic text-blue-accent">branches</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-6">
          {LOCATIONS.map((location, i) => {
            return (
              <Reveal
                key={location.id}
                delay={(i % 3) * 80}
                className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_48px_-28px_rgba(16,38,62,0.4)]"
              >
                <div className="relative h-[160px] w-full overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.shortName}
                    fill
                    sizes="380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-start gap-3 p-6">
                  <h3 className="font-serif text-[20px] font-normal leading-[1.2] text-ink">
                    {location.name}
                  </h3>

                  <div className="flex flex-col gap-2">
                    <ContactRow icon={Phone}>
                      <a href={`tel:${location.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
                        {location.phone}
                      </a>
                    </ContactRow>
                    <ContactRow icon={Mail}>
                      <a href={`mailto:${location.email}`} className="hover:text-ink">
                        {location.email}
                      </a>
                    </ContactRow>
                    <ContactRow icon={MapPin}>{location.address}</ContactRow>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: typeof Phone;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5 font-body text-[13px] leading-[1.5] text-ink-soft">
      <Icon className="mt-[1px] size-3.5 shrink-0 text-blue-accent" strokeWidth={1.75} />
      <span>{children}</span>
    </div>
  );
}

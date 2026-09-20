import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";
import { LOCATIONS } from "@/components/home/locations-data";
import {
  BranchContactProvider,
  BranchEmailButton,
} from "./branch-contact-modal";

export function BranchList() {
  return (
    <BranchContactProvider>
      <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-10 lg:py-20">
        <Container>
          <Reveal className="mx-auto mb-14 flex max-w-[560px] flex-col items-center gap-3 text-center">
            <span className="font-body text-[14px] lg:text-[16px] text-ink-soft/70">
              Where to find us
            </span>
            <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
              Our <em className="italic text-blue-accent">branches</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="font-serif text-[17px] lg:text-[20px] font-normal leading-[1.2] text-ink">
                      {location.name}
                    </h3>

                    <div className="flex flex-col gap-2">
                      <ContactRow icon={Phone}>
                        <a
                          href={`tel:${location.phone.replace(/\s+/g, "")}`}
                          className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/50"
                        >
                          {location.phone}
                        </a>
                      </ContactRow>
                      <ContactRow icon={Mail}>
                        <BranchEmailButton branch={location} />
                      </ContactRow>
                      <ContactRow icon={MapPin}>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${location.name}, ${location.address}`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/50"
                        >
                          {location.address}
                        </a>
                      </ContactRow>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </BranchContactProvider>
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
      <Icon
        className="mt-[1px] size-3.5 shrink-0 text-blue-accent"
        strokeWidth={1.75}
      />
      <span>{children}</span>
    </div>
  );
}

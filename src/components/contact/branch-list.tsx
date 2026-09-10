import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { LOCATIONS } from "@/components/home/locations-data";

const CONTACT_DETAILS: Record<
  string,
  { phone: string; email: string; address: string }
> = {
  joburg: {
    phone: "011 958 9100",
    email: "admin@ema.co.za",
    address:
      "Unit 31 (Block B) Willowbrook Office Park, Cnr Hendrik Potgieter & Van der Kloof Street, Ruimsig, Roodepoort",
  },
  capetown: {
    phone: "021 422 5117",
    email: "infoct@ema.co.za",
    address: "Unit 2A, 2nd Floor, 83 Castle St, Cape Town City Centre, 8000",
  },
  cptpeninsula: {
    phone: "021 492 5677",
    email: "infopen@ema.co.za",
    address: "Unit 2C, Castle Gate, 83 Castle Street, Cape Town, 8000",
  },
  paarl: {
    phone: "021 872 2525",
    email: "infopaarl@ema.co.za",
    address: "Workshop 17, Tabak Street, Paarl",
  },
  tygervalley: {
    phone: "021 914 0053",
    email: "infotv@ema.co.za",
    address: "First Floor, Willowbridge Centre, Carl Cronje Dr, Bellville Park, 7530",
  },
  loxton: {
    phone: "021 422 5117",
    email: "info@ema.co.za",
    address: "83 Castle St, Cape Town City Centre, Cape Town, 8000",
  },
};

export function BranchList() {
  return (
    <section className="bg-bg-warm px-10 py-20">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mx-auto mb-14 flex max-w-[560px] flex-col items-center gap-3 text-center">
          <span className="font-body text-[16px] text-ink-soft/70">
            Where to find us
          </span>
          <h2 className="font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Our <em className="italic text-blue-accent">branches</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-6">
          {LOCATIONS.map((location, i) => {
            const details = CONTACT_DETAILS[location.id];
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
                      <a href={`tel:${details.phone}`} className="hover:text-ink">
                        {details.phone}
                      </a>
                    </ContactRow>
                    <ContactRow icon={Mail}>
                      <a href={`mailto:${details.email}`} className="hover:text-ink">
                        {details.email}
                      </a>
                    </ContactRow>
                    <ContactRow icon={MapPin}>{details.address}</ContactRow>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
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

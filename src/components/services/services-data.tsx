import {
  LedgerMotif,
  StatuteMotif,
  TaxMotif,
  GrowthMotif,
  PayrollMotif,
  SoftwareMotif,
} from "./service-motifs";

export type Tone = "navy" | "white";

export type Service = {
  title: string;
  description: string;
  detail: string;
  items: string[];
  motif: () => React.ReactElement;
  span: "wide" | "full" | "half" | "single";
  tone: Tone;
};

export const SERVICES: Service[] = [
  {
    title: "Accounting Services",
    description:
      "Accurate, up-to-date financial records that give you a clear picture of where your business stands — and the confidence to make decisions from it.",
    detail:
      "We handle the full cycle, from day-to-day bookkeeping through to annual financial statements prepared to the standard your bank, your funders and SARS expect. Monthly management accounts turn those numbers into something you can act on, and your records stay audit-ready year-round.",
    items: [
      "Accounting records & bookkeeping",
      "Annual financial statements",
      "Management accounts",
    ],
    motif: LedgerMotif,
    span: "wide",
    tone: "navy",
  },
  {
    title: "Corporate Secretarial & Legal",
    description:
      "Keep your company's statutory affairs in order, from registration through every change your business goes through.",
    detail:
      "We register companies and trusts, maintain your statutory records, and file the annual returns and resolutions that keep you in good standing. When directors change or founding documents need amending, we prepare and lodge the paperwork.",
    items: [
      "Company registrations",
      "Statutory compliance",
      "Company changes & amendments",
      "Trust formation",
    ],
    motif: StatuteMotif,
    span: "half",
    tone: "white",
  },
  {
    title: "Accounting Software",
    description:
      "Modern tools set up around how your business actually works, with support that doesn't disappear after go-live.",
    detail:
      "We implement and configure Xero, Sage, Pastel and QuickBooks around your operation rather than a generic template, and handle migration so nothing is lost. Your team is trained on the workflows they'll actually use, with support afterwards.",
    items: [
      "Software implementation & setup",
      "Team training",
      "Ongoing user support",
    ],
    motif: SoftwareMotif,
    span: "single",
    tone: "white",
  },
  {
    title: "Business & Investment Consulting",
    description:
      "Strategic advice grounded in your numbers — for the decisions that shape where your business goes next.",
    detail:
      "We build business plans and cash flow forecasts that hold up to scrutiny from lenders and investors, and prepare valuations for sales, buy-ins and restructures. You get a clear-eyed read on what the numbers actually support.",
    items: [
      "Business plans",
      "Valuations",
      "Investor support & strategic advice",
    ],
    motif: GrowthMotif,
    span: "single",
    tone: "white",
  },
  {
    title: "Payroll Administration",
    description:
      "We take payroll off your plate — accurate, compliant, and on time, every time, for teams of any size.",
    detail:
      "Salaries are processed to your pay cycle, with payslips distributed and PAYE, UIF and SDL calculated correctly. We handle EMP201 submissions, reconciliations and IRP5 certificates, and keep pace with changing tax tables.",
    items: [
      "Salary & wage processing",
      "Payslips",
      "EMP201 submissions & compliance",
    ],
    motif: PayrollMotif,
    span: "single",
    tone: "navy",
  },
  {
    title: "Taxation Services",
    description:
      "Proactive tax planning that keeps you compliant with SARS while making sure you're not paying more than you should.",
    detail:
      "Provisional and annual returns, VAT submissions and employees' tax are prepared, reconciled and filed on schedule. We handle SARS correspondence and verifications on your behalf, and plan through the year rather than at the deadline.",
    items: ["Income tax", "VAT", "Company tax & tax planning"],
    motif: TaxMotif,
    span: "full",
    tone: "white",
  },
];

export const TONES: Record<
  Tone,
  {
    card: string;
    index: string;
    title: string;
    titleHover: string;
    lead: string;
    detail: string;
    chip: string;
    panel: string;
    motif: string;
    glow: boolean;
  }
> = {
  navy: {
    card: "bg-navy-primary hover:shadow-[0_34px_70px_-34px_rgba(36,63,74,0.75)]",
    index: "text-cream/45",
    title: "text-cream",
    titleHover: "",
    lead: "text-cream/90",
    detail: "text-cream/60",
    chip: "border-cream/20 bg-cream/5 text-cream/80",
    panel: "border-cream/10 bg-cream/[0.04]",
    motif: "text-cream/35",
    glow: true,
  },
  white: {
    card: "border border-ink/10 bg-white hover:border-blue-accent/45 hover:shadow-[0_28px_60px_-32px_rgba(36,63,74,0.5)]",
    index: "text-ink-soft/60",
    title: "text-ink",
    titleHover: "transition-colors duration-300 group-hover:text-blue-accent",
    lead: "text-ink",
    detail: "text-ink-soft",
    chip: "border-ink/10 bg-bg-warm text-ink-soft",
    panel: "border-ink/10 bg-bg-warm",
    motif: "text-ink/30",
    glow: false,
  },
};

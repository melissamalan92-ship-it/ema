import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Libre_Baskerville, Alike, Caveat } from "next/font/google";
import "./globals.css";
import { HeadingGlow } from "@/components/ui/heading-glow";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const alike = Alike({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Netlify sets URL to the site's primary address at build time, so this
// follows the domain switch without a code change.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "https://ema.co.za";

const description =
  "Accounting, tax and advisory services for South African businesses. A registered SAIPA practice, trusted since 1983.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EMA | E Malan and Associates",
    template: "%s | EMA",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "E Malan & Associates",
    locale: "en_ZA",
    url: siteUrl,
    title: "EMA | E Malan and Associates",
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E Malan & Associates — accounting services designed for growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMA | E Malan and Associates",
    description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${libreBaskerville.variable} ${alike.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <HeadingGlow />
      </body>
    </html>
  );
}

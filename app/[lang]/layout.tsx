import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  hasLocale,
  htmlLangTags,
  localePath,
  locales,
  openGraphLocales,
} from "@/i18n/config";
import LocaleProvider from "../components/LocaleProvider";
import { getDictionary } from "./dictionaries";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const wishShore = localFont({
  src: "../fonts/WishShore.woff",
  variable: "--font-wish-shore",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004F6C",
};

/** Sinh sẵn cả hai phiên bản ngôn ngữ khi build */
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL("https://avariswater.com"),
    title: {
      default: dict.meta.title,
      template: "%s | AVARIS Premium Purity",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "AVARIS Water" }],
    creator: "AVARIS Water",
    publisher: "AVARIS Water",
    robots: { index: true, follow: true },
    alternates: {
      canonical: localePath(lang),
      languages: {
        vi: localePath("vi"),
        en: localePath("en"),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: openGraphLocales[lang],
      url: localePath(lang),
      siteName: "AVARIS Premium Purity",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: dict.meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.twitterTitle,
      description: dict.meta.twitterDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={htmlLangTags[lang]}
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${jakarta.variable} ${wishShore.variable} antialiased`}
    >
      <body className="min-h-screen">
        <LocaleProvider locale={lang} dict={dict}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

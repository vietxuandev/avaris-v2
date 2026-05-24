import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  src: "./fonts/WishShore.woff",
  variable: "--font-wish-shore",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004F6C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://avariswater.com"),
  title: {
    default: "AVARIS | Premium Purity - Nước Tinh Khiết Đóng Chai Thủy Tinh",
    template: "%s | AVARIS Premium Purity",
  },
  description:
    "AVARIS - Nhà phân phối nước tinh khiết đóng chai thủy tinh 450ml cao cấp. Công nghệ lọc RO từ Mỹ, đạt chuẩn ISO 22000:2018 & HACCP. Giải pháp bền vững cho khách sạn, resort, doanh nghiệp.",
  keywords: [
    "nước tinh khiết",
    "chai thủy tinh",
    "AVARIS",
    "nước đóng chai cao cấp",
    "khách sạn",
    "resort",
    "nhà hàng",
    "RO",
    "HACCP",
    "ISO 22000",
    "bền vững",
    "thủy tinh tái sử dụng",
  ],
  authors: [{ name: "AVARIS Water" }],
  creator: "AVARIS Water",
  publisher: "AVARIS Water",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://avariswater.com",
    siteName: "AVARIS Premium Purity",
    title: "AVARIS | Premium Purity - Nước Tinh Khiết Đóng Chai Thủy Tinh Cao Cấp",
    description:
      "AVARIS - Nhà phân phối nước tinh khiết đóng chai thủy tinh 450ml cao cấp. Công nghệ lọc RO từ Mỹ, đạt chuẩn ISO 22000:2018 & HACCP.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AVARIS Premium Purity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVARIS | Premium Purity - Nước Tinh Khiết Đóng Chai Thủy Tinh",
    description:
      "Nước tinh khiết đóng chai thủy tinh 450ml cao cấp. Công nghệ lọc RO từ Mỹ, đạt chuẩn ISO 22000:2018 & HACCP.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${jakarta.variable} ${wishShore.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

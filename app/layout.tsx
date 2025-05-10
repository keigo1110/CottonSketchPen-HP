import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CottonSketchPen - プラスチックわた革命",
  description:
    "CottonSketchPenは、プラスチックボトルをその場でわた状の素材に変えるハンディ型のデバイスです。持ち運び可能で、環境に優しい循環型のものづくりを実現するとともに、必要なときに必要なものを作り出す未来を実現します。",
  keywords: ["CottonSketchPen", "プラスチック", "わた", "ものづくり", "再利用", "サステナブル", "GUGEN", "東京大学制作展", "4ZIGEN"],
  authors: [{ name: "4ZIGEN", url: "https://4zigenhp.vercel.app/" }],
  creator: "4ZIGEN",
  publisher: "4ZIGEN",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CottonSketchPen - プラスチックわた革命",
    description: "プラスチックをわた状に変化させ、ものづくりを可能にする革新的なデバイス。東大制作展、GUGENで受賞。",
    images: ["/cottonsketchgan.jpg"],
    url: "https://cottonsketchpen.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CottonSketchPen - プラスチックわた革命",
    description: "プラスチックをわた状に変化させ、ものづくりを可能にする革新的なデバイス。東大制作展、GUGENで受賞。",
    images: ["/cottonsketchgan.jpg"],
    creator: "@4ZIGENGSii",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  alternates: {
    canonical: "https://cottonsketchpen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

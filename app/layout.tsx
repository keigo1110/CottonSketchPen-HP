import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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

// 構造化データ
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://cotton-sketch-pen-hp.vercel.app/#website",
      "url": "https://cotton-sketch-pen-hp.vercel.app/",
      "name": "CottonSketchPen",
      "description": "プラスチックをわた状に変化させ、ものづくりを可能にする革新的なデバイス",
      "publisher": {
        "@id": "https://cotton-sketch-pen-hp.vercel.app/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://cotton-sketch-pen-hp.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "ja-JP"
    },
    {
      "@type": "Organization",
      "@id": "https://cotton-sketch-pen-hp.vercel.app/#organization",
      "name": "4ZIGEN",
      "url": "https://4zigenhp.vercel.app/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "ja-JP",
        "@id": "https://cotton-sketch-pen-hp.vercel.app/#/schema/logo/image/",
        "url": "https://cotton-sketch-pen-hp.vercel.app/cottonsketchgan.jpg",
        "contentUrl": "https://cotton-sketch-pen-hp.vercel.app/cottonsketchgan.jpg",
        "width": 1920,
        "height": 1080,
        "caption": "CottonSketchPen"
      },
      "sameAs": [
        "https://x.com/4ZIGENGSii",
        "https://www.youtube.com/@4ZIGENGSii",
        "https://4zigenhp.vercel.app/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://cotton-sketch-pen-hp.vercel.app/#webpage",
      "url": "https://cotton-sketch-pen-hp.vercel.app/",
      "name": "CottonSketchPen - プラスチックわた革命",
      "isPartOf": {
        "@id": "https://cotton-sketch-pen-hp.vercel.app/#website"
      },
      "about": {
        "@id": "https://cotton-sketch-pen-hp.vercel.app/#organization"
      },
      "description": "プラスチックをわた状に変化させ、ものづくりを可能にする革新的なデバイス。東大制作展、GUGENで受賞。",
      "breadcrumb": {
        "@id": "https://cotton-sketch-pen-hp.vercel.app/#breadcrumb"
      },
      "inLanguage": "ja-JP",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://cotton-sketch-pen-hp.vercel.app/"]
        }
      ]
    },
    {
      "@type": "Product",
      "name": "CottonSketchPen",
      "description": "プラスチックボトルをその場でわた状の素材に変えるハンディ型のデバイス。持ち運び可能で、環境に優しい循環型のものづくりを実現します。",
      "brand": {
        "@type": "Brand",
        "name": "4ZIGEN"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "4ZIGEN"
      },
      "image": [
        "https://cotton-sketch-pen-hp.vercel.app/cottonsketchgan.jpg",
        "https://cotton-sketch-pen-hp.vercel.app/machine.JPG"
      ],
      "award": [
        "GUGEN2024 大賞",
        "GUGEN2024 ほしいね賞",
        "東京大学制作展2024出展",
        "S×PARK展示"
      ],
      "category": "革新的ものづくりデバイス",
      "keywords": "CottonSketchPen, プラスチック再利用, わたあめ機構, 循環型デザイン, サステナブル, プラスチックリサイクル, ハンディ型デバイス",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "100"
      }
    },
    {
      "@type": "CreativeWork",
      "name": "CottonSketchPen プロジェクト",
      "creator": {
        "@type": "Organization",
        "name": "4ZIGEN"
      },
      "award": [
        {
          "@type": "Award",
          "name": "GUGEN2024 大賞",
          "dateAwarded": "2024-12-21"
        },
        {
          "@type": "Award",
          "name": "GUGEN2024 ほしいね賞",
          "dateAwarded": "2024-12-21"
        }
      ],
      "about": [
        {
          "@type": "Thing",
          "name": "プラスチックリサイクル"
        },
        {
          "@type": "Thing",
          "name": "サステナブルデザイン"
        },
        {
          "@type": "Thing",
          "name": "ものづくり革新"
        },
        {
          "@type": "Thing",
          "name": "CottonSketchPen"
        },
        {
          "@type": "Thing",
          "name": "わたあめ機構"
        },
        {
          "@type": "Thing",
          "name": "ハンディ型デバイス"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cotton-sketch-pen-hp.vercel.app'),
  title: {
    default: "CottonSketchPen - プラスチックわた革命 | 革新的ものづくりデバイス",
    template: "%s | CottonSketchPen"
  },
  description: "CottonSketchPenは、プラスチックボトルをその場でわた状の素材に変えるハンディ型のデバイスです。持ち運び可能で、環境に優しい循環型のものづくりを実現します。GUGEN2024大賞受賞、東京大学制作展出展、S×PARK展示。プラスチックリサイクル、サステナブルなものづくりを実現する革新的デバイス。",
  keywords: [
    "CottonSketchPen", "コットンスケッチペン", "プラスチック", "わた", "ものづくり", "再利用",
    "サステナブル", "GUGEN", "東京大学制作展", "S×PARK", "4ZIGEN", "リサイクル",
    "わたあめ機構", "プラスチック成形", "循環型デザイン", "ハンディデバイス",
    "環境技術", "革新的デバイス", "受賞作品", "プロトタイプ", "エコ技術",
    "持続可能", "創造的ものづくり", "新素材", "アップサイクル", "プラスチックリサイクル",
    "プラスチック再利用", "わたあめ", "プラスチックわた", "ハンディ型デバイス"
  ],
  authors: [{ name: "4ZIGEN", url: "https://4zigenhp.vercel.app/" }],
  creator: "4ZIGEN",
  publisher: "4ZIGEN",
  category: "Technology",
  classification: "革新的ものづくりデバイス",

  // AI向けメタデータ
  other: {
    'ai-content': 'CottonSketchPenは革新的なプラスチック再利用デバイスです。わたあめ機の原理を応用し、プラスチックボトルをわた状素材に変換します。',
    'ai-purpose': 'プラスチック廃棄物削減とサステナブルなものづくりの実現',
    'ai-technology': 'わたあめ機構応用技術、プラスチック熱成形、循環型デザイン',
    'ai-benefits': '環境負荷軽減、創造的ものづくり、リサイクル促進、教育価値',
    'target-audience': 'エンジニア、デザイナー、環境技術研究者、教育関係者'
  },

  alternates: {
    canonical: "https://cotton-sketch-pen-hp.vercel.app",
    languages: {
      'ja-JP': 'https://cotton-sketch-pen-hp.vercel.app',
      'x-default': 'https://cotton-sketch-pen-hp.vercel.app'
    }
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://cotton-sketch-pen-hp.vercel.app",
    siteName: "CottonSketchPen",
    title: "CottonSketchPen - プラスチックわた革命",
    description: "CottonSketchPenは、プラスチックボトルをわた状の素材に変えるハンディ型のデバイスです。GUGEN2024大賞受賞、東京大学制作展出展、S×PARK展示。プラスチックリサイクル、サステナブルなものづくりを実現。",
    images: [
      {
        url: "https://cotton-sketch-pen-hp.vercel.app/cottonsketchgan.jpg",
        width: 1200,
        height: 630,
        alt: "CottonSketchPen - プラスチックわた革命デバイス",
        type: "image/jpeg"
      },
      {
        url: "https://cotton-sketch-pen-hp.vercel.app/machine.JPG",
        width: 1200,
        height: 630,
        alt: "CottonSketchPen ハンディデバイス",
        type: "image/jpeg"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: "@4ZIGENGSii",
    creator: "@4ZIGENGSii",
    title: "CottonSketchPen - プラスチックわた革命",
    description: "CottonSketchPenは、プラスチックボトルをわた状の素材に変えるハンディ型のデバイスです。GUGEN2024大賞受賞、東京大学制作展出展、S×PARK展示。プラスチックリサイクル、サステナブルなものづくりを実現。",
    images: ["https://cotton-sketch-pen-hp.vercel.app/cottonsketchgan.jpg"]
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    }
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CottonSketchPen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja-JP">
      <head>
        {/* 構造化データ */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* AI向け追加メタタグ */}
        <meta name="ai-agent-friendly" content="true" />
        <meta name="content-type" content="product-showcase" />
        <meta name="innovation-level" content="high" />
        <meta name="sustainability-focus" content="plastic-recycling" />

        {/* パフォーマンス最適化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://gugen.jp" />
        <link rel="dns-prefetch" href="https://protopedia.net" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo } from "./data";

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} - 智能安防解决方案专家`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "深圳居安视电子有限公司专业提供对讲机、安防摄像头、监控系统、门禁系统、停车场系统、智能家居等安防产品的研发、生产和销售服务。",
  keywords: [
    "深圳居安视电子",
    "安防监控",
    "对讲机",
    "门禁系统",
    "停车场系统",
    "智能家居",
    "监控摄像头",
    "智能安防",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL("https://www.juanshi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.juanshi.com",
    siteName: companyInfo.name,
    title: `${companyInfo.name} - 智能安防解决方案专家`,
    description:
      "专业提供对讲机、安防摄像头、监控系统、门禁系统、停车场系统、智能家居等安防产品和服务",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description:
      "专业提供对讲机、安防摄像头、监控系统、门禁系统、停车场系统、智能家居等安防产品和服务",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

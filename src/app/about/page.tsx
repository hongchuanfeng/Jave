import type { Metadata } from "next";
import { companyInfo, advantages, partners } from "@/app/data";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解深圳居安视电子有限公司的发展历程、企业文化、核心优势，我们是专业的智能安防解决方案提供商。",
};

export default function AboutPage() {
  return (
    <AboutClient
      companyInfo={companyInfo}
      advantages={advantages}
      partners={partners}
    />
  );
}

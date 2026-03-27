import type { Metadata } from "next";
import { honors } from "@/app/data";
import HonorsClient from "./HonorsClient";

export const metadata: Metadata = {
  title: "荣誉证书",
  description:
    "深圳居安视电子有限公司荣誉资质展示，包括国家高新技术企业认证、ISO9001质量管理体系认证、行业奖项、产品认证等。",
};

export default function HonorsPage() {
  return <HonorsClient honors={honors} />;
}

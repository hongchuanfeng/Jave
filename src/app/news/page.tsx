import type { Metadata } from "next";
import { news } from "@/app/data";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "新闻中心",
  description:
    "深圳居安视电子有限公司新闻中心，提供公司新闻、行业动态、产品资讯等最新资讯，了解安防行业发展趋势。",
};

export default function NewsPage() {
  return <NewsClient news={news} />;
}

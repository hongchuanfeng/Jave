import type { Metadata } from "next";
import { products } from "@/app/data";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "产品中心",
  description:
    "深圳居安视电子有限公司产品中心，提供对讲机、安防摄像头、监控系统、门禁系统、停车场系统、智能家居等全系列安防产品。",
};

export default function ProductsPage() {
  return <ProductsClient products={products} />;
}

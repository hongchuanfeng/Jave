import type { Metadata } from "next";
import { companyInfo } from "@/app/data";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系深圳居安视电子有限公司，获取安防产品咨询、解决方案定制、技术支持等服务。电话：联系人洪传华。",
};

export default function ContactPage() {
  return <ContactClient companyInfo={companyInfo} />;
}

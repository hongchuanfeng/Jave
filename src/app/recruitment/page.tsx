import type { Metadata } from "next";
import { recruitment, recruitmentBenefits } from "@/app/data";
import RecruitmentClient from "./RecruitmentClient";

export const metadata: Metadata = {
  title: "人才招聘",
  description:
    "深圳居安视电子有限公司人才招聘，加入我们，一起创造智能安防未来。提供嵌入式工程师、前端开发、产品经理、销售经理等岗位。",
};

export default function RecruitmentPage() {
  return <RecruitmentClient recruitment={recruitment} benefits={recruitmentBenefits} />;
}

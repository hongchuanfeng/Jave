import Link from "next/link";

interface CompanyInfo {
  name: string;
  shortName: string;
  email: string;
  address: string;
  contact: string;
  icp: string;
}

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

interface AboutClientProps {
  companyInfo: CompanyInfo;
  advantages: Advantage[];
  partners: string[];
}

export default function AboutClient({
  companyInfo,
  advantages,
  partners,
}: AboutClientProps) {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            关于我们
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            专业、可靠、创新，为您的安全保驾护航
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                公司简介
              </h2>
              <div className="space-y-4 text-gray-dark leading-relaxed">
                <p>
                  <strong>{companyInfo.name}</strong>成立于2010年，是一家专业从事安防产品研发、生产、销售和服务的高新技术企业。
                </p>
                <p>
                  公司总部位于深圳，拥有自主研发中心和生产基地，拥有一支由资深工程师和专业技术人员组成的研发团队。经过十余年的发展，公司已成为国内领先的智能安防解决方案提供商之一。
                </p>
                <p>
                  我们秉承"安全、智能、可靠"的理念，致力于为客户提供高品质的安防产品和全方位的解决方案。产品涵盖对讲机、安防摄像头、监控系统、门禁系统、停车场系统、智能家居等多个领域，广泛应用于住宅小区、写字楼、商场、学校、医院、工厂等各类场所。
                </p>
                <p>
                  公司建立了完善的销售和服务网络，产品销往全国各地，并出口到东南亚、中东、欧洲等多个国家和地区。我们始终坚持"客户至上、质量第一"的原则，为客户提供优质的产品和服务。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-primary mb-2">
                      15+
                    </div>
                    <div className="text-gray-dark text-sm">年行业经验</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-primary mb-2">
                      50+
                    </div>
                    <div className="text-gray-dark text-sm">研发人员</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-primary mb-2">
                      1000+
                    </div>
                    <div className="text-gray-dark text-sm">客户案例</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-primary mb-2">
                      20+
                    </div>
                    <div className="text-gray-dark text-sm">出口国家</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">发展历程</h2>
            <p className="section-subtitle">十余年发展，铸就行业领先</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2010</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    公司成立
                  </h3>
                  <p className="text-gray-dark">
                    深圳居安视电子有限公司正式成立，开始涉足安防领域
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2015</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    获得国家高新技术企业认证
                  </h3>
                  <p className="text-gray-dark">
                    研发实力获得国家认可，成为国家高新技术企业
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2018</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    智能家居产品线发布
                  </h3>
                  <p className="text-gray-dark">
                    推出智能家居全系列产品，进军智能家居市场
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2020</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    AI智能摄像头系列发布
                  </h3>
                  <p className="text-gray-dark">
                    推出基于AI技术的智能摄像头系列产品
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2026</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    荣获"年度最佳安防解决方案提供商"
                  </h3>
                  <p className="text-gray-dark">
                    在深圳国际安防展览会上获得行业最高荣誉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">核心优势</h2>
            <p className="section-subtitle">
              专业、可靠、创新，为您的安全保驾护航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-light transition-colors"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {advantage.icon === "shield" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    )}
                    {advantage.icon === "lightbulb" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    )}
                    {advantage.icon === "headset" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    )}
                    {advantage.icon === "settings" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-dark text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">合作伙伴</h2>
            <p className="section-subtitle">与行业领军企业携手共进</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-gray-dark">
                    {partner.charAt(0)}
                  </span>
                </div>
                <div className="font-medium text-secondary">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            期待与您合作
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            无论您有任何安防需求，我们都将竭诚为您提供专业的咨询和解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            联系我们
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

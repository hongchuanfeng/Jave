"use client";

import { useState } from "react";
import Link from "next/link";

interface Honor {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  icon: string;
}

interface HonorsClientProps {
  honors: Honor[];
}

const categories = ["全部", "企业资质", "行业荣誉", "技术创新", "产品认证", "协会认证"];

export default function HonorsClient({ honors }: HonorsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedHonor, setSelectedHonor] = useState<Honor | null>(null);

  const filteredHonors =
    selectedCategory === "全部"
      ? honors
      : honors.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            荣誉证书
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            十余年深耕安防行业，荣获多项国家级、行业级权威认证
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {selectedHonor ? (
                <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
                  <button
                    onClick={() => setSelectedHonor(null)}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark mb-6 transition-colors"
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    返回列表
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">{selectedHonor.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {selectedHonor.category}
                        </span>
                        <span className="text-gray-dark text-sm">
                          {selectedHonor.year}年
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-secondary">
                        {selectedHonor.title}
                      </h2>
                    </div>
                  </div>

                  <div className="prose max-w-none text-gray-dark leading-relaxed">
                    <p className="text-lg">{selectedHonor.description}</p>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-bold text-secondary mb-4">相关证书</h3>
                    <div className="bg-gray-light rounded-xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 text-gray-300 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-gray-500">证书图片展示区域</p>
                        <p className="text-sm text-gray-400 mt-2">
                          {selectedHonor.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      了解更多
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-white"
                            : "bg-white text-secondary hover:bg-gray-light"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredHonors.map((honor) => (
                      <div
                        key={honor.id}
                        onClick={() => setSelectedHonor(honor)}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                            <span className="text-3xl">{honor.icon}</span>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {honor.category}
                              </span>
                              <span className="text-gray-dark text-xs">
                                {honor.year}年
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                              {honor.title}
                            </h3>
                            <p className="text-gray-dark text-sm line-clamp-2">
                              {honor.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                          <span>查看详情</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  资质分类
                </h3>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "hover:bg-gray-light text-secondary"
                      }`}
                    >
                      <span>{category}</span>
                      <span className={`text-sm ${
                        selectedCategory === category ? "text-white/80" : "text-gray-dark"
                      }`}>
                        {honors.filter((h) => h.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {honors.length}
                      </div>
                      <div className="text-gray-dark text-sm">项荣誉资质</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">品质保障</h2>
            <p className="section-subtitle">
              以荣誉为动力，持续为客户提供优质产品和服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">质量可靠</h3>
              <p className="text-gray-dark text-sm">
                ISO9001认证，品质管理体系完善
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">技术创新</h3>
              <p className="text-gray-dark text-sm">
                国家高新技术企业，研发实力雄厚
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">国际认证</h3>
              <p className="text-gray-dark text-sm">
                CE/FCC/RoHS认证，产品远销全球
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">行业认可</h3>
              <p className="text-gray-dark text-sm">
                中国安防协会会员，多项行业荣誉
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            荣誉见证实力
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            每一项荣誉都是对我们过去努力的肯定，也是对未来发展的激励
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

"use client";

import { useState } from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

interface NewsClientProps {
  news: NewsItem[];
}

const categories = ["全部", "公司新闻", "产品动态", "行业新闻", "公司动态"];

export default function NewsClient({ news }: NewsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews =
    selectedCategory === "全部"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            新闻中心
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            了解公司动态，把握行业趋势
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          {selectedNews ? (
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 animate-fade-in">
              <button
                onClick={() => setSelectedNews(null)}
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

              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {selectedNews.category}
                </span>
                <span className="text-gray-dark text-sm">
                  {selectedNews.date}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-secondary mb-6">
                {selectedNews.title}
              </h1>

              <div className="prose max-w-none text-gray-dark leading-relaxed">
                <p className="text-lg mb-6">{selectedNews.excerpt}</p>
                <p>{selectedNews.content}</p>
              </div>

              <div className="border-t mt-8 pt-8">
                <h3 className="font-bold text-secondary mb-4">相关推荐</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {news
                    .filter(
                      (item) =>
                        item.id !== selectedNews.id &&
                        item.category === selectedNews.category
                    )
                    .slice(0, 2)
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedNews(item)}
                        className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors"
                      >
                        <h4 className="font-medium text-secondary line-clamp-2 hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-sm text-gray-dark mt-1 block">
                          {item.date}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  联系我们了解更多
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item, index) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
                    onClick={() => setSelectedNews(item)}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                      <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform">
                        {index % 3 === 0 ? "📰" : index % 3 === 1 ? "🚀" : "📊"}
                      </span>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-primary text-sm rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-dark mb-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-dark text-sm line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                        <span>阅读更多</span>
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
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

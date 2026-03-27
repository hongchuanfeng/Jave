"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            产品中心
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            六大核心产品线，为您提供全方位的智能安防解决方案
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-lg text-secondary mb-4">
                  产品分类
                </h3>
                <nav className="space-y-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                        selectedProduct?.id === product.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-light text-secondary"
                      }`}
                    >
                      <span className="text-xl">{product.icon}</span>
                      <span className="font-medium">{product.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedProduct ? (
                <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">{selectedProduct.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-secondary mb-2">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-gray-dark leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">
                      产品特点
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProduct.features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-gray-light rounded-lg p-4 text-center"
                        >
                          <span className="text-primary font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">
                      产品详情
                    </h3>
                    <div className="prose max-w-none text-gray-dark">
                      <p>
                        {selectedProduct.name}
                        是我司自主研发的新一代智能安防产品，采用先进的物联网技术和人工智能算法，具有高稳定性、高可靠性、易安装等特点。产品广泛应用于住宅小区、写字楼、商场、学校、医院、工厂等场所。
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>✓ 采用工业级元器件，品质可靠</li>
                        <li>✓ 支持远程管理和移动端控制</li>
                        <li>✓ 完善的售后技术支持</li>
                        <li>✓ 可根据客户需求定制开发</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      咨询详情
                    </Link>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      返回概览
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-3xl">{product.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-dark text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-light text-xs text-gray-dark rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            需要定制解决方案？
          </h3>
          <p className="text-gray-dark mb-6 max-w-2xl mx-auto">
            我们提供专业的定制服务，根据您的实际需求，为您打造最适合的安防解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            立即咨询
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

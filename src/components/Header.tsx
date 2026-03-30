"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { companyInfo } from "@/app/data";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品中心" },
  { href: "/news", label: "新闻中心" },
  { href: "/honors", label: "荣誉证书" },
  { href: "/recruitment", label: "人才招聘" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-secondary" : "text-white";
  const hoverColor = isScrolled ? "hover:text-primary" : "hover:text-accent";
  const subTextColor = isScrolled ? "text-gray-dark" : "text-white/70";
  const mobileTextColor = isScrolled ? "text-secondary" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 outline-none ${
        isScrolled
          ? "bg-white border-b border-gray-200 py-2"
          : "bg-primary py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isScrolled ? "bg-primary" : "bg-white"
            }`}>
              <span className={`font-bold text-xl ${isScrolled ? "text-white" : "text-primary"}`}>J</span>
            </div>
            <div>
              <span className={`text-lg font-bold block leading-tight ${textColor}`}>
                {companyInfo.shortName}
              </span>
              <span className={`text-xs hidden sm:block ${subTextColor}`}>
                智能安防解决方案专家
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${textColor} ${hoverColor} font-medium transition-colors relative group`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isScrolled ? "bg-primary" : "bg-white"
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${companyInfo.email}`}
              className={`flex items-center gap-2 ${isScrolled ? "text-primary" : "text-white"}`}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">在线咨询</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="菜单"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-4 pb-4 border-t ${isScrolled ? "border-gray-200" : "border-white/30"} pt-4 animate-fade-in`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 ${mobileTextColor} ${isScrolled ? "hover:text-primary" : "hover:text-white/80"} font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

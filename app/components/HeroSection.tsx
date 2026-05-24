"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/images/hero.jpg";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y, scale: 1.05 }}>
          <Image
            src={heroBg}
            alt="Chai thủy tinh AVARIS 450ml - Nước tinh khiết cao cấp"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-navy/40 via-white/10 to-cream/95" />
      </div>

      <div className="absolute top-1/4 left-[8%] w-6 h-6 rounded-full bg-sky/40 animate-float opacity-70" />
      <div
        className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-teal/20 animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-white/30 backdrop-blur-xs animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-start-6 lg:col-span-7 space-y-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-teal/10 border border-teal/30 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-teal animate-ping" />
              <span className="text-xs font-bold text-navy uppercase tracking-widest">
                The Premium Choice of Purity
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              <span className="font-avaris text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                AVARIS
              </span>{" "}
              <br />
              <span className="text-teal font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl block mt-2">
                Đẳng cấp của sự tinh khiết
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl font-medium leading-relaxed">
              Dây chuyền hiện đại ứng dụng công nghệ lọc RO tiên tiến từ Mỹ.
              Giải pháp nước uống đóng chai thủy tinh sang trọng, bảo vệ sức
              khỏe và nâng tầm hình ảnh bền vững của doanh nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#san-pham"
                className="flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-navy hover:bg-teal rounded-full shadow-xl hover:shadow-teal/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Khám Phá Sản Phẩm
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sóng chuyển tiếp đáy — CodePen parallax wave */}
      <svg
        className="absolute bottom-0 left-0 w-full z-10 h-[15vh] min-h-25 max-h-60 -mb-1.75"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z"
          />
        </defs>
        <g className="parallaxonde">
          <use href="#wave-path" x="48" y="0" fill="rgba(4,108,131,0.4)" />
          <use href="#wave-path" x="48" y="3" fill="rgba(0,79,108,0.25)" />
          <use href="#wave-path" x="48" y="5" fill="rgba(4,108,131,0.1)" />
          <use href="#wave-path" x="48" y="7" fill="var(--color-cream)" />
        </g>
      </svg>
    </header>
  );
}

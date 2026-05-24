"use client";

import { BookOpen } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function StorytellingSection() {
  return (
    <section
      id="cau-chuyen"
      className="py-24 bg-cream relative overflow-hidden"
    >
      <div className="absolute -right-20 top-1/4 w-48 h-48 rounded-full bg-sand/20 blur-2xl" />
      <div className="absolute -left-20 bottom-1/4 w-48 h-48 rounded-full bg-sky/30 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 text-teal">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Avaris Storytelling
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-snug">
            Hành trình trở về với <br />
            <span className="text-teal italic font-medium">
              Sự Tinh Khiết Nguyên Bản
            </span>
          </h2>

          <div className="relative bg-white/60 backdrop-blur-md border border-sand p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 hover:border-teal/30">
            <span className="absolute -top-6 left-10 font-serif text-7xl text-teal/20">
              &ldquo;
            </span>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-serif italic">
              Giữa những dòng chảy đầu tiên nuôi dưỡng nền văn minh cổ đại, có
              một nơi mang tên Avaris - nơi nước không chỉ là sự sống, mà còn là
              ký ức của Trái Đất.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              AVARIS không chỉ là một chai nước. AVARIS là hành trình trở về với
              sự tinh khiết chưa bị chạm tới, trở về với thiên nhiên trong lành
              và trở về với trách nhiệm bảo vệ hành tinh xanh.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              Được đóng trong chất liệu thủy tinh có thể tái sinh vô hạn, mỗi
              chai nước AVARIS không chỉ giữ trọn hương vị tự nhiên, mát lành
              của nước tinh khiết, mà còn giữ trọn một lời hứa:{" "}
              <span className="text-navy font-bold">Uống Sạch – Sống Xanh</span>{" "}
              – Không để lại gì ngoài sự nguyên bản.
            </p>
            <span className="absolute -bottom-16 right-10 font-serif text-7xl text-teal/20">
              &rdquo;
            </span>
          </div>

          <div className="pt-4">
            <p className="font-avaris text-xl text-navy">AVARIS</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
              Nước uống thủy tinh cao cấp
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

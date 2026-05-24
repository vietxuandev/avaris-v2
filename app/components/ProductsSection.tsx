"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import FadeInSection from "./FadeInSection";
import imgSuite from "../assets/images/DSC03951.jpg";
import imgLounge from "../assets/images/DSC04063.jpg";
import imgDining from "../assets/images/DSC04120.jpg";
import imgMeeting from "../assets/images/DSC04247.jpg";

export default function ProductsSection() {
  return (
    <section id="san-pham" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeInSection className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square ml-auto w-4/5 cursor-pointer group">
                  <Image
                    src={imgSuite}
                    alt="Chai thủy tinh AVARIS 450ml trong phòng khách sạn cao cấp"
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square cursor-pointer group">
                  <Image
                    src={imgLounge}
                    alt="Chai thủy tinh AVARIS 450ml tại khu vực lounge sang trọng"
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square cursor-pointer group">
                  <Image
                    src={imgDining}
                    alt="Chai thủy tinh AVARIS 450ml trên bàn tiệc nhà hàng cao cấp"
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square mr-auto w-4/5 cursor-pointer group">
                  <Image
                    src={imgMeeting}
                    alt="Chai thủy tinh AVARIS 450ml trong phòng họp doanh nghiệp"
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection
            className="lg:col-span-5 space-y-6 text-left"
            delay={0.15}
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                Danh mục sản phẩm chính
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Nước Tinh Khiết <br />
                Đóng Chai Thủy Tinh
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-teal">450ml</span>
              <span className="h-8 w-px bg-gray-300" />
              <span className="text-sm text-gray-500 leading-tight">
                Dung tích tiêu chuẩn <br />
                cho khách sạn & nhà hàng
              </span>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Chai thủy tinh{" "}
              <span className="text-navy font-bold font-avaris text-lg sm:text-xl">AVARIS</span>{" "}
              450ml được thiết kế tinh tế, sang trọng, phù hợp với không gian
              cao cấp. Chất liệu thủy tinh tái sử dụng giữ trọn hương vị tinh
              khiết, mát lành của nước, đồng thời thể hiện cam kết phát triển
              bền vững của doanh nghiệp.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Chất liệu", value: "Thủy tinh cao cấp" },
                { label: "Đóng két", value: "24 chai / két" },
                { label: "Công nghệ lọc", value: "RO tiên tiến từ Mỹ" },
                { label: "Chứng nhận", value: "ISO 22000 & HACCP" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wide">
                      {item.label}
                    </span>
                    <span className="font-bold text-navy text-xs sm:text-sm">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

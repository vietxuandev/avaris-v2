"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Heart, Gem, Truck } from "lucide-react";

const cards = [
  {
    icon: ShieldAlert,
    title: "An Toàn Tuyệt Đối",
    desc: "Sản phẩm hoàn toàn không chứa BPA, phthalates hay bất kỳ chất độc hại từ hạt nhựa, bảo đảm tối đa sức khỏe cho khách hàng của bạn.",
    delay: 0,
  },
  {
    icon: Heart,
    title: "Trách Nhiệm Xã Hội",
    desc: "Thể hiện mạnh mẽ cam kết xanh của doanh nghiệp, góp phần cắt giảm rác thải nhựa một lần ra đại dương và môi trường sống.",
    delay: 0.1,
  },
  {
    icon: Gem,
    title: "Trải Nghiệm Cao Cấp",
    desc: "Kiểu dáng chai thủy tinh châu Âu tinh tế, giữ lạnh cực lâu, nâng tầm trải nghiệm cho khách sạn, nhà hàng sang trọng.",
    delay: 0.2,
  },
  {
    icon: Truck,
    title: "Giải Pháp Toàn Diện",
    desc: "Chương trình quản lý và thu hồi vỏ chai thông minh, giúp doanh nghiệp tiết kiệm chi phí, dịch vụ hỗ trợ chu đáo 24/7.",
    delay: 0.3,
  },
];

export default function WhyChooseSection() {
  return (
    <section id="vi-sao-chon" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-teal uppercase tracking-widest block">
              Why Us
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy">
              Đồng hành cùng doanh nghiệp xây dựng hình ảnh bền vững
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-600 text-sm sm:text-base">
              AVARIS không chỉ cung cấp giải pháp nước sạch cao cấp mà còn là
              đối tác chiến lược giúp doanh nghiệp truyền tải thông điệp bảo vệ
              môi trường đến khách hàng.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="bg-cream p-8 rounded-3xl border border-transparent hover:border-teal/30 hover:shadow-xl transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy text-lg">{card.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import iconCleaning from "../assets/images/cleaning.png";
import iconCollection from "../assets/images/collection.png";
import iconConsumption from "../assets/images/consumption.png";
import iconFilling from "../assets/images/filling.png";
import iconFiltration from "../assets/images/filtration.png";
import iconPackaging from "../assets/images/packaging.png";

interface JourneyStep {
  title: string;
  desc: string;
  accent: string;
}

const stepsData: Record<number, JourneyStep> = {
  1: {
    title: "Quy trình súc rửa 5 bước & khử trùng bằng tia UV",
    desc: "Mỗi chai thủy tinh AVARIS sau khi thu hồi hoặc trước khi đi vào hệ thống chiết rót đều phải trải qua quy trình vệ sinh khép kín 5 bước nghiêm ngặt, kết hợp khử trùng bằng công nghệ tia cực tím UV tiên tiến. Điều này giúp loại bỏ hoàn toàn vi khuẩn và các tạp chất siêu nhỏ, mang lại sự tinh sạch tuyệt hảo.",
    accent:
      "Bảo vệ sức khỏe tuyệt đối - Đạt chứng nhận HACCP an toàn vệ sinh thực phẩm quốc tế.",
  },
  2: {
    title: "Công nghệ lọc nước tiên tiến từ Mỹ",
    desc: "Hệ thống lọc ứng dụng công nghệ thẩm thấu ngược RO tiên tiến bậc nhất từ Hoa Kỳ. Giúp loại bỏ hoàn toàn kim loại nặng, hóa chất tồn dư, muối hòa tan, chỉ giữ lại những phân tử nước tinh sạch nhất, mang lại hương vị mềm mại, ngọt nhẹ tự nhiên.",
    accent:
      "Kiểm soát chất lượng đạt tiêu chuẩn khắt khe bậc nhất từ FDA Hoa Kỳ.",
  },
  3: {
    title: "Chiết rót tự động trong môi trường vô trùng",
    desc: "Nước tinh khiết sau khi lọc được chuyển thẳng đến hệ thống chiết rót tự động khép kín hoàn toàn. Không gian chiết rót đạt cấp độ sạch tiêu chuẩn quốc tế, loại bỏ mọi nguy cơ tái nhiễm khuẩn từ không khí bên ngoài.",
    accent:
      "Công nghệ tự động hóa nâng cao tính đồng bộ và chất lượng tối ưu cho từng giọt nước.",
  },
  4: {
    title: "Giao hàng đúng hạn đến đối tác",
    desc: "Chúng tôi thấu hiểu thời gian là vàng ngọc đối với hoạt động của doanh nghiệp bạn. AVARIS xây dựng đội ngũ vận tải tận tâm cùng quy trình logistics hiện đại, cam kết giao nước đúng giờ, đúng hẹn trực tiếp đến khách sạn, nhà hàng, resort hoặc văn phòng của bạn.",
    accent: "Dịch vụ cung ứng ổn định và hỗ trợ nhanh chóng khẩn cấp 24/7.",
  },
  5: {
    title: "Trải nghiệm nước uống cao cấp",
    desc: "Lần đầu tiên, việc uống nước không chỉ để giải khát mà trở thành một nghệ thuật thưởng thức đích thực. Thiết kế chai thủy tinh thanh nhã, giữ lạnh tối ưu mang lại sự mát lành sảng khoái tuyệt hảo cho từng cuộc hẹn hay bữa tiệc cao cấp.",
    accent:
      "Chiếc chai thanh lịch tô điểm thêm cho sự sang trọng nơi bàn tiệc hay phòng nghỉ khách sạn.",
  },
  6: {
    title: "Thu hồi để tái sử dụng bền vững",
    desc: "Sau khi sử dụng xong, vỏ chai thủy tinh sẽ được chúng tôi thu gom thông qua hệ thống quản lý chuyên nghiệp để rửa sạch và tái sản xuất tuần hoàn. Không một mảnh thủy tinh hay vỏ nhựa nào bị bỏ lại ngoài tự nhiên.",
    accent:
      "Thể hiện mạnh mẽ cam kết xanh bền vững và giảm thiểu tối đa áp lực ô nhiễm rác thải nhựa.",
  },
};

const stepIcons: Record<number, { src: string; alt: string }> = {
  1: { src: iconCleaning.src, alt: "Khử trùng & Súc rửa UV" },
  2: { src: iconFiltration.src, alt: "Công nghệ lọc RO tiên tiến" },
  3: { src: iconFilling.src, alt: "Chiết rót vô trùng" },
  4: { src: iconPackaging.src, alt: "Giao hàng đúng hẹn" },
  5: { src: iconConsumption.src, alt: "Trải nghiệm cao cấp" },
  6: { src: iconCollection.src, alt: "Thu hồi & Tái sử dụng" },
};

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const displayedStep = hoveredStep ?? activeStep;

  const handleStepClick = (num: number) => setActiveStep(num);

  return (
    <section
      id="hanh-trinh"
      className="py-24 bg-cream relative overflow-hidden"
    >
      <div className="absolute -left-20 top-10 w-64 h-64 rounded-full bg-sky/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 w-64 h-64 rounded-full bg-sand/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal uppercase">
            VÒNG LẶP XANH HOÀN HẢO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-2">
            Hành Trình Bền Vững Của Chai Thủy Tinh AVARIS
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Chúng tôi kiểm soát nghiêm ngặt từ khâu khử trùng vỏ chai đầu tiên
            cho đến khi nước sạch tinh khiết tới tay khách hàng, và cuối cùng
            thu hồi vỏ chai để tái sinh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-112.5 aspect-square rounded-full flex items-center justify-center p-12">
              <div className="text-center bg-white p-8 rounded-full shadow-xl border border-sand/50 z-10 max-w-50 aspect-square flex flex-col items-center justify-center">
                <Compass className="w-10 h-10 text-teal" />
                <span className="font-avaris text-xl text-navy mt-2">
                  AVARIS
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">
                  SỨ MỆNH XANH
                </span>
              </div>

              {[1, 2, 3, 4, 5, 6].map((num) => {
                const angle = ((num - 1) * 360) / 6;
                const radius = 160;
                const radian = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(radian) * radius);
                const y = Math.round(Math.sin(radian) * radius);
                const scale =
                  activeStep === num ? 1.25 : hoveredStep === num ? 1.1 : 1;

                return (
                  <button
                    key={num}
                    onClick={() => handleStepClick(num)}
                    onMouseEnter={() => setHoveredStep(num)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`absolute w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 z-20 ${
                      activeStep === num
                        ? "bg-navy shadow-xl ring-4 ring-sky"
                        : hoveredStep === num
                          ? "bg-teal shadow-lg ring-2 ring-teal/30"
                          : "bg-white border-2 border-teal/20 shadow-md"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    }}
                  >
                    <Image
                      src={stepIcons[num].src}
                      alt={stepIcons[num].alt}
                      width={48}
                      height={48}
                      className={`object-contain transition-all ${
                        activeStep === num || hoveredStep === num
                          ? "brightness-0 invert"
                          : ""
                      }`}
                    />
                  </button>
                );
              })}

              <svg
                className="absolute w-full h-full pointer-events-none animate-spin-slow origin-center"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="#AEEBFC"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div
              className={`bg-linear-to-br from-cream to-white p-8 rounded-3xl shadow-xl border relative h-105 sm:h-95 flex flex-col justify-between transition-all duration-300 ${
                hoveredStep !== null
                  ? "border-teal/30 shadow-2xl"
                  : "border-navy/5"
              }`}
            >
              <div className="absolute top-4 right-4 text-7xl font-black text-sky/20">{`0${displayedStep}`}</div>

              {hoveredStep !== null && hoveredStep !== activeStep && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-teal bg-sky/30 px-2 py-1 rounded-full uppercase tracking-wide animate-pulse-slow">
                  Xem trước
                </div>
              )}

              <div className="space-y-4 overflow-y-auto flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayedStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-teal/10 mb-2">
                      <Image
                        src={stepIcons[displayedStep].src}
                        alt={stepIcons[displayedStep].alt}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      {stepsData[displayedStep].title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {stepsData[displayedStep].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center space-x-2 pt-6 border-t border-sand/50 mt-6">
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStepClick(s)}
                    onMouseEnter={() => setHoveredStep(s)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeStep === s
                        ? "w-10 bg-navy"
                        : hoveredStep === s
                          ? "w-6 bg-teal/60"
                          : "w-2.5 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <button
                onClick={() =>
                  setActiveStep(activeStep === 1 ? 6 : activeStep - 1)
                }
                className="px-4 py-2 text-xs font-bold text-teal hover:text-navy flex items-center gap-1 transition-colors"
              >
                ← Bước Trước
              </button>
              <span className="text-xs text-gray-400 font-semibold">
                Bấm số trên vòng tròn để chuyển nhanh
              </span>
              <button
                onClick={() =>
                  setActiveStep(activeStep === 6 ? 1 : activeStep + 1)
                }
                className="px-4 py-2 text-xs font-bold text-teal hover:text-navy flex items-center gap-1 transition-colors"
              >
                Bước Tiếp →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

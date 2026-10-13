"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Recycle,
  ShieldCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import iconCleaning from "../assets/images/cleaning.png";
import iconCollection from "../assets/images/collection.png";
import iconConsumption from "../assets/images/consumption.png";
import iconFilling from "../assets/images/filling.png";
import iconFiltration from "../assets/images/filtration.png";
import iconPackaging from "../assets/images/packaging.png";
import { useDictionary } from "./LocaleProvider";

// Ảnh icon cố định theo thứ tự bước 1..6 — phần chữ lấy từ từ điển
const stepIconSources = [
  iconCleaning,
  iconFiltration,
  iconFilling,
  iconPackaging,
  iconConsumption,
  iconCollection,
];

const totalSteps = 6;

// Vòng lặp khép kín: qua khỏi bước 6 quay về bước 1 và ngược lại
const wrapStep = (num: number) => ((num - 1 + totalSteps) % totalSteps) + 1;

// Hướng hiển thị tooltip của từng bước, toả ra ngoài vòng tròn
const tooltipPlacement: Record<number, string> = {
  1: "left-full top-1/2 -translate-y-1/2 ml-3",
  2: "top-full left-1/2 -translate-x-1/2 mt-3",
  3: "top-full left-1/2 -translate-x-1/2 mt-3",
  4: "right-full top-1/2 -translate-y-1/2 mr-3",
  5: "bottom-full left-1/2 -translate-x-1/2 mb-3",
  6: "bottom-full left-1/2 -translate-x-1/2 mb-3",
};

export default function JourneySection() {
  const dict = useDictionary();
  const steps = dict.journey.steps;
  const [selectedStep, setSelectedStep] = useState(1);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isModalOpen = openStep !== null;

  const goToStep = useCallback((num: number) => {
    const step = wrapStep(num);
    setSelectedStep(step);
    setOpenStep(step);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Đảm bảo thuộc tính muted được thiết lập trước khi trình duyệt quyết định
    // cho phép tự động phát, tránh bị chặn autoplay sau khi hydrate.
    video.muted = true;
    void video.play().catch(() => {});
  }, []);

  // Khoá cuộn nền và đưa focus vào nút đóng mỗi khi modal mở
  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  // Điều hướng modal bằng bàn phím: Esc để đóng, mũi tên trái/phải để chuyển bước
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenStep(null);
      else if (event.key === "ArrowLeft") goToStep((openStep ?? 1) - 1);
      else if (event.key === "ArrowRight") goToStep((openStep ?? 1) + 1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, openStep, goToStep]);

  return (
    <section
      id="hanh-trinh"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute -left-20 top-10 w-64 h-64 rounded-full bg-sky/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 w-64 h-64 rounded-full bg-sand/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal uppercase">
            {dict.journey.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-2">
            {dict.journey.title}
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            {dict.journey.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-center order-2 lg:order-1">
            <div className="relative w-full max-w-112.5 aspect-square rounded-full flex items-center justify-center p-12">
              <div className="text-center bg-white p-8 rounded-full shadow-xl border border-sand/50 z-10 w-40 h-40 shrink-0 flex flex-col items-center justify-center">
                <Recycle className="w-10 h-10 text-teal" />
                <span className="font-avaris text-xl text-navy mt-2">
                  AVARIS
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">
                  {dict.journey.mission}
                </span>
              </div>

              {[1, 2, 3, 4, 5, 6].map((num) => {
                const angle = ((num - 1) * 360) / 6;
                const radius = 160;
                const radian = (angle * Math.PI) / 180;
                const x = Math.round(Math.cos(radian) * radius);
                const y = Math.round(Math.sin(radian) * radius);
                const scale =
                  selectedStep === num ? 1.25 : hoveredStep === num ? 1.1 : 1;
                const isHovered = hoveredStep === num;

                return (
                  <div
                    key={num}
                    onMouseEnter={() => setHoveredStep(num)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`absolute transition-transform duration-300 ${
                      isHovered
                        ? "z-40"
                        : selectedStep === num
                          ? "z-30"
                          : "z-20"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => goToStep(num)}
                      onFocus={() => setHoveredStep(num)}
                      onBlur={() => setHoveredStep(null)}
                      aria-haspopup="dialog"
                      aria-label={`${dict.journey.stepWord} ${num}: ${steps[num - 1].title} — ${dict.journey.stepAriaSuffix}`}
                      className={`w-20 h-20 rounded-full flex items-center justify-center cursor-pointer ${
                        selectedStep === num
                          ? "bg-navy shadow-xl ring-4 ring-sky"
                          : isHovered
                            ? "bg-teal shadow-lg ring-2 ring-teal/30"
                            : "bg-white border-2 border-teal/20 shadow-md"
                      }`}
                    >
                      <Image
                        src={stepIconSources[num - 1]}
                        alt={dict.journey.stepAlts[num - 1]}
                        width={48}
                        height={48}
                        className={`object-contain transition-all ${
                          selectedStep === num || isHovered
                            ? "brightness-0 invert"
                            : ""
                        }`}
                      />
                    </button>

                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        aria-hidden="true"
                        className={`pointer-events-none absolute z-10 w-max max-w-44 rounded-xl bg-navy px-3 py-2 text-center text-[11px] font-semibold leading-snug text-white shadow-xl ${tooltipPlacement[num]}`}
                      >
                        {steps[num - 1].title}
                      </motion.span>
                    )}
                  </div>
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

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-navy shadow-2xl ring-1 ring-navy/10">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                src="/videos/tvc.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={dict.journey.videoAria}
              >
                {dict.journey.videoFallback}
              </video>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-navy/70 to-transparent" />
              <span className="absolute bottom-4 left-5 text-[10px] font-extrabold tracking-widest text-white/80 uppercase">
                {dict.journey.videoCaption}
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openStep !== null && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <button
              type="button"
              aria-label={dict.journey.closeDetail}
              onClick={() => setOpenStep(null)}
              className="absolute inset-0 w-full h-full bg-navy/60 backdrop-blur-sm cursor-default"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="journey-modal-title"
              className="relative w-full max-w-2xl bg-linear-to-br from-cream to-white rounded-3xl shadow-2xl border border-sand/60 p-8 sm:p-10 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="absolute top-5 right-16 hidden sm:block text-6xl font-black text-sky/25 select-none pointer-events-none">{`0${openStep}`}</div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpenStep(null)}
                aria-label={dict.journey.close}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white border border-sand/70 shadow-md flex items-center justify-center text-navy hover:bg-teal hover:text-white hover:border-teal transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={openStep}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4 mb-5 pr-16 sm:pr-36">
                    <div className="shrink-0 p-3 rounded-2xl bg-teal/10">
                      <Image
                        src={stepIconSources[openStep - 1]}
                        alt={dict.journey.stepAlts[openStep - 1]}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-teal uppercase">
                        {`${dict.journey.stepWord} 0${openStep}/0${totalSteps}`}
                      </span>
                      <h3
                        id="journey-modal-title"
                        className="font-serif text-2xl font-bold text-navy"
                      >
                        {steps[openStep - 1].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {steps[openStep - 1].desc}
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white border border-sand/70 p-4">
                    <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-navy">
                      {steps[openStep - 1].accent}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-sand/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(openStep - 1)}
                  aria-label={`${dict.journey.prev}: ${steps[wrapStep(openStep - 1) - 1].title}`}
                  className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-white px-4 py-2.5 text-xs font-bold text-teal shadow-sm hover:bg-teal hover:text-white hover:border-teal transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {dict.journey.prev}
                </button>

                <button
                  type="button"
                  onClick={() => goToStep(openStep + 1)}
                  aria-label={`${dict.journey.next}: ${steps[wrapStep(openStep + 1) - 1].title}`}
                  className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-white px-4 py-2.5 text-xs font-bold text-teal shadow-sm hover:bg-teal hover:text-white hover:border-teal transition-colors cursor-pointer"
                >
                  {dict.journey.next}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

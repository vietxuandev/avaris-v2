"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Heart, Gem, Truck } from "lucide-react";
import { useDictionary } from "./LocaleProvider";

/** Icon giữ cố định theo thứ tự, phần chữ lấy từ từ điển */
const cardIcons = [ShieldAlert, Heart, Gem, Truck];
const cardDelays = [0, 0.1, 0.2, 0.3];

export default function WhyChooseSection() {
  const dict = useDictionary();

  return (
    <section id="vi-sao-chon" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-teal uppercase tracking-widest block">
              {dict.whyChoose.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy">
              {dict.whyChoose.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-600 text-sm sm:text-base">
              {dict.whyChoose.paragraph}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.whyChoose.cards.map((card, index) => {
            const Icon = cardIcons[index];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: cardDelays[index] }}
                className="bg-cream p-8 rounded-3xl border border-transparent hover:border-teal/30 hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-navy text-lg">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import FadeInSection from "./FadeInSection";
import imgSuite from "../assets/images/DSC03951.jpg";
import imgLounge from "../assets/images/DSC04063.jpg";
import imgDining from "../assets/images/DSC04120.jpg";
import imgMeeting from "../assets/images/DSC04247.jpg";
import { useDictionary } from "./LocaleProvider";

export default function ProductsSection() {
  const dict = useDictionary();

  return (
    <section id="san-pham" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeInSection className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square ml-auto w-4/5 cursor-pointer group">
                  <Image
                    src={imgSuite}
                    alt={dict.products.imageAlts[0]}
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square cursor-pointer group">
                  <Image
                    src={imgLounge}
                    alt={dict.products.imageAlts[1]}
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
                    alt={dict.products.imageAlts[2]}
                    fill
                    sizes="50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 aspect-square mr-auto w-4/5 cursor-pointer group">
                  <Image
                    src={imgMeeting}
                    alt={dict.products.imageAlts[3]}
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
                {dict.products.eyebrow}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                {dict.products.titleLine1} <br />
                {dict.products.titleLine2}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-teal">
                {dict.products.volume}
              </span>
              <span className="h-8 w-px bg-gray-300" />
              <span className="text-sm text-gray-500 leading-tight">
                {dict.products.volumeLabel1} <br />
                {dict.products.volumeLabel2}
              </span>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {dict.products.paragraphBefore}{" "}
              <span className="text-navy font-bold font-avaris text-lg sm:text-xl">AVARIS</span>{" "}
              {dict.products.paragraphAfter}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {dict.products.specs.map((item) => (
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

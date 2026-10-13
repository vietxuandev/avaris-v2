"use client";

import { BookOpen } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useDictionary } from "./LocaleProvider";

export default function StorytellingSection() {
  const dict = useDictionary();

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
              {dict.storytelling.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-snug">
            {dict.storytelling.titleLine1} <br />
            <span className="text-teal italic font-medium">
              {dict.storytelling.titleLine2}
            </span>
          </h2>

          <div className="relative bg-white/60 backdrop-blur-md border border-sand p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 hover:border-teal/30">
            <span className="absolute -top-6 left-10 font-serif text-7xl text-teal/20">
              &ldquo;
            </span>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-serif italic">
              {dict.storytelling.quote}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              {dict.storytelling.story}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              {dict.storytelling.promiseBefore}{" "}
              <span className="text-navy font-bold">
                {dict.storytelling.promiseHighlight}
              </span>{" "}
              {dict.storytelling.promiseAfter}
            </p>
            <span className="absolute -bottom-16 right-10 font-serif text-7xl text-teal/20">
              &rdquo;
            </span>
          </div>

          <div className="pt-4">
            <p className="font-avaris text-xl text-navy">AVARIS</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
              {dict.storytelling.tagline}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

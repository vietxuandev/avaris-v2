import Image from "next/image";
import type { Dictionary } from "@/i18n/types";
import certISO from "../assets/images/iso.png";
import certHACCP from "../assets/images/hacc.png";

export default function CertificationsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-16 bg-cream border-y border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-md">
            <h4 className="font-serif text-2xl font-bold text-navy">
              {dict.certifications.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              {dict.certifications.paragraph}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="aspect-square w-28 bg-white p-4 rounded-2xl shadow-sm border border-sand hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Image
                src={certISO}
                alt={dict.certifications.imageAlts[0]}
                width={160}
                height={160}
                className="w-full h-full object-contain cert-teal-filter"
              />
            </div>

            <div className="aspect-square w-28 bg-white p-4 rounded-2xl shadow-sm border border-sand hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Image
                src={certHACCP}
                alt={dict.certifications.imageAlts[1]}
                width={160}
                height={160}
                className="w-full h-full object-contain cert-teal-filter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

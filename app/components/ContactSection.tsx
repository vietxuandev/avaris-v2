"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { CheckCircle, ChevronDown, Globe, Mail, Phone } from "lucide-react";
import { useDictionary } from "./LocaleProvider";

/** Icon và đường dẫn cố định, phần chữ lấy từ từ điển theo thứ tự */
const channelMeta = [
  { icon: Globe, href: "https://avariswater.com" },
  { icon: Mail, href: "mailto:info@avariswater.com" },
  { icon: Phone, href: "tel:0868869910" },
];

export default function ContactSection() {
  const dict = useDictionary();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productInterest: "glass_450ml",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      productInterest: "glass_450ml",
      notes: "",
    });
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal uppercase tracking-widest block">
                {dict.contact.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy">
                {dict.contact.title}
              </h2>
              <p className="text-gray-600 text-sm">{dict.contact.intro}</p>
            </div>

            <div className="space-y-6">
              {dict.contact.channels.map((channel, index) => {
                const { icon: Icon, href } = channelMeta[index];

                return (
                  <div key={channel.label} className="flex items-start gap-4">
                    <div className="p-3 bg-cream rounded-2xl text-teal">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">
                        {channel.label}
                      </span>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-bold text-navy hover:text-teal"
                      >
                        {channel.text}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 bg-cream p-8 sm:p-12 rounded-3xl border border-sand shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  {dict.contact.successTitle}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {dict.contact.successBody}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-navy text-white text-xs font-bold hover:bg-teal transition-colors"
                >
                  {dict.contact.successAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {dict.contact.fieldName}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {dict.contact.fieldCompany}
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {dict.contact.fieldEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {dict.contact.fieldPhone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {dict.contact.fieldProduct}
                  </label>
                  <div className="relative">
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-4 py-3 pr-11 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all cursor-pointer"
                    >
                      <option value="glass_450ml">
                        {dict.contact.productOption}
                      </option>
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {dict.contact.fieldNotes}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    placeholder={dict.contact.notesPlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-navy hover:bg-teal text-white font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {dict.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

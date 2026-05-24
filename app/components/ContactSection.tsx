"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { CheckCircle, Globe, Mail, Phone } from "lucide-react";

export default function ContactSection() {
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
                Connect With Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy">
                Yêu Cầu Hợp Tác & Nhận Báo Giá
              </h2>
              <p className="text-gray-600 text-sm">
                Hãy để lại lời nhắn, đội ngũ tư vấn viên của chúng tôi sẽ liên
                hệ tư vấn miễn phí chương trình chiết khấu và báo giá trong vòng
                24 giờ.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Globe,
                  label: "Website chính thức",
                  href: "https://avariswater.com",
                  text: "avariswater.com",
                },
                {
                  icon: Mail,
                  label: "Hộp thư điện tử",
                  href: "mailto:info@avariswater.com",
                  text: "info@avariswater.com",
                },
                {
                  icon: Phone,
                  label: "Hotline 24/7",
                  href: "tel:0868869910",
                  text: "0868.869.910",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-2xl text-teal">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-bold text-navy hover:text-teal"
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-cream p-8 sm:p-12 rounded-3xl border border-sand shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  Cảm ơn bạn đã gửi yêu cầu!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Cảm ơn bạn đã tin tưởng AVARIS. Chuyên viên tư vấn của chúng
                  tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-navy text-white text-xs font-bold hover:bg-teal transition-colors"
                >
                  Gửi yêu cầu mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Họ & Tên của bạn
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
                      Tên Công ty/Doanh nghiệp
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
                      Địa chỉ Email
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
                      Số Điện Thoại
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
                    Dòng sản phẩm bạn quan tâm
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                  >
                    <option value="glass_450ml">
                      Nước Tinh Khiết Đóng Chai Thủy Tinh 450ml
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Yêu cầu đặc biệt khác
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-teal/40 focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 transition-all"
                    placeholder="Số lượng chai dự kiến, yêu cầu đặc biệt về giao hàng, hoặc thời gian bàn giao..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-navy hover:bg-teal text-white font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gửi yêu cầu báo giá ngay
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

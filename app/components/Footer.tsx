export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-6">
            <span className="font-avaris text-3xl tracking-widest text-white">AVARIS</span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Thương hiệu nước uống đóng chai thủy tinh tuần hoàn bền vững vì môi trường.
            </p>
            <p className="text-xs text-gray-500">&copy; 2026 AVARIS WATER. Bảo lưu mọi quyền.</p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-sky uppercase tracking-wider">Danh Mục</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#cau-chuyen" className="hover:text-white transition-colors">Câu Chuyện</a></li>
              <li><a href="#san-pham" className="hover:text-white transition-colors">Sản Phẩm</a></li>
              <li><a href="#hanh-trinh" className="hover:text-white transition-colors">Vòng Lặp Xanh</a></li>
              <li><a href="#vi-sao-chon" className="hover:text-white transition-colors">Tại Sao Avaris</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-sky uppercase tracking-wider">Liên Hệ</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>Website: avariswater.com</li>
              <li>Email: info@avariswater.com</li>
              <li>Hotline: 0868.869.910</li>
              <li>Chính sách chiết khấu & Hợp tác B2B</li>
              <li>Đội ngũ CSKH chuyên nghiệp 24/7</li>
              <li className="flex items-center gap-2 mt-4 text-sky">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Đường dây nóng: 0868.869.910
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>Hệ thống sản xuất & lọc nước công nghệ Mỹ đạt chuẩn quốc tế.</div>
          <div>Dịch vụ khách hàng xuất sắc 24/7.</div>
        </div>
      </div>
    </footer>
  );
}

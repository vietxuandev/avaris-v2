import type { Dictionary } from "@/i18n/types";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-6">
            <span className="font-avaris text-3xl tracking-widest text-white">AVARIS</span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {dict.footer.tagline}
            </p>
            <p className="text-xs text-gray-500">{dict.footer.copyright}</p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-sky uppercase tracking-wider">
              {dict.footer.categoriesHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {dict.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-sky uppercase tracking-wider">
              {dict.footer.contactHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>{dict.footer.website}</li>
              <li>{dict.footer.email}</li>
              <li>{dict.footer.hotline}</li>
              <li>{dict.footer.discount}</li>
              <li>{dict.footer.support}</li>
              <li className="flex items-center gap-2 mt-4 text-sky">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                {dict.footer.hotlineCallout}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>{dict.footer.production}</div>
          <div>{dict.footer.service}</div>
        </div>
      </div>
    </footer>
  );
}

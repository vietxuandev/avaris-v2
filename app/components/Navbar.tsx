"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useDictionary } from "./LocaleProvider";

export default function Navbar() {
  const dict = useDictionary();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-sky to-teal z-100 transition-transform duration-100 origin-left w-full"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-md border-b border-gray-100 py-4"
            : "bg-white/70 backdrop-blur-md border-b border-white/20 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2 group">
              <span className="font-avaris font-bold text-2xl sm:text-3xl tracking-widest text-navy group-hover:text-teal transition-colors duration-300">
                AVARIS
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {dict.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-navy hover:text-teal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <LanguageSwitcher />

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy rounded-full hover:bg-teal transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {dict.nav.cta}
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={dict.nav.openMenu}
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 text-navy hover:bg-sand/20 rounded-full focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 mt-4">
            {dict.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-navy hover:bg-cream px-3 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 rounded-full bg-navy text-white font-bold"
              >
                {dict.nav.mobileCta}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

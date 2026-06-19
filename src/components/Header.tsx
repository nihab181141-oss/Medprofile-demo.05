/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone, CalendarRange } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  lang: "en" | "bn";
  setLang: (lang: "en" | "bn") => void;
  onOpenBooking: () => void;
}

export default function Header({ lang, setLang, onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll and set active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = [
        "home",
        "about",
        "services",
        "chambers",
        "reviews",
        "articles",
        "gallery",
        "faq",
        "contact"
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: { en: "Home", bn: "হোম" } },
    { id: "about", label: { en: "About", bn: "পরিচিতি" } },
    { id: "services", label: { en: "Services", bn: "সেবাসমূহ" } },
    { id: "chambers", label: { en: "Chambers", bn: "চেম্বার" } },
    { id: "reviews", label: { en: "Reviews", bn: "মতামত" } },
    { id: "articles", label: { en: "Health Hub", bn: "স্বাস্থ্য টিপস" } },
    { id: "gallery", label: { en: "Gallery", bn: "গ্যালারি" } },
    { id: "faq", label: { en: "FAQ", bn: "প্রশ্নোত্তর" } },
    { id: "contact", label: { en: "Contact", bn: "যোগাযোগ" } }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f4c5cd9] backdrop-blur-md shadow-lg border-b border-[#ffffff10] py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo/Name */}
            <div
              className="flex flex-col cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              <span className={`font-serif font-bold text-xl sm:text-2xl leading-tight ${
                isScrolled ? "text-white" : "text-[#0f4c5c]"
              }`}>
                {lang === "en" ? "Prof. Dr. Adnan" : "প্রফেসর ড. আদনান"}
              </span>
              <span className={`text-[10px] sm:text-xs tracking-wider uppercase font-semibold ${
                isScrolled ? "text-[#e5f1f4e0]" : "text-[#0f4c5cbd]"
              }`}>
                {lang === "en" ? "Cardiovascular Specialist" : "হৃদরোগ বিশেষজ্ঞ"}
              </span>
            </div>

            {/* Desktop Navigation Link Groups */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? isScrolled
                          ? "bg-white/10 text-white"
                          : "bg-[#0f4c5c15] text-[#0f4c5c] font-semibold"
                        : isScrolled
                        ? "text-white/80 hover:text-white hover:bg-white/5"
                        : "text-slate-600 hover:text-[#0f4c5c] hover:bg-[#0f4c5c08]"
                    }`}
                  >
                    {item.label[lang]}
                  </button>
                );
              })}
            </nav>

            {/* Controls Side */}
            <div className="flex items-center space-x-3">
              {/* Language Switcher */}
              <button
                id="btn-lang-toggle"
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all duration-200 ${
                  isScrolled
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-slate-200 text-slate-700 hover:border-[#0f4c5c] hover:bg-[#0f4c5c05]"
                }`}
                title={lang === "en" ? "Switch to Bengali" : "ইংরেজি সংস্করণে যান"}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === "en" ? "বাংলা" : "English"}</span>
              </button>

              {/* Booking Button (Desktop) */}
              <button
                id="btn-header-booking"
                onClick={onOpenBooking}
                className={`hidden md:flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer ${
                  isScrolled
                    ? "bg-[#fb8b24] text-white hover:bg-[#fb8b24d0]"
                    : "bg-[#0f4c5c] text-white hover:bg-[#0f4c5cd9]"
                }`}
              >
                <CalendarRange className="w-4 h-4" />
                <span>{lang === "en" ? "Book Appointment" : "সিরিয়াল বুক করুন"}</span>
              </button>

              {/* Hamburger Button (Mobile) */}
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg lg:hidden cursor-pointer ${
                  isScrolled ? "text-white hover:bg-white/10" : "text-[#0f4c5c] hover:bg-slate-100"
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Menu container */}
            <motion.div
              id="mobile-drawer-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-[#0f4c5c]">
                    {lang === "en" ? "Dr. Adnan" : "ড. আদনান"}
                  </span>
                  <span className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
                    {lang === "en" ? "Cardiac Specialist" : "হৃদরোগ বিশেষজ্ঞ"}
                  </span>
                </div>
                <button
                  id="btn-close-mobile-menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-[#0f4c5c] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-1 py-2">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-link-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-[#0f4c5c12] text-[#0f4c5c] font-semibold"
                          : "text-slate-600 hover:text-[#0f4c5c] hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label[lang]}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c5c]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="border-t pt-4 mt-auto space-y-3">
                {/* Language selection in mobile drawer */}
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs text-slate-600">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Language / ভাষা</span>
                  </span>
                  <div className="flex space-x-2">
                    <button
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        lang === "en" ? "bg-[#0f4c5c] text-white" : "hover:text-slate-800"
                      }`}
                      onClick={() => setLang("en")}
                    >
                      En
                    </button>
                    <button
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        lang === "bn" ? "bg-[#0f4c5c] text-white" : "hover:text-slate-800"
                      }`}
                      onClick={() => setLang("bn")}
                    >
                      বাং
                    </button>
                  </div>
                </div>

                <button
                  id="btn-mobile-drawer-booking"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-[#0f4c5c] text-white py-3 rounded-xl font-medium shadow-md hover:bg-[#0f4c5cd9] transition-colors cursor-pointer"
                >
                  <CalendarRange className="w-4 h-4" />
                  <span>{lang === "en" ? "Book Appointment" : "সিরিয়াল বুকিং"}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

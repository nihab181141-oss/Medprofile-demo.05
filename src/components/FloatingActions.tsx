/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall, CalendarDays, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingActionsProps {
  lang: "en" | "bn";
  phone: string;
  whatsappUrl: string;
  onOpenBooking: () => void;
}

export default function FloatingActions({ lang, phone, whatsappUrl, onOpenBooking }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Right-Side Floaters stack */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col space-y-3 items-end">
        
        {/* WhatsApp Chat Floating Bubble */}
        <a
          id="btn-whatsapp-bubble"
          href={whatsappUrl}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          className="w-12 sm:w-14 h-12 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer animate-bounce duration-1000"
          title={lang === "en" ? "Message on WhatsApp" : "হোয়াটসঅ্যাপ চ্যাট করুন"}
        >
          <svg className="w-6 sm:w-8 h-6 sm:h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-11.5c-.124-.205-.458-.328-.962-.582-.504-.253-2.38-1.176-2.748-1.309-.368-.133-.637-.199-.907.205-.27.405-1.043 1.309-1.278 1.579-.234.27-.47.301-.974.048-.504-.253-2.128-.785-4.054-2.502-1.5-.1.082-2.336.853-2.583.562-.18.234-.41-.124.03-.27.151-.234.205-.504.048s-.841-.301-1.156-.454-.604-.151-1.155-.152l-.426-.008L4.09 3.01c-.131-.274-.298-.562-.513-.562-.216 0-.485.023-.746.023-.26 0-.687.1-.962.405-.275.305-1.05 1.028-1.05 2.508 0 1.48 1.077 2.913 1.226 3.111.15.198 2.119 3.238 5.13 4.537.717.309 1.278.495 1.714.634.72.228 1.375.196 1.893.118s1.604-.657 1.83-1.29c.226-.634.226-1.18.158-1.29z" />
          </svg>
        </a>

        {/* Scroll To Top Action Toggled */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="btn-scroll-top"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={handleScrollToTop}
              className="w-10 sm:w-11 h-10 sm:h-11 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full flex items-center justify-center shadow-md select-none transition-transform active:scale-95 cursor-pointer"
              title={lang === "en" ? "Scroll to top" : "একেবারে উপরে যান"}
            >
              <ArrowUp className="w-5 h-5 text-[#0f4c5c]" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* Sticky Mobile CTA Bottom Sheet Bar (Polished executive standard!) */}
      <div className="md:hidden fixed bottom-1 left-1.5 right-1.5 z-40 bg-[#0f4c5ce6] backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-between shadow-2xl border border-[#ffffff1c] gap-3">
        
        {/* Doctor stamp detail */}
        <div className="text-left pl-2">
          <p className="font-serif font-bold text-white text-xs sm:text-sm">
            {lang === "en" ? "Prof. Dr. Adnan" : "ড. আদনান চৌধুরী"}
          </p>
          <span className="text-[9px] text-[#e5f1f4ba] uppercase tracking-wider block font-semibold leading-none">
            {lang === "en" ? "Cardiac Consultant" : "সিনিয়র হৃদরোগ বিশেষজ্ঞ"}
          </span>
        </div>

        {/* Dynamic CTAs */}
        <div className="flex space-x-1.5 items-center">
          <a
            id="btn-sticky-dial"
            href={`tel:${phone}`}
            className="w-9 h-9 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-xl flex items-center justify-center transition-colors shadow-inner"
            title="Call Assistant Directly"
          >
            <PhoneCall className="w-4.5 h-4.5" />
          </a>

          <button
            id="btn-sticky-booking"
            onClick={onOpenBooking}
            className="px-4 py-2 bg-[#fb8b24] hover:bg-[#fb8b24e6] text-white rounded-xl text-[11px] sm:text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1 cursor-pointer"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Book Slot" : "সিরিয়াল নিন"}</span>
          </button>
        </div>

      </div>
    </>
  );
}

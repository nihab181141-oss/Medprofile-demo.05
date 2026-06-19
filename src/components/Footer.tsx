/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { DoctorProfile } from "../types";

interface FooterProps {
  profile: DoctorProfile;
  lang: "en" | "bn";
}

export default function Footer({ profile, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12 mb-12 text-left">
          
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-white font-bold text-xl sm:text-2xl tracking-wide">
                {profile.name[lang]}
              </h3>
              <p className="text-xs text-[#fb8b24] font-semibold">
                {profile.specialization[lang]}
              </p>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed pr-6">
              {profile.subtitle[lang]}
            </p>

            <div className="inline-flex items-center space-x-2 bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-700/50 text-[10px] sm:text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-350 font-medium">
                {lang === "en" ? "BMDC Licensed Registered Specialist" : "বিএমডিসি লাইসেন্সকৃত রেজিস্টার্ড চিকিৎসক"}
              </span>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              {lang === "en" ? "Medical Sections" : "পোর্টাল সূচীপত্র"}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              <a href="#about" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Biography" : " পরিচিতি"}</a>
              <a href="#services" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Treatments" : "চিকিৎসা"}</a>
              <a href="#chambers" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Chambers" : "চেম্বার"}</a>
              <a href="#appointment" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Appointment" : "সিরিয়াল"}</a>
              <a href="#reviews" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Patient Opinions" : "রিভিউ"}</a>
              <a href="#articles" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Health Blog" : "ব্লগ টিপস"}</a>
              <a href="#gallery" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "Photo log" : "গ্যালারি"}</a>
              <a href="#faq" className="hover:text-[#fb8b24] transition-colors">{lang === "en" ? "FAQ" : "প্রশ্নোত্তর"}</a>
            </div>
          </div>

          {/* Core Emergency notice column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              {lang === "en" ? "Emergency / Chest Pain Notice" : "জরুরি পরিস্থিতি সতর্কতা"}
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              {lang === "en"
                ? "In case of acute dramatic crushing central chest discomfort, radiating left arm numbness, or sudden extreme shortness of breath, please immediately call 999 or rush to the nearest cardiac ICU facility."
                : "হঠাৎ বুকে তীব্র ব্যথা, বাঁ হাত ভারী হয়ে যাওয়া, চোয়ালে যন্ত্রণাদায়ক চাপ বা মাত্রাতিরিক্ত শ্বাসকষ্ট দেখা দিলে চেম্বারের সিরিয়ালের অপেক্ষা না করে অবিলম্বে নিকটস্থ জরুরি কার্ডিয়াক কেয়ার হাসপাতালেই চলে যান।"}
            </p>
            
            <div className="bg-red-950/40 p-4 border border-red-900/30 rounded-2xl">
              <span className="text-[10px] font-mono text-red-400 font-bold block uppercase tracking-wider">
                🚨 {lang === "en" ? "National Hospital Wing Contacts" : "ন্যাশনাল হার্ট সেন্টার হটলাইন"}
              </span>
              <a href="tel:+8802580513511" className="text-sm font-extrabold text-white hover:text-red-300 block mt-1.5">
                +88-02-58051351
              </a>
            </div>
          </div>

        </div>

        {/* Closing details and scroll-to-top */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {currentYear} {profile.name[lang]} Cardioport. {lang === "en" ? "All health rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
            </p>
            <p className="text-[10px]">
              {lang === "en"
                ? "Developed for absolute responsive mobile-first convenience. Built with premium medical specifications."
                : "উচ্চ নিরাপত্তা ও প্রতিক্রিয়াশীল মোবাইল ইন্টারফেসের সাথে ডিজাইনকৃত চিকিৎসক পোর্টাল।"}
            </p>
          </div>

          <button
            id="btn-footer-scroll-top"
            onClick={handleScrollToTop}
            className="self-center sm:self-auto flex items-center space-x-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full text-xs font-semibold cursor-pointer transition-colors shadow-inner"
          >
            <span>{lang === "en" ? "Return to Top" : "উপরে যান"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

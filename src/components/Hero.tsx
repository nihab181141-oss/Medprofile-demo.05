/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Phone, Award, ShieldCheck, Heart, Share2, MessageSquare, QrCode, Download, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DoctorProfile } from "../types";

interface HeroProps {
  profile: DoctorProfile;
  lang: "en" | "bn";
  onOpenBooking: () => void;
}

export default function Hero({ profile, lang, onOpenBooking }: HeroProps) {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    {
      value: `${profile.yearsOfExperience}+`,
      label: { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" },
      icon: Award,
      color: "bg-[#0f4c5c1a] text-[#0f4c5c]"
    },
    {
      value: profile.patientsCared,
      label: { en: "Patients Served", bn: "রোগীর সুস্থতা" },
      icon: Heart,
      color: "bg-[#fb8b241c] text-[#fb8b24]"
    },
    {
      value: profile.successRate,
      label: { en: "Success Rate", bn: "সফলতার হার" },
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#e5f1f440] via-[#e5f1f415] to-transparent"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#0f4c5c0d] rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -right-36 w-96 h-96 bg-[#fb8b240a] rounded-full blur-3xl -z-10" />

      {/* Decorative Grid SVG in background */}
      <div className="absolute inset-0 grid-dots opacity-30 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            id="hero-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#0f4c5c0f] px-4 py-2 rounded-full border border-[#0f4c5c15] text-xs font-semibold text-[#0f4c5c]">
              <span className="w-2 bg-[#fb8b24] h-2 rounded-full animate-pulse" />
              <span>
                {lang === "en" ? "Available Today for Consultations" : "আজ সিরিয়াল খোলা রয়েছে"}
              </span>
            </div>

            {/* Doctor Name and Titles */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {profile.name[lang]}
              </h1>
              <p className="font-display font-medium text-base sm:text-lg md:text-xl text-[#0f4c5c]">
                {profile.specialization[lang]}
              </p>
              <p className="text-xs sm:text-sm font-mono text-slate-500 bg-slate-100/50 inline-block px-3 py-1 rounded-md">
                {profile.titles[lang]}
              </p>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {profile.subtitle[lang]}
            </p>

            {/* CTA Segment */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="btn-hero-booking"
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#0f4c5c] text-white rounded-full font-medium shadow-lg hover:bg-[#0f4c5cd9] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>{lang === "en" ? "Schedule Consultation" : "চেম্বার সিরিয়াল নিন"}</span>
              </button>

              <a
                id="btn-hero-call"
                href={`tel:${profile.phone}`}
                className="px-6 py-4 bg-white text-slate-800 rounded-full font-semibold border border-slate-200 shadow-md hover:border-[#0f4c5c] hover:text-[#0f4c5c] transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0f4c5c]" />
                <span>{lang === "en" ? "Call Now" : "সরাসরি কল দিন"}</span>
              </a>

              <a
                id="btn-hero-whatsapp"
                href={profile.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 shadow-sm hover:bg-emerald-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                title={lang === "en" ? "Message on WhatsApp" : "হোয়াটসঅ্যাপে লিখুন"}
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
              </a>

              <button
                id="btn-hero-qr"
                onClick={() => setShowQR(true)}
                className="p-4 bg-slate-50 text-slate-600 rounded-full border border-slate-200 shadow-sm hover:bg-slate-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                title={lang === "en" ? "Share Doctor Profile QR" : "ডক্টর প্রোফাইল শেয়ার QR"}
              >
                <QrCode className="w-5 h-5 flex-shrink-0" />
              </button>
            </div>

            {/* Trust and stats summary card */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-100 text-center shadow-xs"
                >
                  <div className="flex justify-center mb-1.5">
                    <span className={`p-1.5 rounded-lg ${stat.color}`}>
                      <stat.icon className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-lg text-slate-900 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    {stat.label[lang]}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Hero Right Media Photo */}
          <motion.div
            id="hero-right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              {/* Outer floating accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#fb8b2430] rounded-full blur-sm animate-float" />
              <div className="absolute -bottom-4 -right-2 w-20 h-20 bg-[#0f4c5c18] rounded-full blur-md" />
              
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-[#0f4c5c] rounded-3xl rotate-3 scale-[1.02] shadow-2xl transition-transform duration-500 hover:rotate-2" />
              
              {/* Image Frame Container */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
                  alt={profile.name[lang]}
                  id="img-doctor-hero"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Patient Trust Stamp */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-slate-100 shadow-lg flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-800">
                    {lang === "en" ? "BMDC Registration: A-38910" : "বিএমডিসি রেজি নং: এ-৩৮৯১০"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* QR Code Sharing Modal */}
      <AnimatePresence>
        {showQR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="qr-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQR(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />
            
            <motion.div
              id="qr-modal-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 overflow-hidden text-center z-10 border border-slate-100"
            >
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {lang === "en" ? "Share Doctor Profile" : "ডক্টর প্রোফাইল শেয়ার করুন"}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {lang === "en" 
                  ? "Scan the QR code below to save or share this portfolio instantly on your mobile." 
                  : "আপনার মোবাইলে ডক্টরের প্রোফাইল সরাসরি ওপেন করতে নিচের কিউআর কোডটি স্ক্যান করুন।"
                }
              </p>

              {/* QR Code Graphic Simulated in SVG */}
              <div className="mx-auto w-48 h-48 bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 mb-4 shadow-inner">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#0f4c5c]"
                  fill="currentColor"
                >
                  {/* Position detection markers */}
                  <rect x="0" y="0" width="25" height="25" rx="2" />
                  <rect x="5" y="5" width="15" height="15" fill="white" rx="1" />
                  <rect x="9" y="9" width="7" height="7" rx="1" />

                  <rect x="75" y="0" width="25" height="25" rx="2" />
                  <rect x="80" y="5" width="15" height="15" fill="white" rx="1" />
                  <rect x="84" y="9" width="7" height="7" rx="1" />

                  <rect x="0" y="75" width="25" height="25" rx="2" />
                  <rect x="5" y="80" width="15" height="15" fill="white" rx="1" />
                  <rect x="9" y="84" width="7" height="7" rx="1" />

                  {/* Randomized elegant dots simulating visual key */}
                  <rect x="35" y="5" width="6" height="6" rx="1" />
                  <rect x="45" y="2" width="12" height="6" rx="1" />
                  <rect x="62" y="10" width="6" height="12" rx="1" />
                  <rect x="35" y="20" width="18" height="6" rx="1" />
                  
                  <rect x="10" y="35" width="6" height="24" rx="1" />
                  <rect x="25" y="45" width="12" height="6" rx="1" />
                  <rect x="45" y="40" width="18" height="18" rx="1" />
                  <rect x="70" y="35" width="12" height="12" rx="1" />
                  
                  <rect x="35" y="70" width="18" height="6" rx="1" />
                  <rect x="60" y="75" width="6" height="18" rx="1" />
                  <rect x="75" y="60" width="18" height="6" rx="1" />
                  <rect x="85" y="75" width="10" height="10" rx="1" />

                  {/* Centered medical logo icon inside the QR */}
                  <rect x="42" y="42" width="16" height="16" fill="white" rx="4" />
                  <path d="M46 50 H54 M50 46 V54" stroke="#fb8b24" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Profile Details Tag */}
              <div className="bg-[#e5f1f450] p-2.5 rounded-xl text-xs font-semibold text-[#0f4c5c] mb-4 text-center">
                📄 {profile.name[lang]} Card
              </div>

              {/* Share actions in modal */}
              <div className="flex space-x-2">
                <button
                  id="btn-qr-copy-link"
                  onClick={handleCopyLink}
                  className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 border border-slate-200 hover:border-[#0f4c5c] rounded-xl text-xs font-semibold cursor-pointer transition-colors text-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{lang === "en" ? "Copied!" : "কপি হয়েছে!"}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{lang === "en" ? "Copy Link" : "লিংক কপি"}</span>
                    </>
                  )}
                </button>

                <button
                  id="btn-qr-close"
                  onClick={() => setShowQR(false)}
                  className="px-4 py-2.5 bg-[#0f4c5c] hover:bg-[#0f4c5cd9] text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  {lang === "en" ? "Close" : "বন্ধ করুন"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Image, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { galleryItems } from "../data";
import { GalleryItem } from "../types";

interface GalleryProps {
  lang: "en" | "bn";
}

export default function Gallery({ lang }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = [
    { id: "all", label: { en: "All Photos", bn: "সব ছবি" } },
    { id: "chamber", label: { en: "Chamber & ICUs", bn: "চেম্বার ও আইসিইউ" } },
    { id: "medical", label: { en: "Treatment Lab", bn: "ক্যাথল্যাব ও মেশিন" } },
    { id: "certificate", label: { en: "Certificates", bn: "ডিগ্রি ও সনদসমূহ" } },
    { id: "events", label: { en: "Global Seminars", bn: "সেমিনার ও সম্মেলন" } }
  ];

  const filteredItems = galleryItems.filter((item) => {
    return activeTab === "all" || item.category === activeTab;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Visual Showcase" : "ফটো গ্যালারি"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "Chambers, Credentials & Events" : "ক্লিনিক, সনদ ও সেমিনারের বিশেষ মুহূর্ত"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-light pt-2">
            {lang === "en"
              ? "Take a digital tour around Dr. Adnan Chowdhury's highly sterilized equipment setups, medical seminars, and international certifications."
              : "ড. আদনান চৌধুরীর চেম্বার, জার্মানি ও যুক্তরাজ্য থেকে অর্জিত ফেলোশিপ এবং আন্তর্জাতিক কনফারেন্সের ফটো গ্যালারি দেখে নিন।"}
          </p>
        </div>

        {/* Categories toggler */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`btn-gallery-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                activeTab === tab.id
                  ? "bg-[#0f4c5c] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#0f4c5c] hover:text-[#0f4c5c]"
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/50 hover:border-[#0f4c5c] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3 aspect-video sm:aspect-square"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Cover overlay glassmorphism */}
              <div className="absolute inset-0 bg-[#0f4c5ca3] backdrop-blur-3xs opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-between p-5 text-left text-white">
                <span className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center self-end backdrop-blur-md">
                  <Eye className="w-4 h-4 text-white" />
                </span>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold tracking-widest uppercase bg-[#fb8b24] text-white px-2 py-0.5 rounded">
                    {item.category === "chamber" 
                      ? (lang === "en" ? "Chambers" : "চেম্বর") 
                      : item.category === "certificate"
                      ? (lang === "en" ? "Academic Cert" : "ডিগ্রি ও মেডেল")
                      : item.category === "medical"
                      ? (lang === "en" ? "Catheterization Lab" : "ক্যাথল্যাব")
                      : (lang === "en" ? "Seminars" : "সেমিনার সম্মেলন")
                    }
                  </span>
                  <h4 className="font-display font-bold text-sm sm:text-base leading-snug">
                    {item.title[lang]}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deluxe Lightbox Slideshow popup */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              id="lightbox-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] sm:min-h-[460px] md:h-[550px] overflow-hidden">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title[lang]}
                  className="max-w-[95%] max-h-[80vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />

                {/* Left arrow trigger */}
                <button
                  id="btn-lightbox-prev"
                  onClick={handlePrev}
                  className="absolute left-4 p-2.5 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-colors cursor-pointer"
                  title={lang === "en" ? "Previous photo" : "পূর্ববর্তী ছবি"}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Right arrow trigger */}
                <button
                  id="btn-lightbox-next"
                  onClick={handleNext}
                  className="absolute right-4 p-2.5 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-colors cursor-pointer"
                  title={lang === "en" ? "Next photo" : "পরবর্তী ছবি"}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Close Button top-right */}
                <button
                  id="btn-lightbox-close"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-4 top-4 p-2 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Bottom detail row */}
              <div className="bg-neutral-950 p-5 border-t border-neutral-800 flex items-center justify-between text-left text-neutral-300">
                <div className="space-y-1.5 pr-6">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-[#fb8b24] text-white px-2.5 py-0.5 rounded">
                    📁 {filteredItems[lightboxIndex].category.toUpperCase()}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base leading-tight text-white">
                    {filteredItems[lightboxIndex].title[lang]}
                  </h4>
                </div>
                
                {/* Index tag */}
                <span className="text-xs font-mono font-bold text-neutral-500 whitespace-nowrap">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MapPin, Phone, Clock, DollarSign, ExternalLink, CalendarDays, CheckCircle2, Map } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chambers } from "../data";
import { Chamber } from "../types";

interface ChambersProps {
  lang: "en" | "bn";
  onOpenBooking: (chamberId?: string) => void;
}

export default function Chambers({ lang, onOpenBooking }: ChambersProps) {
  const [activeMapId, setActiveMapId] = useState<string | null>(null);

  return (
    <section id="chambers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Chambers & Timings" : "চেম্বার ও রোগী দেখার সময়সূচী"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "Premium Consultation Chambers" : "পরামর্শ ও চেম্বার পরিচিতি"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-light pt-2">
            {lang === "en"
              ? "Dr. Adnan consults across two prime surgical institutes in Dhaka. Review the schedules below to book your appointment."
              : "ড. আদনান চৌধুরী নিয়মিত ঢাকার দুটি অত্যাধুনিক চিকিৎসা সেবা প্রতিষ্ঠানে রোগী সেবা দিয়ে থাকেন। নিচের সময়সূচি দেখে সিরিয়াল বুকিং সম্পন্ন করুন।"}
          </p>
        </div>

        {/* Chambers grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {chambers.map((chamber) => {
            const isMapVisible = activeMapId === chamber.id;
            
            return (
              <div
                key={chamber.id}
                id={`chamber-card-${chamber.id}`}
                className="bg-slate-50 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header banner style */}
                <div className="bg-[#0f4c5c] p-6 text-white text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-md" />
                  <span className="inline-block bg-[#fb8b24] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 shadow-xs">
                    {chamber.id === "labaid-dhanmondi" 
                      ? (lang === "en" ? "Private Chamber" : "ব্যক্তিগত চেম্বার")
                      : (lang === "en" ? "Foundation Care" : "ফাউন্ডেশন সেবা")
                    }
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    {chamber.name[lang]}
                  </h3>
                  <p className="flex items-start text-xs text-[#e5f1f4d0] mt-3 font-light leading-relaxed">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-[#fb8b24]" />
                    <span>{chamber.address[lang]}</span>
                  </p>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Stats info inline block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Time */}
                    <div className="flex items-start space-x-3 bg-white p-4.5 rounded-2xl border border-slate-100">
                      <Clock className="w-5 h-5 text-[#0f4c5c] flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                          {lang === "en" ? "Visiting Hour" : "রোগী দেখার সময়"}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#0f4c5c] leading-tight block">
                          {chamber.visitingHours[lang]}
                        </span>
                      </div>
                    </div>

                    {/* Fee */}
                    <div className="flex items-start space-x-3 bg-white p-4.5 rounded-2xl border border-slate-100">
                      <DollarSign className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                          {lang === "en" ? "Consultation Fee" : "পরামর্শ ফি বা ভিজিট"}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight block">
                          {chamber.fee[lang]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Complete schedule breakdown list */}
                  <div className="space-y-3.5 bg-white p-5 rounded-2xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block border-b pb-2 mb-2">
                      📋 {lang === "en" ? "Detailed Schedule List" : "চেম্বারের দৈনিক নিয়মাবলী"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                      {chamber.schedule.map((sched, sidx) => (
                        <div key={sidx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#fb8b24] flex-shrink-0" />
                          <span>{sched[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assistant information call segment */}
                  <div className="p-4 bg-[#fb8b240c] rounded-2xl border border-[#fb8b241c] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-3 text-left">
                      <span className="p-2 bg-[#fb8b241e] text-[#fb8b24] rounded-xl flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </span>
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wide">
                          {lang === "en" ? "Assistant hotline" : "সিরিয়াল বা বুকিং ফোন"}
                        </span>
                        <a
                          href={`tel:${chamber.assistantPhone}`}
                          className="text-sm font-bold text-slate-900 hover:text-[#0f4c5c] transition-colors"
                        >
                          {chamber.assistantPhone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`tel:${chamber.assistantPhone}`}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl text-center cursor-pointer shadow-xs"
                    >
                      📞 {lang === "en" ? "Call Assistant" : "সহকারীকে কল করুন"}
                    </a>
                  </div>

                  {/* Helpful chamber notes */}
                  <p className="text-[11px] text-slate-400 italic">
                    {chamber.notes[lang]}
                  </p>

                  {/* Embedded Google Maps Toggler */}
                  <div className="pt-2">
                    <button
                      id={`btn-map-toggle-${chamber.id}`}
                      onClick={() => setActiveMapId(isMapVisible ? null : chamber.id)}
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-slate-200 hover:border-[#0f4c5c] hover:bg-slate-100/50 bg-white text-xs font-semibold text-slate-700 cursor-pointer transition-colors"
                    >
                      <Map className="w-4 h-4 text-[#0f4c5c]" />
                      <span>
                        {isMapVisible
                          ? (lang === "en" ? "Hide Map Preview" : "ম্যাপ আড়াল করুন")
                          : (lang === "en" ? "Show Live Map Preview" : "গুগল ম্যাপে চেম্বার দেখুন")
                        }
                      </span>
                    </button>

                    <AnimatePresence>
                      {isMapVisible && (
                        <motion.div
                          id={`chamber-map-preview-${chamber.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 260, opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="relative overflow-hidden rounded-2xl mt-4 border border-slate-200 shadow-inner"
                        >
                          <iframe
                            src={chamber.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={chamber.name[lang]}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Call to action & external map redirection */}
                  <div className="flex space-x-2 pt-2 border-t border-slate-100">
                    <a
                      id={`btn-directions-external-${chamber.id}`}
                      href={chamber.mapDirectionsUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 border border-slate-200 hover:border-slate-300 py-3 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <span>{lang === "en" ? "Get Directions" : "ম্যাপ ডিরেকশন"}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    <button
                      id={`btn-chamber-booking-confirm-${chamber.id}`}
                      onClick={() => onOpenBooking(chamber.id)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-[#0f4c5c] hover:bg-[#0f4c5cd9] text-white py-3 px-3 rounded-xl text-xs font-semibold cursor-pointer shadow-md"
                    >
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>{lang === "en" ? "Book This Clinic" : "সিরিয়াল রিকোয়েস্ট"}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquareReply } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQData } from "../data";
import { FAQItem } from "../types";

interface FAQProps {
  lang: "en" | "bn";
}

export default function FAQ({ lang }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      {/* Decorative dots background */}
      <div className="absolute inset-0 grid-dots opacity-10 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Patient Guidance" : "জিজ্ঞাসিত প্রশ্ন ও উত্তর"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "Frequently Asked Questions" : "রোগীদের সাধারণ জিজ্ঞাসা সমূহ"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-light pt-2">
            {lang === "en"
              ? "Review official guidance regarding appointment serials, visiting fees, diagnostic documents, and angiography procedures."
              : "সিরিয়াল বুকিং, ভিজিট ফি, চেম্বারে আসার পূর্বে প্রয়োজনীয় রিপোর্ট এবং অস্ত্রোপচার সংক্রান্ত উত্তরগুলো জেনে নিন।"}
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {FAQData.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                  isOpen
                    ? "bg-[#e5f1f42a] border-[#0f4c5c30] shadow-md"
                    : "bg-slate-50 border-slate-200/60 hover:bg-slate-100/50 hover:border-slate-300"
                }`}
              >
                {/* Trigger Button */}
                <button
                  id={`btn-faq-trigger-${faq.id}`}
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold sm:font-bold text-xs sm:text-base text-slate-900 focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors ${
                      isOpen ? "text-[#fb8b24]" : "text-[#0f4c5c]"
                    }`} />
                    <span>{faq.question[lang]}</span>
                  </span>
                  
                  <span className={`p-1.5 rounded-full transition-all duration-200 ${
                    isOpen ? "bg-[#0f4c5c16] text-[#0f4c5c]" : "bg-slate-200/60 text-slate-500"
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated expand/collapse details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-dashed border-slate-200/50">
                        <div className="flex items-start space-x-3">
                          <span className="p-1 px-1.5 text-[10px] bg-emerald-50 text-emerald-600 rounded-md font-mono font-bold uppercase tracking-wider scale-95 flex-shrink-0 mt-0.5">
                            Answer
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                            {faq.answer[lang]}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for unhandled questions */}
        <div className="text-center pt-8">
          <p className="text-xs sm:text-sm text-slate-500 font-light flex items-center justify-center space-x-2">
            <MessageSquareReply className="w-4.5 h-4.5 text-[#fb8b24]" />
            <span>
              {lang === "en"
                ? "Have an unlisted cardological question? Contact our"
                : "আপনার কাঙ্ক্ষিত প্রশ্নের উত্তর খুঁজে পাননি? সরাসরি আমাদের"}
            </span>
            <a href="#contact" className="underline font-bold text-[#0f4c5c] hover:text-[#fb8b24]">
              {lang === "en" ? "Medical Desk" : "হেল্প ডেস্কে লিখুন"}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

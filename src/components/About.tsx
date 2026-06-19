/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Briefcase, Award, Milestone, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";
import { Degree, Experience, Membership, Award as AwardType, TranslationText } from "../types";
import { degrees, experiences, awards, memberships } from "../data";

interface AboutProps {
  bio: TranslationText;
  longBio: TranslationText;
  lang: "en" | "bn";
}

export default function About({ bio, longBio, lang }: AboutProps) {
  const [activeTab, setActiveTab] = useState<"journey" | "credentials">("journey");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Distinguished Portfolio" : "পরিচিতি ও দক্ষতা"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "About Prof. Dr. Adnan Chowdhury" : "প্রফেসর ড. আদনান চৌধুরী সম্বন্ধে"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light pt-2">
            {longBio[lang]}
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-xs">
            <button
              id="btn-about-tab-journey"
              onClick={() => setActiveTab("journey")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "journey"
                  ? "bg-[#0f4c5c] text-white shadow-mdScale"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🚀 {lang === "en" ? "Academic & Medical Career" : "ক্যারিয়ার ও শিক্ষাগত যোগ্যতা"}
            </button>
            <button
              id="btn-about-tab-credentials"
              onClick={() => setActiveTab("credentials")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "credentials"
                  ? "bg-[#0f4c5c] text-white shadow-mdScale"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🏅 {lang === "en" ? "Awards & Global Memberships" : "পদক ও বিশ্বব্যাপী ফেলোশিপ"}
            </button>
          </div>
        </div>

        {/* Tab 1: Career & Education Columns */}
        {activeTab === "journey" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Education Timeline */}
            <motion.div
              id="education-column"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                <span className="p-2 bg-[#0f4c5c0d] text-[#0f4c5c] rounded-xl">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Education & Training" : "শিক্ষাগত যোগ্যতা ও ডিগ্রি"}
                </h3>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-100 space-y-8 py-2">
                {degrees.map((degree, idx) => (
                  <div key={idx} className="relative group">
                    {/* Time dot indicator */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white border-2 border-[#0f4c5c] rounded-full group-hover:bg-[#fb8b24] group-hover:scale-110 transition-all duration-300" />
                    
                    <div className="text-xs font-mono font-bold text-[#fb8b24] tracking-wider bg-amber-50 inline-block px-2 py-0.5 rounded-sm mb-1.5">
                      {degree.year}
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      {degree.degree[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {degree.institution[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              id="experience-column"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                <span className="p-2 bg-[#0f4c5c0d] text-[#0f4c5c] rounded-xl">
                  <Briefcase className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Clinical Experience" : "ক্লিনিক্যাল কর্মঅভিজ্ঞতা"}
                </h3>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-100 space-y-8 py-2">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Time dot indicator */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-white border-2 border-[#0f4c5c] rounded-full group-hover:bg-[#fb8b24] group-hover:scale-110 transition-all duration-300" />
                    
                    <div className="text-xs font-mono font-bold text-[#fb8b24] tracking-wider bg-amber-50 inline-block px-2 py-0.5 rounded-sm mb-1.5">
                      {exp.period}
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      {exp.role[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {exp.institution[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        )}

        {/* Tab 2: Awards & Global Memberships */}
        {activeTab === "credentials" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* National Awards */}
            <motion.div
              id="awards-column"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                <span className="p-2 bg-[#fb8b241c] text-[#fb8b24] rounded-xl">
                  <Award className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Awards & Commendations" : "স্বীকৃতি ও সম্মাননা পদক"}
                </h3>
              </div>

              <div className="space-y-4">
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all duration-300 flex items-start space-x-4 group"
                  >
                    <div className="p-2.5 bg-white border border-slate-200 text-[#fb8b24] rounded-lg group-hover:bg-amber-50 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#fb8b24] uppercase">
                        {award.year}
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                        {award.title[lang]}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {award.issuer[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Global Memberships */}
            <motion.div
              id="memberships-column"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
                <span className="p-2 bg-[#0f4c5c0e] text-[#0f4c5c] rounded-xl">
                  <Milestone className="w-6 h-6" />
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Professional Memberships" : "বিশ্বমানের পেশাদার সদস্যপদ"}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {memberships.map((membership, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-50 hover:bg-slate-100/70 border border-slate-100/50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-[#e5f1f4] text-[#0f4c5c] rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                      {membership.title[lang]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fellowship Notice stamp */}
              <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100 flex items-start space-x-3">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-teal-800 leading-relaxed">
                  {lang === "en"
                    ? "In alignment with the Royal College guidelines, Dr. Adnan Chowdhury pursues annual mandatory clinical learning modules in cardiology leadership."
                    : "রয়্যাল কলেজের গাইডলাইন মেনে ড. আদনান কার্ডিওলজি ও আধুনিক থেরাপিউটিকসের ওপর প্রতি বছর উচ্চতর পেশাদারি কোর্স সম্পন্ন করেন।"}
                </p>
              </div>

            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}

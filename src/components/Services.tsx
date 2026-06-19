/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { HeartPulse, Activity, Layers, ShieldCheck, Heart, ArrowRight, Check, Search } from "lucide-react";
import { motion } from "motion/react";
import { services, treatedConditions } from "../data";
import { MedicalService, TreatmentCondition } from "../types";

const iconMap: { [key: string]: any } = {
  HeartPulse: HeartPulse,
  Activity: Activity,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

interface ServicesProps {
  lang: "en" | "bn";
}

export default function Services({ lang }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string>(services[0].id);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories helper
  const categories = [
    { id: "all", label: { en: "All Issues", bn: "সব সমস্যা" } },
    { id: "general", label: { en: "General Heart Care", bn: "সাধারণ কেয়ার" } },
    { id: "emergency", label: { en: "Emergency Stressors", bn: "জরুরি সেবা" } },
    { id: "surgical", label: { en: "Special / Interventions", bn: "বিশেষ ইন্টারভেনশন" } }
  ];

  const filteredConditions = treatedConditions.filter((cond) => {
    const matchesCategory = filterCategory === "all" || cond.category === filterCategory;
    const searchLower = searchQuery.toLowerCase();
    const nameMatch = cond.name[lang].toLowerCase().includes(searchLower);
    return matchesCategory && nameMatch;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#e5f1f440] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fb8b2408] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Medical Care Expertise" : "বিশেষায়িত চিকিৎসা সেবাসমূহ"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "Comprehensive Cardiovascular Care" : "হৃদরোগ ও রক্তনালীর আধুনিক চিকিৎসা"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-light">
            {lang === "en"
              ? "From early high-accuracy diagnosis to complex wrist-stenting, our clinic is fitted to safeguard your family's golden heart."
              : "মেডিসিনের সঠিক ডোজ নির্ধারণ থেকে নিখুঁত এনজিওপ্লাস্টি বা পেসমেকার স্থাপন; আপনাদের বুক জুড়ে স্বাস্থ্য সুরক্ষার নির্ভরযোগ্য ঠিকানা।"}
          </p>
        </div>

        {/* Tab-like Left and Details-like Right for core Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Service selectors (left side) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  id={`btn-service-select-${service.id}`}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer group ${
                    isSelected
                      ? "bg-white border-[#0f4c5c] shadow-lg translate-x-2"
                      : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <span className={`p-2.5 rounded-xl transition-colors ${
                    isSelected
                      ? "bg-[#0f4c5c] text-white"
                      : "bg-[#0f4c5c0d] text-[#0f4c5c] group-hover:bg-[#0f4c5c15]"
                  }`}>
                    <Icon className="w-5 h-5 flex-shrink-0" />
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {service.title[lang]}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 pr-4">
                      {service.description[lang]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details Card (right side) */}
          <div className="lg:col-span-8">
            {services.map((service) => {
              if (service.id !== selectedService) return null;
              const Icon = iconMap[service.icon] || Heart;
              
              return (
                <motion.div
                  key={service.id}
                  id={`service-detail-view-${service.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Top title area */}
                    <div className="flex items-center space-x-4">
                      <span className="p-3.5 bg-[#0f4c5c16] text-[#0f4c5c] rounded-2xl">
                        <Icon className="w-8 h-8" />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                          {service.title[lang]}
                        </h3>
                        <span className="text-xs font-mono font-medium text-[#fb8b24] tracking-wider uppercase">
                          {lang === "en" ? "Dr. Adnan Leading Specialist" : "ড. আদনান স্বয়ং সম্পাদন করেন"}
                        </span>
                      </div>
                    </div>

                    {/* Description text */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                      {service.description[lang]}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-2">
                      <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {lang === "en" ? "Available Procedures / Diagnostics" : "সেবা বিষয়ক বিস্তারিত তালিকা"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map((bullet, bidx) => (
                          <div
                            key={bidx}
                            className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50/50 border border-slate-100/30 hover:bg-slate-50 transition-colors"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </span>
                            <span className="text-xs sm:text-sm text-slate-700 font-medium">
                              {bullet[lang]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions inside detailed view */}
                  <div className="border-t border-slate-100 pt-8 mt-8 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {lang === "en" 
                        ? "*Performed in highly sterilized catheterization labs." 
                        : "*উচ্চ জীবাণুমুক্ত ক্যাথল্যাব এবং আধুনিক আইসিইউ সুবিধাযুক্ত থিয়েটার।"
                      }
                    </span>
                    <a
                      href="#appointment"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#0f4c5c] text-white text-xs sm:text-sm font-semibold hover:bg-[#0f4c5cdb] transition-colors"
                    >
                      <span>{lang === "en" ? "Book Clinic Slot" : "অ্যাপয়েন্টমেন্ট বুক দিন"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Treated disease micro-search widget (Excellent usability!) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                {lang === "en" ? "Search Treated Conditions" : "নির্দিষ্ট রোগের চিকিৎসা তথ্য খুঁজুন"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light">
                {lang === "en"
                  ? "Easily locate whether your cardiovascular issue is treated under Dr. Chowdhury’s specialist wing."
                  : "আপনার হার্টের অসুস্থতার বিষয়ে ডক্টরের চেম্বার থেকে পরামর্শ নেওয়া যাবে কিনা তা সহজে যাচাই করুন।"}
              </p>
            </div>

            {/* Live inputs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="input-services-search"
                  type="text"
                  placeholder={lang === "en" ? "Filter by name..." : "রোগের নাম লিখুন..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-56 pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 hover:bg-slate-100focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Categories select tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`btn-category-tab-${cat.id}`}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer transition-all ${
                  filterCategory === cat.id
                    ? "bg-[#fb8b24] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* Output items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filteredConditions.length > 0 ? (
              filteredConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-dashed border-slate-200 hover:border-[#0f4c5c] hover:bg-[#0f4c5c05] transition-all duration-300"
                >
                  <div className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fb8b24] mt-1.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                      {cond.name[lang]}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-2.5 font-bold tracking-wider">
                    {cond.category === "emergency" 
                      ? (lang === "en" ? "🚨 Urgent Assistance" : "🚨 জরুরি চিকিৎসা")
                      : cond.category === "surgical"
                      ? (lang === "en" ? "🛡️ Specialists Only" : "🛡️ বিশেষ সেবা")
                      : (lang === "en" ? "🩺 Routine Care" : "🩺 চেকআপ ও মেডিসিন")
                    }
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center py-8 text-slate-400 text-xs sm:text-sm">
                {lang === "en" ? "No cardiovascular conditions match your filter." : "কোনো রোগের তথ্য খুঁজে পাওয়া যায়নি।"}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

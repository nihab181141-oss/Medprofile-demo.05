/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, Clock, Calendar, ArrowRight, X, Search, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { articles } from "../data";
import { Article } from "../types";

interface ArticlesProps {
  lang: "en" | "bn";
}

export default function Articles({ lang }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: { en: "All Articles", bn: "সকল নিবন্ধ" } },
    { id: "cardiac", label: { en: "Cardiac Awareness", bn: "হার্ট সচেতনতা" } },
    { id: "lifestyle", label: { en: "Diet & Lifestyle", bn: "খাদ্য ও জীবনধারা" } },
    { id: "preventive", label: { en: "Preventive Care", bn: "প্রতিরোধমূলক" } }
  ];

  const getCategoryId = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes("cardiac") || c.includes("সচেতনতা")) return "cardiac";
    if (c.includes("lifestyle") || c.includes("খাদ্য")) return "lifestyle";
    return "preventive";
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      activeCategory === "all" || getCategoryId(art.category.en) === activeCategory;
    const matchesSearch =
      art.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="articles" className="py-20 bg-white relative">
      <div className="absolute inset-0 grid-dots opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left md:max-w-2xl">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
              {lang === "en" ? "Medical Insights" : "রোগী সচেতনতা ব্লগপোস্ট"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === "en" ? "Cardiovascular Health Hub" : "হৃদযন্ত্র সুস্থ রাখার গাইড ও নিবন্ধসমূহ"}
            </h2>
            <div className="w-16 h-1 bg-[#0f4c5c] rounded-full" />
            <p className="text-sm sm:text-base text-slate-600 font-light">
              {lang === "en"
                ? "Dr. Adnan writes regular science-backed guides regarding blood pressure control, heart attack indicators, and active cholesterol reduction."
                : "ড. আদনান চৌধুরী নিয়মিত তাঁর ব্লগে বিজ্ঞানসম্মত হৃদযন্ত্রের টিপস, কোলেস্টেরল কমানোর বৈজ্ঞানিক ডায়েট ও সাইলেন্ট হার্ট অ্যাটাকের লক্ষণ নিয়ে লিখেন।"}
            </p>
          </div>

          {/* Quick Search inside articles */}
          <div className="relative flex-shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="input-articles-search"
              type="text"
              placeholder={lang === "en" ? "Search articles..." : "তথ্য অনুসন্ধান..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 transition-all font-medium text-slate-800"
            />
          </div>
        </div>

        {/* Section categories toggler list */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`btn-blog-category-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0f4c5c] text-white shadow-mdScale"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art) => (
              <div
                key={art.id}
                id={`article-card-${art.id}`}
                className="bg-white rounded-3xl border border-slate-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo top */}
                <div className="relative h-48 aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0f4c5c] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs border border-slate-100">
                    {art.category[lang]}
                  </span>
                </div>

                {/* Content middle */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  {/* Top stamp row */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-[10px] sm:text-xs text-slate-400 font-medium">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{art.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime[lang]}</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-slate-950 leading-snug group-hover:text-[#0f4c5c] transition-colors line-clamp-2">
                      {art.title[lang]}
                    </h3>

                    <p className="text-slate-550 text-xs sm:text-sm line-clamp-3 font-light leading-relaxed">
                      {art.excerpt[lang]}
                    </p>
                  </div>

                  <button
                    id={`btn-read-article-${art.id}`}
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-[#0f4c5c] hover:text-[#fb8b24] font-bold mt-4 pt-4 border-t border-slate-100 w-full justify-between group-hover:border-slate-200 transition-colors cursor-pointer"
                  >
                    <span>{lang === "en" ? "Read Full Article" : "সম্পূর্ণ নিবন্ধ পড়ুন"}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16 text-slate-400 text-xs sm:text-sm">
              {lang === "en" ? "No articles match your search parameters." : "এই বিষয়ের ওপর কোনো নিবন্ধ এই মুহূর্তে নেই।"}
            </div>
          )}
        </div>

      </div>

      {/* Complete Full Text Reader modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="article-read-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              id="article-read-frame-content"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 text-left flex flex-col max-h-[85vh]"
            >
              {/* Cover Photo */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-slate-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Close Button overlayed inside the image */}
                <button
                  id="btn-close-article"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute right-4 top-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#fb8b24] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {selectedArticle.category[lang]}
                  </span>
                </div>
              </div>

              {/* Reader body content (with clean scroll) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex items-center space-x-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedArticle.readTime[lang]}</span>
                  </span>
                  <span className="hidden sm:inline text-emerald-600 font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === "en" ? "Medical Reviewed" : "চিকিৎসক দ্বারা প্রমাণিত"}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {selectedArticle.title[lang]}
                </h3>

                <div className="w-12 h-1 bg-[#0f4c5c] rounded-full" />

                {/* Subtext introduction */}
                <p className="text-[#0f4c5c] text-xs sm:text-sm italic leading-relaxed bg-[#e5f1f450] p-4 rounded-xl border-l-4 border-[#0f4c5c] font-medium font-sans">
                  "{selectedArticle.excerpt[lang]}"
                </p>

                {/* Body paragraph content split */}
                <div className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed space-y-4 pt-2 font-serif">
                  {selectedArticle.content[lang].split(". ").map((paragraphStr, pIdx, selfArr) => {
                    if (!paragraphStr.trim()) return null;
                    const suffixDot = pIdx < selfArr.length - 1 ? "." : "";
                    return (
                      <p key={pIdx}>
                        {paragraphStr.trim()}{suffixDot}
                      </p>
                    );
                  })}
                </div>

                {/* Health Warning Disclaimer */}
                <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 text-[11px] text-amber-900 leading-relaxed font-sans">
                  🚨 <strong>{lang === "en" ? "Disclaimer:" : "সতর্কতা ও দায়মুক্তি:"}</strong>{" "}
                  {lang === "en"
                    ? "This medical awareness post is meant for educational purposes only. Never utilize medical advice in this blog to self-diagnose heart concerns. Always seek actual clinical evaluations via an experienced practitioner."
                    : "এই ব্লগের নিবন্ধটি কেবল জনসচেতনতা বাড়ানোর উদ্দেশ্য নিয়ে লেখা। নিজে নিজে ডাক্তারি করে হার্ট অ্যাটাকের চিকিৎসা বা প্রেসারের ওষুধের ডোজ কমানো যাবে না। যেকোনো বুক ব্যথায় অবশ্যই সরাসরি আমাদের চেম্বার বা জরুরি বিভাগে যোগাযোগ করুন।"}
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="border-t border-slate-100 p-4 bg-slate-50 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  {lang === "en" ? "© Medical Hub" : "© ডক্টরস পোর্টাল"}
                </span>
                <button
                  id="btn-close-article-bottom"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-[#0f4c5c] hover:bg-[#0f4c5cd9] text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  {lang === "en" ? "Done Reading" : "পড়া শেষ করুন"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

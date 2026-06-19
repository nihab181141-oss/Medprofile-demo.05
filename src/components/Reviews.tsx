/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Star, Quote, Heart, MessageSquare, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials as defaultTestimonials } from "../data";
import { Testimonial } from "../types";

interface ReviewsProps {
  lang: "en" | "bn";
}

export default function Reviews({ lang }: ReviewsProps) {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: "",
    age: "",
    condition: "",
    rating: 5,
    text: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Load reviews combined with user reviews
  useEffect(() => {
    const saved = localStorage.getItem("dr_adnan_patient_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReviews([...parsed, ...defaultTestimonials]);
      } catch (err) {
        setReviews(defaultTestimonials);
      }
    } else {
      setReviews(defaultTestimonials);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview.author || !newReview.text) {
      alert(lang === "en" ? "Name and Review fields are mandatory." : "দয়া করে নাম ও রিভিউ বিবরণ লিখুন।");
      return;
    }

    const addedReview: Testimonial = {
      id: "rev-" + Date.now(),
      author: { en: newReview.author, bn: newReview.author },
      age: parseInt(newReview.age) || 45,
      condition: {
        en: newReview.condition || "General Patient Care",
        bn: newReview.condition || "সাধারণ রোগী সেবা"
      },
      rating: newReview.rating,
      text: { en: newReview.text, bn: newReview.text },
      date: new Date().toLocaleDateString(lang === "en" ? "en-US" : "bn-BD")
    };

    const savedReviewsString = localStorage.getItem("dr_adnan_patient_reviews");
    let userReviews: Testimonial[] = [];
    if (savedReviewsString) {
      try {
        userReviews = JSON.parse(savedReviewsString);
      } catch (e) {}
    }

    userReviews = [addedReview, ...userReviews];
    localStorage.setItem("dr_adnan_patient_reviews", JSON.stringify(userReviews));
    setReviews([addedReview, ...reviews]);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setNewReview({
        author: "",
        age: "",
        condition: "",
        rating: 5,
        text: ""
      });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-[#0f4c5c0a] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left md:max-w-2xl">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
              {lang === "en" ? "Patient Stories" : "রোগীদের রিভিউ ও অভিব্যক্তি"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === "en" ? "Healing Experiences That Inspire" : "হাসিমুখে সুস্থ হয়ে ওঠার অভিজ্ঞতা সমূহ"}
            </h2>
            <div className="w-16 h-1 bg-[#0f4c5c] rounded-full" />
            <p className="text-sm sm:text-base text-slate-600 font-light">
              {lang === "en"
                ? "Every heart tells a unique healing story of precision stenting or blood pressure management. Read reviews from recovered individuals."
                : "প্রতিটি সুস্থ হার্ট আমাদের জন্য এক ভালোবাসার গল্প। উন্নত ইন্টারভেনশন ও প্রেসার কন্ট্রোলে সুস্থ রোগীদের মতামত জানুন।"}
            </p>
          </div>

          <button
            id="btn-open-review-form"
            onClick={() => setIsFormOpen(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0f4c5c] rounded-full text-xs sm:text-sm font-semibold text-[#0f4c5c] shadow-sm hover:shadow-md cursor-pointer transition-all flex-shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === "en" ? "Leave a Review" : "রিভিউ দিন"}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              <div className="space-y-4">
                {/* Quotation icon */}
                <span className="absolute right-6 top-6 text-slate-100 p-1 flex-shrink-0">
                  <Quote className="w-10 h-10 transform scale-x-[-1]" />
                </span>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1.5">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${
                        starIdx < rev.rating
                          ? "fill-[#fb8b24] text-[#fb8b24]"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-light italic">
                  "{rev.text[lang]}"
                </p>
              </div>

              {/* Author bio details */}
              <div className="border-t border-slate-100 pt-6 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 leading-tight">
                    {rev.author[lang]}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#0f4c5c] font-semibold mt-0.5">
                    {rev.condition[lang]} ({rev.age} {lang === "en" ? "years" : "বছর"})
                  </p>
                </div>
                
                {/* Date / Stamp badge */}
                <span className="text-[10px] font-mono text-slate-400 font-bold block bg-slate-50 px-2 py-0.5 rounded-md">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review drawer/modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border z-10 text-left space-y-5"
            >
              <div className="space-y-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                  {lang === "en" ? "Patient Review Intake Form" : "আমার সুচিকিৎসা অভিজ্ঞতা লিখুন"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "en"
                    ? "Share your positive recovery experience to inspire other cardiac patients visiting Dr. Adnan."
                    : "আপনার সুস্থতার চমৎকার বিবরণ লিখে অন্যান্য হৃদরোগী ও প্রেসার আক্রান্তদের মনে আশার সঞ্চার জাগান।"}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center text-emerald-600 space-y-3">
                  <div className="mx-auto w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {lang === "en" ? "Thank You for Submitting!" : "রিভিউ জমা দেওয়ার জন্য অনেক ধন্যবাদ!"}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {lang === "en" ? "Review has been added instantly." : "রিভিউটি তাৎক্ষণিকভাবে ড্যাশবোর্ডে যোগ করা হয়েছে।"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {/* Rating selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {lang === "en" ? "Your Star Rating *" : "আপনার রেটিং প্রদান করুন *"}
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleRatingChange(s)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 sm:w-8 h-6 sm:h-8 ${
                              s <= newReview.rating
                                ? "fill-[#fb8b24] text-[#fb8b24]"
                                : "text-slate-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        {lang === "en" ? "Full Name *" : "আপনার নাম *"}
                      </label>
                      <input
                        type="text"
                        name="author"
                        required
                        placeholder={lang === "en" ? "Enter your name" : "যেমন: মো: শাহরিয়ার হোসেন"}
                        value={newReview.author}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        {lang === "en" ? "Age (years)" : "বয়স (বছর)"}
                      </label>
                      <input
                        type="number"
                        name="age"
                        placeholder="e.g. 52"
                        value={newReview.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Condition Treated */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {lang === "en" ? "Condition Treated / Diagnosis" : "আক্রান্ত সমস্যা বা রোগ নির্নয়"}
                    </label>
                    <input
                      type="text"
                      name="condition"
                      placeholder={lang === "en" ? "e.g., Angioplasty / High BP" : "যেমন: বুক ধড়ফড় বা স্টেনটিং সুবিধা"}
                      value={newReview.condition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  {/* Feedback Text */}
                  <div className="space-y-1 font-sans">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {lang === "en" ? "Your Healing Experience description *" : "আপনার নিরাময় অভিজ্ঞতা বিস্তারিত বলুন *"}
                    </label>
                    <textarea
                      name="text"
                      required
                      rows={3}
                      placeholder={lang === "en" ? "Draft your detailed review" : "যেমন: ডক্টরের ব্যবহার ও পরামর্শে আমার যে উন্নতি হয়েছে তার বর্ণনা..."}
                      value={newReview.text}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 py-3 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-50 cursor-pointer text-slate-600 text-center"
                    >
                      {lang === "en" ? "Cancel" : "বাতিল করুন"}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#0f4c5c] hover:bg-[#0f4c5cd9] text-white rounded-xl text-xs sm:text-sm font-bold cursor-pointer text-center"
                    >
                      🚀 {lang === "en" ? "Submit Review" : "রিভিউ জমা দিন"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, Check, Facebook, Linkedin, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { DoctorProfile } from "../types";

interface ContactProps {
  profile: DoctorProfile;
  lang: "en" | "bn";
}

export default function Contact({ profile, lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(lang === "en" ? "Please fill in all mandatory fields." : "দয়া করে প্রয়োজনীয় সব তথ্য দিন।");
      return;
    }

    setSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3500);
    }, 1500);
  };

  const contactCards = [
    {
      title: { en: "Doctor's Personal Email", bn: "ডক্টরের ব্যক্তিগত ইমেইল" },
      value: profile.email,
      href: `mailto:${profile.email}`,
      desc: { en: "For academic queries & corporate referrals", bn: "একাডেমিক ও করপোরেট যোগাযোগের জন্য" },
      icon: Mail,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: { en: "Chamber Registrations Phone", bn: "সিরিয়াল ও চেম্বার ফোন" },
      value: profile.phone,
      href: `tel:${profile.phone}`,
      desc: { en: "Priority hotline for immediate serial booking", bn: "দ্রুত সিরিয়াল বা ডেস্কে কথা বলার নম্বর" },
      icon: Phone,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: { en: "Visiting Chambers Area", bn: "রোগী দেখার মূল এলাকা" },
      value: "Dhanmondi & Mirpur (Dhaka)",
      href: "#chambers",
      desc: { en: "Labaid Specialized & Heart Foundation", bn: "ধানমন্ডি ল্যাবএইড ও হার্ট ফাউন্ডেশন" },
      icon: MapPin,
      color: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 grid-dots opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#fb8b24] uppercase">
            {lang === "en" ? "Liaison Desk" : "হেল্প ডেস্ক ও যোগাযোগ"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === "en" ? "Get in Touch with Dr. Adnan" : "ডক্টরের সাথে সরাসরি যোগাযোগ করুন"}
          </h2>
          <div className="w-16 h-1 bg-[#0f4c5c] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-light pt-2">
            {lang === "en"
              ? "Submit general inquiries, medical seminar invitations, or ask detailed queries regarding cardiovascular support."
              : "স্বাস্থ্যগত তথ্য জানা, নতুন সেমিনারে বক্তব্য রাখার আমন্ত্রণ বা চেম্বার সংক্রান্ত যেকোনো তথ্যের জন্য নিচের ফর্মটি ব্যবহার করুন।"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left info desk segment */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {contactCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  className="block p-5 bg-white border border-slate-200/60 rounded-3xl hover:border-[#0f4c5c] shadow-md hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <span className={`p-3 rounded-2xl flex-shrink-0 ${card.color}`}>
                      <card.icon className="w-5 h-5" />
                    </span>
                    <div className="space-y-1.5 min-w-0">
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {card.title[lang]}
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-[#0f4c5c] truncate select-all">
                        {card.value}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {card.desc[lang]}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social handles and medical licensing block */}
            <div className="bg-[#0f4c5c0d] p-6 rounded-3xl border border-[#0f4c5c10] text-left space-y-4">
              <div className="space-y-1">
                <h5 className="font-display font-extrabold text-sm text-slate-800">
                  {lang === "en" ? "Social Health Feeds" : "সামাজিক স্বাস্থ্য যোগাযোগ"}
                </h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {lang === "en"
                    ? "Follow Dr. Adnan Chowdhury on clinical video networks and public portals to view his helpful heart tips."
                    : "সামাজিক প্ল্যাটফর্মে ড. সুহৃদকে ফলো করে হার্ট ভালো রাখার দৈনিক বৈজ্ঞানিক টিপসগুলো ভিডিওতে দেখে নিন।"}
                </p>
              </div>

              {/* Social Icons row */}
              <div className="flex space-x-3.5">
                <a
                  href={profile.facebook}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-[#3b5998] hover:text-white border border-slate-200 text-slate-700 rounded-xl transition-all shadow-xs cursor-pointer"
                  title="Facebook Profile Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-[#0077b5] hover:text-white border border-slate-200 text-slate-700 rounded-xl transition-all shadow-xs cursor-pointer"
                  title="LinkedIn Academy"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {profile.youtube && (
                  <a
                    href={profile.youtube}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                    className="p-3 bg-white hover:bg-[#ff0000] hover:text-white border border-slate-200 text-slate-700 rounded-xl transition-all shadow-xs cursor-pointer"
                    title="YouTube Patient Channel"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Inquiry form segment */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-xl text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Send a Direct Message" : "সরাসরি বার্তা পাঠান"}
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  {lang === "en"
                    ? "Fill in your criteria below. Responses are usually routed to your inbox within 24 working hours."
                    : "নিচের বক্সে আপনার যোগাযোগের ঠিকানা ও টেক্সট লিখুন। আমরা ২৪ ঘণ্টার মধ্যে ইমেইলে রিপ্লাই করবো।"}
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-slate-755 block">
                    {lang === "en" ? "Your Full Name *" : "আপনার নাম *"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={lang === "en" ? "e.g., M. Chowdhury" : "যেমন: মো: মশিউর রহমান"}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-slate-755 block">
                    {lang === "en" ? "Your Email Address *" : "আপনার ইমেইল ঠিকানা *"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g., yourname@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-slate-755 block">
                    {lang === "en" ? "Message Subject" : "বার্তার বিষয়"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={lang === "en" ? "e.g. Academic seminar, general query" : "যেমন: সেমিনারের আমন্ত্রণ, হার্ট রিঙের তথ্য ইত্যাদি"}
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-slate-755 block">
                    {lang === "en" ? "Your Detailed Message *" : "আপনার বার্তার বিবরণ বা প্রশ্ন *"}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={lang === "en" ? "Draft your paragraph text here..." : "ডিটেইলস প্রশ্নটি এখানে লিখুন..."}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                  />
                </div>

                {/* Submitting Status checks */}
                <div className="pt-2">
                  {submitted ? (
                    <div className="p-3 bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold rounded-2xl border border-emerald-100 flex items-center space-x-2">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>
                        {lang === "en" 
                          ? "Message delivered successfully! Thank you." 
                          : "বার্তা গৃহীত হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।"
                        }
                      </span>
                    </div>
                  ) : (
                    <button
                      id="btn-contact-submit"
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center space-x-2 bg-[#0f4c5c] hover:bg-[#0f4c5cd6] text-white py-3.5 rounded-2xl font-bold transition-all text-xs sm:text-sm cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{lang === "en" ? "Send Message Mail" : "বার্তা পাঠান"}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

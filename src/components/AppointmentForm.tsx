/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { CalendarRange, User, Phone, CheckCircle, Clock, Trash2, ShieldCheck, Heart, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chambers, doctorProfile } from "../data";
import { AppointmentRequest } from "../types";

interface AppointmentFormProps {
  lang: "en" | "bn";
  selectedChamberId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AppointmentForm({ lang, selectedChamberId = "", isOpen, onClose }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    patientName: "",
    patientPhone: "",
    preferredDate: "",
    preferredTime: "17:30",
    chamberId: selectedChamberId || chambers[0].id,
    reason: ""
  });

  const [bookingHistory, setBookingHistory] = useState<AppointmentRequest[]>([]);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [lastSubmittedBooking, setLastSubmittedBooking] = useState<AppointmentRequest | null>(null);

  // Sync selected chamber prop
  useEffect(() => {
    if (selectedChamberId) {
      setFormData((prev) => ({ ...prev, chamberId: selectedChamberId }));
    }
  }, [selectedChamberId]);

  // Load bookings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dr_adnan_appointments");
    if (saved) {
      try {
        setBookingHistory(JSON.parse(saved));
      } catch (err) {
        console.error("Error loading appointment history", err);
      }
    }
  }, []);

  const timeSlots = [
    { value: "09:30", label: { en: "09:30 AM (NHF Mirpur)", bn: "সকাল ০৯:৩০ (মিরপুর)" } },
    { value: "11:30", label: { en: "11:30 AM (NHF Mirpur)", bn: "বেলা ১১:৩০ (মিরপুর)" } },
    { value: "17:30", label: { en: "05:30 PM (Labaid Dhanmondi)", bn: "বিকাল ০৫:৩০ (ল্যাবএইড)" } },
    { value: "18:30", label: { en: "06:30 PM (Labaid Dhanmondi)", bn: "সন্ধ্যা ০৬:৩০ (ল্যাবএইড)" } },
    { value: "19:30", label: { en: "07:30 PM (Labaid Dhanmondi)", bn: "সন্ধ্যা ০৭:৩০ (ল্যাবএইড)" } },
    { value: "20:30", label: { en: "08:30 PM (Labaid Dhanmondi)", bn: "রাত ০৮:৩০ (ল্যাবএইড)" } }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.patientName || !formData.patientPhone || !formData.preferredDate) {
      alert(lang === "en" ? "Please fill in all mandatory fields." : "দয়া করে প্রয়োজনীয় সব তথ্য দিন।");
      return;
    }

    const newBooking: AppointmentRequest = {
      id: "booking-" + Date.now(),
      patientName: formData.patientName,
      patientPhone: formData.patientPhone,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      chamberId: formData.chamberId,
      reason: formData.reason || (lang === "en" ? "General Consultation" : "সাধারণ স্বাস্থ্য পরমার্শ"),
      status: "pending",
      createdAt: new Date().toLocaleDateString(lang === "en" ? "en-US" : "bn-BD")
    };

    const updatedHistory = [newBooking, ...bookingHistory];
    setBookingHistory(updatedHistory);
    localStorage.setItem("dr_adnan_appointments", JSON.stringify(updatedHistory));

    setLastSubmittedBooking(newBooking);
    setIsSuccessModalOpen(true);

    // Reset Form (maintain default settings)
    setFormData({
      patientName: "",
      patientPhone: "",
      preferredDate: "",
      preferredTime: "17:30",
      chamberId: selectedChamberId || chambers[0].id,
      reason: ""
    });
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookingHistory.filter((b) => b.id !== id);
    setBookingHistory(updated);
    localStorage.setItem("dr_adnan_appointments", JSON.stringify(updated));
  };

  const getChamberName = (id: string) => {
    const ch = chambers.find((c) => c.id === id);
    return ch ? ch.name[lang] : id;
  };

  const getSelectedChamberAssistantPhone = () => {
    const ch = chambers.find((c) => c.id === formData.chamberId);
    return ch ? ch.assistantPhone : doctorProfile.phone;
  };

  return (
    <section id="appointment" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 grid-dots opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-xl space-y-6">
            
            <div className="space-y-2 text-left">
              <span className="text-xs font-mono font-bold text-[#fb8b24] uppercase tracking-wider block">
                {lang === "en" ? "Online Verification Request" : "অনলাইন সিরিয়াল বুকিং ফর্ম"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                <CalendarRange className="w-6 h-6 text-[#0f4c5c]" />
                <span>{lang === "en" ? "Submit Appointment Slip" : "সিরিয়ালের জন্য আবেদন"}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                {lang === "en"
                  ? "Input doctor visiting slip criteria below. Dr. Adnan’s assistant will call you back within 2 business hours to verify and lock in your priority counter token."
                  : "নিচে রোগীর প্রয়োজনীয় তথ্য দিন। তথ্য জমা দেওয়ামাত্র ২ কর্মঘণ্টার মধ্যে আমাদের সহকারী ফোনে কল দিয়ে সিরিয়াল নম্বরটি চূড়ান্ত করে দেবেন।"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Patient Name */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                  {lang === "en" ? "Patient's Full Name *" : "রোগীর পুরো নাম *"}
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
                  <input
                    id="input-booking-name"
                    type="text"
                    name="patientName"
                    required
                    placeholder={lang === "en" ? "Enter patient's name" : "যেমন: মো: রফিকুল ইসলাম"}
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                  />
                </div>
              </div>

              {/* Patient Phone and Date (Columns on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    {lang === "en" ? "Phone Contact Number *" : "যোগাযোগের ফোন নম্বর *"}
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
                    <input
                      id="input-booking-phone"
                      type="tel"
                      name="patientPhone"
                      required
                      placeholder={lang === "en" ? "01XXXXXXXXX" : "যেমন: ০১৭১২৩৪৫৬৭৮"}
                      value={formData.patientPhone}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    {lang === "en" ? "Preferred Appointment Date *" : "পছন্দসই ভিজিট তারিখ *"}
                  </label>
                  <input
                    id="input-booking-date"
                    type="date"
                    name="preferredDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium text-slate-800 transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Chamber Picker and Time slot Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Chamber selection */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    {lang === "en" ? "Select Desired Chamber Slot" : "পছন্দসই চেম্বার নির্ধারণ"}
                  </label>
                  <select
                    id="select-booking-chamber"
                    name="chamberId"
                    value={formData.chamberId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium text-slate-800 transition-all cursor-pointer"
                  >
                    {chambers.map((chamber) => (
                      <option key={chamber.id} value={chamber.id}>
                        {chamber.name[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred time slot */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    {lang === "en" ? "Estimated Arrival Time-Slot" : "আনুমানিক আগমন সেশন"}
                  </label>
                  <select
                    id="select-booking-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium text-slate-800 transition-all cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reason for visit */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700 block">
                  {lang === "en" ? "Reason for Medical Visit (Optional)" : "সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)"}
                </label>
                <textarea
                  id="textarea-booking-reason"
                  name="reason"
                  rows={2}
                  placeholder={lang === "en" ? "e.g., Routine chest checkup, ECG report evaluation, etc." : "যেমন: বুকে ব্যথা, গ্যাসের সমস্যা নাকি নিয়মিত কার্ডিয়াক চেকআপ"}
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] bg-slate-50 focus:bg-white text-xs sm:text-sm font-medium transition-all"
                />
              </div>

              {/* Legal confirmation stamp */}
              <div className="flex items-start space-x-2.5 p-3.5 bg-[#e5f1f450] rounded-2xl border border-[#0f4c5c15]">
                <ShieldCheck className="w-5 h-5 text-[#0f4c5c] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-normal">
                  {lang === "en"
                    ? "Patient details are kept strictly medical-confidential under HIPA/BMDC regulation guidelines. No advertisements will be sent to your phone."
                    : "বিএমডিসি বিধিমালা অনুযায়ী রোগীর সরবরাহকৃত রোগ সংক্রান্ত যাবতীয় তথ্য সম্পূর্ণ গোপন থাকবে। ওটিপি এবং বুকিং সত্যতা ছাড়া আপনার ফোনে কোনো মেসেজ পাঠানো হবে না।"}
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="btn-booking-submit"
                  type="submit"
                  className="flex-1 bg-[#0f4c5c] text-white py-3.5 rounded-2xl font-bold hover:bg-[#0f4c5cd9] transition-all text-xs sm:text-sm text-center shadow-md cursor-pointer transform active:scale-98"
                >
                  🚀 {lang === "en" ? "Confirm Request & Get Token" : "সিরিয়াল আবেদন ও টোকেন নিন"}
                </button>

                <a
                  id="btn-whatsapp-direct-booking"
                  href={`https://wa.me/8801712345678?text=${encodeURIComponent(
                    lang === "en"
                      ? "Hello, I want to book a cardiac serial appointment with Prof. Dr. Adnan Chowdhury."
                      : "নমস্কার, আমি প্রফেসর ড. আদনান চৌধুরীর চেম্বারে একটি সিরিয়াল বুক করতে চাই।"
                  )}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className="flex-shrink-0 flex items-center justify-center space-x-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 border border-emerald-600/10 text-white rounded-2xl font-bold transition-all text-xs sm:text-sm cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400">
                  {lang === "en"
                    ? "Alternative: You may also contact Assistant directly at "
                    : "অথবা আপনি সরাসরি ফোন করে ও সহকারীকে নাম লেখাতে পারেন: "}
                  <a href={`tel:${getSelectedChamberAssistantPhone()}`} className="underline font-bold text-slate-600 hover:text-[#0f4c5c]">
                    {getSelectedChamberAssistantPhone()}
                  </a>
                </p>
              </div>

            </form>
          </div>

          {/* Booking History & Status panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Consultation Instructions card */}
            <div className="bg-gradient-to-br from-[#0f4c5c]/95 to-[#1c6475] rounded-3xl p-6 text-white text-left shadow-lg space-y-4 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-white/5 rounded-full blur-md" />
              <Heart className="w-8 h-8 text-[#fb8b24] animate-pulse" />
              <div className="space-y-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {lang === "en" ? "Compassionate Patient Care" : "ডক্টরের পরম সহমর্মিতা"}
                </h3>
                <p className="text-xs text-[#e5f1f4ca] leading-relaxed font-light">
                  {lang === "en"
                    ? "We dedicate a minimum of 18-20 minutes to every patient for deep listening, clinical checkup, and stress-reassessment. Never rushed."
                    : "আড়ষ্ট বা দ্রুত দায়সারা চেকআপ নয়, বরং আমাদের চেম্বার প্রটোকলে প্রতিটি রোগীর সূক্ষ্ম বিবরণ শুনতে ১৮-২০ মিনিট বরাদ্দ রাখা হয়।"}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#fb8b24] font-bold">
                <span>⚡ {lang === "en" ? "VIP Care Flow" : "ভিআইপি কেয়ার সুবিধা"}</span>
                <span>REGISTERS OPEN 24/7</span>
              </div>
            </div>

            {/* Local Appts List (Rich functional element) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-lg text-left space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                    {lang === "en" ? "Your Chamber Bookings" : "আপনার বুকিং ট্র্যাকার"}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {lang === "en" ? "Stored privately on your device" : "আপনার ব্রাউজারে সংরক্ষিত ডেটা"}
                  </p>
                </div>
                <span className="bg-[#0f4c5c11] text-[#0f4c5c] text-[10px] font-bold py-1 px-2.5 rounded-full">
                  {bookingHistory.length} {lang === "en" ? "Active" : "টি আবেদন"}
                </span>
              </div>

              {bookingHistory.length > 0 ? (
                <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                  {bookingHistory.map((book) => (
                    <div
                      key={book.id}
                      className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-2xl relative group hover:border-[#0f4c5c] transition-all"
                    >
                      <button
                        onClick={() => handleDeleteBooking(book.id)}
                        className="absolute right-3 top-3 p-1 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title={lang === "en" ? "Cancel slip request" : "আবেদন বাতিল করুন"}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="space-y-2 text-xs">
                        <div className="font-bold text-slate-800 pr-6">
                          {book.patientName}
                        </div>
                        
                        <div className="text-[10px] text-slate-500 space-y-0.5 font-medium">
                          <p>🏥 {getChamberName(book.chamberId)}</p>
                          <p>📅 {book.preferredDate} ({book.preferredTime})</p>
                          <p>💬 {book.reason}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/30 flex items-center justify-between">
                          <span className="text-[10px] text-slate-400 font-mono">
                            {lang === "en" ? "Applied: " : "আবেদনের তারিখ: "} {book.createdAt}
                          </span>
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[9px] font-bold uppercase tracking-wider font-mono">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{lang === "en" ? "Pending Call" : "অপেক্ষমান"}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-slate-400 text-xs sm:text-sm font-light">
                  {lang === "en"
                    ? "Currently, you have no pending appointment slips. Use the form above to lock in a slot."
                    : "এই মুহূর্তে আপনার কোনো বুকিং রিকোয়েস্ট নেই। সিরিয়াল পেতে উপরের ফর্মটি পূরণ করুন সূক্ষ্মভাবে।"}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Booking Success modal */}
      <AnimatePresence>
        {isSuccessModalOpen && lastSubmittedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center border overflow-hidden z-10"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {lang === "en" ? "Chamber Request Received!" : "আবেদন সফলভাবে গৃহীত!"}
              </h3>
              
              <div className="bg-[#e5f1f480] p-4 rounded-2xl border mb-6 text-left space-y-2 text-xs sm:text-sm text-slate-700">
                <p><strong>👤 {lang === "en" ? "Patient Name:" : "রোগীর নাম:"}</strong> {lastSubmittedBooking.patientName}</p>
                <p><strong>🏥 {lang === "en" ? "Chamber:" : "চেম্বার:"}</strong> {getChamberName(lastSubmittedBooking.chamberId)}</p>
                <p><strong>📅 {lang === "en" ? "Preferred Date:" : "পছন্দসই তারিখ:"}</strong> {lastSubmittedBooking.preferredDate}</p>
                <p><strong>🕒 {lang === "en" ? "Arrival Session:" : "আগমন সেশন:"}</strong> {lastSubmittedBooking.preferredTime}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                {lang === "en"
                  ? "We have sent this application to our chamber assistant desk. A representative will call you directly shortly within 2 working hours to assign your sequence counter token."
                  : "আপনার সিরিয়াল বুকিং ডিটেইলস চেম্বার রেজিষ্ট্রারে পাঠানো হয়েছে। আমাদের প্রতিনিধি অতিসত্বর ২ ঘণ্টার মধ্যে আপনার প্রদত্ত ফোন নম্বরে কল দিয়ে সময়সূচী সুনির্দিষ্ট করে দেবেন।"}
              </p>

              <button
                id="btn-success-modal-close"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-3 bg-[#0f4c5c] hover:bg-[#0f4c5cd9] text-white rounded-xl text-xs sm:text-sm font-semibold cursor-pointer shadow-md transition-colors"
              >
                {lang === "en" ? "Return to Portfolio" : "প্রোফাইলে ফিরে যান"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

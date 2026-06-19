/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Chambers from "./components/Chambers";
import AppointmentForm from "./components/AppointmentForm";
import Reviews from "./components/Reviews";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { doctorProfile } from "./data";

export default function App() {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [selectedChamberId, setSelectedChamberId] = useState<string>("");

  const handleOpenBooking = (chamberId?: string) => {
    if (chamberId) {
      setSelectedChamberId(chamberId);
    }
    
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = appointmentSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-800 font-sans selection:bg-[#fb8b2440] selection:text-[#0f4c5c] relative antialiased leading-relaxed pb-16 md:pb-0">
      
      {/* Absolute Decorative Grid Background lines */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#e5f1f435] to-transparent pointer-events-none -z-10" />

      {/* Primary Sticky Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Core Section Layout */}
      <main>
        {/* Hero Banner Grid */}
        <Hero
          profile={doctorProfile}
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 1: About Doctor */}
        <About
          bio={doctorProfile.intro}
          longBio={doctorProfile.longBio}
          lang={lang}
        />

        {/* Section 2: Services / Treatments */}
        <Services lang={lang} />

        {/* Section 3: Chambers Lists and Schedules */}
        <Chambers
          lang={lang}
          onOpenBooking={(id) => handleOpenBooking(id)}
        />

        {/* Section 4: Local appointment booking portal */}
        <AppointmentForm
          lang={lang}
          selectedChamberId={selectedChamberId}
        />

        {/* Section 5: Reviews and patient stories */}
        <Reviews lang={lang} />

        {/* Section 6: Health Articles / Educational Guides */}
        <Articles lang={lang} />

        {/* Section 7: Galleries logs */}
        <Gallery lang={lang} />

        {/* Section 8: FAQ questions */}
        <FAQ lang={lang} />

        {/* Section 9: Direct liaison contacts and forms */}
        <Contact
          profile={doctorProfile}
          lang={lang}
        />
      </main>

      {/* Section 10: Institutional Copyright Footer info */}
      <Footer
        profile={doctorProfile}
        lang={lang}
      />

      {/* Fast persistent overlay elements */}
      <FloatingActions
        lang={lang}
        phone={doctorProfile.phone}
        whatsappUrl={doctorProfile.whatsapp}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Ganesh,
  CoupleAvatar,
  Mandala,
  OrnateCorner,
  Swastik,
  FloralDivider,
} from "@/components/doodles";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("invitation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-3 sm:px-6 py-8 sm:py-12 bg-[#f6f4f0] overflow-hidden">
      {/* Delicate rotating background mandala (pure decorative, ultra-soft) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          className="opacity-[0.04] text-[#c74634]"
        >
          <Mandala className="w-[550px] h-[550px] sm:w-[700px] sm:h-[700px]" />
        </motion.div>
      </div>

      {/* Main Wedding Card / Patrika Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-transparent border-2 border-[#e9e6df] rounded-[10px] p-6 sm:p-10 text-center shadow-sm"
      >
        {/* Inner traditional golden double-border frame */}
        <div className="absolute inset-2 sm:inset-3 border border-[#f0cc71]/50 rounded-[6px] pointer-events-none" />

        {/* 4 Ornate Golden Corners */}
        <div className="absolute top-3 left-3 w-8 h-8 text-[#f0cc71] pointer-events-none">
          <OrnateCorner className="w-full h-full" />
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 text-[#f0cc71] pointer-events-none -scale-x-100">
          <OrnateCorner className="w-full h-full" />
        </div>
        <div className="absolute bottom-3 left-3 w-8 h-8 text-[#f0cc71] pointer-events-none -scale-y-100">
          <OrnateCorner className="w-full h-full" />
        </div>
        <div className="absolute bottom-3 right-3 w-8 h-8 text-[#f0cc71] pointer-events-none -scale-x-100 -scale-y-100">
          <OrnateCorner className="w-full h-full" />
        </div>

        {/* Ganesh & Invocation Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="p-2 rounded-full bg-[#fbf9f8] border border-[#e4e1dd] mb-2">
            <Ganesh className="w-12 h-12 text-[#c74634]" />
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#312d2a]">
            <Swastik className="w-3.5 h-3.5 text-[#c74634]" />
            <span>॥ श्री गणेशाय नमः ॥</span>
            <Swastik className="w-3.5 h-3.5 text-[#c74634]" />
          </div>
        </motion.div>

        {/* Title: Shubh Vivah */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="my-2"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c74634] font-semibold">
            ॥ शुभ परिणय ॥
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#161513] font-bold tracking-normal mt-1 mb-2">
            शुभ विवाह
          </h1>
          {/* Accent Gold Bar */}
          <div className="w-12 h-1 bg-[#f0cc71] mx-auto rounded-full mb-3" />
        </motion.div>

        {/* Animated Couple Avatar */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="my-3 flex justify-center"
        >
          <div className="p-2 rounded-full bg-[#fbf9f8] border border-[#e4e1dd]/80">
            <CoupleAvatar className="w-40 h-32 sm:w-48 sm:h-36 text-[#312d2a]" />
          </div>
        </motion.div>

        {/* Couple Names: Rajkumar sang Anshika */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="my-3 space-y-1"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-2xl sm:text-4xl font-serif text-[#161513]">
            <span className="font-bold text-[#161513]">राजकुमार</span>
            <span className="inline-flex items-center justify-center text-xs sm:text-sm font-sans font-medium text-[#c74634] px-2.5 py-0.5 border border-[#c74634]/40 rounded-full bg-[#fff5f5]">
              संग
            </span>
            <span className="font-bold text-[#161513]">अंशिका</span>
          </div>
          <p className="text-xs sm:text-sm text-[#312d2a]/80 font-medium pt-1">
            यादव परिवार का पावन वैवाहिक उत्सव
          </p>
        </motion.div>

        {/* Date and Venue Strip - properly styled without squishing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full max-w-lg mx-auto my-4 p-3 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[6px]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#312d2a]">
            <div className="flex items-center gap-1.5 font-semibold text-[#161513] whitespace-nowrap">
              <Calendar className="w-4 h-4 text-[#c74634] shrink-0" />
              <span>मंगलवार, 24 नवम्बर 2026 (रात्रि)</span>
            </div>
            <span className="hidden sm:inline text-[#aea8a2]">|</span>
            <div className="flex items-center gap-1.5 font-medium text-[#312d2a] whitespace-nowrap">
              <MapPin className="w-4 h-4 text-[#c74634] shrink-0" />
              <span>वीरभानपुर, जौनपुर (उ०प्र०)</span>
            </div>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <div className="my-2">
          <CountdownTimer />
        </div>

        {/* Bottom CTA / Read Invitation */}
        <div className="pt-2">
          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#312d2a] text-[#ffffff] hover:bg-[#47423e] transition-all rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f0cc71]" />
            <span>सस्नेह निमंत्रण पत्र देखें</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </motion.div>

      {/* Decorative Bottom Divider */}
      <FloralDivider className="w-56 max-w-xs text-[#312d2a]/30 mt-6" />
    </section>
  );
}

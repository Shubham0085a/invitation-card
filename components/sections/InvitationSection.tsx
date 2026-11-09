"use client";

import { motion } from "framer-motion";
import { Paisley, Diya, FloralDivider } from "@/components/doodles";
import { CalendarPlus } from "lucide-react";

export function InvitationSection() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("राजकुमार एवं अंशिका का शुभ विवाह");
    const details = encodeURIComponent(
      "राजकुमार यादव संग अंशिका यादव का शुभ विवाह समारोह। स्थान: ग्राम व पोस्ट- वीरभानपुर, जौनपुर।"
    );
    const location = encodeURIComponent("वीरभानपुर, जौनपुर, उत्तर प्रदेश");
    // 2026-11-24 19:00 to 2026-11-25 02:00 UTC+5:30 -> YYYYMMDDTHHMMSSZ format
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261124T133000Z/20261124T203000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section
      id="invitation"
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto bg-[#fffbf5] relative"
    >
      {/* Decorative side paisleys */}
      <div className="absolute top-8 left-2 hidden md:block opacity-25 pointer-events-none">
        <Paisley className="w-16 h-28 text-[#c28b14]" />
      </div>
      <div className="absolute top-8 right-2 hidden md:block opacity-25 pointer-events-none transform -scale-x-100">
        <Paisley className="w-16 h-28 text-[#c28b14]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-3"
      >
        <span className="text-xs uppercase tracking-widest text-[#991b1b] font-semibold">
          ॥ शुभ निमंत्रण पत्र ॥
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#7f1d1d] font-normal">
          सस्नेह निमंत्रण
        </h2>
        <div className="w-12 h-0.5 bg-[#c28b14] mx-auto mt-2" />
      </motion.div>

      {/* Auspicious Shlokas */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-8 p-6 bg-[#fdf8f0] border border-[#e8d5be] rounded-[8px] text-center max-w-2xl mx-auto space-y-4 shadow-sm"
      >
        <div className="flex justify-center items-center gap-3 text-[#c28b14]">
          <Diya className="w-5 h-5 text-[#c28b14]" />
          <span className="text-xs tracking-wider text-[#92400e] font-medium">मंगल श्लोक</span>
          <Diya className="w-5 h-5 text-[#c28b14]" />
        </div>

        <p className="font-serif text-sm sm:text-base text-[#7f1d1d] leading-relaxed font-semibold">
          मंगलम् भगवान विष्णुः मंगलम् गरूणध्वजः। <br />
          मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरि:॥
        </p>
        <p className="font-serif text-xs sm:text-sm text-[#92400e] leading-relaxed italic">
          विघ्न हरण मंगल करण, गणनायक महाराज। <br />
          प्रथम निमंत्रण आपको, पूरण कीजै सब काज॥
        </p>
      </motion.div>

      {/* Core Invitation Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto space-y-4 my-8"
      >
        <p className="text-base sm:text-lg font-serif font-bold text-[#7f1d1d]">
          मान्यवर,
        </p>
        <p className="text-sm sm:text-base text-[#78350f] leading-relaxed">
          परमपिता परमेश्वर की असीम अनुकम्पा से जीवन की सलोनी डगर पर चलने वाले दो पथिक
        </p>
      </motion.div>

      {/* Bride & Groom Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-6 bg-[#fdf8f0] border border-[#e8d5be] rounded-[8px] flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#ffffff] bg-[#881337] px-2.5 py-1 rounded-[4px]">
                वर
              </span>
              <span className="text-xs text-[#92400e] font-medium">चिरंजीव</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#7f1d1d] mb-3">
              चि० राजकुमार यादव
            </h3>
            <div className="text-xs sm:text-sm text-[#78350f] space-y-1.5 border-t border-[#e8d5be] pt-3">
              <p>
                <span className="font-semibold text-[#7f1d1d]">सुपुत्र:</span> श्री राजेश कुमार यादव
              </p>
              <p>
                <span className="font-semibold text-[#7f1d1d]">सुपौत्र:</span> स्व० श्रीराम यादव
              </p>
              <p className="text-[#92400e] pt-1">
                निवास: ग्राम व पो०- वीरभानपुर, जिला- जौनपुर
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-6 bg-[#fdf8f0] border border-[#e8d5be] rounded-[8px] flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#ffffff] bg-[#991b1b] px-2.5 py-1 rounded-[4px]">
                वधू
              </span>
              <span className="text-xs text-[#92400e] font-medium">आयुष्मती कन्या</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#7f1d1d] mb-3">
              आयु०कु० अंशिका यादव
            </h3>
            <div className="text-xs sm:text-sm text-[#78350f] space-y-1.5 border-t border-[#e8d5be] pt-3">
              <p>
                <span className="font-semibold text-[#7f1d1d]">सुपुत्री:</span> श्री ओमप्रकाश यादव
              </p>
              <p>
                <span className="font-semibold text-[#7f1d1d]">सुपौत्री:</span> श्री कुंवरचन्द्र यादव
              </p>
              <p className="text-[#92400e] pt-1">
                निवास: ग्राम- अनुसार, पो०- बहरीपुर, जिला- जौनपुर
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Auspicious Blessing Request */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto my-8 p-6 border-y border-[#e8d5be] space-y-3"
      >
        <p className="text-base sm:text-lg font-serif font-bold text-[#7f1d1d]">
          के परिणय सूत्र बन्धन
        </p>
        <p className="text-xs sm:text-sm text-[#78350f] leading-relaxed">
          पर आपके आगमन की अभिलाषा एवं आशीर्वाद की शीतल छाया नव-दम्पति के जीवन को
          आलोकित करे। इसी मंगल कामना के साथ आप महानुभाव सादर आमंत्रित हैं।
        </p>
      </motion.div>

      {/* Action Buttons: Add to Calendar */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#881337] hover:bg-[#700f2d] text-[#ffffff] transition-colors rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer shadow-sm border border-[#9f1239]"
        >
          <CalendarPlus className="w-4 h-4 text-[#fbbf24]" />
          <span>कैलेंडर में जोड़ें (Add to Calendar)</span>
        </button>
      </div>

      <FloralDivider className="w-48 mx-auto text-[#c28b14]/40 mt-8" />
    </section>
  );
}

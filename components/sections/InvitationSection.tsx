"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Paisley, Diya, FloralDivider } from "@/components/doodles";
import { CalendarPlus, Heart, Send, Check } from "lucide-react";

export function InvitationSection() {
  const [blessingSent, setBlessingSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleSendBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (senderName.trim()) {
      setBlessingSent(true);
      setTimeout(() => {
        setSenderName("");
        setSenderMessage("");
      }, 3000);
    }
  };

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
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto bg-[#ffffff] relative"
    >
      {/* Decorative side paisleys */}
      <div className="absolute top-8 left-2 hidden md:block opacity-20 pointer-events-none">
        <Paisley className="w-16 h-28 text-[#312d2a]" />
      </div>
      <div className="absolute top-8 right-2 hidden md:block opacity-20 pointer-events-none transform -scale-x-100">
        <Paisley className="w-16 h-28 text-[#312d2a]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-3"
      >
        <span className="text-xs uppercase tracking-widest text-[#c74634] font-semibold">
          ॥ शुभ निमंत्रण पत्र ॥
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#161513] font-normal">
          सस्नेह निमंत्रण
        </h2>
        <div className="w-12 h-0.5 bg-[#f0cc71] mx-auto mt-2" />
      </motion.div>

      {/* Auspicious Shlokas */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-8 p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] text-center max-w-2xl mx-auto space-y-4"
      >
        <div className="flex justify-center items-center gap-3 text-[#f0cc71]">
          <Diya className="w-5 h-5 text-[#312d2a]" />
          <span className="text-xs tracking-wider text-[#312d2a]/60">मंगल श्लोक</span>
          <Diya className="w-5 h-5 text-[#312d2a]" />
        </div>

        <p className="font-serif text-sm sm:text-base text-[#161513] leading-relaxed">
          मंगलम् भगवान विष्णुः मंगलम् गरूणध्वजः। <br />
          मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरि:॥
        </p>
        <p className="font-serif text-xs sm:text-sm text-[#312d2a]/80 leading-relaxed italic">
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
        <p className="text-base sm:text-lg font-serif font-medium text-[#161513]">
          मान्यवर,
        </p>
        <p className="text-sm sm:text-base text-[#312d2a] leading-relaxed">
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
          className="p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#c74634] bg-[#ffffff] px-2.5 py-1 border border-[#e4e1dd] rounded-[4px]">
                वर
              </span>
              <span className="text-xs text-[#312d2a]/60">चिरंजीव</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#161513] mb-3">
              चि० राजकुमार यादव
            </h3>
            <div className="text-xs sm:text-sm text-[#312d2a] space-y-1.5 border-t border-[#e4e1dd] pt-3">
              <p>
                <span className="font-semibold text-[#161513]">सुपुत्र:</span> श्री राजेश कुमार यादव
              </p>
              <p>
                <span className="font-semibold text-[#161513]">सुपौत्र:</span> स्व० श्रीराम यादव
              </p>
              <p className="text-[#312d2a]/70 pt-1">
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
          className="p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#c74634] bg-[#ffffff] px-2.5 py-1 border border-[#e4e1dd] rounded-[4px]">
                वधू
              </span>
              <span className="text-xs text-[#312d2a]/60">आयुष्मती कन्या</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#161513] mb-3">
              आयु०कु० अंशिका यादव
            </h3>
            <div className="text-xs sm:text-sm text-[#312d2a] space-y-1.5 border-t border-[#e4e1dd] pt-3">
              <p>
                <span className="font-semibold text-[#161513]">सुपुत्री:</span> श्री ओमप्रकाश यादव
              </p>
              <p>
                <span className="font-semibold text-[#161513]">सुपौत्री:</span> श्री कुंवरचन्द्र यादव
              </p>
              <p className="text-[#312d2a]/70 pt-1">
                निवास: ग्राम- अनुसार, पो०- बहरीपुर (राजेपुर), जिला- जौनपुर - 222180
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
        className="text-center max-w-2xl mx-auto my-8 p-6 border-y border-[#e4e1dd] space-y-3"
      >
        <p className="text-base sm:text-lg font-serif font-semibold text-[#161513]">
          के परिणय सूत्र बन्धन
        </p>
        <p className="text-xs sm:text-sm text-[#312d2a] leading-relaxed">
          पर आपके आगमन की अभिलाषा एवं आशीर्वाद की शीतल छाया नव-दम्पति के जीवन को
          आलोकित करे। इसी मंगल कामना के साथ आप महानुभाव सादर आमंत्रित हैं।
        </p>
      </motion.div>

      {/* Action Buttons: Add to Calendar & Send Blessings */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#312d2a] text-[#ffffff] hover:bg-[#47423e] transition-colors rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer"
        >
          <CalendarPlus className="w-4 h-4 text-[#f0cc71]" />
          <span>कैलेंडर में जोड़ें (Add to Calendar)</span>
        </button>
      </div>

      {/* Interactive Wishes / Greetings Box */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-md mx-auto my-10 p-5 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px]"
      >
        <div className="flex items-center gap-2 mb-3 text-[#161513]">
          <Heart className="w-4 h-4 text-[#c74634] fill-[#c74634]" />
          <h4 className="text-sm font-semibold">शुभकामना संदेश प्रेषित करें</h4>
        </div>

        {blessingSent ? (
          <div className="p-3 bg-white border border-[#e4e1dd] text-[#33553c] text-xs rounded flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>आपका आशीर्वाद एवं शुभकामना संदेश सप्रेम प्राप्त हुआ! धन्यवाद।</span>
          </div>
        ) : (
          <form onSubmit={handleSendBlessing} className="space-y-3">
            <input
              type="text"
              required
              placeholder="आपका नाम (Your Name)"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full text-xs p-2.5 bg-[#ffffff] border border-[#d4cfca] rounded-[4px] focus:outline-none focus:border-[#312d2a]"
            />
            <textarea
              rows={2}
              placeholder="नव-दम्पति के लिए आशीर्वाद / शुभकामना संदेश..."
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
              className="w-full text-xs p-2.5 bg-[#ffffff] border border-[#d4cfca] rounded-[4px] focus:outline-none focus:border-[#312d2a]"
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#ffffff] hover:bg-[#f1efed] text-[#312d2a] border border-[#312d2a] text-xs font-medium rounded-[4px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>आशीर्वाद भेजें</span>
            </button>
          </form>
        )}
      </motion.div> */}

      <FloralDivider className="w-48 mx-auto text-[#312d2a]/30 mt-8" />
    </section>
  );
}


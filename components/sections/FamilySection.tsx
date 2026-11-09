"use client";

import { motion } from "framer-motion";
import { FloralDivider, Diya } from "@/components/doodles";
import { Phone, Share2, Users, HeartHandshake, Eye } from "lucide-react";

export function FamilySection() {
  const handleShare = () => {
    const text = encodeURIComponent(
      "॥ श्री गणेशाय नमः ॥\nशुभ विवाह निमंत्रण: राजकुमार संग अंशिका\nदिनांक: 24 नवम्बर 2026\nस्थान: वीरभानपुर, जौनपुर।\nसादर आमंत्रित हैं!"
    );
    if (navigator.share) {
      navigator
        .share({
          title: "शुभ विवाह निमंत्रण - राजकुमार संग अंशिका",
          text: "राजकुमार एवं अंशिका के शुभ विवाह में आप सादर आमंत्रित हैं।",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#ffffff] relative">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-[#c74634] font-semibold">
            ॥ स्वागतकर्ता ॥
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#161513] font-normal">
            यादव परिवार
          </h2>
          <div className="w-12 h-0.5 bg-[#f0cc71] mx-auto mt-2" />
        </motion.div>

        {/* 3 Columns for विनीत, उत्तरापेक्षी, दर्शनाभिलाषी */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* 1. विनीत (Hosts) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between text-center"
          >
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f1efed] flex items-center justify-center text-[#c74634]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#c74634] mb-3">
                विनीत
              </h3>
              <div className="space-y-1 font-serif text-lg sm:text-xl text-[#161513] font-bold">
                <p>राजेश कुमार यादव</p>
                <p>रामाशंकर यादव</p>
              </div>
              <div className="text-xs text-[#312d2a]/80 mt-4 pt-3 border-t border-[#e4e1dd] space-y-1">
                <p>ग्राम व पो०- वीरभानपुर</p>
                <p>जिला- जौनपुर (उ०प्र०)</p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#e4e1dd]">
              <a
                href="tel:9935326130"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[#312d2a] text-[#ffffff] hover:bg-[#47423e] transition-colors rounded-[4px] text-xs font-medium cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>संपर्क: 9935326130</span>
              </a>
            </div>
          </motion.div>

          {/* 2. उत्तरापेक्षी */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between text-center"
          >
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f1efed] flex items-center justify-center text-[#312d2a]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#312d2a] mb-3">
                उत्तरापेक्षी
              </h3>
              <div className="space-y-2 font-serif text-lg sm:text-xl text-[#161513] font-bold">
                <p>अमर बहादुर यादव</p>
                <p>शेर बहादुर यादव</p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e4e1dd] text-xs text-[#312d2a]/70">
              शुभ आशीर्वाद एवं मार्गदर्शन
            </div>
          </motion.div>

          {/* 3. दर्शनाभिलाषी */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-[#fbf9f8] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between text-center"
          >
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f1efed] flex items-center justify-center text-[#312d2a]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#312d2a] mb-3">
                दर्शनाभिलाषी
              </h3>
              <div className="space-y-1 text-xs sm:text-sm text-[#161513] font-medium leading-relaxed">
                <p>शुभम यादव, शिवम यादव</p>
                <p>विजय यादव, अमित यादव</p>
                <p>अमन यादव, गोलू यादव</p>
                <p className="font-bold text-[#c74634] pt-2">
                  एवं समस्त यादव परिवार
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-[#e4e1dd] text-xs text-[#312d2a]/70">
              सप्रेम प्रतिक्षारत
            </div>
          </motion.div>
        </div>

        {/* Share Button */}
        <div className="flex justify-center my-8">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffffff] border border-[#312d2a] text-[#312d2a] hover:bg-[#f1efed] transition-colors rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>निमंत्रण पत्र साझा करें (Share Invitation)</span>
          </button>
        </div>

        <FloralDivider className="w-48 mx-auto text-[#312d2a]/30 mt-6" />
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { OmSymbol, Swastik } from "@/components/doodles";
import { Phone, Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-14 px-4 sm:px-6 bg-[#211e1c] text-[#ffffff] text-center border-t border-[#312d2a] relative">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Sacred Symbols */}
        <div className="flex justify-center items-center gap-4 text-[#f0cc71]">
          <Swastik className="w-5 h-5 text-[#f0cc71]" />
          <OmSymbol className="w-6 h-6 text-[#f0cc71]" />
          <Swastik className="w-5 h-5 text-[#f0cc71]" />
        </div>

        {/* Closing Blessing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-base sm:text-lg font-serif font-medium text-[#fbf9f8]">
            ॥ आपकी गरिमामयी उपस्थिति ही हमारा परम सौभाग्य होगा ॥
          </p>
          <p className="text-xs text-[#ffffff]/70">
            कृपया पधारकर वर-वधू को अपना स्नेह एवं पावन शुभाशीर्वाद प्रदान करें।
          </p>
        </motion.div>

        <div className="w-16 h-0.5 bg-[#f0cc71] mx-auto opacity-70" />

        {/* Contacts */}
        <div className="text-xs text-[#ffffff]/80 space-y-1">
          <p className="font-semibold text-[#ffffff]">
            राजेश कुमार यादव एवं समस्त यादव परिवार
          </p>
          <p className="text-[#ffffff]/60">
            ग्राम व पो०- वीरभानपुर, जिला- जौनपुर (उ०प्र०)
          </p>
          <div className="pt-2 flex justify-center items-center gap-1.5 text-[#f7e0a1]">
            <Phone className="w-3.5 h-3.5" />
            <a href="tel:9935326130" className="hover:underline">
              9935326130
            </a>
          </div>
        </div>

        {/* Subtle Bottom line */}
        <div className="pt-6 border-t border-[#ffffff]/10 text-[11px] text-[#ffffff]/40 flex items-center justify-center gap-1">
          <span>सस्नेह निमंत्रण</span>
          <Heart className="w-3 h-3 text-[#c74634] fill-[#c74634]" />
          <span>राजकुमार संग अंशिका</span>
        </div>
      </div>
    </footer>
  );
}


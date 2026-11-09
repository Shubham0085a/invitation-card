"use client";

import { motion } from "framer-motion";
import { Bells, Diya, Swastik } from "@/components/doodles";
import { Calendar, Clock, Sparkles } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      id: "ramayan-start",
      title: "अखण्ड रामायण पाठ प्रारम्भ",
      date: "22 नवम्बर 2026",
      day: "रविवार",
      time: "प्रातः काल",
      desc: "प्रभु श्रीराम के पावन गुणगान एवं मंगल पाठ का शुभारम्भ",
      badge: "धार्मिक अनुष्ठान",
    },
    {
      id: "ramayan-end",
      title: "समापन, हवन व प्रीतिभोज",
      date: "23 नवम्बर 2026",
      day: "सोमवार",
      time: "दोपहर 12:00 बजे से",
      desc: "रामायण पाठ की पूर्णाहूति, पवित्र हवन एवं स्नेहयुक्त प्रीतिभोज",
      badge: "महाप्रसाद",
    },
    {
      id: "haldi-mehendi",
      title: "हल्दी व मेंहदी रस्म",
      date: "23 नवम्बर 2026",
      day: "सोमवार",
      time: "सायंकाल 4:00 बजे",
      desc: "सगुन की पीली हल्दी एवं हाथों पर रचेगी शगुन की मेंहदी",
      badge: "पारंपरिक रस्म",
    },
    {
      id: "shubh-vivah",
      title: "शुभ विवाह (पाणिग्रहण संस्कार)",
      date: "24 नवम्बर 2026",
      day: "मंगलवार",
      time: "रात्रि काल",
      desc: "शुभ लग्न, वरमाला, फेरे एवं सिंदूरदान का परम पावन संस्कार",
      badge: "मुख्य उत्सव",
      highlight: true,
    },
    {
      id: "vadhu-aagman",
      title: "वधू आगमन (गृह प्रवेश)",
      date: "25 नवम्बर 2026",
      day: "बुधवार",
      time: "प्रातः काल",
      desc: "लक्ष्मी स्वरूपा नववधू का शुभ गृह प्रवेश एवं कुलदेवता पूजन",
      badge: "आशीर्वाद",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#fbf9f8] border-y border-[#e4e1dd] relative">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-2"
        >
          <div className="flex justify-center items-center gap-2 mb-1">
            <Bells className="w-6 h-6 text-[#312d2a]" />
            <Swastik className="w-5 h-5 text-[#c74634]" />
            <Bells className="w-6 h-6 text-[#312d2a] transform -scale-x-100" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#161513] font-normal">
            वैवाहिक कार्यक्रम
          </h2>
          <p className="text-xs sm:text-sm text-[#312d2a]/70">
            पावन मांगलिक अवसरों की समयावली
          </p>
          <div className="w-12 h-0.5 bg-[#f0cc71] mx-auto mt-2" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#e4e1dd] space-y-8 sm:space-y-10 my-8">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  evt.highlight
                    ? "bg-[#c74634] border-[#ffffff] ring-4 ring-[#c74634]/20"
                    : "bg-[#ffffff] border-[#312d2a]"
                }`}
              />

              {/* Event Card */}
              <div
                className={`p-5 rounded-[8px] border transition-all ${
                  evt.highlight
                    ? "bg-[#ffffff] border-[#c74634]/40 ring-1 ring-[#c74634]/20"
                    : "bg-[#ffffff] border-[#e4e1dd] hover:border-[#d4cfca]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-[4px] ${
                      evt.highlight
                        ? "bg-[#c74634] text-[#ffffff]"
                        : "bg-[#f1efed] text-[#312d2a]"
                    }`}
                  >
                    {evt.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#312d2a]/80 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#c74634]" />
                    <span>
                      {evt.date} ({evt.day})
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#161513] mb-1">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#312d2a]/80 mb-2">
                  {evt.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#312d2a]/70 border-t border-[#e4e1dd] pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#312d2a]/60" />
                  <span>{evt.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barat departure Special Notice (As highlighted in original card) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-5 bg-[#ffffff] border-l-4 border-[#c74634] border border-[#e4e1dd] rounded-[6px]"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#c74634] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#161513] mb-1">
                विशेष सूचना (बारात प्रस्थान)
              </h4>
              <p className="text-xs sm:text-sm text-[#312d2a] leading-relaxed">
                बारात हमारे निवास स्थान <strong>ग्राम व पोस्ट- वीरभानपुर, जौनपुर</strong> से{" "}
                <strong>सायं 3:00 बजे</strong> से अनुसार, बहरीपुर, जौनपुर के लिए प्रस्थान करेगी।
              </p>
            </div>
          </div>
        </motion.div>

        {/* Affiliated Business Note from Original Card */}
        <div className="mt-8 text-center p-3 border border-dashed border-[#e4e1dd] rounded-[4px] max-w-sm mx-auto">
          <p className="text-[11px] text-[#312d2a]/70">सम्बन्धित फर्म</p>
          <p className="text-xs font-semibold text-[#161513]">
            शंकर पैथोलॉजी, नौपेड़वाँ, जौनपुर
          </p>
        </div>
      </div>
    </section>
  );
}


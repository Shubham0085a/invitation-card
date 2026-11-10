"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Home, ExternalLink } from "lucide-react";

export function VenueSection() {
  // Addresses / Plus Codes (No raw coordinates)
  const groomAddress = "QH57+3G8 Wirbhanpur, Uttar Pradesh";
  const brideAddress = "XFX8+9VQ Kanakpur, Uttar Pradesh 222125";

  // Google Maps individual search URLs
  const groomMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    groomAddress
  )}`;
  const brideMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    brideAddress
  )}`;

  // Route navigation between Groom's residence and Bride's venue
  const routeMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    groomAddress
  )}&destination=${encodeURIComponent(brideAddress)}`;

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#fbf5eb] border-t border-[#e8d5be] relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#991b1b] font-semibold">
            ॥ शुभ विवाह स्थल एवं मार्ग ॥
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#7f1d1d] font-normal">
            स्थान एवं मार्ग दर्शन
          </h2>
          <div className="w-12 h-0.5 bg-[#c28b14] mx-auto mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left my-8">
          {/* Groom Residence (Start point of Barat) */}
          <div className="p-6 bg-[#fffdfa] border border-[#e8d5be] rounded-[8px] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#991b1b]">
                  <Home className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-[#7f1d1d]">
                    निवास स्थान (वर पक्ष)
                  </h3>
                </div>
                <span className="text-[11px] bg-[#fdf2e4] text-[#92400e] px-2 py-0.5 rounded-[4px] font-semibold">
                  बारात आरम्भ
                </span>
              </div>

              <p className="text-base font-serif font-bold text-[#7f1d1d] mb-1">
                ग्राम व पो०- वीरभानपुर
              </p>
              <p className="text-xs sm:text-sm text-[#78350f] mb-3">
                जिला- जौनपुर (उत्तर प्रदेश)
              </p>
            </div>

            <div>
              <div className="text-xs text-[#92400e] border-t border-[#e8d5be] pt-3 mb-3 flex items-center gap-1.5 font-medium">
                <Car className="w-4 h-4 text-[#991b1b]" />
                <span>बारात प्रस्थान: सायं 3:00 बजे</span>
              </div>
            </div>
          </div>

          {/* Bride Residence (Wedding Venue / पाणिग्रहण स्थल) */}
          <div className="p-6 bg-[#fffdfa] border border-[#e8d5be] rounded-[8px] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#991b1b]">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-[#7f1d1d]">
                    शुभ विवाह स्थल (वधू पक्ष)
                  </h3>
                </div>
                <span className="text-[11px] bg-[#fdf2e4] text-[#92400e] px-2 py-0.5 rounded-[4px] font-semibold">
                  पाणिग्रहण स्थल
                </span>
              </div>

              <p className="text-base font-serif font-bold text-[#7f1d1d] mb-1">
                ग्राम- अनुसार, पो०- बहरीपुर
              </p>
              <p className="text-xs sm:text-sm text-[#78350f] mb-3">
                जिला- जौनपुर (उत्तर प्रदेश)
              </p>
            </div>

            <div>
              <div className="text-xs text-[#92400e] border-t border-[#e8d5be] pt-3 mb-3 font-medium">
                शुभ विवाह एवं पाणिग्रहण संस्कार (रात्रि)
              </div>
            </div>
          </div>
        </div>

        {/* Route Direction Button between Groom and Bride */}
        <div className="mt-8">
          <a
            href={routeMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#881337] text-[#ffffff] hover:bg-[#700f2d] transition-colors rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer shadow-sm border border-[#9f1239]"
          >
            <Navigation className="w-4 h-4 text-[#fbbf24]" />
            <span>गूगल मैप्स पर बारात मार्ग देखें (वीरभानपुर ➔ अनुसार)</span>
          </a>
          <p className="text-[11px] text-[#92400e] mt-2 font-medium">
            निवास स्थान (वीरभानपुर) से विवाह स्थल (अनुसार, बहरीपुर) के बीच का सीधा रास्ता
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Home, ExternalLink } from "lucide-react";

export function VenueSection() {
  // Coordinates and Plus Codes
  const groomCoords = "25.757806,82.564028";
  const groomPlusCode = "QH57+4J6 Wirbhanpur, Uttar Pradesh";
  const brideAddress = "MQ6F+3VQ, Rajepur, Baharipur, Uttar Pradesh 222180";

  // Google Maps URLs
  const groomMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    groomCoords
  )}`;
  const brideMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    brideAddress
  )}`;
  // Route from Groom's residence to Bride's venue
  const routeMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    groomCoords
  )}&destination=${encodeURIComponent(brideAddress)}`;

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f1efed] border-t border-[#e4e1dd] relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-[#c74634] font-semibold">
            ॥ शुभ विवाह स्थल एवं मार्ग ॥
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#161513] font-normal">
            स्थान एवं मार्ग दर्शन
          </h2>
          <div className="w-12 h-0.5 bg-[#f0cc71] mx-auto mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left my-8">
          {/* Groom Residence (Start point of Barat) */}
          <div className="p-6 bg-[#ffffff] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#c74634]">
                  <Home className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-[#161513]">
                    निवास स्थान (वर पक्ष)
                  </h3>
                </div>
                <span className="text-[11px] bg-[#f1efed] text-[#312d2a] px-2 py-0.5 rounded-[4px] font-medium">
                  बारात आरम्भ
                </span>
              </div>

              <p className="text-base font-serif font-bold text-[#161513] mb-1">
                ग्राम व पो०- वीरभानपुर
              </p>
              <p className="text-xs sm:text-sm text-[#312d2a]/80 mb-3">
                जिला- जौनपुर (उत्तर प्रदेश)
              </p>

              {/* <div className="text-[11px] text-[#312d2a]/70 space-y-1 bg-[#fbf9f8] p-2.5 rounded border border-[#e4e1dd] mb-4">
                <p>
                  <span className="font-semibold text-[#161513]">Plus Code:</span>{" "}
                  {groomPlusCode}
                </p>
                <p>
                  <span className="font-semibold text-[#161513]">Coordinate:</span>{" "}
                  25°45&apos;28.1&quot;N 82°33&apos;50.5&quot;E
                </p>
              </div> */}
            </div>

            <div>
              <div className="text-xs text-[#312d2a]/80 border-t border-[#e4e1dd] pt-3 mb-3 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#c74634]" />
                <span>बारात प्रस्थान: सायं 3:00 बजे</span>
              </div>
            </div>
          </div>

          {/* Bride Residence (Wedding Venue / पाणिग्रहण स्थल) */}
          <div className="p-6 bg-[#ffffff] border border-[#e4e1dd] rounded-[8px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#c74634]">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-[#161513]">
                    शुभ विवाह स्थल (वधू पक्ष)
                  </h3>
                </div>
                <span className="text-[11px] bg-[#f1efed] text-[#312d2a] px-2 py-0.5 rounded-[4px] font-medium">
                  पाणिग्रहण स्थल
                </span>
              </div>

              <p className="text-base font-serif font-bold text-[#161513] mb-1">
                ग्राम- अनुसार, पो०- बहरीपुर
              </p>
              <p className="text-xs sm:text-sm text-[#312d2a]/80 mb-3">
                जिला- जौनपुर (उत्तर प्रदेश)
              </p>
            </div>

            <div>
              <div className="text-xs text-[#312d2a]/80 border-t border-[#e4e1dd] pt-3 mb-3">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#312d2a] text-[#ffffff] hover:bg-[#47423e] transition-colors rounded-[4px] text-xs sm:text-sm font-medium cursor-pointer shadow-sm"
          >
            <Navigation className="w-4 h-4 text-[#f0cc71]" />
            <span>गूगल मैप्स पर बारात मार्ग देखें (वीरभानपुर ➔ बहरीपुर)</span>
          </a>
          <p className="text-[11px] text-[#312d2a]/70 mt-2">
            निवास स्थान (वीरभानपुर) से विवाह स्थल (अनुसार, बहरीपुर) के बीच का सीधा रास्ता
          </p>
        </div>
      </div>
    </section>
  );
}

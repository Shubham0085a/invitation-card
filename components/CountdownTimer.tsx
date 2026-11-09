"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  // Target: 24 November 2026, 19:00:00 (Wedding evening)
  const targetDate = new Date("2026-11-24T19:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "शुभ दिवस", value: timeLeft.days },
    { label: "घंटे", value: timeLeft.hours },
    { label: "मिनट", value: timeLeft.minutes },
    { label: "सेकंड", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-sm mx-auto my-3 px-1">
      <div className="text-center text-[11px] sm:text-xs tracking-wider text-[#92400e] font-medium mb-2">
        शुभ विवाह के पावन क्षण की प्रतीक्षा
      </div>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center p-2 sm:p-2.5 bg-[#fdf8f0] border border-[#e8d5be] rounded-[4px]"
          >
            <span suppressHydrationWarning className="text-base sm:text-xl font-serif font-bold text-[#7f1d1d]">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#92400e] mt-0.5 font-medium">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


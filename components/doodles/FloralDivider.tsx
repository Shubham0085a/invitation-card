interface FloralDividerProps {
  className?: string;
}

export function FloralDivider({ className }: FloralDividerProps) {
  return (
    <svg
      viewBox="0 0 400 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Center flower */}
      {/* Petals */}
      <path d="M 200 18 C 196 14, 196 8, 200 6 C 204 8, 204 14, 200 18" />
      <path d="M 200 32 C 196 36, 196 42, 200 44 C 204 42, 204 36, 200 32" />
      <path d="M 193 25 C 189 21, 183 21, 181 25 C 183 29, 189 29, 193 25" />
      <path d="M 207 25 C 211 21, 217 21, 219 25 C 217 29, 211 29, 207 25" />
      {/* Diagonal petals */}
      <path d="M 195 20 C 189 17, 186 12, 189 9 C 192 10, 194 15, 195 20" />
      <path d="M 205 20 C 211 17, 214 12, 211 9 C 208 10, 206 15, 205 20" />
      <path d="M 195 30 C 189 33, 186 38, 189 41 C 192 40, 194 35, 195 30" />
      <path d="M 205 30 C 211 33, 214 38, 211 41 C 208 40, 206 35, 205 30" />
      {/* Center circle */}
      <circle cx="200" cy="25" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="200" cy="25" r="5" strokeWidth="0.8" />

      {/* Left vine */}
      <path
        d="M 181 25 C 165 24, 150 22, 130 24 C 110 26, 90 23, 70 25 C 50 27, 30 24, 10 25"
        strokeWidth="0.9"
      />

      {/* Right vine */}
      <path
        d="M 219 25 C 235 24, 250 22, 270 24 C 290 26, 310 23, 330 25 C 350 27, 370 24, 390 25"
        strokeWidth="0.9"
      />

      {/* Left leaves */}
      <path d="M 160 23 C 155 17, 148 17, 150 23" strokeWidth="0.8" />
      <path d="M 145 24 C 142 30, 136 31, 135 25" strokeWidth="0.8" />
      <path d="M 120 25 C 116 19, 110 19, 112 25" strokeWidth="0.8" />
      <path d="M 105 24 C 102 30, 96 31, 95 25" strokeWidth="0.8" />
      <path d="M 82 25 C 78 19, 72 19, 74 25" strokeWidth="0.8" />
      <path d="M 60 26 C 57 32, 51 33, 50 27" strokeWidth="0.8" />
      <path d="M 38 25 C 34 19, 28 19, 30 25" strokeWidth="0.8" />

      {/* Right leaves */}
      <path d="M 240 23 C 245 17, 252 17, 250 23" strokeWidth="0.8" />
      <path d="M 255 24 C 258 30, 264 31, 265 25" strokeWidth="0.8" />
      <path d="M 280 25 C 284 19, 290 19, 288 25" strokeWidth="0.8" />
      <path d="M 295 24 C 298 30, 304 31, 305 25" strokeWidth="0.8" />
      <path d="M 318 25 C 322 19, 328 19, 326 25" strokeWidth="0.8" />
      <path d="M 340 26 C 343 32, 349 33, 350 27" strokeWidth="0.8" />
      <path d="M 362 25 C 366 19, 372 19, 370 25" strokeWidth="0.8" />

      {/* Tiny dots at vine ends */}
      <circle cx="10" cy="25" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="390" cy="25" r="1.5" fill="currentColor" stroke="none" />

      {/* Small buds near center */}
      <path d="M 170 23 C 168 19, 170 16, 173 19" strokeWidth="0.7" />
      <circle cx="171" cy="16" r="1" fill="currentColor" stroke="none" />
      <path d="M 230 23 C 232 19, 230 16, 227 19" strokeWidth="0.7" />
      <circle cx="229" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

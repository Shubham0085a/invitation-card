interface CoupleAvatarProps {
  className?: string;
}

export function CoupleAvatar({ className }: CoupleAvatarProps) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* === GROOM (left side) === */}

      {/* Groom head */}
      <circle cx="65" cy="55" r="18" strokeWidth="1.3" />

      {/* Turban / Pagdi */}
      <path
        d="M 47 50 
           C 45 38, 52 25, 65 24 
           C 78 25, 85 38, 83 50"
        strokeWidth="1.3"
      />
      {/* Turban folds */}
      <path d="M 50 42 C 55 38, 60 36, 65 35" strokeWidth="0.8" />
      <path d="M 52 46 C 58 43, 64 41, 70 40" strokeWidth="0.8" />
      {/* Turban jewel / sarpech */}
      <path
        d="M 65 26 C 63 20, 65 16, 67 20 C 69 16, 67 20, 65 26"
        strokeWidth="0.8"
      />
      <circle cx="65" cy="26" r="2" fill="currentColor" stroke="none" />

      {/* Sehra (veil of flowers) hanging from turban */}
      <path d="M 47 50 L 46 58" strokeWidth="0.7" />
      <circle cx="46" cy="60" r="1.5" strokeWidth="0.6" />
      <path d="M 49 49 L 48 57" strokeWidth="0.7" />
      <circle cx="48" cy="59" r="1.5" strokeWidth="0.6" />
      <path d="M 51 48 L 50 55" strokeWidth="0.7" />
      <circle cx="50" cy="57" r="1.5" strokeWidth="0.6" />

      {/* Groom eyes */}
      <circle cx="59" cy="53" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="71" cy="53" r="1.2" fill="currentColor" stroke="none" />
      {/* Groom smile */}
      <path d="M 61 60 C 63 63, 67 63, 69 60" strokeWidth="0.8" />

      {/* Groom body / sherwani */}
      <path
        d="M 50 72 
           C 42 78, 38 95, 38 115 
           L 38 165"
        strokeWidth="1.2"
      />
      <path
        d="M 80 72 
           C 88 78, 92 95, 92 115 
           L 92 165"
        strokeWidth="1.2"
      />
      {/* Sherwani neckline / collar */}
      <path d="M 50 72 C 55 76, 58 80, 60 90" strokeWidth="1" />
      <path d="M 80 72 C 75 76, 72 80, 70 90" strokeWidth="1" />
      {/* Center buttons */}
      <circle cx="65" cy="95" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="65" cy="105" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="65" cy="115" r="1.2" fill="currentColor" stroke="none" />
      {/* Dupatta / stole */}
      <path
        d="M 50 72 C 45 80, 40 90, 38 100"
        strokeWidth="0.7"
        strokeDasharray="3 2"
      />

      {/* === BRIDE (right side) === */}

      {/* Bride head */}
      <circle cx="135" cy="55" r="18" strokeWidth="1.3" />

      {/* Hair parting */}
      <path d="M 135 37 C 135 42, 135 47, 135 50" strokeWidth="0.7" />

      {/* Maang tikka (center forehead jewel) */}
      <circle cx="135" cy="42" r="2" fill="currentColor" stroke="none" />
      <path d="M 135 37 L 135 40" strokeWidth="0.8" />

      {/* Veil / Dupatta over head */}
      <path
        d="M 115 48 
           C 110 35, 118 22, 135 20 
           C 152 22, 160 35, 155 48"
        strokeWidth="1.3"
      />
      {/* Veil draping down right side */}
      <path
        d="M 155 48 
           C 158 60, 162 75, 165 95 
           C 167 110, 166 130, 162 165"
        strokeWidth="1"
      />
      {/* Veil border detail */}
      <path
        d="M 158 50 
           C 161 62, 165 78, 168 98 
           C 170 112, 169 132, 165 165"
        strokeWidth="0.6"
        strokeDasharray="2 3"
      />

      {/* Bride eyes */}
      <circle cx="129" cy="53" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="141" cy="53" r="1.2" fill="currentColor" stroke="none" />
      {/* Bindi */}
      <circle cx="135" cy="48" r="1.5" fill="currentColor" stroke="none" />
      {/* Bride smile */}
      <path d="M 131 60 C 133 63, 137 63, 139 60" strokeWidth="0.8" />

      {/* Nose ring */}
      <path d="M 133 56 C 131 57, 131 59, 133 59" strokeWidth="0.7" />

      {/* Earrings */}
      <path d="M 117 58 C 115 62, 116 66, 118 64" strokeWidth="0.7" />
      <circle cx="116" cy="66" r="1.5" fill="currentColor" stroke="none" />
      <path d="M 153 58 C 155 62, 154 66, 152 64" strokeWidth="0.7" />
      <circle cx="154" cy="66" r="1.5" fill="currentColor" stroke="none" />

      {/* Bride body / lehenga */}
      <path
        d="M 120 72 
           C 112 80, 105 100, 102 130 
           L 98 165"
        strokeWidth="1.2"
      />
      <path
        d="M 150 72 
           C 155 80, 158 95, 158 115
           L 158 165"
        strokeWidth="1.2"
      />
      {/* Neckline with necklace */}
      <path
        d="M 120 72 C 125 78, 130 80, 135 82 C 140 80, 145 78, 150 72"
        strokeWidth="1"
      />
      {/* Necklace */}
      <path
        d="M 122 74 C 126 82, 132 86, 135 87 C 138 86, 144 82, 148 74"
        strokeWidth="0.8"
      />
      <circle cx="135" cy="87" r="2" fill="currentColor" stroke="none" />

      {/* Lehenga decorative line */}
      <path
        d="M 105 140 C 115 138, 130 137, 145 138 C 152 139, 156 140, 158 141"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />

      {/* === Hands joining / garland area === */}
      {/* Groom's arm reaching right */}
      <path
        d="M 88 100 C 92 98, 96 96, 100 96"
        strokeWidth="1"
      />
      {/* Bride's arm reaching left */}
      <path
        d="M 108 100 C 106 98, 104 96, 100 96"
        strokeWidth="1"
      />
      {/* Joined hands */}
      <path
        d="M 97 94 C 98 92, 102 92, 103 94 C 104 96, 103 98, 100 99 C 97 98, 96 96, 97 94"
        strokeWidth="0.8"
      />

      {/* Small hearts above */}
      <path
        d="M 97 82 C 97 80, 99 78, 100 80 C 101 78, 103 80, 103 82 C 103 84, 100 87, 100 87 C 100 87, 97 84, 97 82"
        strokeWidth="0.7"
        fill="currentColor"
      />
    </svg>
  );
}

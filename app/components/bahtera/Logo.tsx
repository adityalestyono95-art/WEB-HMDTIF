// Logo Bahtera Gatra sebagai SVG inline. Diambil dari prototipe desain
// (/tmp/app.jsx) supaya bentuknya identik — tidak memakai file gambar.
//
// idSuffix wajib unik per instance: gradien di dalam <defs> memakai id, dan
// dua logo dengan id sama di satu halaman akan saling menimpa.

export function BahteraLogoOutlinePaths({
  strokeColor = "#FFF4D6",
  accentStroke = "#F6D977",
  strokeWidth = 2.2,
}: {
  strokeColor?: string;
  accentStroke?: string;
  strokeWidth?: number;
}) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M130 22 C123 86, 104 126, 82 140 C58 155, 52 184, 58 214 C64 180, 82 165, 102 146 C116 131, 125 90, 130 22 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M130 22 C137 86, 156 126, 178 140 C202 155, 208 184, 202 214 C196 180, 178 165, 158 146 C144 131, 135 90, 130 22 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M124 85 C115 135, 96 154, 80 172 C64 190, 62 218, 78 223 C95 228, 106 205, 114 176 C120 152, 123 118, 124 85 Z"
        stroke={accentStroke}
        strokeWidth={strokeWidth * 0.9}
      />
      <path
        d="M136 85 C145 135, 164 154, 180 172 C196 190, 198 218, 182 223 C165 228, 154 205, 146 176 C140 152, 137 118, 136 85 Z"
        stroke={accentStroke}
        strokeWidth={strokeWidth * 0.9}
      />
      <path
        d="M130 135 C120 182, 106 226, 82 238 C64 246, 56 238, 52 232 C64 256, 104 274, 130 292 C156 274, 196 256, 208 232 C204 238, 196 246, 178 238 C154 226, 140 182, 130 135 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M130 6 C126 74, 118 142, 106 188 C98 218, 84 232, 68 228 C54 224, 52 204, 56 186 C45 205, 44 232, 66 240 C88 247, 106 230, 116 192 C124 160, 128 124, 130 96 C132 124, 136 160, 144 192 C154 230, 172 247, 194 240 C216 232, 215 205, 204 186 C208 204, 206 224, 192 228 C176 232, 162 218, 154 188 C142 142, 134 74, 130 6 Z"
        stroke={accentStroke}
        strokeWidth={strokeWidth * 1.05}
      />
      <path
        d="M54 186 C36 216, 30 242, 48 262 C68 283, 108 296, 125 314 L130 320 L135 314 C152 296, 192 283, 212 262 C230 242, 224 216, 206 186 C214 214, 216 238, 200 254 C182 272, 148 286, 130 304 C112 286, 78 272, 60 254 C44 238, 46 214, 54 186 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M84 290 C104 302, 120 314, 123 328 M176 290 C156 302, 140 314, 137 328"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.9}
      />
      <circle cx="130" cy="326" r="7.5" stroke={accentStroke} strokeWidth={strokeWidth * 0.9} />
      <circle cx="130" cy="342" r="5" stroke={strokeColor} strokeWidth={strokeWidth * 0.85} />
      <circle cx="130" cy="354" r="3.2" stroke={accentStroke} strokeWidth={strokeWidth * 0.8} />
    </g>
  );
}

export default function BahteraGatraLogo({
  size = 64,
  className = "",
  withGlow = false,
  idSuffix = "main",
}: {
  size?: number;
  className?: string;
  withGlow?: boolean;
  idSuffix?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.32}
      viewBox="0 0 260 365"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${className} ${withGlow ? "drop-shadow-[0_0_28px_rgba(102,255,255,0.38)]" : ""}`}
    >
      <defs>
        <linearGradient
          id={`bg-teal-spire-${idSuffix}`}
          x1="130"
          y1="8"
          x2="130"
          y2="235"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#164A6E" />
          <stop offset="48%" stopColor="#2E8FA6" />
          <stop offset="78%" stopColor="#66FFFF" />
          <stop offset="100%" stopColor="#2E8FA6" />
        </linearGradient>
        <linearGradient
          id={`bg-gold-wing-${idSuffix}`}
          x1="65"
          y1="35"
          x2="195"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="45%" stopColor="#F6D977" />
          <stop offset="100%" stopColor="#FBC02D" />
        </linearGradient>
        <linearGradient
          id={`bg-gold-core-${idSuffix}`}
          x1="130"
          y1="130"
          x2="130"
          y2="292"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="55%" stopColor="#F6D977" />
          <stop offset="100%" stopColor="#FBC02D" />
        </linearGradient>
        <linearGradient
          id={`bg-hull-cradle-${idSuffix}`}
          x1="130"
          y1="185"
          x2="130"
          y2="318"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2E8FA6" />
          <stop offset="65%" stopColor="#2F5470" />
          <stop offset="100%" stopColor="#164A6E" />
        </linearGradient>
        <linearGradient
          id={`bg-drop1-${idSuffix}`}
          x1="130"
          y1="316"
          x2="130"
          y2="334"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#164A6E" />
          <stop offset="50%" stopColor="#F08A24" />
          <stop offset="100%" stopColor="#FBC02D" />
        </linearGradient>
      </defs>

      {/* Sayap emas luar */}
      <path
        d="M130 22 C123 86, 104 126, 82 140 C58 155, 52 184, 58 214 C64 180, 82 165, 102 146 C116 131, 125 90, 130 22 Z"
        fill={`url(#bg-gold-wing-${idSuffix})`}
      />
      <path
        d="M130 22 C137 86, 156 126, 178 140 C202 155, 208 184, 202 214 C196 180, 178 165, 158 146 C144 131, 135 90, 130 22 Z"
        fill={`url(#bg-gold-wing-${idSuffix})`}
      />

      {/* Sayap emas dalam */}
      <path
        d="M124 85 C115 135, 96 154, 80 172 C64 190, 62 218, 78 223 C95 228, 106 205, 114 176 C120 152, 123 118, 124 85 Z"
        fill={`url(#bg-gold-wing-${idSuffix})`}
      />
      <path
        d="M136 85 C145 135, 164 154, 180 172 C196 190, 198 218, 182 223 C165 228, 154 205, 146 176 C140 152, 137 118, 136 85 Z"
        fill={`url(#bg-gold-wing-${idSuffix})`}
      />

      {/* Layar berlian tengah */}
      <path
        d="M130 135 C120 182, 106 226, 82 238 C64 246, 56 238, 52 232 C64 256, 104 274, 130 292 C156 274, 196 256, 208 232 C204 238, 196 246, 178 238 C154 226, 140 182, 130 135 Z"
        fill={`url(#bg-gold-core-${idSuffix})`}
      />

      {/* Tiang pusat & pita S */}
      <path
        d="M130 6 C126 74, 118 142, 106 188 C98 218, 84 232, 68 228 C54 224, 52 204, 56 186 C45 205, 44 232, 66 240 C88 247, 106 230, 116 192 C124 160, 128 124, 130 96 C132 124, 136 160, 144 192 C154 230, 172 247, 194 240 C216 232, 215 205, 204 186 C208 204, 206 224, 192 228 C176 232, 162 218, 154 188 C142 142, 134 74, 130 6 Z"
        fill={`url(#bg-teal-spire-${idSuffix})`}
      />

      {/* Lambung luar */}
      <path
        d="M54 186 C36 216, 30 242, 48 262 C68 283, 108 296, 125 314 L130 320 L135 314 C152 296, 192 283, 212 262 C230 242, 224 216, 206 186 C214 214, 216 238, 200 254 C182 272, 148 286, 130 304 C112 286, 78 272, 60 254 C44 238, 46 214, 54 186 Z"
        fill={`url(#bg-hull-cradle-${idSuffix})`}
      />

      {/* Ornamen sayap bawah */}
      <path d="M84 290 C104 302, 120 314, 123 328 L118 329 C114 316, 100 305, 84 290 Z" fill="#164A6E" />
      <path d="M176 290 C156 302, 140 314, 137 328 L142 329 C146 316, 160 305, 176 290 Z" fill="#164A6E" />

      {/* Tiga titik tetesan */}
      <circle cx="130" cy="325" r="8" fill={`url(#bg-drop1-${idSuffix})`} />
      <circle cx="130" cy="342" r="5.2" fill="#F08A24" />
      <circle cx="130" cy="355" r="3.6" fill="#2E8FA6" />
    </svg>
  );
}

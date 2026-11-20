// Ornamen dekoratif: strip logo berulang, pemisah belah ketupat, dan
// watermark latar. Semua SVG inline, tanpa aset gambar.
import { BahteraLogoOutlinePaths } from "./Logo";

export function BahteraOrnamentStrip({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const strokeColor = variant === "dark" ? "#FFF4D6" : "#2F5470";
  const accentStroke = variant === "dark" ? "#F6D977" : "#2E8FA6";

  return (
    <div
      aria-hidden="true"
      className={`flex h-16 w-full select-none items-center overflow-hidden pointer-events-none ${
        variant === "dark" ? "opacity-40" : "opacity-25"
      }`}
    >
      <svg className="h-16 w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id={`bahtera-arch-strip-${variant}`}
            x="0"
            y="0"
            width="140"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(47, 2) scale(0.175)">
              <BahteraLogoOutlinePaths
                strokeColor={strokeColor}
                accentStroke={accentStroke}
                strokeWidth={5.5}
              />
            </g>
            <path
              d="M 4 64 L 4 28 C 4 14, 16 10, 30 18 C 40 24, 44 38, 44 52"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <path
              d="M 136 64 L 136 28 C 136 14, 124 10, 110 18 C 100 24, 96 38, 96 52"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            <path
              d="M 14 64 L 14 32 C 14 22, 22 20, 30 26 C 35 30, 37 40, 37 56 M 126 64 L 126 32 C 126 22, 118 20, 110 26 C 105 30, 103 40, 103 56"
              fill="none"
              stroke={accentStroke}
              strokeWidth="1.2"
            />
            <circle cx="24" cy="44" r="3.5" fill="none" stroke={accentStroke} strokeWidth="1.3" />
            <circle cx="116" cy="44" r="3.5" fill="none" stroke={accentStroke} strokeWidth="1.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bahtera-arch-strip-${variant})`} />
      </svg>
    </div>
  );
}

export function TealDiamondDivider() {
  return (
    <div aria-hidden="true" className="flex w-full select-none items-center justify-center overflow-hidden py-6">
      <div className="flex items-center gap-1">
        {Array.from({ length: 46 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-4 w-4 shrink-0 rotate-45 ${idx % 2 === 0 ? "bg-[#2F5470]" : "bg-[#2E8FA6]"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function CulturalWatermarkBg({ variant = "cream" }: { variant?: "cream" | "dark" }) {
  const stroke = variant === "cream" ? "#2F5470" : "#FFF4D6";
  const accent = variant === "cream" ? "#2E8FA6" : "#F6D977";
  const opacityClass = variant === "cream" ? "opacity-[0.075]" : "opacity-[0.095]";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${opacityClass}`}>
      <svg className="h-full w-full">
        <defs>
          <pattern
            id={`bahtera-bg-pattern-${variant}`}
            x="0"
            y="0"
            width="200"
            height="220"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(15, 8) scale(0.32)">
              <BahteraLogoOutlinePaths strokeColor={stroke} accentStroke={accent} strokeWidth={3.6} />
            </g>
            <g transform="translate(115, 118) scale(0.32)">
              <BahteraLogoOutlinePaths strokeColor={stroke} accentStroke={accent} strokeWidth={3.6} />
            </g>
            <g transform="translate(-85, 118) scale(0.32)">
              <BahteraLogoOutlinePaths strokeColor={stroke} accentStroke={accent} strokeWidth={3.6} />
            </g>
            <g transform="translate(115, -102) scale(0.32)">
              <BahteraLogoOutlinePaths strokeColor={stroke} accentStroke={accent} strokeWidth={3.6} />
            </g>
            <g transform="translate(-85, -102) scale(0.32)">
              <BahteraLogoOutlinePaths strokeColor={stroke} accentStroke={accent} strokeWidth={3.6} />
            </g>
            <path
              d="M 56 128 C 82 146, 118 146, 144 128 M -44 128 C -18 146, 18 146, 44 128"
              fill="none"
              stroke={stroke}
              strokeWidth="0.9"
              strokeDasharray="3 4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bahtera-bg-pattern-${variant})`} />
      </svg>
    </div>
  );
}

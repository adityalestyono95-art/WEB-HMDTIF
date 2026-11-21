"use client";

import { useEffect, useState } from "react";

const SHOW_MS = 2800; // lama splash tampil sebelum mulai fade out
const FADE_MS = 700;  // lama fade out

export default function SplashScreen() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">("show");

  useEffect(() => {
    document.body.style.overflow = "hidden"; // kunci scroll selama splash

    const t1 = setTimeout(() => setPhase("hide"), SHOW_MS);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, SHOW_MS + FADE_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2F5470] px-6 overflow-hidden"
      style={{
        opacity: phase === "hide" ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-in-out`,
        pointerEvents: phase === "hide" ? "none" : "auto",
      }}
    >
      {/* Glow di belakang */}
      <div className="splash-glow absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(246,217,119,0.28)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
        <img
          src="/images/logo-hmdtif.png"
          alt="Logo Bahtera Gatra"
          className="splash-logo w-16 sm:w-20 h-auto drop-shadow-[0_0_24px_rgba(251,192,45,0.5)]"
        />

        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="splash-title text-[#FFF4D6] text-3xl sm:text-5xl md:text-6xl font-bold uppercase font-[family-name:var(--font-space-grotesk)]">
            Bahtera Gatra
          </h1>
          <p className="splash-sub text-[#F6D977] text-[10px] sm:text-sm font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-space-grotesk)]">
            HMDTIF FILKOM UB 2026
          </p>
        </div>
      </div>

      <style>{`
        @keyframes splashLogo {
          0%   { opacity: 0; transform: scale(0.6) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes splashTitle {
          0%   { opacity: 0; letter-spacing: 0.05em; transform: translateY(12px); }
          100% { opacity: 1; letter-spacing: 0.18em; transform: translateY(0); }
        }
        @keyframes splashSub {
          0%   { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashGlow {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50%      { opacity: 1;   transform: scale(1.1); }
        }
        .splash-logo  { animation: splashLogo 0.9s ease-out both; }
        .splash-title { animation: splashTitle 1.2s ease-out 0.4s both; }
        .splash-sub   { animation: splashSub 0.9s ease-out 1.1s both; }
        .splash-glow  { animation: splashGlow 2.4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
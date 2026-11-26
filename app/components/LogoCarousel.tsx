"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  badge: string;
  title: string;
  text: string;
  image: string;
};

// Isi dari slide "Filosofi Bentuk".
// Ganti `image` dengan logo tiap bagian kalau sudah ada, misalnya "/images/logo-anggota.png".
const SLIDES: Slide[] = [
  {
    id: "bahtera",
    badge: "BAHTERA",
    title: "Lambang Bahtera",
    text: "Merupakan sebuah kapal besar yang mewadahi mahasiswa DTIF.",
    image: "/images/logo-hmdtif.png",
  },
  {
    id: "anggota",
    badge: "ANGGOTA HMDTIF",
    title: "Anggota HMDTIF",
    text: "Mewakilkan mahasiswa DTIF yang ada di dalam himpunan sebagai anggota HMDTIF.",
    image: "/images/logo-hmdtif.png",
  },
  {
    id: "departemen",
    badge: "LIMA DEPARTEMEN",
    title: "Lima Departemen",
    text: "Mewakilkan departemen kepengurusan HMDTIF.",
    image: "/images/logo-hmdtif.png",
  },
  {
    id: "kabinet",
    badge: "TIGA KABINET SEBELUMNYA",
    title: "Tiga Kabinet Sebelumnya",
    text: "Membawa nilai-nilai baik yang telah ditinggalkan dari kepengurusan sebelumnya sebagai landasan berlayar.",
    image: "/images/logo-hmdtif.png",
  },
];

const SWIPE_THRESHOLD = 50; // px

export default function AboutLogoCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);

  const total = SLIDES.length;
  const go = (i: number) => setIndex(((i % total) + total) % total);

  const slide = SLIDES[index];
  const prev = SLIDES[(index - 1 + total) % total];
  const next = SLIDES[(index + 1) % total];

  // --- geser (swipe / drag) ---
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dragged.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    if (Math.abs(e.clientX - startX.current) > 8) dragged.current = true;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) >= SWIPE_THRESHOLD) go(index + (dx < 0 ? 1 : -1));
  };

  const cancelDrag = () => {
    startX.current = null;
  };

  // --- pencet (click) ---
  // Kalau barusan digeser, abaikan click supaya tidak pindah dua kali.
  const handleSelect = (i: number) => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    go(i);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
        .about-fade-up { animation: aboutFadeUp 400ms ease both; }
        @media (prefers-reduced-motion: reduce) {
          .about-fade-up { animation: none; }
        }
      `}</style>

      {/* Logo carousel */}
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Filosofi bentuk logo"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={cancelDrag}
        onPointerLeave={cancelDrag}
        className="relative flex w-full cursor-grab touch-pan-y select-none items-center justify-center gap-2 pb-[21.5px] outline-none active:cursor-grabbing sm:gap-8 lg:gap-16"
      >
        {/* Tombol geser kiri */}
        <button
          type="button"
          onClick={() => handleSelect(index - 1)}
          aria-label="Geser ke kiri"
          className="absolute left-0 top-[calc(50%-10px)] z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[#FBC02D] bg-[#FFF4D6] text-[#2F5470] shadow-lg transition-all hover:scale-110 hover:bg-[#FBC02D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6D977] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => handleSelect(index - 1)}
          aria-label={`Lihat ${prev.title}`}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-60 blur-[1px] transition-all hover:scale-110 hover:opacity-100 hover:blur-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        >
          <img
            src={prev.image}
            alt=""
            draggable={false}
            className="h-auto w-6 sm:w-8 lg:w-10"
          />
        </button>

        <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full border-4 border-[#FBC02D] bg-[#FFF4D6] shadow-[0_0_40px_rgba(251,192,45,0.35)] sm:h-[124px] sm:w-[124px] lg:h-[144px] lg:w-[144px]">
          <img
            key={slide.id}
            src={slide.image}
            alt={`Logo ${slide.title}`}
            draggable={false}
            className="about-fade-up h-auto w-[54px] sm:w-[64px] lg:w-[74px]"
          />
        </div>

        <button
          type="button"
          onClick={() => handleSelect(index + 1)}
          aria-label={`Lihat ${next.title}`}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-60 blur-[1px] transition-all hover:scale-110 hover:opacity-100 hover:blur-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        >
          <img
            src={next.image}
            alt=""
            draggable={false}
            className="h-auto w-6 sm:w-8 lg:w-10"
          />
        </button>

        {/* Tombol geser kanan */}
        <button
          type="button"
          onClick={() => handleSelect(index + 1)}
          aria-label="Geser ke kanan"
          className="absolute right-0 top-[calc(50%-10px)] z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[#FBC02D] bg-[#FFF4D6] text-[#2F5470] shadow-lg transition-all hover:scale-110 hover:bg-[#FBC02D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6D977] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Keterangan: berubah mengikuti logo yang dipilih */}
      <div
        key={slide.id}
        aria-live="polite"
        className="about-fade-up flex min-h-[170px] w-full flex-col items-center gap-6 sm:min-h-[190px] sm:gap-8 lg:gap-12"
      >
        <div className="rounded-full border border-white/30 bg-white/15 px-[14px] py-1">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-bold uppercase tracking-[1.1px] text-[#F6D977]">
            {slide.badge}
          </span>
        </div>

        <h2 className="text-center font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-9 text-[#FFF4D6] sm:text-[30px] sm:leading-[45px]">
          {slide.title}
        </h2>

        <p className="w-full max-w-[672px] text-center text-sm leading-6 text-[rgba(242,247,250,0.9)] sm:text-[15.3px] sm:leading-[26px]">
          {slide.text}
        </p>
      </div>

      {/* Titik navigasi */}
      <div className="flex gap-2 pt-3 sm:gap-2.5 sm:pt-5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ke slide ${s.title}`}
            aria-current={i === index}
            className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[#FBC02D]" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import { useRef, useState } from "react";
import { LOGO_PHILOSOPHY_SLIDES } from "../lib/home-data";

const DEFAULT_LOGO = "/images/logo-hmdtif.png";

// Opsional: kalau tiap slide punya gambar logo sendiri (mis. bagian emas / teal
// yang menyala berbeda), isi di sini. Key = id slide (0-5). Yang kosong memakai DEFAULT_LOGO.
const SLIDE_IMAGES: Record<number, string> = {
  // 0: "/images/logo-slide-1.png",
  // 1: "/images/logo-slide-2.png",
};

const SWIPE_THRESHOLD = 50; // px minimal geseran agar pindah slide

export default function LogoCarousel() {
  const slides = LOGO_PHILOSOPHY_SLIDES;
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);

  const imgOf = (i: number) => SLIDE_IMAGES[slides[i].id] ?? DEFAULT_LOGO;
  const mod = (n: number) => (n + total) % total;

  const goNext = () => {
    setDir("next");
    setIndex((i) => mod(i + 1));
  };
  const goPrev = () => {
    setDir("prev");
    setIndex((i) => mod(i - 1));
  };
  const goTo = (to: number) => {
    if (to === index) return;
    setDir(to > index ? "next" : "prev");
    setIndex(to);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    if (dragX <= -SWIPE_THRESHOLD) goNext();
    else if (dragX >= SWIPE_THRESHOLD) goPrev();
    setDragX(0);
    setDragging(false);
  };

  const current = slides[index];
  const prevIdx = mod(index - 1);
  const nextIdx = mod(index + 1);

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }}
      className="bg-gradient-to-br from-[#2F5470] to-[#164A6E] rounded-2xl md:rounded-[26px] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden outline-none"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.09]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Logo Carousel */}
        <div className="flex justify-center items-center gap-3 sm:gap-8 lg:gap-16 pb-[21.5px]">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Slide sebelumnya"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 bg-white/10 border border-white/20 rounded-full flex items-center justify-center opacity-60 blur-[2px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img src={imgOf(prevIdx)} alt="" draggable={false} className="w-6 sm:w-8 lg:w-10 h-auto" />
          </button>

          {/* Area yang bisa digeser */}
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="select-none cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
          >
            <div
              key={index}
              className={dir === "next" ? "carousel-in-next" : "carousel-in-prev"}
              style={{
                transform: `translateX(${dragX}px)`,
                transition: dragging ? "none" : "transform 300ms ease",
              }}
            >
              <div className="w-[104px] h-[104px] sm:w-[124px] sm:h-[124px] lg:w-[144px] lg:h-[144px] shrink-0 bg-[#FFF4D6] border-4 border-[#FBC02D] rounded-full shadow-[0_0_40px_rgba(251,192,45,0.35)] flex items-center justify-center">
                <img
                  src={imgOf(index)}
                  alt={`Logo Bahtera - ${current.title}`}
                  draggable={false}
                  className="w-[54px] sm:w-[64px] lg:w-[74px] h-auto pointer-events-none"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Slide berikutnya"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 bg-white/10 border border-white/20 rounded-full flex items-center justify-center opacity-60 blur-[2px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img src={imgOf(nextIdx)} alt="" draggable={false} className="w-6 sm:w-8 lg:w-10 h-auto" />
          </button>
        </div>

        {/* Teks slide (ikut bisa digeser) */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 w-full select-none"
          style={{ touchAction: "pan-y" }}
        >
          <div
            key={`text-${index}`}
            className={`flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 w-full ${
              dir === "next" ? "carousel-in-next" : "carousel-in-prev"
            }`}
            style={{
              transform: `translateX(${dragX}px)`,
              transition: dragging ? "none" : "transform 300ms ease",
            }}
          >
            {/* Badge */}
            <div className="bg-white/15 border border-white/30 px-[14px] py-1 rounded-full">
              <span className="text-[#F6D977] text-[11px] font-bold tracking-[1.1px] uppercase font-[family-name:var(--font-space-grotesk)]">
                {current.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[#FFF4D6] text-2xl leading-9 sm:text-[30px] sm:leading-[45px] font-bold text-center font-[family-name:var(--font-space-grotesk)]">
              {current.title}
            </h2>

            {/* Description */}
            <p className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[15.3px] leading-6 sm:leading-[26px] text-center w-full max-w-[672px]">
              {current.text}
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 sm:gap-2.5 pt-3 sm:pt-5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ke slide ${i + 1}`}
              aria-current={i === index}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-8 bg-[#FBC02D]" : "w-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carouselInNext {
          from { opacity: 0; margin-left: 48px; margin-right: -48px; }
          to   { opacity: 1; margin-left: 0;     margin-right: 0; }
        }
        @keyframes carouselInPrev {
          from { opacity: 0; margin-left: -48px; margin-right: 48px; }
          to   { opacity: 1; margin-left: 0;     margin-right: 0; }
        }
        .carousel-in-next { animation: carouselInNext 450ms ease-out both; }
        .carousel-in-prev { animation: carouselInPrev 450ms ease-out both; }
      `}</style>
    </div>
  );
}
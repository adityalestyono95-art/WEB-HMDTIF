"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Camera,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import BahteraGatraLogo from "./components/bahtera/Logo";
import {
  BahteraOrnamentStrip,
  CulturalWatermarkBg,
  TealDiamondDivider,
} from "./components/bahtera/Ornaments";
import NewsCardItem, { type BeritaItem } from "./components/NewsCardItem";
import {
  ADVO_KESMA_LINKS,
  ALL_NEWS_ITEMS,
  CORE_BEHAVIORS_FOUR,
  LOGO_PHILOSOPHY_SLIDES,
  OFFICIAL_MISI,
  OFFICIAL_VISI,
  PARTNER_LOGOS,
  WELCOMING_SPEECHES,
} from "./lib/home-data";

const SG = "var(--font-space-grotesk), sans-serif";
const CP = "var(--font-courier-prime), monospace";

export default function Home() {
  const [speechIndex, setSpeechIndex] = useState(0);
  const [envelopeOpen, setEnvelopeOpen] = useState(true);
  const [newsPage, setNewsPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState<BeritaItem | null>(null);

  const currentSpeech = WELCOMING_SPEECHES[speechIndex];
  const beritaTampil = ALL_NEWS_ITEMS.slice((newsPage - 1) * 4, newsPage * 4);

  return (
    <div>
      {/* ================================================================ */}
      {/* 1. HERO                                                          */}
      {/* ================================================================ */}
      <section
        data-surface="dark"
        className="relative flex flex-col justify-between overflow-hidden text-[#F2F7FA] md:min-h-[900px]"
        style={{ background: "linear-gradient(165deg, #164A6E 0%, #2F5470 52%, #456B85 100%)" }}
      >
        <CulturalWatermarkBg variant="dark" />

        <div className="pt-20">
          <BahteraOrnamentStrip variant="dark" />
        </div>

        {/* Logo blur dekoratif di pojok */}
        <div className="pointer-events-none absolute -left-16 -top-12 select-none opacity-35 blur-[2px]">
          <span className="block md:hidden">
            <BahteraGatraLogo size={170} withGlow idSuffix="hero-corner-left-sm" />
          </span>
          <span className="hidden md:block">
            <BahteraGatraLogo size={310} withGlow idSuffix="hero-corner-left" />
          </span>
        </div>
        <div className="pointer-events-none absolute -right-16 bottom-20 select-none opacity-25 blur-[4px]">
          <span className="block md:hidden">
            <BahteraGatraLogo size={150} withGlow idSuffix="hero-corner-right-sm" />
          </span>
          <span className="hidden md:block">
            <BahteraGatraLogo size={280} withGlow idSuffix="hero-corner-right" />
          </span>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 py-10 text-center sm:px-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#FBC02D]" aria-hidden="true" />
            <span
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#FFF4D6] sm:text-[12px]"
              style={{ fontFamily: SG }}
            >
              HIMPUNAN MAHASISWA DEPARTEMEN TEKNIK INFORMATIKA • FILKOM UB
            </span>
          </div>

          <h1
            className="bg-gradient-to-b from-[#FFF4D6] via-[#FFF4D6] to-[#F6D977] bg-clip-text text-[48px] font-bold uppercase leading-[52px] tracking-tight text-transparent drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)] sm:text-[64px] md:text-[96px] lg:text-[116px] lg:leading-[1.02]"
            style={{ fontFamily: SG }}
          >
            HMDTIF
            <span className="mt-1 block text-[0.58em] tracking-[0.04em]">BAHTERA GATRA 2026</span>
          </h1>

          <p className="mb-8 mt-5 max-w-2xl text-[15px] leading-[26px] text-[#F2F7FA]/90 sm:text-[17px]">
            Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung,
            berkembang secara profesional, dan didukung advokasi yang responsif dan suportif.
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#sambutan-ketua"
              className="group inline-flex items-center overflow-hidden rounded-[12px] border border-[#FBC02D] bg-[#FFF4D6] text-[#1F3A4D] shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all hover:bg-[#F6D977]"
            >
              <span
                className="px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em]"
                style={{ fontFamily: SG }}
              >
                Kenali Kami
              </span>
              <span className="h-9 border-l-2 border-dashed border-[#1F3A4D]/35" aria-hidden="true" />
              <span className="flex items-center justify-center px-4 py-3.5 text-[#1F3A4D] transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>

            <Link
              href="/news"
              className="flex items-center gap-2 rounded-[12px] border border-white/35 bg-white/18 px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#FFF4D6] backdrop-blur-md transition-all hover:bg-white/25"
              style={{ fontFamily: SG }}
            >
              <Camera className="h-4 w-4 text-[#FBC02D]" aria-hidden="true" />
              <span>Booklet Staff Muda 2026</span>
            </Link>
          </div>

          {/* Kartu glass kanal cepat */}
          <div className="w-full max-w-[1120px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6D977]"
                style={{ fontFamily: SG }}
              >
                KANAL CEPAT ADVOKESMA &amp; INFORMASI HMDTIF
              </span>
              <span className="hidden items-center gap-1 text-[12px] text-[#FFF4D6] sm:flex">
                <span>Portal Advo Kesma</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2 lg:grid-cols-3">
              {ADVO_KESMA_LINKS.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.id}
                    className="group flex items-start gap-3.5 rounded-[20px] border border-white/35 bg-white/[0.18] p-4 backdrop-blur-[14px] transition-all hover:border-[#F6D977] hover:bg-white/[0.26]"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#FBC02D]/50 bg-[#164A6E]/60 text-[#F6D977] transition-transform group-hover:scale-105">
                      <IconComp className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="truncate text-[15px] font-bold text-[#F2F7FA] group-hover:text-[#FFF4D6]"
                        style={{ fontFamily: SG }}
                      >
                        {card.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-2 text-[12px] leading-[18px] text-[#F2F7FA]/85">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <BahteraOrnamentStrip variant="dark" />
      </section>

      {/* ================================================================ */}
      {/* 2. SAMBUTAN KETUA                                                */}
      {/* ================================================================ */}
      <section id="sambutan-ketua" className="relative overflow-hidden bg-[#FFFBF0] py-20 text-[#1F3A4D]">
        <CulturalWatermarkBg variant="cream" />
        <BahteraOrnamentStrip variant="light" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 pt-10 sm:px-20">
          <div className="mb-12 text-center">
            <span
              className="mb-2 block text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E8FA6]"
              style={{ fontFamily: SG }}
            >
              SAMBUTAN PIMPINAN HIMPUNAN
            </span>
            <h2
              className="text-[36px] font-bold leading-[42px] text-[#2F5470] sm:text-[56px] sm:leading-[64px]"
              style={{ fontFamily: SG }}
            >
              Welcoming Speech
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Amplop teal interaktif */}
            <div className="flex flex-col items-center lg:col-span-5">
              <button
                type="button"
                onClick={() => setEnvelopeOpen((prev) => !prev)}
                aria-pressed={envelopeOpen}
                aria-label={envelopeOpen ? "Tutup amplop" : "Buka amplop"}
                className="group relative w-full max-w-[360px] cursor-pointer select-none"
              >
                <svg
                  viewBox="0 0 380 310"
                  aria-hidden="true"
                  className="w-full drop-shadow-[0_14px_30px_rgba(22,74,110,0.18)] transition-transform duration-500 group-hover:-rotate-2"
                >
                  {envelopeOpen ? (
                    <polygon points="20,115 190,15 360,115" fill="#2F5470" stroke="#164A6E" strokeWidth="2" />
                  ) : null}

                  {envelopeOpen && (
                    <g>
                      <rect x="48" y="62" width="284" height="160" rx="10" fill="#FFF4D6" stroke="#FBC02D" strokeWidth="2" />
                      <text x="70" y="95" fill="#1F3A4D" fontSize="11" fontWeight="bold" fontFamily="Space Grotesk, sans-serif">
                        SAY HELLO TO BAHTERA GATRA
                      </text>
                      <text x="70" y="115" fill="#2E8FA6" fontSize="9.5" fontFamily="Inter, sans-serif">
                        Klik kartu di samping untuk membaca
                      </text>
                      <text x="70" y="130" fill="#2E8FA6" fontSize="9.5" fontFamily="Inter, sans-serif">
                        sambutan Ketua &amp; Wakil Ketua HMDTIF.
                      </text>
                    </g>
                  )}

                  <rect x="20" y="115" width="340" height="180" rx="12" fill="#2E8FA6" stroke="#164A6E" strokeWidth="2" />
                  <polygon points="20,115 190,210 20,295" fill="#2F5470" opacity="0.88" />
                  <polygon points="360,115 190,210 360,295" fill="#2F5470" opacity="0.72" />
                  <polygon points="20,295 190,195 360,295" fill="#2E8FA6" stroke="#164A6E" strokeWidth="1.5" />
                  {!envelopeOpen && (
                    <polygon points="20,115 190,220 360,115" fill="#164A6E" stroke="#FBC02D" strokeWidth="2" />
                  )}
                  <circle cx="190" cy="205" r="16" fill="#FBC02D" />
                </svg>

                <span className="mt-3 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-[#2E8FA6]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2F5470]">
                    Variant Amplop: {envelopeOpen ? "Terbuka (Open)" : "Tertutup (Closed)"}
                  </span>
                </span>
              </button>
            </div>

            {/* Tumpukan kartu sambutan */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setSpeechIndex((prev) => (prev + 1) % WELCOMING_SPEECHES.length)}
                className="group relative cursor-pointer select-none"
              >
                <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rotate-[1.8deg] rounded-[20px] border border-[#1F3A4D]/20 bg-[#EED9A4]" />
                <div className="pointer-events-none absolute inset-0 -translate-x-2 translate-y-1.5 -rotate-[1.2deg] rounded-[20px] border border-[#1F3A4D]/20 bg-[#FFF4D6]" />

                <div
                  className="relative z-10 rounded-[20px] border-2 border-[#1F3A4D]/30 bg-[#FFFBF0] p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-8"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                >
                  <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-stretch sm:text-left">
                    {/* Foto pimpinan */}
                    <div
                      className="relative flex min-h-[280px] w-40 shrink-0 flex-col items-center justify-end overflow-hidden rounded-[16px] border border-[#FBC02D] p-4 text-center sm:min-h-0 sm:w-48"
                      style={{ background: currentSpeech.avatarBg }}
                    >
                      {currentSpeech.photo && (
                        <img
                          src={currentSpeech.photo}
                          alt={`Foto ${currentSpeech.name}`}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      )}

                      <span
                        className="absolute left-2.5 right-2.5 top-2.5 z-10 rounded-md bg-[#164A6E]/70 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FFF4D6] backdrop-blur-sm"
                        style={{ fontFamily: CP }}
                      >
                        {currentSpeech.badge}
                      </span>

                      {!currentSpeech.photo && (
                        <>
                          <div className="mb-2 mt-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F6D977] bg-[#FFF4D6]/20">
                            <Users className="h-8 w-8 text-[#FFF4D6]" aria-hidden="true" />
                          </div>
                          <div className="flex h-24 w-32 flex-col items-center justify-center rounded-t-3xl bg-[#FFF4D6]/90 px-2">
                            <BahteraGatraLogo size={26} idSuffix="speech-avatar" />
                            <span className="mt-1 font-mono text-[9px] font-bold text-[#1F3A4D]">FOTO PROFIL</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between text-left">
                      <div>
                        <p className="mb-2 text-[14px] font-bold text-[#2E8FA6]">{currentSpeech.greeting}</p>
                        <div className="space-y-2.5 text-[14px] leading-[22px] text-[#1F3A4D]/90">
                          {currentSpeech.paragraphs.map((p, idx) => (
                            <p key={idx} className={idx === 0 ? "font-bold text-[#1F3A4D]" : ""}>
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-[#1F3A4D]/15 pt-4">
                        <div>
                          <h4 className="text-[16px] font-bold text-[#1F3A4D]" style={{ fontFamily: SG }}>
                            — {currentSpeech.name}
                          </h4>
                          <p className="text-[12px] font-medium text-[#2F5470]">{currentSpeech.role}</p>
                        </div>
                        <span className="rounded-full border border-[#FBC02D] bg-[#FFF4D6] px-3 py-1 text-[11px] font-bold text-[#1F3A4D]">
                          {speechIndex + 1} / {WELCOMING_SPEECHES.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[13px] font-medium text-[#1F3A4D]/60">
                Tap to switch card (
                {speechIndex === 0 ? "Lihat Sambutan Wakil Ketua →" : "← Lihat Sambutan Ketua Himpunan"})
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1280px] px-5 sm:px-20">
          <div className="w-full border-b-2 border-dashed border-[#FBC02D]" />
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. ABOUT                                                         */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-[#FFFBF0] py-16 text-[#1F3A4D]">
        <CulturalWatermarkBg variant="cream" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span
                className="mb-2 block text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E8FA6]"
                style={{ fontFamily: SG }}
              >
                PROFIL ORGANISASI
              </span>
              <h2
                className="mb-5 text-[40px] font-bold leading-[46px] text-[#2F5470] sm:text-[56px] sm:leading-[64px]"
                style={{ fontFamily: SG }}
              >
                About HMDTIF FILKOM UB
              </h2>
              <p className="mb-6 text-[16px] leading-[26px] text-[#1F3A4D]/85">
                Segala hal yang perlu Anda ketahui tentang Himpunan Mahasiswa Departemen Teknik
                Informatika (HMDTIF) Kabinet Bahtera Gatra 2026 — mulai dari perkenalan, visi, misi,
                hingga nilai inti.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b-2 border-[#FBC02D] pb-1 text-[15px] font-bold text-[#2F5470] transition-colors hover:text-[#2E8FA6]"
                style={{ fontFamily: SG }}
              >
                <span>See details</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-7 lg:col-span-7">
              {/* Overview */}
              <div
                className="-rotate-[0.8deg] rounded-[20px] border border-[#1F3A4D]/15 bg-[#FFF4D6] p-7 transition-transform hover:rotate-0 sm:p-8"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              >
                <div className="mb-4 flex items-center justify-between border-b border-[#1F3A4D]/25 pb-3">
                  <h3 className="text-[26px] font-bold leading-[34px] text-[#2F5470]" style={{ fontFamily: SG }}>
                    Overview
                  </h3>
                  <span className="text-[22px] font-bold text-[#2E8FA6]" style={{ fontFamily: SG }}>
                    01
                  </span>
                </div>
                <p className="text-[15.5px] leading-[26px] text-[#1F3A4D]/90">
                  <strong>HMDTIF (Himpunan Mahasiswa Departemen Teknik Informatika)</strong> adalah
                  organisasi kemahasiswaan intra kampus di Fakultas Ilmu Komputer Universitas
                  Brawijaya yang menjadi wadah eksekutif serta legislatif (Senat) bagi seluruh
                  mahasiswa Teknik Informatika dalam mengembangkan potensi akademik, profesionalisme,
                  dan advokasi kesejahteraan.
                </p>
              </div>

              {/* Vision */}
              <div
                className="rotate-[1deg] rounded-[20px] border border-[#1F3A4D]/15 bg-[#FFF4D6] p-7 transition-transform hover:rotate-0 sm:p-8"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              >
                <div className="mb-4 flex items-center justify-between border-b border-[#1F3A4D]/25 pb-3">
                  <h3 className="text-[26px] font-bold leading-[34px] text-[#2F5470]" style={{ fontFamily: SG }}>
                    Vision
                  </h3>
                  <span className="text-[22px] font-bold text-[#2E8FA6]" style={{ fontFamily: SG }}>
                    02
                  </span>
                </div>
                <p className="text-[16px] font-medium leading-[26px] text-[#1F3A4D]">“{OFFICIAL_VISI}”</p>
              </div>

              {/* Mission */}
              <div
                className="-rotate-[0.8deg] rounded-[20px] border border-[#1F3A4D]/15 bg-[#FFF4D6] p-7 transition-transform hover:rotate-0 sm:p-8"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              >
                <div className="mb-4 flex items-center justify-between border-b border-[#1F3A4D]/25 pb-3">
                  <h3 className="text-[26px] font-bold leading-[34px] text-[#2F5470]" style={{ fontFamily: SG }}>
                    Mission
                  </h3>
                  <span className="text-[22px] font-bold text-[#2E8FA6]" style={{ fontFamily: SG }}>
                    03
                  </span>
                </div>
                <ul className="space-y-2.5 text-[15px] leading-[24px] text-[#1F3A4D]/90">
                  {OFFICIAL_MISI.map((misi, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F5470] text-[12px] font-bold text-[#FFF4D6]">
                        {idx + 1}
                      </span>
                      <span>{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Makna logo + nilai inti */}
          <div className="mt-20">
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#164A6E] via-[#2F5470] to-[#2E8FA6] p-8 text-[#F2F7FA] shadow-xl sm:p-12">
              <CulturalWatermarkBg variant="dark" />
              <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="flex flex-col items-center lg:col-span-4">
                  <BahteraGatraLogo size={140} withGlow idSuffix="home-meaning" />
                  <span
                    className="mt-4 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F6D977]"
                    style={{ fontFamily: SG }}
                  >
                    IDENTITAS KABINET 2026
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3
                    className="mb-3 text-[28px] font-bold leading-[42px] text-[#FFF4D6] sm:text-[36px]"
                    style={{ fontFamily: SG }}
                  >
                    Makna Logo Bahtera Gatra
                  </h3>
                  <p className="mb-6 text-[15px] leading-[25px] text-[#F2F7FA]/90">
                    Perpaduan siluet kapal layar <strong>Bahtera</strong> dan lengkung budaya{" "}
                    <strong>Gatra</strong> melambangkan ketangguhan organisasi dalam mengarungi
                    dinamika teknologi dengan tetap menjunjung nilai kekeluargaan dan integritas
                    mahasiswa Teknik Informatika.
                  </p>
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {LOGO_PHILOSOPHY_SLIDES.slice(0, 4).map((s) => (
                      <div
                        key={s.id}
                        className="rounded-[16px] border border-white/30 bg-white/15 p-4 backdrop-blur-md"
                      >
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#F6D977]">
                          {s.badge}
                        </span>
                        <h4 className="mt-0.5 text-[15px] font-bold text-[#FFF4D6]" style={{ fontFamily: SG }}>
                          {s.title}
                        </h4>
                        <p className="mt-1 text-[12.5px] leading-[19px] text-[#F2F7FA]/85">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-10">
              <TealDiamondDivider />
            </div>

            <div className="mb-10 text-center">
              <span
                className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#2E8FA6]"
                style={{ fontFamily: SG }}
              >
                CORE VALUES &amp; BEHAVIORS
              </span>
              <h3
                className="mt-1 text-[32px] font-bold text-[#2F5470] sm:text-[42px]"
                style={{ fontFamily: SG }}
              >
                Nilai Inti Bahtera Gatra
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {CORE_BEHAVIORS_FOUR.map((val) => (
                <div
                  key={val.num}
                  className="flex flex-col justify-between rounded-[20px] border border-[#1F3A4D]/15 bg-[#FFF4D6] p-6 transition-all hover:-translate-y-1 hover:border-[#FBC02D]"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[28px] font-bold text-[#2E8FA6]" style={{ fontFamily: SG }}>
                        {val.num}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBC02D]/25 text-xs font-bold text-[#1F3A4D]"
                      >
                        ★
                      </span>
                    </div>
                    <h4 className="mb-1 text-[20px] font-bold text-[#2F5470]" style={{ fontFamily: SG }}>
                      {val.title}
                    </h4>
                    <p className="mb-3 text-[14px] font-bold italic text-[#F08A24]">“{val.tagline}”</p>
                    <p className="text-[13.5px] leading-[21px] text-[#1F3A4D]/85">{val.desc}</p>
                  </div>
                  <div className="mt-5 h-[2px] w-full bg-[#2F5470]/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. NEWS                                                          */}
      {/* ================================================================ */}
      <section className="relative border-t border-[#1F3A4D]/10 bg-[#FFFBF0] py-16 text-[#1F3A4D]">
        <CulturalWatermarkBg variant="cream" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                className="text-[36px] font-bold leading-[42px] text-[#2F5470] sm:text-[56px] sm:leading-[64px]"
                style={{ fontFamily: SG }}
              >
                Latest <span className="text-[#2E8FA6]">News</span>
              </h2>
              <p className="mt-1 text-[15px] text-[#1F3A4D]/75">
                Ikuti kabar kegiatan terbaru, program kerja departemen, dan prestasi mahasiswa Departement Teknik
                Informatika.
              </p>
            </div>
            <Link
              href="/news"
              className="flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.08em] text-[#2F5470] hover:text-[#2E8FA6]"
              style={{ fontFamily: SG }}
            >
              <span>View All News</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* HP: carousel horizontal. Tablet ke atas: grid. */}
          <div className="flex snap-x gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {beritaTampil.map((item) => (
              <NewsCardItem key={item.id} item={item} onSelect={setSelectedNews} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              disabled={newsPage === 1}
              onClick={() => setNewsPage((p) => Math.max(1, p - 1))}
              aria-label="Halaman sebelumnya"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${
                newsPage === 1
                  ? "cursor-not-allowed bg-[#1F3A4D]/10 text-[#1F3A4D]/35"
                  : "cursor-pointer bg-[#2E8FA6] text-[#FFF4D6] shadow-md hover:bg-[#2F5470]"
              }`}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-[14px] font-bold text-[#1F3A4D]" style={{ fontFamily: SG }}>
              Page {newsPage} of 3
            </span>
            <button
              type="button"
              onClick={() => setNewsPage((p) => (p < 2 ? p + 1 : 1))}
              aria-label="Halaman berikutnya"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#2E8FA6] text-[#FFF4D6] shadow-md transition-all hover:bg-[#2F5470]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. PARTNER                                                       */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-[#FFFBF0] py-16 text-[#1F3A4D]">
        <div className="mx-auto mb-10 max-w-[1280px] px-5 text-center sm:px-20">
          <h2 className="text-[40px] font-bold text-[#2F5470] sm:text-[52px]" style={{ fontFamily: SG }}>
            Partner
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1440px] overflow-hidden py-2">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#FFFBF0] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#FFFBF0] to-transparent" />

          <div className="flex items-center justify-center gap-6 overflow-x-auto px-8">
            {PARTNER_LOGOS.map((p, idx) => (
              <div
                key={idx}
                className="flex h-[152px] w-[152px] shrink-0 flex-col items-center justify-center rounded-[20px] border-2 border-[#FFF4D6]/40 bg-[#456B85] p-4 text-center text-[#F2F7FA] shadow-md transition-all hover:-translate-y-1 hover:bg-[#2F5470]"
              >
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 font-bold text-[#F6D977]">
                  {p.code.slice(0, 2)}
                </div>
                <span
                  className="text-[14px] font-bold uppercase tracking-wider text-[#FFF4D6]"
                  style={{ fontFamily: SG }}
                >
                  {p.code}
                </span>
                <span className="mt-1 text-[10px] leading-tight text-[#F2F7FA]/75">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* Modal baca berita                                                */}
      {/* ================================================================ */}
      {selectedNews && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedNews.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-[24px] border-2 border-[#FBC02D] bg-[#FFFBF0] p-6 text-[#1F3A4D] shadow-2xl sm:p-8"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-[#2F5470] px-3 py-1 text-xs font-bold text-[#FFF4D6]">
                {selectedNews.category} • {selectedNews.date}
              </span>
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                aria-label="Tutup"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FFF4D6]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <h3 className="mb-3 text-[22px] font-bold text-[#2F5470]" style={{ fontFamily: SG }}>
              {selectedNews.title}
            </h3>
            <p className="text-[14px] leading-[23px] text-[#1F3A4D]/85">{selectedNews.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
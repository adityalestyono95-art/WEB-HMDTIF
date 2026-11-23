"use client";

import React, { useState } from "react";
import DepartmentModal, { departments } from "./departments";
import {
  InfokomIcon,
  InfokomIconLarge,
  AdvokesmaIcon,
  AdvokesmaIconLarge,
  PsdmIcon,
  PsdmIconLarge,
  BisnisIcon,
  BisnisIconLarge,
  PitIcon,
  PitIconLarge,
  SenatIcon,
  SenatIconLarge,
} from "../components/DepartmentIcons";

// ── Font class helpers ────────────────────────────────────────────────────────
const fCourier = "font-[family-name:var(--font-courier-prime)]";
const fGrotesk  = "font-[family-name:var(--font-space-grotesk)]";
const fInter    = "font-[family-name:var(--font-inter)]";

// ── Reusable sub-components ───────────────────────────────────────────────────

/** ID-card style member card */
function MemberCard({ role, name }: { role: string; name: string }) {
  return (
    <div
      className="bg-[#EED9A4] w-[148px] sm:w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
      style={{ boxShadow: "0px 8px 24px #00000026" }}
    >
      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[75px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
          <span className={`text-white text-[10px] font-bold uppercase ${fCourier}`}>{role}</span>
        </div>
        <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[99px]" />
        <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
          <span className={`text-white text-[9px] font-bold text-center ${fCourier}`}>{name}</span>
        </div>
      </div>
    </div>
  );
}

/** Ketua / wakadiv card for departments (taller) */
function DivCard({ role, name }: { role: string; name: string }) {
  return (
    <div
      className="bg-[#EED9A4] w-[172px] shrink-0 p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
      style={{ boxShadow: "0px 8px 24px #00000026" }}
    >
      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
          <span className={`text-white text-[10px] font-bold uppercase ${fCourier}`}>{role}</span>
        </div>
        <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
        <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
          <span className={`text-white text-[9px] font-bold text-center ${fCourier}`}>{name}</span>
        </div>
      </div>
    </div>
  );
}

/** Small wakadiv card below department panel */
function WakadivCard({ name }: { name: string }) {
  return (
    <div className="w-[148px] pt-[72px]">
      <div
        className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
        style={{ boxShadow: "0px 8px 24px #00000026" }}
      >
        <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
          <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
            <span className={`text-white text-[10px] font-bold ${fCourier}`}>wakadiv</span>
          </div>
          <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
          <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
            <span className={`text-white text-[9px] font-bold text-center w-[130px] ${fCourier}`}>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Pill proker tag */
function Tag({ label }: { label: string }) {
  return (
    <div className="flex flex-col shrink-0 max-w-full items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
      <span className={`text-[#164A6E] text-[10px] ${fInter}`}>{label}</span>
    </div>
  );
}

/** "See Details & Fokus Kerja" button */
function SeeDetailsBtn({ onClick, align = "left", icon }: { onClick: () => void; align?: "left" | "right"; icon: React.ReactNode }) {
  return (
    <button
      className={`flex items-center bg-[#E5CE96] text-left py-[11px] px-4 sm:px-[21px] gap-2 rounded-[10px] border border-solid border-[#C8B072]${align === "right" ? " md:mr-[1px]" : ""}`}
      style={{ boxShadow: "0px 1px 2px #0000000D" }}
      onClick={onClick}
    >
      <span className={`text-[#1F3A4D] text-[13px] font-bold ${fCourier}`}>See Details &amp; Fokus Kerja</span>
      <div className="w-4 h-4">{icon}</div>
    </button>
  );
}

// ── Dept card badge button (top pill) ────────────────────────────────────────
function DeptBadge({ label, icon, iconLeft, onClick }: { label: string; icon: React.ReactNode; iconLeft?: boolean; onClick: () => void }) {
  return (
    <button
      className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 gap-2.5 rounded-xl border-0"
      onClick={onClick}
    >
      {iconLeft && <div className="w-5 h-5">{icon}</div>}
      <span className={`text-[#FFF4D6] text-xs font-bold ${fGrotesk}`}>{label}</span>
      {!iconLeft && <div className="w-5 h-5">{icon}</div>}
    </button>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function CabinetPage() {
  const [openDept, setOpenDept] = useState<string | null>(null);
  const activeDept = departments.find((d) => d.id === openDept) ?? null;

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <div className="self-stretch bg-[#FFFBF0] pt-24">

        {/* ── Main content ── */}
        <div className="self-stretch pt-10 px-4 sm:px-8 lg:px-20 mb-16 lg:mb-24 mx-0 lg:mx-11">

          {/* Title */}
          <div className="flex flex-col self-stretch gap-2">
            <div className="flex flex-wrap justify-center items-center self-stretch">
              <span className={`text-[#1F3A4D] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mr-2 lg:mr-[17px] ${fGrotesk}`}>THE </span>
              <span className={`text-[#FBC02D] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold ${fGrotesk}`}>CABINET</span>
              <span className={`text-[#1F3A4D] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold ${fGrotesk}`}> STRUCTURE</span>
            </div>
            <div className="flex flex-col items-center self-stretch">
              <span className={`text-[#1F3A4D] text-xs sm:text-[13px] text-center max-w-3xl ${fInter}`}>
                Arahkan kursor atau klik pada kartu ID pengurus untuk melihat akun Instagram &amp; LinkedIn, atau klik See Details ↗ pada tiap departemen.
              </span>
            </div>
          </div>

          {/* ── Org Chart Top ── */}
          <div className="flex flex-col items-center self-stretch py-10 md:py-14">
            <MemberCard role="ketua" name="bagas tif" />
            <div className="mb-12" />

            <MemberCard role="wakil ketua" name="abI tekkom" />
            <div className="mb-10" />

            <div className="w-full max-w-80 h-0.5 border-t-2 border-dashed border-t-[#FBC02D]" />

            <div className="flex justify-between items-start w-full max-w-[456px] pt-4 gap-3">
              <MemberCard role="sekretaris" name={"CUCUp\nTIF"} />
              <MemberCard role="sekretaris 2" name={"yusup\nTIF"} />
            </div>
          </div>

          {/* ── Department Sections ── */}
          <div className="self-stretch pb-[1px]">

            {/* ── INFOKOM ── */}
            <div className="self-stretch mb-20 md:mb-36 mx-0 lg:mx-20">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-0 right-[25px] object-contain opacity-20" alt="" />
                <div className="flex flex-col md:flex-row items-center self-stretch gap-6 md:gap-8">
=======
                <InfokomIconLarge className="w-40 h-[138px] absolute bottom-0 right-[25px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                  <DivCard role="ketua divisi" name={"jeki\nTIF"} />
                  <div className="flex flex-1 flex-col items-start w-full min-w-0">
                    <div className="mb-2.5">
                      <DeptBadge label="INFOKOM • HMDTIF 2026" icon={<InfokomIcon size={20} />} iconLeft onClick={() => setOpenDept("infokom")} />
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold whitespace-pre-line ${fCourier}`}>{"Departemen Informasi dan Komunikasi\n(INFOKOM)"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>2 BIDANG • MEDIA KREATIF &amp; HUMAS</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[9px]">
                      <span className={`text-[#1F3A4D] text-[13px] ${fInter}`}>
                        Departemen Informasi dan Komunikasi (INFOKOM) berperan sebagai penyedia dan pengelola informasi dari HMDTIF melalui pengumpulan, penyaringan, dan penyebaran informasi secara efektif kepada seluruh mahasiswa DTIF dan masyarakat umum, serta manajemen seluruh media sosial resmi HMDTIF.
                      </span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pt-1.5 mb-5 gap-[7px]">
                      <div className="flex items-center flex-wrap gap-1">
                        {["Social Media Management", "ADA ADIT (Ada Apa Dengan IT)", "SILAT (Silaturahmi HMDTIF)", "KomaTitik Podcast"].map((t) => <Tag key={t} label={t} />)}
                      </div>
                      <div className={`flex flex-col items-start bg-[#FBC02D4D] py-[1px] px-2.5 rounded-[9999px]`}>
                        <span className={`text-[#1F3A4D] text-[10px] font-bold ${fInter}`}>+4 Proker Lainnya</span>
                      </div>
                    </div>
                    <SeeDetailsBtn onClick={() => setOpenDept("infokom")} icon={<InfokomIcon size={16} />} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"vior\ntekkom"} />
                <WakadivCard name={"nurdin\ntekkom"} />
              </div>
            </div>

            {/* ── ADVOKESMA ── */}
            <div className="flex flex-col self-stretch mb-20 md:mb-[145px] mx-0 lg:mx-20 gap-[1px]">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-[-1px] left-[26px] object-contain opacity-20" alt="" />
                <div className="flex flex-col-reverse md:flex-row items-center self-stretch gap-6 md:gap-8">
                  <div className="flex-1 w-full min-w-0">
                    <div className="flex flex-col items-start md:items-end self-stretch mb-2.5">
                      <DeptBadge label="ADVOKESMA • HMDTIF 2026" onClick={() => setOpenDept("advokesma")} />
=======
                <AdvokesmaIconLarge className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
                  <div className="flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <DeptBadge label="ADVOKESMA • HMDTIF 2026" icon={<AdvokesmaIcon size={20} />} onClick={() => setOpenDept("advokesma")} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                    <div className="flex flex-col items-start self-stretch py-0.5 md:pl-9 mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold text-left md:text-right w-full max-w-[644px] whitespace-pre-line ${fCourier}`}>{"Departemen Advokasi dan Kesejahteraan\nMahasiswa"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-start md:items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>2 BIDANG • ADVOKASI &amp; KESEJAHTERAAN MAHASISWA</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch md:pl-7 mb-2.5">
                      <span className={`text-[#1F3A4D] text-[13px] text-left md:text-right w-full max-w-[652px] ${fInter}`}>
                        Departemen ADVOKESMA berperan sebagai pusat pelayanan untuk meningkatkan fungsi advokasi serta kesejahteraan mahasiswa DTIF, menyediakan dukungan menyeluruh dalam aspek akademik maupun non-akademik guna menciptakan lingkungan perkuliahan yang kondusif.
                      </span>
                    </div>
                    <div className="flex flex-col items-start md:items-end self-stretch py-[3px] mb-5 gap-1.5">
                      <div className="flex items-center flex-wrap gap-1 md:mr-[1px]">
                        {["DISMIK KRS (Diskusi Akademik KRS)", "ACE (Academic Completion and Excellence)", "Echo Advo"].map((t) => <Tag key={t} label={t} />)}
                      </div>
                      <div className="flex items-center flex-wrap gap-1.5">
                        <Tag label="CC KRS SA (Crisis Center KRS &amp; SA)" />
                        <div className="flex flex-col shrink-0 items-start bg-[#FBC02D4D] py-0.5 px-2.5 rounded-[9999px]">
                          <span className={`text-[#1F3A4D] text-[10px] font-bold ${fInter}`}>+4 Proker Lainnya</span>
                        </div>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col items-start md:items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("advokesma")} align="right" />
=======
                    <div className="flex flex-col items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("advokesma")} align="right" icon={<AdvokesmaIcon size={16} />} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                  </div>
                  <DivCard role="ketua divisi" name={"mikael\ntekkom"} />
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"lebron\ntekkom"} />
                <WakadivCard name="kobe tif" />
              </div>
            </div>

            {/* ── PSDM ── */}
            <div className="self-stretch mb-20 md:mb-36 mx-0 lg:mx-20">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-0 right-[25px] object-contain opacity-20" alt="" />
                <div className="flex flex-col md:flex-row items-center self-stretch gap-6 md:gap-8">
=======
                <PsdmIconLarge className="w-40 h-[138px] absolute bottom-0 right-[25px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                  <DivCard role="ketua divisi" name={"jordan\ntif"} />
                  <div className="flex flex-1 flex-col items-start w-full min-w-0">
                    <div className="mb-2.5">
                      <DeptBadge label="PSDM • HMDTIF 2026" icon={<PsdmIcon size={20} />} iconLeft onClick={() => setOpenDept("psdm")} />
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold whitespace-pre-line ${fCourier}`}>{"Departemen Pengembangan Sumber Daya\nMahasiswa"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>2 DIVISI • DIVISI HUMANIORA &amp; DIVISI WIDYANTARA</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[9px]">
                      <span className={`text-[#1F3A4D] text-[13px] ${fInter}`}>
                        Departemen PSDM berfungsi sebagai sentra akselerasi kompetensi anggota HMDTIF yang berfokus pada pembentukan karakter kepemimpinan serta peningkatan hardskill dan softskill melalui integrasi Divisi Humaniora dan Divisi Widyantara guna mencetak SDM berdaya saing tinggi.
                      </span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pt-1.5 mb-5 gap-[7px]">
                      <div className="flex items-center flex-wrap gap-1">
                        {["ASA (Assemble Study Association)", "MAGANG GO!", "INFORCE (Informatics Career Excellence)"].map((t) => <Tag key={t} label={t} />)}
                      </div>
                      <div className="flex items-center flex-wrap gap-1.5">
                        <Tag label="TEKRA (Technology &amp; Creativity Arena)" />
                        <div className="flex flex-col shrink-0 items-start bg-[#FBC02D4D] py-0.5 px-2.5 rounded-[9999px]">
                          <span className={`text-[#1F3A4D] text-[10px] font-bold ${fInter}`}>+4 Proker Lainnya</span>
                        </div>
                      </div>
                    </div>
                    <SeeDetailsBtn onClick={() => setOpenDept("psdm")} icon={<PsdmIcon size={16} />} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"adam\ntekkom"} />
                <WakadivCard name={"sigit\ntekkom"} />
              </div>
            </div>

            {/* ── BISNIS ── */}
            <div className="flex flex-col self-stretch mb-20 md:mb-[145px] mx-0 lg:mx-20 gap-[1px]">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-[-1px] left-[26px] object-contain opacity-20" alt="" />
                <div className="flex flex-col-reverse md:flex-row items-center self-stretch gap-6 md:gap-8">
                  <div className="flex-1 w-full min-w-0">
                    <div className="flex flex-col items-start md:items-end self-stretch mb-2.5">
                      <DeptBadge label="BISNIS • HMDTIF 2026" onClick={() => setOpenDept("bisnis")} />
=======
                <BisnisIconLarge className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
                  <div className="flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <DeptBadge label="BISNIS • HMDTIF 2026" icon={<BisnisIcon size={20} />} onClick={() => setOpenDept("bisnis")} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                    <div className="flex flex-col items-start self-stretch py-0.5 md:pl-9 mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold text-left md:text-right w-full max-w-[644px] whitespace-pre-line ${fCourier}`}>{"Departemen Bisnis (Entrepreneurship &\nPartnership)"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-start md:items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>ENTREPRENEURSHIP • FUNDRAISING &amp; SPONSORSHIP</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch md:pl-[13px] mb-2.5">
                      <span className={`text-[#1F3A4D] text-[13px] text-left md:text-right w-full max-w-[667px] ${fInter}`}>
                        Departemen Bisnis berfungsi sebagai sentra strategis pengembangan kompetensi kewirausahaan (entrepreneurship) bagi mahasiswa Teknik Informatika, yang mengintegrasikan fungsi fundraising organisasi dengan edukasi manajemen bisnis serta perluasan jejaring kemitraan.
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-start md:justify-end items-center self-stretch py-1.5 mb-5 gap-1.5">
                      {["Warung Informatika", "HMDTIF Wear", "Informatics Partnership and Sponsorship"].map((t) => <Tag key={t} label={t} />)}
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col items-start md:items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("bisnis")} align="right" />
=======
                    <div className="flex flex-col items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("bisnis")} align="right" icon={<BisnisIcon size={16} />} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                  </div>
                  <DivCard role="ketua divisi" name={"aldo\ntekkom"} />
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"zahra\ntif"} />
                <WakadivCard name={"akup\ntekkom"} />
              </div>
            </div>

            {/* ── PIT ── */}
            <div className="self-stretch mb-20 md:mb-36 mx-0 lg:mx-20">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-0 right-[25px] object-contain opacity-20" alt="" />
                <div className="flex flex-col md:flex-row items-center self-stretch gap-6 md:gap-8">
=======
                <PitIconLarge className="w-40 h-[138px] absolute bottom-0 right-[25px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                  <DivCard role="ketua divisi" name={"morant\ntekkom"} />
                  <div className="flex flex-1 flex-col items-start w-full min-w-0">
                    <div className="mb-2.5">
                      <DeptBadge label="PIT • HMDTIF 2026" icon={<PitIcon size={20} />} iconLeft onClick={() => setOpenDept("pit")} />
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold whitespace-pre-line ${fCourier}`}>{"Departemen Pengembangan Informasi dan\nTeknologi (PIT)"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>AGILE SDLC • INFORMATION SYSTEMS &amp; DIGITAL PLATFORM</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[15px]">
                      <span className={`text-[#1F3A4D] text-[13px] ${fInter}`}>
                        Pengembangan Informasi dan Teknologi (PIT) bertanggung jawab atas pengembangan sistem informasi, teknologi, dan media digital guna mendukung kegiatan serta kebutuhan HMDTIF dengan menerapkan pendekatan Software Development Life Cycle (SDLC) berbasis Agile yang iteratif dan fleksibel.
                      </span>
                    </div>
                    <div className="mb-5 max-w-full">
                      <Tag label="Pemeliharaan dan Optimalisasi Website (hmdtif.filkom.ub.ac.id)" />
                    </div>
                    <SeeDetailsBtn onClick={() => setOpenDept("pit")} icon={<PitIcon size={16} />} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"irving\ntif"} />
                <WakadivCard name={"kevint\ntekkom"} />
              </div>
            </div>

            {/* ── SENAT ── */}
            <div className="flex flex-col self-stretch mx-0 lg:mx-20 gap-[1px]">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-5 sm:p-8 lg:p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
<<<<<<< HEAD
                <img src={LOGO_WIDE} className="w-24 h-20 md:w-40 md:h-[138px] absolute bottom-[-1px] left-[26px] object-contain opacity-20" alt="" />
                <div className="flex flex-col-reverse md:flex-row items-center self-stretch gap-6 md:gap-8">
                  <div className="flex-1 w-full min-w-0">
                    <div className="flex flex-col items-start md:items-end self-stretch mb-2.5">
                      <DeptBadge label="SENAT • HMDTIF 2026" onClick={() => setOpenDept("senat")} />
=======
                <SenatIconLarge className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] opacity-20" />
                <div className="flex items-center self-stretch gap-8">
                  <div className="flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <DeptBadge label="SENAT • HMDTIF 2026" icon={<SenatIcon size={20} />} onClick={() => setOpenDept("senat")} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                    <div className="flex flex-col items-start md:items-end self-stretch py-0.5 mb-2.5">
                      <span className={`text-[#1F3A4D] text-xl sm:text-2xl lg:text-[29px] font-bold text-left md:text-right w-full max-w-[557px] whitespace-pre-line ${fCourier}`}>{"Senat HMDTIF (Lembaga Legislatif\nMahasiswa)"}</span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-start md:items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className={`text-[#2E8FA6] text-xs font-bold ${fGrotesk}`}>LEGISLATIF • KONSTITUSI, ASPIRASI &amp; PENGAWASAN</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch md:pl-[38px] mb-2.5">
                      <span className={`text-[#1F3A4D] text-[13px] text-left md:text-right w-full max-w-[642px] ${fInter}`}>
                        Senat HMDTIF merupakan lembaga legislatif yang berperan strategis dalam memastikan arah gerak dan kualitas tata kelola organisasi, menjadi wadah mahasiswa untuk terlibat langsung dalam pengambilan keputusan, penghimpunan aspirasi, pengawasan program kerja, serta perumusan AD/ART dan GBHK.
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-start md:justify-end items-center self-stretch py-1.5 mb-5 gap-1.5">
                      {["Musyawarah HMDTIF", "Evaluasi Triwulan", "Rapat Besar"].map((t) => <Tag key={t} label={t} />)}
                    </div>
<<<<<<< HEAD
                    <div className="flex flex-col items-start md:items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("senat")} align="right" />
=======
                    <div className="flex flex-col items-end self-stretch">
                      <SeeDetailsBtn onClick={() => setOpenDept("senat")} align="right" icon={<SenatIcon size={16} />} />
>>>>>>> 2e31f92 (update tambah icon dan benerin icon cabinet digabungin dengan file bernama DepartmentIcons.tsx baru baru baru baru baru FE KEREN WOW)
                    </div>
                  </div>
                  <DivCard role="ketua divisi" name={"devin\ntif"} />
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                <WakadivCard name={"johnson\ntif"} />
                <WakadivCard name={"russel\ntekkom"} />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Department Modal ── */}
      {activeDept && (
        <DepartmentModal department={activeDept} onClose={() => setOpenDept(null)} />
      )}
    </div>
  );
}
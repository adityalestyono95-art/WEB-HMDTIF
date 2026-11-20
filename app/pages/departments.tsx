"use client";

import React, { useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface StaffMember {
  initials: string;
  name: string;
  role: string; // e.g. "STAF MEDIA KREATIF • Teknik Informatika '25"
}

export interface FokusKerja {
  iconSrc: string;
  text: string;
}

export interface Bidang {
  title: string; // e.g. "Fokus Kerja — Bidang Media Kreatif"
  items: FokusKerja[];
}

export interface DepartmentData {
  id: string;
  iconSrc: string;
  badge: string;       // e.g. "2 BIDANG • MEDIA KREATIF & HUMAS"
  name: string;        // full department name (use \n for line break)
  description: string; // paragraph
  bidang: Bidang[];
  programKerja: string[]; // list of proker names
  staff: StaffMember[];
}

// ─── Department Data ─────────────────────────────────────────────────────────

export const departments: DepartmentData[] = [
  {
    id: "infokom",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82a9fb05-f645-4dd1-99f3-3077c7ee8569",
    badge: "2 BIDANG • MEDIA KREATIF & HUMAS",
    name: "Departemen Informasi dan Komunikasi\n(INFOKOM)",
    description:
      "Departemen Informasi dan Komunikasi (INFOKOM) berperan sebagai penyedia dan pengelola informasi dari HMDTIF melalui pengumpulan, penyaringan, dan penyebaran informasi secara efektif kepada seluruh mahasiswa DTIF dan masyarakat umum, serta manajemen seluruh media sosial resmi HMDTIF.",
    bidang: [
      {
        title: "Fokus Kerja — Bidang Media Kreatif",
        items: [
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0",
            text: "Bertanggung jawab dalam desain grafis.",
          },
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0",
            text: "Bertanggung jawab dalam mendokumentasikan sebuah acara atau program kerja dari HMDTIF.",
          },
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afb96e20-d075-444f-9a44-2fb6915cd6d7",
            text: "Berkolaborasi bersama bidang HUMAS dalam pembuatan konten kreatif.",
          },
        ],
      },
      {
        title: "Fokus Kerja — Bidang Humas",
        items: [
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8",
            text: "Bertanggung jawab dalam mengatur semua media sosial resmi dari HMDTIF.",
          },
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622",
            text: "Bertanggung jawab dalam pembuatan konten di berbagai platform, seperti TikTok, Instagram, LinkedIn, Spotify, dan YouTube.",
          },
          {
            iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9af4cfa7-73c2-4adc-bf0d-7875398d5223",
            text: "Menjadi penghubung informasi dan komunikasi dalam skala internal dan eksternal dari HMDTIF.",
          },
        ],
      },
    ],
    programKerja: [
      "Social Media Management",
      "ADA ADIT (Ada Apa Dengan IT)",
      "SILAT (Silaturahmi HMDTIF)",
      "KomaTitik Podcast",
      "Company Profile",
      "Apresiasi Wisuda dan Arak-arakan",
      "Media Partnership",
      "Kabar Prestasi",
    ],
    staff: [
      { initials: "RI", name: "Riko Mandala V.",  role: "STAF MEDIA KREATIF • Teknik Informatika '25" },
      { initials: "SA", name: "Sabrina Aurelia",   role: "STAF MEDIA KREATIF • Teknik Informatika '24" },
      { initials: "KA", name: "Kayla Maharani",    role: "STAF MEDIA KREATIF • Teknik Informatika '25" },
      { initials: "KE", name: "Keisya Azzahra",    role: "STAF HUMAS • Teknik Informatika '24" },
      { initials: "RA", name: "Rafi Ahmad Z.",      role: "STAF HUMAS • Teknik Informatika '25" },
    ],
  },
  {
    id: "advokesma",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6e19756-7836-4496-a192-26b56fc72ae6",
    badge: "2 BIDANG • ADVOKASI & KESEJAHTERAAN MAHASISWA",
    name: "Departemen Advokasi dan Kesejahteraan\nMahasiswa (ADVOKESMA)",
    description:
      "Departemen ADVOKESMA berperan sebagai pusat pelayanan untuk meningkatkan fungsi advokasi serta kesejahteraan mahasiswa DTIF, menyediakan dukungan menyeluruh dalam aspek akademik maupun non-akademik guna menciptakan lingkungan perkuliahan yang kondusif.",
    bidang: [
      {
        title: "Fokus Kerja — Bidang Advokasi",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0", text: "Menjadi wadah aspirasi dan advokasi mahasiswa DTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0", text: "Mendampingi mahasiswa dalam permasalahan akademik." },
        ],
      },
      {
        title: "Fokus Kerja — Bidang Kesejahteraan Mahasiswa",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8", text: "Meningkatkan kesejahteraan mahasiswa DTIF melalui berbagai program." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622", text: "Menyediakan layanan konsultasi dan crisis center bagi mahasiswa." },
        ],
      },
    ],
    programKerja: [
      "DISMIK KRS (Diskusi Akademik KRS)",
      "ACE (Academic Completion and Excellence)",
      "Echo Advo",
      "CC KRS SA (Crisis Center KRS & SA)",
      "+4 Proker Lainnya",
    ],
    staff: [],
  },
  {
    id: "psdm",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0c0f37d-a014-4249-beb1-00a28fca2cf2",
    badge: "2 DIVISI • DIVISI HUMANIORA & DIVISI WIDYANTARA",
    name: "Departemen Pengembangan Sumber Daya\nMahasiswa (PSDM)",
    description:
      "Departemen PSDM berfungsi sebagai sentra akselerasi kompetensi anggota HMDTIF yang berfokus pada pembentukan karakter kepemimpinan serta peningkatan hardskill dan softskill melalui integrasi Divisi Humaniora dan Divisi Widyantara guna mencetak SDM berdaya saing tinggi.",
    bidang: [
      {
        title: "Fokus Kerja — Divisi Humaniora",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0", text: "Membangun karakter kepemimpinan dan softskill anggota HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0", text: "Menyelenggarakan kegiatan pengembangan diri dan leadership." },
        ],
      },
      {
        title: "Fokus Kerja — Divisi Widyantara",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8", text: "Meningkatkan hardskill dan kompetensi teknis anggota HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622", text: "Mempersiapkan anggota untuk karir dan dunia industri." },
        ],
      },
    ],
    programKerja: [
      "ASA (Assemble Study Association)",
      "MAGANG GO!",
      "INFORCE (Informatics Career Excellence)",
      "TEKRA (Technology & Creativity Arena)",
      "+4 Proker Lainnya",
    ],
    staff: [],
  },
  {
    id: "bisnis",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e42400aa-355b-458c-b19a-4e13593838de",
    badge: "ENTREPRENEURSHIP • FUNDRAISING & SPONSORSHIP",
    name: "Departemen Bisnis\n(Entrepreneurship & Partnership)",
    description:
      "Departemen Bisnis berfungsi sebagai sentra strategis pengembangan kompetensi kewirausahaan (entrepreneurship) bagi mahasiswa Teknik Informatika, yang mengintegrasikan fungsi fundraising organisasi dengan edukasi manajemen bisnis serta perluasan jejaring kemitraan.",
    bidang: [
      {
        title: "Fokus Kerja — Entrepreneurship",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0", text: "Mengembangkan kompetensi kewirausahaan mahasiswa DTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0", text: "Mengelola unit bisnis HMDTIF seperti Warung Informatika dan HMDTIF Wear." },
        ],
      },
      {
        title: "Fokus Kerja — Fundraising & Sponsorship",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8", text: "Mengelola kemitraan dan sponsorship untuk kegiatan HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622", text: "Membangun jejaring dengan industri dan perusahaan teknologi." },
        ],
      },
    ],
    programKerja: [
      "Warung Informatika",
      "HMDTIF Wear",
      "Informatics Partnership and Sponsorship",
    ],
    staff: [],
  },
  {
    id: "pit",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c252373e-d0a2-4e04-b26f-aac999165030",
    badge: "AGILE SDLC • INFORMATION SYSTEMS & DIGITAL PLATFORM",
    name: "Departemen Pengembangan Informasi dan\nTeknologi (PIT)",
    description:
      "Pengembangan Informasi dan Teknologi (PIT) bertanggung jawab atas pengembangan sistem informasi, teknologi, dan media digital guna mendukung kegiatan serta kebutuhan HMDTIF dengan menerapkan pendekatan Software Development Life Cycle (SDLC) berbasis Agile yang iteratif dan fleksibel.",
    bidang: [
      {
        title: "Fokus Kerja — Information Systems",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0", text: "Mengembangkan dan memelihara website resmi HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0", text: "Membangun sistem informasi internal untuk mendukung operasional HMDTIF." },
        ],
      },
      {
        title: "Fokus Kerja — Digital Platform",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8", text: "Mengelola platform digital dan media HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622", text: "Menerapkan Agile SDLC dalam setiap pengembangan produk teknologi." },
        ],
      },
    ],
    programKerja: [
      "Pemeliharaan dan Optimalisasi Website (hmdtif.filkom.ub.ac.id)",
    ],
    staff: [],
  },
  {
    id: "senat",
    iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39c5ba50-ce83-41fd-a8d0-f8d06713eeb0",
    badge: "LEGISLATIF • KONSTITUSI, ASPIRASI & PENGAWASAN",
    name: "Senat HMDTIF\n(Lembaga Legislatif Mahasiswa)",
    description:
      "Senat HMDTIF merupakan lembaga legislatif yang berperan strategis dalam memastikan arah gerak dan kualitas tata kelola organisasi, menjadi wadah mahasiswa untuk terlibat langsung dalam pengambilan keputusan, penghimpunan aspirasi, pengawasan program kerja, serta perumusan AD/ART dan GBHK.",
    bidang: [
      {
        title: "Fokus Kerja — Konstitusi",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63db2e90-01c8-45e3-8244-fa9e977424d0", text: "Merumuskan dan memperbarui AD/ART serta GBHK HMDTIF." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d6bdfb-044a-4fa1-8c3a-832c9734d2b0", text: "Memastikan seluruh kegiatan organisasi sesuai dengan konstitusi." },
        ],
      },
      {
        title: "Fokus Kerja — Aspirasi & Pengawasan",
        items: [
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7c0870-4ae1-4aad-ba0d-99202c766fe8", text: "Menghimpun aspirasi mahasiswa DTIF untuk disampaikan ke kabinet." },
          { iconSrc: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf3cffd-47aa-415d-86f7-3c51951e0622", text: "Mengawasi pelaksanaan program kerja kabinet." },
        ],
      },
    ],
    programKerja: [
      "Musyawarah HMDTIF",
      "Evaluasi Triwulan",
      "Rapat Besar",
    ],
    staff: [],
  },
];

// ─── Department Modal Component ───────────────────────────────────────────────

interface DepartmentModalProps {
  department: DepartmentData;
  onClose: () => void;
}

function DepartmentModal({ department, onClose }: DepartmentModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Escape menutup dialog, Tab berputar di dalam dialog, dan fokus pindah
  // ke dialog saat dibuka supaya pembaca layar tidak membaca halaman di
  // belakangnya.
  useEffect(() => {
    cardRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !cardRef.current) return;

      const fokusable = cardRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (fokusable.length === 0) return;

      const pertama = fokusable[0];
      const terakhir = fokusable[fokusable.length - 1];
      if (e.shiftKey && document.activeElement === pertama) {
        e.preventDefault();
        terakhir.focus();
      } else if (!e.shiftKey && document.activeElement === terakhir) {
        e.preventDefault();
        pertama.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    // Overlay backdrop
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#444444]/90 p-4 md:p-10"
      onClick={onClose}
    >
      {/* Card — stop propagation so clicking inside doesn't close */}
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-label={department.name}
        tabIndex={-1}
        className="mb-12 flex w-full max-w-[768px] flex-col items-start rounded-3xl border-2 border-solid border-[#FBC02D] bg-[#FFFBF0] py-6 pl-6 pr-6 md:py-[34px] md:pl-[34px] md:pr-0"
        style={{ boxShadow: "0px 25px 50px #00000040" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="mb-[33px] flex w-full items-start gap-[15px] border-b border-solid border-b-[#1F3A4D26] pr-0 md:pr-[34px]">
          <div className="flex shrink-0 items-center gap-3.5 pb-4 flex-1">
            {/* Dept icon */}
            <div className="flex shrink-0 flex-col items-start rounded-2xl bg-[#2F5470] p-2.5">
              <img width={28} height={28}
                src={department.iconSrc}
                className="w-7 h-7 rounded-2xl object-fill"
                alt=""
              />
            </div>
            {/* Dept name */}
            <div className="flex flex-col shrink-0 items-start pt-1.5 gap-[1px]">
              <span className="text-[#1f7189] text-[11px] font-bold">
                {department.badge}
              </span>
              <span className="text-[#2F5470] text-xl font-bold whitespace-pre-line md:text-[26px]">
                {department.name}
              </span>
            </div>
          </div>
          {/* Close button */}
          <button
            className="flex flex-col shrink-0 items-center justify-center bg-[#FFF4D6] text-left w-9 h-9 mt-2 rounded-[9999px] border-0 cursor-pointer hover:bg-[#F6E7B0] transition-colors"
            onClick={onClose}
            aria-label="Tutup"
          >
            <span className="text-[#1F3A4D] text-lg font-bold leading-none">×</span>
          </button>
        </div>

        {/* ── Description ── */}
        <p className="mb-5 w-full text-[13px] leading-relaxed text-[#1F3A4D] md:pr-[34px]">
          {department.description}
        </p>

        {/* ── Bidang / Fokus Kerja ── */}
        <div className="mb-3.5 flex w-full flex-col gap-4">
          {department.bidang.map((b) => (
            <div
              key={b.title}
              className="flex flex-col self-stretch bg-[#FFF4D6] p-[17px] gap-2 rounded-2xl border border-solid border-[#1F3A4D26]"
            >
              <span className="text-[#2F5470] text-[15px] font-bold">{b.title}</span>
              <div className="flex flex-col self-stretch gap-1.5">
                {b.items.map((item, i) => (
                  <div key={i} className="flex items-start self-stretch gap-2">
                    <div className="flex flex-col shrink-0 items-center pt-0.5">
                      <img width={16} height={16} src={item.iconSrc} className="w-4 h-4 object-fill" alt="" />
                    </div>
                    <span className="text-[#1F3A4D] text-xs leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Program Kerja ── */}
        <div className="mb-6 flex w-full flex-col gap-[9px]">
          <span className="text-[#2F5470] text-[15px] font-bold">
            Program Kerja Resmi ({department.programKerja.length})
          </span>
          <div className="flex flex-wrap gap-2">
            {department.programKerja.map((proker) => (
              <button
                key={proker}
                className="flex flex-col shrink-0 items-start bg-[#2F5470] text-left py-[5px] px-3 rounded-xl border-0"
                onClick={() => {}}
              >
                <span className="text-[#FFF4D6] text-[11px]">• {proker}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Staff ── */}
        {department.staff.length > 0 && (
          <div className="flex w-full flex-col gap-[11px]">
            <span className="text-[#2F5470] text-[15px] font-bold">
              Jajaran Pengurus &amp; Staf Departemen
            </span>
            <div className="flex flex-wrap gap-3">
              {department.staff.map((s) => (
                <div
                  key={s.name}
                  className="flex w-full items-center gap-3 rounded-xl border border-solid border-[#1F3A4D26] bg-[#FFF4D6] px-[13px] py-3 sm:w-[325px]"
                >
                  <button
                    className="flex flex-col shrink-0 items-center justify-center bg-[#2F5470] text-left py-[9px] px-[11px] rounded-[9999px] border-0 min-w-[36px]"
                    onClick={() => {}}
                  >
                    <span className="text-[#FFF4D6] text-xs font-bold">{s.initials}</span>
                  </button>
                  <div className="flex-1">
                    <div className="flex flex-col items-start">
                      <span className="text-[#1F3A4D] text-[13px] font-bold">{s.name}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-[#1f7189] text-[10px] font-bold">{s.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentModal;

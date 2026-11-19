'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function Page() {
  // Cari tulisan
  const [cari, setCari] = useState("")
  const [kategori, setKategori] = useState("SEMUA")

  // true kalau berita ini harus tampil, false kalau harus disembunyikan
  const tampil = (kategoriBerita: string, judul: string) => {
    const cocokKategori = kategori === "SEMUA" || kategori === kategoriBerita
    const cocokCari = judul.toLowerCase().includes(cari.toLowerCase())
    return cocokKategori && cocokCari
  }

  // class tombol filter: aktif (biru tua) dan tidak aktif (krem)
  const tombolAktif = "rounded-full border border-[#2d5373] bg-[#2d5373] px-4 py-1.5 text-[11px] font-bold tracking-wider text-[#FFF4D6]"
  const tombolBiasa = "rounded-full border border-black/10 bg-[#FFF4D6] px-4 py-1.5 text-[11px] font-bold tracking-wider text-[#2d5373] hover:bg-[#ffecb8] transition-colors duration-300"

  return (
    <div>
      <div className="container mx-auto px-6 py-10 md:px-10 lg:px-16">
        <h1 className='text-center text-3xl font-bold leading-tight text-[#2d5373] md:text-5xl'>Stay Updated on What</h1>
        <h1 className='text-center text-3xl font-bold leading-tight text-[#2d5373] md:text-5xl' >Matters Most</h1>

        {/* Find */}
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-black/10 bg-[#FFF4D6] px-5 py-3">
          <Search size={16} className="shrink-0 text-[#2d5373]/60" />
          <input
            type="text"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari berita program kerja, beasiswa, atau prestasi DTIF..."
            className="w-full bg-transparent text-xs text-[#2d5373] outline-none placeholder:text-[#2d5373]/50 md:text-sm"
          />
        </div>

        {/* Berita utama */}
        <div className="news-box mt-10 rounded-3xl bg-gradient-to-br from-[#2d5373] to-[#2e8aa3] px-6 py-8 shadow-lg md:px-10 md:py-10">

          <div className="news-nox">
            <p className='text-right'>
              <span className="inline-block rounded-full border border-white/40 bg-white/15 px-4 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER UNGGULAN</span>
            </p>
          </div>
          <p className="mt-2 text-xs text-yellow-200">17 Oktober 2026</p>
          <h1 className="mt-3 max-w-2xl text-2xl font-bold leading-snug text-[#FFF4D6] md:text-4xl">INTRIVIA 2026 Sambut Mahasiswa Baru DTIF Melalui Pengenalan Lingkungan & Nilai Integritas</h1>
          <br />
          <p className="max-w-xl text-xs leading-relaxed text-white/80 md:text-sm">Departemen PSDM Bidang Humaniora sukses menyelenggarakan INTRIVIA (Informatics Introduction Environments Education) sebagai wadah orientasi dan pembentukan karakter mahasiswa baru DTIF.</p>
        </div>

        {/* Latest News + filter */}
        <div className="news-box mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="box-lagi">
            <h2 className="text-2xl font-bold text-[#2d5373] md:text-3xl">Latest News</h2>
          </div>
          <div className="box-lagi flex flex-wrap gap-2">
            <button onClick={() => setKategori("SEMUA")} className={kategori === "SEMUA" ? tombolAktif : tombolBiasa}>SEMUA</button>
            <button onClick={() => setKategori("PROKER")} className={kategori === "PROKER" ? tombolAktif : tombolBiasa}>PROKER</button>
            <button onClick={() => setKategori("INFO")} className={kategori === "INFO" ? tombolAktif : tombolBiasa}>INFO</button>
            <button onClick={() => setKategori("PRESTASI")} className={kategori === "PRESTASI" ? tombolAktif : tombolBiasa}>PRESTASI</button>
          </div>
        </div>

        {/* HP 1 kolom, tablet 2 kolom, laptop 3 kolom */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* News 1 */}
          <div className={`${tampil("PROKER", "INTRIVIA 2026 Sambut Mahasiswa Baru DTIF Melalui Pengenalan Lingkungan & Nilai Integritas") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] to-[#2e8aa3]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">17 Oktober 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">INTRIVIA 2026 Sambut Mahasiswa Baru DTIF Melalui Pengenalan Lingkungan & Nilai Integritas</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Departemen PSDM Bidang Humaniora sukses menyelenggarakan INTRIVIA (Informatics Introduction Environments Education) sebagai wadah orientasi dan...
            </p>
          </div>

          {/* News 2 */}
          <div className={`${tampil("INFO", "EXTENDED! Open Recruitment Staff Muda HMDTIF Kabinet Bahtera Gatra") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#3d5a78] to-[#1e4d73]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">INFO</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">11 Oktober 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">EXTENDED! Open Recruitment Staff Muda HMDTIF Kabinet Bahtera Gatra</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Pendaftaran Staff Muda HMDTIF 2026 resmi diperpanjang pada 11–13 Oktober 2026. Segera lengkapi berkas online, unggah twibbon, dan ikuti tahap...
            </p>
          </div>

          {/* News 3 */}
          <div className={`${tampil("PROKER", "DISMIK KRS & Crisis Center KRS SA Hadir Dampingi Perencanaan Studi Mahasiswa") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#2e8aa3] to-[#1e4d73]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">08 Oktober 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">DISMIK KRS & Crisis Center KRS SA Hadir Dampingi Perencanaan Studi Mahasiswa</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Departemen ADVOKESMA membuka posko CC KRS SA dan forum Diskusi Akademik KRS (DISMIK KRS) untuk memastikan seluruh mahasiswa DTIF tidak mengalami...
            </p>
          </div>

          {/* News 4 */}
          <div className={`${tampil("PROKER", "INFORCE & MAGANG GO! 2026 Siapkan Karier Profesional dan Portofolio Industri") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] via-[#2e6f8f] to-[#f0b36b]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">04 Oktober 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">INFORCE & MAGANG GO! 2026 Siapkan Karier Profesional dan Portofolio Industri</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Divisi Widyantara Departemen PSDM mengakselerasi hardskill dan kesiapan karier mahasiswa lewat rangkaian Informatics Career Excellence (INFORCE)
            </p>
          </div>

          {/* News 5 */}
          <div className={`${tampil("PRESTASI", "Kabar Prestasi & ADA ADIT: INFOKOM Rilis Episode Baru KomaTitik Podcast") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#2e8aa3] via-[#2e6f8f] to-[#1e4d73]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PRESTASI</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">29 September 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">Kabar Prestasi & ADA ADIT: INFOKOM Rilis Episode Baru KomaTitik Podcast</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Departemen INFOKOM terus menghadirkan konten edukatif melalui segmen ADA ADIT (Ada Apa Dengan IT), KomaTitik Podcast, serta publikasi Kabar...
            </p>
          </div>

          {/* News 6 */}
          <div className={`${tampil("PROKER", "Departemen Bisnis Luncurkan Katalog HMDTIF Wear & Ekspansi Warung") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] to-[#3a8fa3]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">22 September 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">Departemen Bisnis Luncurkan Katalog HMDTIF Wear & Ekspansi Warung</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Mengintegrasikan fungsi fundraising dan edukasi kewirausahaan, Departemen Bisnis menghadirkan koleksi merchandise resmi HMDTIF Wear
            </p>
          </div>

          {/* News 7 */}
          <div className={`${tampil("PROKER", "TEKRA & BUFFEST 2026 Jadi Panggung Apresiasi Karya Teknologi dan Seni") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#3d5a78] via-[#2e8aa3] to-[#1e4d73]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">15 September 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">TEKRA & BUFFEST 2026 Jadi Panggung Apresiasi Karya Teknologi dan Seni</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Kolaborasi program kerja TEKRA (Technology & Creativity Arena) dan BUFFEST membuka ruang kreasi inovasi mahasiswa Teknik Informatika.
            </p>
          </div>

          {/* News 8 */}
          <div className={`${tampil("INFO", "Senat HMDTIF Gelar Evaluasi Triwulan dan Rapat Besar Bersama Seluruh") ? "flex" : "hidden"} flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md`}>
            <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] to-[#3d5a78]">
              <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">INFO</p>
              <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
            </div>
            <p className="mt-4 text-xs text-[#2d5373]/70">09 September 2026</p>
            <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">Senat HMDTIF Gelar Evaluasi Triwulan dan Rapat Besar Bersama Seluruh</h4>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
              Malang — Guna menjaga tata kelola organisasi yang transparan dan akuntabel, Senat HMDTIF menyelenggarakan agenda Evaluasi Triwulan serta...
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
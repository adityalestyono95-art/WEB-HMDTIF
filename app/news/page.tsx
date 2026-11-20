'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { ambilBerita, formatTanggal, type Berita } from '@/app/lib/news'

export default function Page() {
  // Cari tulisan
  const [cari, setCari] = useState("")
  const [kategori, setKategori] = useState("SEMUA")

  // Berita dari API. null = masih memuat.
  const [berita, setBerita] = useState<Berita[] | null>(null)
  const [gagal, setGagal] = useState(false)

  useEffect(() => {
    let batal = false
    ambilBerita(100)
      .then((d) => { if (!batal) setBerita(d) })
      .catch(() => { if (!batal) setGagal(true) })
    return () => { batal = true }
  }, [])

  // Filter di klien: datanya kecil dan pencarian jadi terasa instan.
  const hasil = useMemo(() => {
    if (!berita) return []
    const kata = cari.trim().toLowerCase()
    return berita.filter((b) => {
      const cocokKategori = kategori === "SEMUA" || kategori === b.category
      const cocokCari = kata === "" || b.title.toLowerCase().includes(kata) || b.excerpt.toLowerCase().includes(kata)
      return cocokKategori && cocokCari
    })
  }, [berita, kategori, cari])

  // Berita unggulan hanya tampil saat tidak ada filter aktif.
  const unggulan = useMemo(() => {
    if (!berita) return null
    return berita.find((b) => b.is_featured) ?? null
  }, [berita])

  const tanpaFilter = kategori === "SEMUA" && cari.trim() === ""

  // class tombol filter: aktif (biru tua) dan tidak aktif (krem)
  const tombolAktif = "rounded-full border border-[#2F5470] bg-[#2F5470] px-4 py-1.5 text-[11px] font-bold tracking-wider text-[#FFF4D6]"
  const tombolBiasa = "rounded-full border border-black/10 bg-[#FFF4D6] px-4 py-1.5 text-[11px] font-bold tracking-wider text-[#2F5470] hover:bg-[#F6D977] transition-colors duration-300"

  return (
    <div>
      <div className="container mx-auto px-6 py-10 md:px-10 lg:px-16 xl:px-20">
        <h1 className='text-center text-3xl font-bold leading-tight text-[#2F5470] md:text-5xl lg:text-[56px] lg:leading-[64px]'>
          Stay Updated on What<br />Matters Most
        </h1>

        {/* Find */}
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-black/10 bg-[#FFF4D6] px-5 py-1 focus-within:border-[#2F5470] focus-within:ring-2 focus-within:ring-[#2F5470]/40">
          <Search size={16} aria-hidden="true" className="shrink-0 text-[#2F5470]/60" />
          <label htmlFor="cari-berita" className="sr-only">Cari berita</label>
          <input
            id="cari-berita"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari berita program kerja, beasiswa, atau prestasi DTIF..."
            className="min-h-11 w-full bg-transparent text-xs text-[#2F5470] outline-none placeholder:text-[#2F5470]/60 md:text-sm"
          />
          {cari && (
            <button
              type="button"
              onClick={() => setCari("")}
              aria-label="Hapus kata pencarian"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-lg leading-none text-[#2F5470] hover:text-[#2F5470]"
            >
              ×
            </button>
          )}
        </div>

        {/* Berita utama, hanya saat tidak ada filter aktif */}
        {tanpaFilter && unggulan && (
          <div className="news-box mt-10 rounded-3xl bg-gradient-to-br from-[#2F5470] to-[#2E8FA6] px-6 py-8 shadow-lg md:px-10 md:py-10">
            <div className="news-nox">
              <p className='text-right'>
                <span className="inline-block rounded-full border border-white/40 bg-white/15 px-4 py-1 text-[10px] font-semibold tracking-wider text-white">{unggulan.category} UNGGULAN</span>
              </p>
            </div>
            <p className="mt-2 text-xs text-yellow-200">{formatTanggal(unggulan.published_at)}</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-snug text-[#FFF4D6] md:text-4xl">{unggulan.title}</h2>
            <br />
            <p className="max-w-xl text-xs leading-relaxed text-white/80 md:text-sm">{unggulan.excerpt}</p>
          </div>
        )}

        {/* Latest News + filter */}
        <div className="news-box mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="box-lagi">
            <h2 className="text-2xl font-bold text-[#2F5470] md:text-3xl">Latest News</h2>
          </div>
          <div className="box-lagi flex flex-wrap gap-2">
            {["SEMUA", "PROKER", "INFO", "PRESTASI"].map((k) => (
              <button
                key={k}
                onClick={() => setKategori(k)}
                aria-pressed={kategori === k}
                className={`${kategori === k ? tombolAktif : tombolBiasa} min-h-11 px-4`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* HP 1 kolom, tablet 2 kolom, laptop 3 kolom */}
        {gagal ? (
          <div role="status" className="mt-6 rounded-2xl border border-black/10 bg-[#FFF4D6] px-6 py-10 text-center">
            <p className="text-sm font-bold text-[#2F5470]">Berita belum bisa dimuat</p>
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#2F5470]/85">
              Server tidak merespons. Coba muat ulang halaman.
            </p>
          </div>
        ) : !berita ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
                <div className="aspect-[16/9] rounded-xl bg-[#164A6E]/15" />
                <div className="mt-4 h-3 w-24 rounded bg-[#2F5470]/15" />
                <div className="mt-2 h-4 w-full rounded bg-[#2F5470]/15" />
                <div className="mt-2 h-4 w-2/3 rounded bg-[#2F5470]/15" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasil.map((b) => (
              <div key={b.id} className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#164A6E] to-[#2E8FA6]">
                  <p className="absolute right-3 top-3 z-10 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">{b.category}</p>
                  {b.image_url ? (
                    <Image src={b.image_url} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  ) : (
                    <Image src="/images/logo-hmdtif.png" alt="" width={56} height={56} />
                  )}
                </div>
                <p className="mt-4 text-xs text-[#2F5470]/85">{formatTanggal(b.published_at)}</p>
                <h3 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2F5470]">{b.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2F5470]/80">{b.excerpt}</p>
              </div>
            ))}
          </div>
        )}

        {/* Status hasil: kosong, bukan area kosong tanpa penjelasan */}
        {berita && !gagal && hasil.length === 0 && (
          <div role="status" className="mt-6 rounded-2xl border border-black/10 bg-[#FFF4D6] px-6 py-10 text-center">
            <p className="text-sm font-bold text-[#2F5470]">
              Tidak ada berita yang cocok
            </p>
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#2F5470]/85">
              {cari.trim() !== ""
                ? `Tidak ada berita dengan kata "${cari.trim()}"${kategori !== "SEMUA" ? ` di kategori ${kategori}` : ""}. Coba kata lain atau lihat semua kategori.`
                : `Belum ada berita di kategori ${kategori}.`}
            </p>
            <button
              type="button"
              onClick={() => { setCari(""); setKategori("SEMUA") }}
              className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-[#2F5470] px-5 text-xs font-bold text-[#2F5470] hover:bg-[#FFFBF0]"
            >
              Tampilkan semua berita
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

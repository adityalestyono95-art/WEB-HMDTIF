"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ambilBerita, formatTanggal, type Berita } from "@/app/lib/news";

// Kartu "Latest News" di beranda. Client component supaya halaman utama
// tetap server component dan tidak perlu menyentuh model cache Next.
export default function BeritaTerbaru() {
  const [berita, setBerita] = useState<Berita[] | null>(null);
  const [gagal, setGagal] = useState(false);

  useEffect(() => {
    let batal = false;
    ambilBerita(4)
      .then((d) => { if (!batal) setBerita(d.slice(0, 4)); })
      .catch(() => { if (!batal) setGagal(true); });
    return () => { batal = true; };
  }, []);

  if (gagal) {
    return (
      <div role="status" className="mt-8 rounded-2xl border border-black/10 bg-[#FFF4D6] px-6 py-10 text-center">
        <p className="text-sm font-bold text-[#2d5373]">Berita belum bisa dimuat</p>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#2d5373]/85">
          Coba muat ulang halaman. Kalau tetap kosong, hubungi admin HMDTIF.
        </p>
      </div>
    );
  }

  // Kerangka selebar grid asli, supaya tidak ada lompatan tata letak saat
  // data datang.
  if (!berita) {
    return (
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
            <div className="aspect-[16/9] rounded-xl bg-[#1e4d73]/15" />
            <div className="mt-4 h-3 w-24 rounded bg-[#2d5373]/15" />
            <div className="mt-2 h-4 w-full rounded bg-[#2d5373]/15" />
            <div className="mt-2 h-4 w-2/3 rounded bg-[#2d5373]/15" />
          </div>
        ))}
      </div>
    );
  }

  if (berita.length === 0) {
    return (
      <div role="status" className="mt-8 rounded-2xl border border-black/10 bg-[#FFF4D6] px-6 py-10 text-center">
        <p className="text-sm font-bold text-[#2d5373]">Belum ada berita terbit</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {berita.map((b) => (
        <div key={b.id} className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1e4d73] to-[#2e8aa3]">
            <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">
              {b.category}
            </p>
            {b.image_url ? (
              <Image src={b.image_url} alt="" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
            ) : (
              <Image src="/images/logo-hmdtif.png" alt="" width={56} height={56} />
            )}
          </div>
          <p className="mt-4 text-xs text-[#2d5373]/85">{formatTanggal(b.published_at)}</p>
          <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">{b.title}</h4>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">{b.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

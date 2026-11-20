// Tipe dan helper berita. Dipakai halaman /news dan kartu "Latest News"
// di beranda, supaya bentuk data dari API cuma didefinisikan sekali.

export type KategoriBerita = "PROKER" | "INFO" | "PRESTASI";

export type Berita = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
  category: KategoriBerita;
  is_featured: boolean;
  published_at: string | null;
};

const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

// Format tanggal ditulis manual, bukan toLocaleDateString, supaya hasilnya
// sama di server dan browser. Beda locale = beda teks = hydration mismatch.
// Tanggal satu digit diberi nol di depan, mengikuti desain aslinya.
export function formatTanggal(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const hari = String(d.getDate()).padStart(2, "0");
  return `${hari} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;
}

// Ambil berita terbit. Limit tinggi karena halaman masih memfilter di klien;
// kalau nanti ada paginasi, pindahkan filter ke query API.
export async function ambilBerita(limit = 100): Promise<Berita[]> {
  const res = await fetch(`/api/news?limit=${limit}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Gagal memuat berita (${res.status})`);
  const json = (await res.json()) as { data: Berita[] };
  return json.data ?? [];
}

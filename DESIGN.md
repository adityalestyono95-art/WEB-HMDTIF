# DESIGN.md — HMDTIF Bahtera Gatra

Design system untuk website HMDTIF FILKOM UB, Kabinet Bahtera Gatra 2026.
Sumber: Figma Auto-Layout & Component Library.

Dokumen ini adalah **target**. Sebagian besar sudah diterapkan; sisa selisihnya
dicatat di [§7 Status Implementasi](#7-status-implementasi).

Stack: Next.js 16 App Router · Tailwind CSS v4 (CSS-first, tanpa `tailwind.config`)
· satu-satunya file style global adalah `app/globals.css`.

---

## 1. Grid & Layout

| | Desktop | Mobile |
|---|---|---|
| Viewport acuan | 1440px | 390px |
| Kolom | 12 | 4 |
| Margin luar | 80px | 20px |
| Gutter | 24px | 16px |

Breakpoint Tailwind yang dipakai kode (default Tailwind, jangan diubah):

| Prefix | Min-width | Pemakaian di repo |
|---|---|---|
| `sm:` | 640px | 16× — grid 1→2 kolom |
| `md:` | 768px | 140× — breakpoint utama, nav & layout dua kolom |
| `lg:` | 1024px | 34× — grid 2→3/4 kolom, padding lebih lebar |

Container memakai `container mx-auto` dengan padding bertingkat
`px-6 md:px-10 lg:px-16` (24 → 40 → 64px). Ini **lebih sempit** dari margin
80px di spec; jangan menambah `max-w-*` baru tanpa alasan.

---

## 2. Color

Palet tertutup. Jangan menambah hex baru di luar tabel ini.

### 2.1 Surface & Brand

| Token | Hex | Peran |
|---|---|---|
| Blue Deep | `#2F5470` | Preloader, hero base, dark surface, card header |
| Blue Main | `#456B85` | Hero gradient, partner square card, secondary surface |
| Navy | `#164A6E` | Footer surface, deep contrast accent |
| Teal | `#2E8FA6` | Envelope illustration, active pagination, rhombus strip |
| Cyan Highlight | `#66FFFF` | Micro glow & inner logo highlight **saja** |
| Gold | `#FBC02D` | Primary CTA, active underline, dashed tree lines, icons |
| Gold Soft | `#F6D977` | Hero title gradient, card double borders, hover accent |
| Orange Accent | `#F08A24` | Micro badge accent, logo bottom droplets |
| Cream | `#FFF4D6` | Elevated paper cards, ticket CTA, division surface |
| Cream BG | `#FFFBF0` | Light section background (speech, about, news, cabinet) |

### 2.2 Text

| Token | Hex | Peran | Terverifikasi |
|---|---|---|---|
| Text Dark | `#1F3A4D` | Heading & body di atas surface terang | 11.47:1 on Cream BG · 10.82:1 on Cream → **AAA** |
| Text Light | `#F2F7FA` | Heading & body di atas surface gelap | 7.42:1 on Blue Deep · 8.69:1 on Navy → **AAA** |

### 2.3 Kontras — hasil ukur, bukan klaim

Rasio dihitung dengan rumus WCAG 2.1 (relative luminance), bukan dikira-kira.

| Pasangan | Rasio | AA (4.5) | AAA (7) |
|---|---|---|---|
| Text Dark on Cream BG | 11.47:1 | ✓ | ✓ |
| Text Dark on Cream | 10.82:1 | ✓ | ✓ |
| Text Light on Blue Deep | 7.42:1 | ✓ | ✓ |
| Text Light on Navy | 8.69:1 | ✓ | ✓ |
| Text Light on **Blue Main** | 5.27:1 | ✓ | **✗** |
| Gold on Blue Deep | 4.83:1 | ✓ | ✗ |
| Gold on Cream | **1.51:1** | **✗** | ✗ |
| Teal on Cream BG | **3.63:1** | **✗** | ✗ |

**Aturan yang lahir dari angka ini:**

- Text Light di atas Blue Main hanya AA. Untuk teks panjang di sana, pakai
  Blue Deep atau Navy sebagai surface.
- Gold **tidak boleh** jadi warna teks di atas Cream/Cream BG (1.51:1). Gold
  hanya untuk garis, ikon, border, dan aksen — bukan paragraf.
- Teal tidak lolos AA untuk body text di atas Cream BG. Boleh untuk elemen
  grafis dan teks besar (≥24px bold / ≥18.66px bold), tidak untuk body.

---

## 3. Typography

| Peran | Font | Ukuran / Line-height | Catatan |
|---|---|---|---|
| Display / Hero H1 | Space Grotesk Bold | 120 / 110 | `HMDTIF BAHTERA GATRA` |
| Section H2 | Space Grotesk Bold | 56 / 64 | `Welcoming Speech`, `The Cabinet Structure` |
| Section H3 | Space Grotesk Bold | 28 / 36 | sub-judul seksi |
| ID Card Label | Courier Prime Bold | — | Uppercase, mis. `KETUA HIMPUNAN — TEKNIK INFORMATIKA` |
| Body | Space Grotesk Regular | 14–16 / 1.6 | paragraf |

Hero H1 di spec 120px, tapi kode memakai `text-5xl md:text-7xl lg:text-8xl`
(48 → 72 → 96px). 120px hanya masuk akal di 1440px ke atas; kalau mau
mengikuti spec, tambahkan breakpoint `xl:` — jangan ganti `lg:`.

`Courier Prime` dipakai **hanya** untuk label kartu ID, tidak untuk teks lain.
Sifatnya aksen, bukan font kedua untuk UI.

---

## 4. Spacing & Radius

Skala mengikuti default Tailwind (4px basis). Nilai yang sudah jadi pola di kode:

| Peran | Nilai | Kelas |
|---|---|---|
| Section vertikal | 48–80px | `py-10 md:py-16`, `mt-12 md:mt-20` |
| Section horizontal | 24–64px | `px-6 md:px-10 lg:px-16` |
| Gap kartu | 24px | `gap-6` |
| Padding kartu | 16px | `p-4` |

Radius:

| Peran | Nilai | Kelas |
|---|---|---|
| Kartu berita / nilai | 16px | `rounded-2xl` |
| Panel besar (hero card, modal) | 24px | `rounded-3xl` |
| Tombol & input | 8–12px | `rounded-lg` |
| Pill / filter | penuh | `rounded-full` |

---

## 5. Interactive States

> Bagian ini melengkapi spec yang terpotong di "Ticket CTA". Isinya diambil
> dari pola yang sudah ada di kode, jadi ini deskripsi perilaku nyata — bukan
> tambahan baru.

### 5.1 Primary CTA ("Ticket")

Kotak CTA bergaya tiket di hero (`app/page.tsx`).

| State | Tampilan |
|---|---|
| Default | `bg-[#FFF4D6]` · `border border-[#FBC02D]/60` · teks `#1E3A5F` · `shadow-lg` |
| Hover | background → `#FFECB8` |
| Focus | `outline-2 outline-offset-2` warna `#1F7189` |
| Disabled | `opacity-60` + `cursor-not-allowed` |

### 5.2 Nav Pill

| State | Tampilan |
|---|---|
| Default (gelap) | `border-white/30 bg-white/15 backdrop-blur-md` |
| Default (terang) | `border-black/5 bg-[#FFF4D6]` |
| Link aktif | `border-b-2 border-yellow-400` + warna teks penuh |
| Link biasa | `border-b-2 border-transparent`, hover → border kuning |

### 5.3 Filter Pill (halaman /news)

| State | Tampilan |
|---|---|
| Aktif | `bg-[#2D5373]` · teks `#FFF4D6` · border `#2D5373` |
| Tidak aktif | `bg-[#FFF4D6]` · teks `#2D5373` · border `black/10` |
| Hover (tidak aktif) | background → `#FFECB8` |
| `aria-pressed` | wajib diisi `true`/`false` sesuai state |

### 5.4 Form Control

| State | Tampilan |
|---|---|
| Default | `bg-[#FFFDF6]` · `border-black/10` |
| Focus | `border-[#1F7189]` atau `outline-2 outline-offset-2` |
| Error | `border-red-600 ring-1 ring-red-600` + `aria-invalid="true"` |
| Disabled | `opacity-60` + `cursor-not-allowed` |

### 5.5 Aturan lintas-state

- **Tap target minimum 44px**: pakai `min-h-11` / `min-w-11`. Sudah dipakai di
  nav, tombol lihat sandi, tombol hapus pencarian.
- **Focus harus terlihat**: jangan pernah `outline-none` tanpa pengganti.
  Pola repo: `focus-visible:outline-2 focus-visible:outline-offset-2`.
- **Jangan mengandalkan warna saja** untuk menyampaikan state — selalu
  sertakan `aria-pressed`, `aria-invalid`, `aria-busy`, atau `role="alert"`.
- **Transisi**: `transition-colors duration-300 ease-in-out`. Tidak ada
  animasi transform pada elemen interaktif. Efek scroll dekoratif (parallax)
  sudah dibuang — yang tersisa hanya smooth scroll Lenis.
- **Reduced motion**: `app/globals.css` sudah mematikan transisi/animasi saat
  `prefers-reduced-motion: reduce`. Jangan menambah animasi yang mem-bypass ini.

---

## 6. Pemakaian di Kode

Tailwind v4 di repo ini **tidak punya file config**. Warna dipakai langsung
sebagai arbitrary value:

```tsx
// surface
<div className="bg-[#FFFBF0]">
<div className="bg-gradient-to-br from-[#2F5470] to-[#2E8FA6]">

// teks
<h1 className="text-[#1F3A4D]">
<p className="text-[#F2F7FA]/85">

// aksen
<span className="border-b-2 border-[#FBC02D]">
```

Aturan penulisan:

1. **Hex uppercase**, selalu 6 digit. `#2F5470`, bukan `#2f5470`.
2. **Jangan** menambah warna di luar §2. Kalau butuh varian, pakai opacity
   Tailwind (`/85`, `/60`) dari warna yang sudah ada.
3. **Jangan** membuat `tailwind.config.js` atau `postcss.config.mjs`. Tailwind
   v4 di sini dijalankan lewat loader Turbopack di `next.config.ts`:
   ```ts
   turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } }
   ```
4. **Jangan** menambah `@theme` block di `globals.css` tanpa membahasnya dulu —
   akan menggeser token dan menyentuh semua halaman.
5. Font dimuat lewat `next/font/google` di `app/layout.tsx`, lalu dipakai
   sebagai CSS variable.

---

## 7. Status Implementasi

Spec di atas **belum sepenuhnya diterapkan**. Ini selisihnya, sudah diukur
dengan `grep` seluruh `app/` dan pembacaan computed style di browser.

### 7.1 Font — sudah diterapkan

| Spec | Status |
|---|---|
| Space Grotesk (heading & body) | ✅ `app/layout.tsx`, diterapkan lewat rule `body` di `globals.css` |
| Courier Prime (label kartu) | ✅ kelas `.font-label`, dipakai 5 label di `/cabinet` |
| Geist | ✅ dihapus — sebelumnya diunduh tanpa pernah tampil |

Hero H1 kini `xl:text-[120px] xl:leading-[110px]`, H2 section
`lg:text-[56px] lg:leading-[64px]`.

### 7.2 Warna — sudah disatukan

Seluruh `app/` sekarang hanya memakai 12 token di §2. Pemetaan yang dijalankan:

| Lama | Baru | Alasan |
|---|---|---|
| `#2D5373` (94×) | `#2F5470` | Blue Deep |
| `#1F7189` (35×) | `#2F5470` | aksen → Blue Deep |
| `#3A8FA3` (18×) | `#2E8FA6` | Teal |
| `#2E8AA3` (4×) | `#2E8FA6` | Teal |
| `#1E3A5F` (15×) | `#164A6E` | Navy |
| `#1E4D73` (9×) | `#164A6E` | Navy |
| `#4A6F8F`, `#436A87` | `#456B85` | Blue Main |
| `#FFECB8`, `#FFE9B0`, `#F2D98B`, `#F7E7B0` | `#F6D977` | Gold Soft (hover) |
| `#FFFDF6` | `#FFFBF0` | Cream BG |
| `#EED9A4`, `#E6CF96`, `#E2C887`, `#E5CE96` | `#F6D977` | kartu ID |
| `#D5BC7E`, `#C8B072` | `#FBC02D` | border kartu ID |
| `#F4E3B8`, `#F6E7B0` | `#FFF4D6` | Cream |

`#000000` (23×) dipertahankan — hanya dipakai di `rgba()` untuk bayangan,
bukan warna permukaan.

**Perbaikan kontras yang ikut dikerjakan:** 27 `<span>` di kartu ID
`/cabinet` memakai `text-white` di atas Gold Soft (1.34:1 — gagal). Diganti
`text-[#1F3A4D]` (8.53:1).

**Focus ring** sebelumnya `#1F7189`, yang gagal ambang 3:1 (WCAG 1.4.11) di
Blue Deep (1.44:1), Navy (1.69:1), dan Blue Main (1.02:1). Sekarang memakai
variabel `--focus-ring`: Blue Deep di surface terang (7.31:1), Gold di
surface gelap (4.83:1). Tandai section gelap dengan `data-surface="dark"`.

### 7.3 Grid — sudah diterapkan di ≥1280px

Margin 80px diterapkan lewat `xl:` tanpa menggeser breakpoint yang sudah ada:

- `app/page.tsx`: `lg:mx-16 xl:mx-20` (4 tempat)
- `app/news/page.tsx`: `lg:px-16 xl:px-20`
- `app/components/footer.tsx`: `md:px-10 xl:px-20`

Terverifikasi di 1440px: konten mulai di `left: 80px`, lebar 1280px.
Di 390px tetap `mx-6` (24px), tanpa scroll horizontal.

Sistem 12 kolom eksplisit tetap tidak dipakai — layout memakai grid Tailwind
per-seksi. Itu disengaja; jangan menambah grid wrapper global.

---

## 8. Aturan Kerja

Untuk siapa pun (manusia atau agen) yang menambah UI:

1. Baca §2 dan §3 sebelum menulis kelas warna atau ukuran font.
2. Ambil warna dari tabel token. Kalau tidak ada yang cocok, **tanya dulu** —
   jangan menambah hex.
3. Setiap kontrol interaktif wajib punya empat state: default, hover, focus
   terlihat, disabled.
4. Setiap input wajib punya `<label>`; setiap error wajib punya `role="alert"`
   dan `aria-describedby`.
5. Tap target ≥ 44px (`min-h-11`).
6. Uji dengan `prefers-reduced-motion: reduce` aktif.
7. Kontras: teks body minimal 4.5:1, teks besar minimal 3:1. Pakai angka di
   §2.3, jangan menebak.

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* Bagian atas home */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1e4d73] to-[#4a6f8f] pb-24 pt-12 md:pb-40 md:pt-20">
        <Image
          src={"/images/logo-hmdtif.png"}
          alt="Ornamen kiri"
          width={300}
          height={300}
          className="pointer-events-none absolute -left-12 -top-4 w-32 opacity-40 blur-[1px] md:-left-16 md:w-56"
        />
        <Image
          src={"/images/logo-hmdtif.png"}
          alt="Ornamen kanan"
          width={300}
          height={300}
          className="pointer-events-none absolute -right-12 bottom-10 w-32 opacity-40 blur-[1px] md:-right-16 md:w-56"
        />

        <div className="container relative mx-auto flex flex-col items-center px-4">
          <div className="penutup-tulisan rounded-full border border-white/30 bg-white/15 px-4 py-1.5 backdrop-blur-md">
            <p className="text-center text-[8px] font-medium tracking-widest text-white md:text-[10px]">
              <span className="mr-2 text-yellow-300">✦</span>
              HIMPUNAN MAHASISWA DEPARTEMEN TEKNIK INFORMATIKA • FILKOM UB
            </p>
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-[#FFE9B0] bg-clip-text text-center text-5xl font-extrabold tracking-wide text-transparent drop-shadow-xl md:text-7xl lg:text-8xl">HMDTIF</h1>
          <h2 className="bg-gradient-to-b from-white to-[#FFE9B0] bg-clip-text text-center text-2xl font-bold tracking-wider text-transparent md:text-4xl lg:text-5xl">BAHTERA GATRA 2026</h2>

          <div className="mt-6 max-w-2xl text-xs leading-relaxed text-white/90 md:text-sm">
            <p className="text-center">Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung, berkembang secara profesional, dan didukung advokasi yang responsif dan supportif</p>
          </div>

          <div className="penutup-tulisan mt-8 flex items-center gap-4 rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2.5 shadow-lg transition-colors duration-300 ease-in-out hover:bg-[#ffecb8]">
            <p className="text-center text-[11px] font-bold tracking-wider text-[#1e3a5f]">KENALI KAMI</p>
            <span className="h-5 border-l border-dashed border-gray-400" />
            <span className="text-sm text-[#1e3a5f]">↗</span>
          </div>
        </div>
      </div>

      {/* Bagian dua ini */}
      <div className=" bg-[#FFFBF0] py-10 md:py-16">
        <h3 className="text-center text-[10px] font-semibold tracking-[0.25em] text-[#2a8aa6]">SAMBUTAN PIMPINAN HIMPUNAN</h3>
        <h1 className="text-center text-3xl font-semibold text-[#2c5575] md:text-5xl">Welcoming Speech</h1>

        <div className="container-home mt-10 flex flex-col items-center justify-center gap-10 px-6 md:mt-16 md:px-8 lg:flex-row lg:gap-16">
          <div className="home-box">
            {/* Gambar Email */}
            <svg viewBox="0 0 220 190" className="w-40 drop-shadow-xl md:w-56" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,70 220,70 110,0" fill="#2c5575" />
              <rect x="0" y="70" width="220" height="110" fill="#2c6583" />
              <polygon points="0,70 220,70 110,125" fill="#2a8aa6" />
              <polygon points="0,180 220,180 110,125" fill="#2a8aa6" />
              <circle cx="110" cy="125" r="10" fill="#FFC72C" />
            </svg>
          </div>
          <div className="home-box flex w-full max-w-2xl flex-col gap-5 rounded-2xl border border-gray-300 bg-[#FFFDF6] p-5 shadow-[6px_6px_0_0_#F2D98B,10px_10px_0_0_#F7E7B0] sm:flex-row md:shadow-[8px_8px_0_0_#F2D98B,14px_14px_0_0_#F7E7B0]">
            <div className="dalam-gambar relative w-full shrink-0 sm:w-[200px]">
              <Image src={"/images/KAHIM-HMDTIF.png"} alt="Gambar Kahim" width={200} height={275} className="h-[300px] w-full rounded-xl border border-yellow-500 object-cover sm:h-[275px] sm:w-[200px]"></Image>
              <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded bg-black/40 px-3 py-0.5 text-[8px] tracking-widest text-white">KETUA HIMPUNAN</span>
            </div>

            <div className="text-xs leading-relaxed text-gray-700">
              <p className="text-sm font-semibold text-[#2a8aa6]">Say Hello to BAHTERA GATRA </p>
              <p className="mt-2 font-bold text-[#2c5575]">Tumbuh Bersama, Satukan Gatra</p>

              <p className="mt-3">Di Kabinet Bahtera Gatra 2026, kami membawa visi besar untuk mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung,berkembang secara profesional, dan didukung advokasi yang responsif serta suportif.</p>
              <p className="mt-3">Melalui sinergi 5 Departemen (INFOKOM, ADVOKESMA, PSDM, BISNIS, PIT) dan lembaga legislatif SENAT, kami menghadirkan ruang diskusi terarah, pengembangan keprofesian IT, serta pelayanan mahasiswa yang solutif.</p>
              <p className="mt-3">Mari berlayar dan bertumbuh bersama HMDTIF FILKOM UB! </p>
              <hr className="my-4 border-gray-200" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#2c5575]">Muhammad Bagas Anugrah</p>
                  <p className="text-[10px] text-[#2c5575]">Ketua Himpunan Mahasiswa Departemen Teknik Informatika (HMDTIF) FILKOM UB 2026</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yellow-400 bg-[#FFF4D6] text-[10px] font-bold">1/2</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About */}
      <div className="container-about mx-6 mt-12 flex flex-col gap-10 md:mx-10 md:mt-20 md:flex-row md:gap-12 lg:mx-16">
        <div className="box-kiri flex-1">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#3a8fa3] uppercase mb-2">
            Profil Organisasi
          </p>
          <h3 className="text-4xl font-bold leading-tight text-[#2d5373] md:text-5xl">About HMDTIF</h3>
          <h3 className="text-4xl font-bold leading-tight text-[#2d5373] md:text-5xl">FILKOM UB</h3>
          <br />
          <p className="max-w-md text-left text-sm leading-relaxed text-[#2d5373]/80">
            Segala hal yang perlu Anda ketahui tentang Himpunan
            Mahasiswa Departemen Teknik Informatika (HMDTIF) Kabinet
            Bahtera Gatra 2026 — mulai dari perkenalan, visi, misi, hingga
            nilai inti.
          </p>
          <br />
          <Link
            href="/about"
            className="inline-block text-xs font-bold text-[#2d5373] border-b-2 border-yellow-400 pb-1"
          >
            See details →
          </Link>
        </div>

        <div className="box-kanan flex-1 flex flex-col gap-6">
          {/* Overview */}
          <div className="background bg-[#FFF4D6] rounded-2xl border border-black/10 shadow-lg px-5 py-5 md:px-6 -rotate-1">
            <div className="flex justify-between items-center">
              <h3 className="text-left text-xl font-bold text-[#2d5373]">Overview</h3>
              <p className="text-[#3a8fa3] font-semibold">01</p>
            </div>
            <hr className="my-3 border-black/20" />
            <p className="text-sm leading-relaxed text-[#2d5373]">
              <b>HMDTIF (Himpunan Mahasiswa Departemen Teknik Informatika)</b> adalah
              organisasi kemahasiswaan intra kampus di Fakultas Ilmu Komputer
              Universitas Brawijaya yang menjadi wadah eksekutif serta legislatif
              (Senat) bagi seluruh mahasiswa Teknik Informatika dalam mengembangkan
              potensi akademik, profesionalisme, dan advokasi kesejahteraan.
            </p>
          </div>

          {/* Vision */}
          <div className="background bg-[#FFF4D6] rounded-2xl border border-black/10 shadow-lg px-5 py-5 md:px-6 rotate-1">
            <div className="flex justify-between items-center">
              <h3 className="text-left text-xl font-bold text-[#2d5373]">Vision</h3>
              <p className="text-[#3a8fa3] font-semibold">02</p>
            </div>
            <hr className="my-3 border-black/20" />
            <p className="text-sm leading-relaxed font-medium text-[#2d5373]">
              “Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang
              saling terhubung, berkembang secara profesional, dan didukung advokasi
              yang responsif dan suportif.”
            </p>
          </div>

          {/* Mission */}
          <div className="background bg-[#FFF4D6] rounded-2xl border border-black/10 shadow-lg px-5 py-5 md:px-6 -rotate-1">
            <div className="flex justify-between items-center">
              <h3 className="text-left text-xl font-bold text-[#2d5373]">Mission</h3>
              <p className="text-[#3a8fa3] font-semibold">03</p>
            </div>
            <hr className="my-3 border-black/20" />

            <div className="flex flex-col gap-3 text-sm text-[#2d5373]">
              <div className="flex gap-3 items-start">
                <p className="shrink-0 w-5 h-5 rounded-full bg-[#2d5373] text-white text-[10px] font-bold flex items-center justify-center">1</p>
                <p>Membangun ruang diskusi yang terarah dan suportif bagi mahasiswa DTIF.</p>
              </div>

              <div className="flex gap-3 items-start">
                <p className="shrink-0 w-5 h-5 rounded-full bg-[#2d5373] text-white text-[10px] font-bold flex items-center justify-center">2</p>
                <p>Menyelenggarakan program pengembangan keprofesian yang relevan dengan kebutuhan Mahasiswa DTIF.</p>
              </div>

              <div className="flex gap-3 items-start">
                <p className="shrink-0 w-5 h-5 rounded-full bg-[#2d5373] text-white text-[10px] font-bold flex items-center justify-center">3</p>
                <p>Menghadirkan advokasi yang responsif dan solutif yang tertuju pada kebutuhan mahasiswa DTIF.</p>
              </div>

              <div className="flex gap-3 items-start">
                <p className="shrink-0 w-5 h-5 rounded-full bg-[#2d5373] text-white text-[10px] font-bold flex items-center justify-center">4</p>
                <p>Mendorong partisipasi aktif dan kolaboratif sebagai wadah pengembangan karakter mahasiswa DTIF.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Makna logo bahtera */}
      <div className="mx-6 mt-12 md:mx-10 md:mt-20 lg:mx-16">
        <div className="container-makna-logo flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-[#1e4d73] to-[#2e8aa3] px-6 py-10 shadow-lg md:flex-row md:gap-10 md:px-12 md:py-14">
          <div className="flex-1 flex flex-col items-center gap-4">
            <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={120} height={120} />
            <p className="text-[10px] font-bold tracking-widest uppercase text-yellow-300 border border-white/30 bg-white/10 rounded-full px-4 py-1">
              Identitas Kabinet 2026
            </p>
          </div>

          <div className="logo-box flex-[2] text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#FFF4D6] md:text-3xl">Makna Logo Bahtera Gatra</h3>
            <br />
            <p className="text-sm leading-relaxed text-white/85">
              Merupakan sebuah kapal besar yang menampung banyak unsur, dimana unsur-unsur tersebut bersifat terikat dan saling bekerja sama supaya kapal tersebut dapat berjalan dengan optimal.
              Gatra sendiri juga sebuah harapan bahwa pengurus HMDTIF kedepannya dapat memiliki kerangka berpikir yang dapat digunakan sebagai alat untuk penyelesaian masalah bersama.
            </p>
          </div>
        </div>

        {/* kotak biru muda / tua: 12 pertama tampil di HP, 12 berikutnya mulai tablet, 12 terakhir mulai laptop */}
        <div className="flex justify-center gap-2 my-10 md:my-12">
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>

          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden md:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>

          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#2d5373]"></span>
          <span className="hidden lg:block w-3 h-3 rotate-45 bg-[#3a8fa3]"></span>
        </div>
      </div>

      {/* Nilai inti */}
      <div className="mx-6 mb-12 md:mx-10 md:mb-20 lg:mx-16">
        <div className="text-center mb-10">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#3a8fa3] mb-2">
            Core Values & Behaviors
          </p>
          <h3 className="text-3xl font-bold text-[#2d5373] md:text-4xl">Nilai Inti Bahtera Gatra</h3>
        </div>

        {/* HP 1 kolom, tablet 2 kolom, laptop 4 kolom */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-[#FFF4D6] border border-black/10 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <p className="text-2xl font-bold text-[#3a8fa3]">01</p>
              <p className="w-7 h-7 rounded-full bg-yellow-200 text-[#2d5373] text-xs flex items-center justify-center">★</p>
            </div>
            <h4 className="font-bold text-[#2d5373]">Sinergi Gatra (Clarity)</h4>
            <p className="text-xs italic font-semibold text-orange-500 mt-2">{'"Clarity in Direction."'}</p>
            <p className="text-xs leading-relaxed text-[#2d5373]/80 mt-3 flex-1">
              Pergerakan tanpa arah adalah energi yang terbuang. Kami memprioritaskan kejelasan tujuan, peran, dan proses pengambilan keputusan sebelum melangkah agar setiap program kerja terukur dan berdampak.
            </p>
            <hr className="mt-6 border-black/10" />
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF4D6] border border-black/10 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <p className="text-2xl font-bold text-[#3a8fa3]">02</p>
              <p className="w-7 h-7 rounded-full bg-yellow-200 text-[#2d5373] text-xs flex items-center justify-center">★</p>
            </div>
            <h4 className="font-bold text-[#2d5373]">Nakhoda Inovasi (Execution)</h4>
            <p className="text-xs italic font-semibold text-orange-500 mt-2">{'"Responsible Execution."'}</p>
            <p className="text-xs leading-relaxed text-[#2d5373]/80 mt-3 flex-1">
              Keunggulan dibangun melalui konsistensi. Eksekusi yang bertanggung jawab berarti memegang standar profesionalisme tinggi dalam setiap layanan advokasi, akademik, dan pengembangan diri.
            </p>
            <hr className="mt-6 border-black/10" />
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF4D6] border border-black/10 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <p className="text-2xl font-bold text-[#3a8fa3]">03</p>
              <p className="w-7 h-7 rounded-full bg-yellow-200 text-[#2d5373] text-xs flex items-center justify-center">★</p>
            </div>
            <h4 className="font-bold text-[#2d5373]">Sauh Advokasi (Significance)</h4>
            <p className="text-xs italic font-semibold text-orange-500 mt-2">{'"Meaningful Impact."'}</p>
            <p className="text-xs leading-relaxed text-[#2d5373]/80 mt-3 flex-1">
              Kami menolak sekadar menjalankan rutinitas. Setiap program kerja yang dihadirkan harus menjawab kebutuhan riil mahasiswa Teknik Informatika dan meninggalkan jejak positif yang berkelanjutan.
            </p>
            <hr className="mt-6 border-black/10" />
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFF4D6] border border-black/10 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <p className="text-2xl font-bold text-[#3a8fa3]">04</p>
              <p className="w-7 h-7 rounded-full bg-yellow-200 text-[#2d5373] text-xs flex items-center justify-center">★</p>
            </div>
            <h4 className="font-bold text-[#2d5373]">Layar Kolaborasi (Excellence)</h4>
            <p className="text-xs italic font-semibold text-orange-500 mt-2">{'"Raise the Standard."'}</p>
            <p className="text-xs leading-relaxed text-[#2d5373]/80 mt-3 flex-1">
              Membangun ekosistem kolaboratif antara fungsionaris, mahasiswa, alumni, dan mitra industri untuk bersama-sama melampaui batas standar karya di kancah nasional maupun internasional.
            </p>
            <hr className="mt-6 border-black/10" />
          </div>

        </div>
      </div>

 {/* Latest News */}
<div className="mx-6 mb-12 md:mx-10 md:mb-20 lg:mx-16">
  <h1 className="text-4xl font-bold text-[#2d5373] md:text-5xl">
    Latest <span className="text-[#3a8fa3]">News</span>
  </h1>

  <div className="latest-container mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div className="latest-box">
      <p className="text-xs text-[#2d5373]/70 md:text-sm">
        Ikuti kabar kegiatan terbaru, program kerja dan prestasi mahasiswa Departemen Teknik Informatika.
      </p>
    </div>
    <div className="latest-box">
      <Link href={"/news"} className="text-xs font-bold tracking-widest text-[#2d5373] hover:text-[#3a8fa3] transition-colors duration-300">
        VIEW ALL NEWS →
      </Link>
    </div>
  </div>

  {/* HP 1 kolom, tablet 2 kolom, laptop 4 kolom */}
  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {/* News 1 */}
    <div className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
      <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] to-[#2e8aa3]">
        <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
        <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
      </div>
      <p className="mt-4 text-xs text-[#2d5373]/70">17 Oktober 2026</p>
      <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">INTRIVIA 2026 Sambut Mahasiswa Baru DTIF Melalui</h4>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
        Malang — Departemen PSDM Bidang Humaniora sukses menyelenggarakan INTRIVIA (Informatics Introduction...
      </p>
    </div>

    {/* News 2 */}
    <div className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
      <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#3d5a78] to-[#1e4d73]">
        <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">INFO</p>
        <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
      </div>
      <p className="mt-4 text-xs text-[#2d5373]/70">11 Oktober 2026</p>
      <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">EXTENDED! Open Recruitment Staff Muda HMDTIF Kabinet...</h4>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
        Malang — Pendaftaran Staff Muda HMDTIF 2026 resmi diperpanjang pada 11–13 Oktober 2026. Segera lengkapi...
      </p>
    </div>

    {/* News 3 */}
    <div className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
      <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#2e8aa3] to-[#1e4d73]">
        <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
        <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
      </div>
      <p className="mt-4 text-xs text-[#2d5373]/70">08 Oktober 2026</p>
      <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">DISMIK KRS & Crisis Center KRS SA Hadir Dampingi...</h4>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
        Departemen ADVOKESMA membuka posko CC KRS SA dan forum Diskusi Akademik KRS (DISMIK KRS) untuk...
      </p>
    </div>

    {/* News 4 */}
    <div className="flex flex-col rounded-2xl border border-black/10 bg-[#FFF4D6] p-4 shadow-md">
      <div className="relative flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-[#1e4d73] via-[#2e6f8f] to-[#f0b36b]">
        <p className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">PROKER</p>
        <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={56} height={56} />
      </div>
      <p className="mt-4 text-xs text-[#2d5373]/70">04 Oktober 2026</p>
      <h4 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#2d5373]">INFORCE & MAGANG GO! 2026 Siapkan Karier Profesional...</h4>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#2d5373]/80">
        Malang — Divisi Widyantara Departemen PSDM mengakselerasi hardskill dan kesiapan karier mahasiswa...
      </p>
    </div>

  </div>

  
  <div className="mt-8 flex items-center justify-center gap-4">
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400">‹</button>
    <p className="text-xs font-bold text-[#2d5373]">Page 1 of 3</p>
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2e8aa3] text-white hover:bg-[#1e4d73] transition-colors duration-300">›</button>
  </div>
</div>
    </>
  );
}
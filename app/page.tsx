import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Bagian atas home */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1e4d73] to-[#4a6f8f] pb-40 pt-20">
        <Image
          src={"/images/logo-hmdtif.png"}
          alt="Ornamen kiri"
          width={300}
          height={300}
          className="pointer-events-none absolute -left-16 -top-4 w-56 opacity-40 blur-[1px]"
        />
        <Image
          src={"/images/logo-hmdtif.png"}
          alt="Ornamen kanan"
          width={300}
          height={300}
          className="pointer-events-none absolute -right-16 bottom-10 w-56 opacity-40 blur-[1px]"
        />

        <div className="container relative mx-auto flex flex-col items-center">
          <div className="penutup-tulisan rounded-full border border-white/30 bg-white/15 px-4 py-1.5 backdrop-blur-md">
            <p className="text-center text-[10px] font-medium tracking-widest text-white">
              <span className="mr-2 text-yellow-300">✦</span>
              HIMPUNAN MAHASISWA DEPARTEMEN TEKNIK INFORMATIKA • FILKOM UB
            </p>
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-[#FFE9B0] bg-clip-text text-center text-8xl font-extrabold tracking-wide text-transparent drop-shadow-xl">HMDTIF</h1>
          <h2 className="bg-gradient-to-b from-white to-[#FFE9B0] bg-clip-text text-center text-5xl font-bold tracking-wider text-transparent">BAHTERA GATRA 2026</h2>

          <div className="mt-6 text-sm leading-relaxed text-white/90">
            <p className="text-center">Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling</p>
            <p className="text-center">terhubung, berkembang secara profesional, dan didukung advokasi yang responsif dan</p>
            <p className="text-center">supportif</p>
          </div>

          <div className="penutup-tulisan mt-8 flex items-center gap-4 rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2.5 shadow-lg transition-colors duration-300 ease-in-out hover:bg-[#ffecb8]">
            <p className="text-center text-[11px] font-bold tracking-wider text-[#1e3a5f]">KENALI KAMI</p>
            <span className="h-5 border-l border-dashed border-gray-400" />
            <span className="text-sm text-[#1e3a5f]">↗</span>
          </div>
        </div>
      </div>

      {/* Bagian dua ini */}
      <div className=" bg-[#FFFBF0] py-16">
        <h3 className="text-center text-[10px] font-semibold tracking-[0.25em] text-[#2a8aa6]">SAMBUTAN PIMPINAN HIMPUNAN</h3>
        <h1 className="text-center text-5xl font-semibold text-[#2c5575]">Welcoming Speech</h1>

        <div className="container-home items-center flex justify-center gap-16 mt-16 px-8">
          <div className="home-box">
            {/* Gambar Email */}
            <svg viewBox="0 0 220 190" className="w-56 drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,70 220,70 110,0" fill="#2c5575" />
              <rect x="0" y="70" width="220" height="110" fill="#2c6583" />
              <polygon points="0,70 220,70 110,125" fill="#2a8aa6" />
              <polygon points="0,180 220,180 110,125" fill="#2a8aa6" />
              <circle cx="110" cy="125" r="10" fill="#FFC72C" />
            </svg>
          </div>
          <div className="home-box flex max-w-2xl gap-5 rounded-2xl border border-gray-300 bg-[#FFFDF6] p-5 shadow-[8px_8px_0_0_#F2D98B,14px_14px_0_0_#F7E7B0]">
            <div className="dalam-gambar relative shrink-0">
              <Image src={"/images/KAHIM-HMDTIF.png"} alt="Gambar Kahim" width={200} height={275} className="h-[275px] w-[200px] rounded-xl border border-yellow-500 object-cover"></Image>
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
    </>
  );
}
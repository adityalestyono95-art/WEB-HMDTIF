
const navigationLinks = [
  "Home",
  "Welcoming",
  "About HMDTIF",
  "5 Departemen",
  "Latest News",
];

const studentServiceLinks = [
  "Layanan Mahasiswa",
  "Informasi Mahasiswa",
  "Dukungan Akademik",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#060e1a]">

      {/* Gradient Bar */}
      <div
        aria-hidden="true"
        className="h-1.5 bg-[linear-gradient(90deg,rgba(29,78,216,1)_0%,rgba(255,215,0,1)_50%,rgba(225,29,72,1)_100%)]"
      />

      {/* Main Content */}
      <div className="mx-auto grid max-w-[1216px] grid-cols-1 gap-8 border-b border-[#ffffff1a] px-6 pb-8 pt-[58px] md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <section aria-labelledby="footer-brand-title">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#ffd70066] bg-[#0b192c]">
            <img
              className="h-11 w-11 object-contain"
              alt="HMDTIF FILKOM UB logo"
              src="/images/logo-footer.png"
            />
          </div>

          <h2
            id="footer-brand-title"
            className="text-lg font-extrabold leading-7 text-white"
          >
            HMDTIF FILKOM UB 2026
          </h2>

          <p className="mb-3 text-xs font-bold leading-4 text-[#ffd700]">
            Kabinet Bahtera Gatra
          </p>

          <p className="text-xs leading-[19.5px] text-slate-400">
            Himpunan Mahasiswa Departemen Teknik Informatika Fakultas Ilmu
            Komputer Universitas Brawijaya.
          </p>
        </section>

        {/* Navigation */}
        <nav aria-labelledby="footer-navigation-title">
          <h2
            id="footer-navigation-title"
            className="mb-[14px] text-sm font-bold leading-5 text-white"
          >
            Navigation
          </h2>

          <div className="flex flex-col gap-[9.5px]">
            {navigationLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="whitespace-nowrap text-xs leading-4 text-slate-400 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Student Services */}
        <nav aria-labelledby="student-services-title">
          <h2
            id="student-services-title"
            className="mb-[14px] text-sm font-bold leading-5 text-white"
          >
            Layanan Mahasiswa TIF
          </h2>

          <div className="flex flex-col gap-2">
            {studentServiceLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="whitespace-nowrap text-xs leading-4 text-slate-400 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Secretariat */}
        <section aria-labelledby="secretariat-title">
          <h2
            id="secretariat-title"
            className="mb-[14px] text-sm font-bold leading-5 text-white"
          >
            Sekretariat HMDTIF
          </h2>

          <address className="mb-3 text-xs not-italic leading-[19.5px] text-slate-400">
            Gedung Kreativitas Mahasiswa (GKM) FILKOM UB, Jl. Veteran No. 8,
            Lowokwaru, Kota Malang, Jawa Timur 65145
          </address>

          <a
            href="mailto:hmdtif.filkom@ub.ac.id"
            className="whitespace-nowrap text-xs font-semibold leading-4 text-[#ffd700] hover:text-white"
          >
            Email: hmdtif.filkom@ub.ac.id
          </a>
        </section>

      </div>

      {/* Copyright */}
      <p className="py-8 text-center text-xs leading-4">
        <span className="text-slate-400">
          Dikembangkan dengan ❤️ oleh{" "}
        </span>

        <span className="font-bold text-[#ffd700]">
          Departemen PIT HMDTIF
        </span>
      </p>

    </footer>
  );
}

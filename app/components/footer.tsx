const logo12 = '/images/Logo_1 2.png';

const navigationLinks = [
  'Home',
  'Welcoming',
  'About HMDTIF',
  '5 Departemen',
  'Latest News',
];

const studentServiceLinks = [
  'Layanan Mahasiswa',
  'Informasi Mahasiswa',
  'Dukungan Akademik',
];

export const FooterFooter = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#060e1a]">
      {/* gradient bar */}
      <div
        aria-hidden="true"
        className="h-1.5 bg-[linear-gradient(90deg,rgba(29,78,216,1)_0%,rgba(255,215,0,1)_50%,rgba(225,29,72,1)_100%)]"
      />

      {/* main content */}
      <div className="max-w-[1216px] mx-auto px-6 pt-[58px] pb-8 border-b border-[#ffffff1a] grid grid-cols-4 gap-8">

        {/* Brand */}
        <section aria-labelledby="footer-brand-title">
          <div className="w-12 h-12 flex items-center justify-center bg-[#0b192c] rounded-xl border border-[#ffd70066] mb-3">
            <img className="w-11 h-11 object-cover" alt="HMDTIF FILKOM UB logo" src={logo12} />
          </div>
          <h2
            id="footer-brand-title"
            className="[font-family:'Plus_Jakarta_Sans-ExtraBold',Helvetica] font-extrabold text-white text-lg leading-7">
            HMDTIF FILKOM UB 2026
          </h2>
          <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#ffd700] text-xs leading-4 mb-3">
            Kabinet Bahtera Gatra
          </p>
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs leading-[19.5px]">
            Himpunan Mahasiswa Departemen Teknik Informatika Fakultas Ilmu Komputer Universitas Brawijaya.
          </p>
        </section>

        {/* Navigation */}
        <nav aria-labelledby="footer-navigation-title">
          <h2
            id="footer-navigation-title"
            className="[font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm leading-5 mb-[14px]">
            Navigation
          </h2>
          <div className="flex flex-col gap-[9.5px]">
            {navigationLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="[font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]">
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Layanan Mahasiswa TIF */}
        <nav aria-labelledby="student-services-title">
          <h2
            id="student-services-title"
            className="[font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm leading-5 mb-[14px]">
            Layanan Mahasiswa TIF
          </h2>
          <div className="flex flex-col gap-2">
            {studentServiceLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="[font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]">
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Sekretariat */}
        <section aria-labelledby="secretariat-title">
          <h2
            id="secretariat-title"
            className="[font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm leading-5 mb-[14px]">
            Sekretariat HMDTIF
          </h2>
          <address className="not-italic [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs leading-[19.5px] mb-3">
            Gedung Kreativitas Mahasiswa (GKM) FILKOM UB, Jl. Veteran No. 8, Lowokwaru, Kota Malang, Jawa Timur 65145
          </address>
          <a
            href="mailto:hmdtif.filkom@ub.ac.id"
            className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffd700] text-xs leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]">
            Email: hmdtif.filkom@ub.ac.id
          </a>
        </section>
      </div>

      {/* copyright */}
      <p className="py-8 text-center [font-family:'Inter-Regular',Helvetica] font-normal text-xs leading-4">
        <span className="text-slate-400">Dikembangkan dengan ❤️ oleh </span>
        <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#ffd700]">
          Departemen PIT HMDTIF
        </span>
      </p>
    </footer>
  );
};

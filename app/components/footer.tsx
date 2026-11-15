const logo12 = '/images/Logo_1 2.png';

const navigationLinks = [
  { label: 'Home', className: 'mr-[135.4px] mt-[0.5px]' },
  { label: 'Welcoming', className: 'mr-[105.9px]' },
  { label: 'About HMDTIF', className: 'mr-[85.7px]' },
  { label: '5 Departemen', className: 'mr-[88.3px]' },
  { label: 'Latest News', className: 'mr-[98.4px]' },
];

const studentServiceLinks = [
  {
    label: 'Layanan Mahasiswa',
    className: 'ml-[17.5px] mr-[118.8px]',
  },
  {
    label: 'Informasi Mahasiswa',
    className: 'ml-[-0.5px] mr-[99.9px]',
  },
  {
    label: 'Dukungan Akademik',
    className: 'ml-[25.5px] w-[122.96px] h-4',
  },
];

export const FooterFooter = (): JSX.Element => {
  return (
    <footer className="w-[1369px] h-[343px] flex flex-col bg-[#060e1a]">
      <div
        aria-hidden="true"
        className="flex-1 max-h-1.5 bg-[linear-gradient(90deg,rgba(29,78,216,1)_0%,rgba(255,215,0,1)_50%,rgba(225,29,72,1)_100%)]"
      />
      <div className="ml-[76.5px] mr-[76.5px] flex-1 max-h-[191px] relative mt-[58px] border-b [border-bottom-style:solid] border-[#ffffff1a]">
        <section aria-labelledby="footer-brand-title">
          <div className="absolute w-[calc(100%_-_1172px)] top-0 left-0 h-12 flex bg-[#0b192c] rounded-xl border border-solid border-[#ffd70066]">
            <img
              className="mt-[1.4px] w-11 h-11 ml-[-1.5px] aspect-[1] object-cover"
              alt="HMDTIF FILKOM UB logo"
              src={logo12}
            />
          </div>
          <h2
            id="footer-brand-title"
            className="absolute w-[calc(100%_-_998px)] top-0.5 left-14 h-7 flex items-center [font-family:'Plus_Jakarta_Sans-ExtraBold',Helvetica] font-extrabold text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
            HMDTIF FILKOM UB 2026
          </h2>
          <p className="absolute w-[calc(100%_-_1087px)] top-[30px] left-14 h-4 flex items-center [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffd700] text-xs tracking-[0] leading-4 whitespace-nowrap">
            Kabinet Bahtera Gatra
          </p>
          <p className="absolute w-[calc(100%_-_860px)] top-[66px] left-0 h-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs tracking-[0] leading-[19.5px]">
            Himpunan Mahasiswa Departemen Teknik Informatika Fakultas
            <br />
            Ilmu Komputer Universitas Brawijaya.
          </p>
        </section>
        <nav
          aria-labelledby="footer-navigation-title"
          className="absolute left-[418px] top-0">
          <h2
            id="footer-navigation-title"
            className="w-[calc(100%_-_1131px)] h-6 flex items-center [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
            Navigation
          </h2>
          <div className="absolute w-[calc(100%_-_1047px)] top-[30px] left-[1px] h-28 flex flex-col gap-[9.5px]">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`${link.className} flex items-center flex-1 max-h-[14.5px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs tracking-[0] leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]`}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <nav
          aria-labelledby="student-services-title"
          className="absolute left-[628px] top-0">
          <h2
            id="student-services-title"
            className="w-[calc(100%_-_1059px)] h-5 flex items-center [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
            Layanan Mahasiswa TIF
          </h2>
          <div className="absolute w-[calc(100%_-_942px)] top-[30px] left-0 h-16 flex flex-col gap-2">
            {studentServiceLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`${link.className} flex items-center justify-center flex-1 max-h-4 [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs text-center tracking-[0] leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]`}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <section
          aria-labelledby="secretariat-title"
          className="absolute left-[942px] top-0">
          <h2
            id="secretariat-title"
            className="w-[calc(100%_-_1085px)] h-5 flex items-center [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
            Sekretariat HMDTIF
          </h2>
          <address className="absolute w-[calc(100%_-_945px)] top-[34px] left-0 h-[54px] not-italic [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-xs tracking-[0] leading-[19.5px]">
            Gedung Kreativitas Mahasiswa (GKM) FILKOM
            <br />
            UB, Jl. Veteran No. 8, Lowokwaru, Kota Malang,
            <br />
            Jawa Timur 65145
          </address>
          <a
            href="mailto:hmdtif.filkom@ub.ac.id"
            className="absolute w-[calc(100%_-_1042px)] top-[102px] left-0 h-4 flex items-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffd700] text-xs tracking-[0] leading-4 whitespace-nowrap hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffd700]">
            Email: hmdtif.filkom@ub.ac.id
          </a>
        </section>
      </div>
      <p className="ml-[397.5px] mr-[397.2px] flex-1 max-h-[14.5px] mt-[32.5px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
        <span className="text-slate-400">Dikembangkan dengan ❤️ oleh </span>
        <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#ffd700]">
          Departemen PIT HMDTIF
        </span>
      </p>
    </footer>
  );
};

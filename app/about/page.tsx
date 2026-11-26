import AboutLogoCarousel from "../components/LogoCarousel";

export const metadata = {
  title: "About — HMDTIF Bahtera Gatra 2026",
  description: "Tentang HMDTIF FILKOM UB Kabinet Bahtera Gatra 2026",
};

export default function About() {
  return (
    <div className="flex flex-col bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-28 md:py-36 lg:py-[163px] bg-gradient-to-b from-[#164A6E] via-[#2F5470] to-[#456B85] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.09]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-[488px]">
          <span className="text-[#F6D977] text-[10px] sm:text-xs font-bold tracking-[1.6px] sm:tracking-[2.4px] uppercase text-center font-[family-name:var(--font-space-grotesk)]">
            HIMPUNAN MAHASISWA DEPARTEMEN TEKNIK INFORMATIKA
          </span>
          <h1 className="text-[#FFF4D6] text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[108px] font-bold text-center font-[family-name:var(--font-space-grotesk)]">
            About HMDTIF
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="bg-[#FFFBF0] px-4 sm:px-8 lg:px-20 py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-12">
          
          {/* Lambang Bahtera Section */}
          <div className="bg-gradient-to-br from-[#2F5470] to-[#164A6E] rounded-2xl md:rounded-[26px] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.09]">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid2)" />
              </svg>
            </div>

            {/* Logo carousel interaktif: bisa dipencet dan digeser */}
            <div className="relative z-10">
              <AboutLogoCarousel />
            </div>
          </div>

          {/* Visi Misi Section */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 pt-4 md:pt-8">
            {/* Visi */}
            <div className="flex-1 bg-gradient-to-br from-[#2F5470] to-[#164A6E] border border-white/20 rounded-2xl md:rounded-[24px] p-6 sm:p-8 lg:p-10 md:pb-[120px] lg:pb-[171px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#FFF4D6] text-2xl leading-9 sm:text-[32px] sm:leading-[48px] font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                VISI
              </h3>
              <p className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[14.9px] leading-6 sm:leading-[27px]">
                Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung, berkembang secara profesional, dan didukung advokasi yang responsif dan suportif.
              </p>
            </div>

            {/* Misi */}
            <div className="flex-1 bg-gradient-to-br from-[#2F5470] to-[#164A6E] border border-white/20 rounded-2xl md:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#FFF4D6] text-2xl leading-9 sm:text-[32px] sm:leading-[48px] font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                MISI
              </h3>
              <div className="pl-4 border-l-2 border-[#F6D977] flex flex-col gap-3">
                <div className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">1.</strong> Membangun ruang diskusi yang terarah dan suportif bagi mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">2.</strong> Menyelenggarakan program pengembangan keprofesian yang relevan dengan kebutuhan Mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">3.</strong> Menghadirkan advokasi yang responsif dan solutif yang tertuju pada kebutuhan mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-sm sm:text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">4.</strong> Mendorong partisipasi aktif dan kolaboratif sebagai wadah pengembangan karakter mahasiswa DTIF.
                </div>
              </div>
            </div>
          </div>

          {/* Cabinet Values */}
          <div className="flex flex-col gap-6 md:gap-8 pt-4 md:pt-8">
            <h2 className="text-[#2F5470] text-3xl leading-[44px] sm:text-4xl md:text-[44px] md:leading-[66px] font-bold font-[family-name:var(--font-space-grotesk)]">
              CABINET VALUES
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { title: "Respect", tagline: "See the Value in Everyone." },
                { title: "Ownership", tagline: "Own It. Finish It." },
                { title: "Openness", tagline: "Open Minds Build Progress." },
                { title: "Feedback-Oriented", tagline: "Feedback Fuels Growth." }
              ].map((value, idx) => (
                <div key={idx} className="bg-[#FFF4D6] border border-[rgba(31,58,77,0.15)] rounded-2xl md:rounded-[20px] p-5 sm:p-7 shadow-sm">
                  <h4 className="text-[#2E8FA6] text-xl sm:text-2xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
                    {value.title}
                  </h4>
                  <p className="text-[#1F3A4D] text-[13.6px] leading-[23px] italic font-bold">
                    {value.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center items-center py-5 w-full overflow-hidden">
            <div className="flex gap-[-2.6px] shrink-0">
              {Array.from({ length: 46 }).map((_, i) => (
                <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 -mx-[2.6px] shrink-0" style={{
                  background: i % 2 === 0 ? '#2F5470' : '#2E8FA6'
                }} />
              ))}
            </div>
          </div>

          {/* Core Behaviors */}
          <div className="grid grid-cols-1 lg:grid-cols-[346px_1fr] gap-6 lg:gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#2F5470] text-2xl leading-9 sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[44px] font-bold font-[family-name:var(--font-space-grotesk)]">
                CORE BEHAVIORS
              </h2>
              <p className="text-[rgba(31,58,77,0.75)] text-[13.5px] leading-[22px]">
                Empat landasan perilaku kerja fungsionaris Kabinet Bahtera Gatra 2026 dalam melayani warga DTIF.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              {[
                { num: "01", title: "Sinergi Gatra (Clarity)", desc: "Clarity in Direction." },
                { num: "02", title: "Nakhoda Inovasi (Execution)", desc: "Responsible Execution." },
                { num: "03", title: "Sauh Advokasi (Significance)", desc: "Meaningful Impact." },
                { num: "04", title: "Layar Kolaborasi (Excellence)", desc: "Raise the Standard." }
              ].map((behavior, idx) => (
                <div key={idx} className="bg-[#FFF4D6] border border-[rgba(31,58,77,0.15)] rounded-2xl md:rounded-[20px] p-5 sm:p-7 flex flex-col gap-2">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="text-[#2E8FA6] text-2xl leading-9 sm:text-[28px] sm:leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
                      {behavior.num}
                    </span>
                    <h4 className="text-[#2F5470] text-lg leading-7 sm:text-2xl sm:leading-9 font-bold font-[family-name:var(--font-space-grotesk)]">
                      {behavior.title}
                    </h4>
                  </div>
                  <div className="border-t border-[rgba(31,58,77,0.15)] pt-4">
                    <p className="text-[rgba(31,58,77,0.9)] text-[13.6px] leading-[23px]">
                      {behavior.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spirit Section */}
          <div className="border-t border-[rgba(31,58,77,0.15)] pt-10 md:pt-20 flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#2F5470] text-base sm:text-xl leading-[30px] font-bold tracking-[1.6px] uppercase font-[family-name:var(--font-space-grotesk)]">
                MOTTO & SPIRIT
              </h3>
              <h2 className="text-[#1F3A4D] text-3xl leading-[44px] sm:text-4xl md:text-[44px] md:leading-[66px] font-bold font-[family-name:var(--font-courier-prime)]">
                Bahtera Gatra
              </h2>
              <div className="bg-[#2F5470] rounded-xl px-4 sm:px-6 py-[14px] inline-flex items-center gap-2 sm:gap-3 w-fit max-w-full shadow-md mt-1">
                <span className="text-[#FFF4D6] text-sm leading-6 sm:text-xl sm:leading-8 lg:text-[26px] lg:leading-[39px] italic break-all sm:break-normal">
                  #BerlayarBersamaSatukanGatra
                </span>
                <span className="text-[#FBC02D] text-lg sm:text-[23.1px] leading-8 shrink-0">★</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-[#456B85] to-[#2F5470] rounded-2xl md:rounded-[20px] p-6 sm:p-8 flex flex-col gap-3 shadow-lg">
                <h4 className="text-[#FFF4D6] text-xl leading-8 sm:text-[28px] sm:leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
                  CONNECT & EMPOWER
                </h4>
                <p className="text-[rgba(242,247,250,0.9)] text-[13.9px] leading-6">
                  Menghubungkan seluruh mahasiswa Departemen Teknik Informatika dalam satu ruang diskusi yang terarah, suportif, dan kolaboratif lintas angkatan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F5470] to-[#164A6E] rounded-2xl md:rounded-[20px] p-6 sm:p-8 lg:pb-14 flex flex-col gap-3 shadow-lg">
                <h4 className="text-[#FFF4D6] text-xl leading-8 sm:text-[28px] sm:leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
                  GROW PROFESSIONALLY
                </h4>
                <p className="text-[rgba(242,247,250,0.9)] text-[13.8px] leading-6">
                  Mendorong akselerasi kompetensi akademik, hardskill teknologi, kewirausahaan, serta kesiapan karier mahasiswa DTIF di industri global.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
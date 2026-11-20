export const metadata = {
  title: "About — HMDTIF Bahtera Gatra 2026",
  description: "Tentang HMDTIF FILKOM UB Kabinet Bahtera Gatra 2026",
};

export default function About() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center px-6 py-[163px] bg-gradient-to-b from-[#164A6E] via-[#2F5470] to-[#456B85] overflow-hidden">
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
          <span className="text-[#F6D977] text-xs font-bold tracking-[2.4px] uppercase font-[family-name:var(--font-space-grotesk)]">
            HIMPUNAN MAHASISWA DEPARTEMEN TEKNIK INFORMATIKA
          </span>
          <h1 className="text-[#FFF4D6] text-[72px] leading-[108px] font-bold text-center font-[family-name:var(--font-space-grotesk)]">
            About HMDTIF
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="bg-[#FFFBF0] px-20 py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          
          {/* Lambang Bahtera Section */}
          <div className="bg-gradient-to-br from-[#2F5470] to-[#164A6E] rounded-[26px] p-14 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.09]">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid2)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-12">
              {/* Logo Carousel */}
              <div className="flex justify-center items-center gap-16 pb-[21.5px]">
                <button className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center opacity-60 blur-[2px]">
                  <img src="/images/logo-hmdtif.png" alt="Logo" className="w-10 h-auto" />
                </button>
                
                <div className="w-[144px] h-[144px] bg-[#FFF4D6] border-4 border-[#FBC02D] rounded-full shadow-[0_0_40px_rgba(251,192,45,0.35)] flex items-center justify-center">
                  <img src="/images/logo-hmdtif.png" alt="Logo Bahtera" className="w-[74px] h-auto" />
                </div>

                <button className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center opacity-60 blur-[2px]">
                  <img src="/images/logo-hmdtif.png" alt="Logo" className="w-10 h-auto" />
                </button>
              </div>

              {/* Badge */}
              <div className="bg-white/15 border border-white/30 px-[14px] py-1 rounded-full">
                <span className="text-[#F6D977] text-[11px] font-bold tracking-[1.1px] uppercase font-[family-name:var(--font-space-grotesk)]">
                  BAHTERA
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[#FFF4D6] text-[30px] leading-[45px] font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                Lambang Bahtera
              </h2>

              {/* Description */}
              <p className="text-[rgba(242,247,250,0.9)] text-[15.3px] leading-[26px] text-center max-w-[672px]">
                Merupakan sebuah kapal besar yang mahasiswa DTIF
              </p>

              {/* Pagination Dots */}
              <div className="flex gap-2.5 pt-5">
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-8 h-3 bg-[#FBC02D] rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Visi Misi Section */}
          <div className="flex gap-8 pt-8">
            {/* Visi */}
            <div className="flex-1 bg-gradient-to-br from-[#2F5470] to-[#164A6E] border border-white/20 rounded-[24px] p-10 pb-[171px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#FFF4D6] text-[32px] leading-[48px] font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                VISI
              </h3>
              <p className="text-[rgba(242,247,250,0.9)] text-[14.9px] leading-[27px]">
                Mewujudkan lingkungan mahasiswa Departemen Teknik Informatika yang saling terhubung, berkembang secara profesional, dan didukung advokasi yang responsif dan suportif.
              </p>
            </div>

            {/* Misi */}
            <div className="flex-1 bg-gradient-to-br from-[#2F5470] to-[#164A6E] border border-white/20 rounded-[24px] p-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#FFF4D6] text-[32px] leading-[48px] font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                MISI
              </h3>
              <div className="pl-4 border-l-2 border-[#F6D977] flex flex-col gap-3">
                <div className="text-[rgba(242,247,250,0.9)] text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">1.</strong> Membangun ruang diskusi yang terarah dan suportif bagi mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">2.</strong> Menyelenggarakan program pengembangan keprofesian yang relevan dengan kebutuhan Mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">3.</strong> Menghadirkan advokasi yang responsif dan solutif yang tertuju pada kebutuhan mahasiswa DTIF.
                </div>
                <div className="text-[rgba(242,247,250,0.9)] text-[14.5px] leading-[22px]">
                  <strong className="text-[#F6D977]">4.</strong> Mendorong partisipasi aktif dan kolaboratif sebagai wadah pengembangan karakter mahasiswa DTIF.
                </div>
              </div>
            </div>
          </div>

          {/* Cabinet Values */}
          <div className="flex flex-col gap-8 pt-8">
            <h2 className="text-[#2F5470] text-[44px] leading-[66px] font-bold font-[family-name:var(--font-space-grotesk)]">
              CABINET VALUES
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Respect", tagline: "See the Value in Everyone." },
                { title: "Ownership", tagline: "Own It. Finish It." },
                { title: "Openness", tagline: "Open Minds Build Progress." },
                { title: "Feedback-Oriented", tagline: "Feedback Fuels Growth." }
              ].map((value, idx) => (
                <div key={idx} className="bg-[#FFF4D6] border border-[rgba(31,58,77,0.15)] rounded-[20px] p-7 shadow-sm">
                  <h4 className="text-[#2E8FA6] text-2xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
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
          <div className="flex justify-center items-center py-5">
            <div className="flex gap-[-2.6px]">
              {Array.from({ length: 46 }).map((_, i) => (
                <div key={i} className="w-4 h-4 rotate-45 -mx-[2.6px]" style={{
                  background: i % 2 === 0 ? '#2F5470' : '#2E8FA6'
                }} />
              ))}
            </div>
          </div>

          {/* Core Behaviors */}
          <div className="grid grid-cols-[346px_1fr] gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#2F5470] text-4xl leading-[44px] font-bold font-[family-name:var(--font-space-grotesk)]">
                CORE BEHAVIORS
              </h2>
              <p className="text-[rgba(31,58,77,0.75)] text-[13.5px] leading-[22px]">
                Empat landasan perilaku kerja fungsionaris Kabinet Bahtera Gatra 2026 dalam melayani warga DTIF.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { num: "01", title: "Sinergi Gatra (Clarity)", desc: "Clarity in Direction." },
                { num: "02", title: "Nakhoda Inovasi (Execution)", desc: "Responsible Execution." },
                { num: "03", title: "Sauh Advokasi (Significance)", desc: "Meaningful Impact." },
                { num: "04", title: "Layar Kolaborasi (Excellence)", desc: "Raise the Standard." }
              ].map((behavior, idx) => (
                <div key={idx} className="bg-[#FFF4D6] border border-[rgba(31,58,77,0.15)] rounded-[20px] p-7 flex flex-col gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[#2E8FA6] text-[28px] leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
                      {behavior.num}
                    </span>
                    <h4 className="text-[#2F5470] text-2xl leading-9 font-bold font-[family-name:var(--font-space-grotesk)]">
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
          <div className="border-t border-[rgba(31,58,77,0.15)] pt-20 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#2F5470] text-xl leading-[30px] font-bold tracking-[1.6px] uppercase font-[family-name:var(--font-space-grotesk)]">
                MOTTO & SPIRIT
              </h3>
              <h2 className="text-[#1F3A4D] text-[44px] leading-[66px] font-bold font-[family-name:var(--font-courier-prime)]">
                Bahtera Gatra
              </h2>
              <div className="bg-[#2F5470] rounded-xl px-6 py-[14px] inline-flex items-center gap-3 w-fit shadow-md mt-1">
                <span className="text-[#FFF4D6] text-[26px] leading-[39px] italic">
                  #BerlayarBersamaSatukanGatra
                </span>
                <span className="text-[#FBC02D] text-[23.1px] leading-8">★</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#456B85] to-[#2F5470] rounded-[20px] p-8 flex flex-col gap-3 shadow-lg">
                <h4 className="text-[#FFF4D6] text-[28px] leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
                  CONNECT & EMPOWER
                </h4>
                <p className="text-[rgba(242,247,250,0.9)] text-[13.9px] leading-6">
                  Menghubungkan seluruh mahasiswa Departemen Teknik Informatika dalam satu ruang diskusi yang terarah, suportif, dan kolaboratif lintas angkatan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F5470] to-[#164A6E] rounded-[20px] p-8 pb-14 flex flex-col gap-3 shadow-lg">
                <h4 className="text-[#FFF4D6] text-[28px] leading-[42px] font-bold font-[family-name:var(--font-space-grotesk)]">
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


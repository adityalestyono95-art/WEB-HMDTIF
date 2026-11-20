"use client";

import React, { useState } from "react";
import DepartmentModal, { departments } from "./departments";

export default function CabinetPage() {
  const [openDept, setOpenDept] = useState<string | null>(null);

  // Simpan tombol pemicu supaya fokus kembali ke sana saat dialog ditutup.
  const pemicu = React.useRef<HTMLElement | null>(null);

  const openModal = (id: string) => {
    pemicu.current = document.activeElement as HTMLElement | null;
    setOpenDept(id);
  };
  const closeModal = () => {
    setOpenDept(null);
    pemicu.current?.focus();
  };

  const activeDept = departments.find((d) => d.id === openDept) ?? null;
  
  return (
    <div className="flex flex-col bg-white">
      {/* ── Hero / Header ───────────────────────────────────── */}
      <div className="self-stretch bg-[#FFFBF0] pt-4">
        {/* Title */}
        <div className="self-stretch h-16" />
        <div className="mb-16 self-stretch px-4 pt-10 md:mb-24 md:px-20">
          <div className="flex flex-col self-stretch gap-2">
            <h1 className="flex flex-wrap justify-center items-center self-stretch text-center">
              <span className="mr-[17px] text-[#1F3A4D] text-3xl font-bold md:text-[56px]">THE </span>
              <span className="text-[#FBC02D] text-3xl font-bold md:text-[56px]">CABINET</span>
              <span className="text-[#1F3A4D] text-3xl font-bold md:text-[56px]"> STRUCTURE</span>
            </h1>
            <div className="flex flex-col items-center self-stretch">
              <span className="text-[#1F3A4D] text-[13px]">
                Arahkan kursor atau klik pada kartu ID pengurus untuk melihat akun Instagram &amp; LinkedIn, atau klik See Details ↗ pada tiap departemen.
              </span>
            </div>
          </div>

          {/* ── Org Chart Top (Ketua, Wakil, Sekretaris) ── */}
          <div className="flex flex-col items-center self-stretch py-14">
            {/* Ketua */}
            <div
              className="bg-[#EED9A4] w-[172px] p-2 mb-12 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
              style={{ boxShadow: "0px 8px 24px #00000026" }}
            >
              <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[75px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                  <span className="text-white text-[10px] font-bold">ketua</span>
                </div>
                <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[99px]" />
                <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                  <span className="text-white text-[9px] font-bold text-center">bagas tif</span>
                </div>
              </div>
            </div>

            {/* Wakil Ketua */}
            <div
              className="bg-[#EED9A4] w-[172px] p-2 mb-10 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
              style={{ boxShadow: "0px 8px 24px #00000026" }}
            >
              <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[75px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                  <span className="text-white text-[10px] font-bold">wakil ketua</span>
                </div>
                <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[99px]" />
                <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                  <span className="text-white text-[9px] font-bold text-center">abI tekkom</span>
                </div>
              </div>
            </div>

            {/* Dashed separator */}
            <div className="w-80 h-0.5 border-t-2 border-dashed border-t-[#FBC02D]" />

            {/* Sekretaris 1 & 2 */}
            <div className="flex w-full max-w-[456px] justify-between items-start pt-4">
              {/* Sekretaris */}
              <div
                className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
                style={{ boxShadow: "0px 8px 24px #00000026" }}
              >
                <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                  <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[75px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                    <span className="text-white text-[10px] font-bold">sekretaris</span>
                  </div>
                  <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[99px]" />
                  <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                    <span className="text-white text-[9px] font-bold text-center">CUCUp{"\n"}TIF</span>
                  </div>
                </div>
              </div>

              {/* Sekretaris 2 */}
              <div
                className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
                style={{ boxShadow: "0px 8px 24px #00000026" }}
              >
                <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                  <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[75px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                    <span className="text-white text-[10px] font-bold">sekretaris 2</span>
                  </div>
                  <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[99px]" />
                  <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                    <span className="text-white text-[9px] font-bold text-center">yusup{"\n"}TIF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Departemen List ───────────────────────────────── */}
          <div className="self-stretch pb-[1px]">

            {/* ── INFOKOM ── */}
            <div className="mb-24 self-stretch px-4 md:mx-20 md:mb-36">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138}
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67918779-c655-4fbf-bd54-cf961227d130"
                  className="w-40 h-[138px] absolute bottom-0 right-[25px] object-fill"
                  alt=""
                />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  {/* Ketua Divisi Card */}
                  <div
                    className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]"
                    style={{ boxShadow: "0px 8px 24px #00000026" }}
                  >
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">jeki{"\n"}TIF</span>
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex w-full min-w-0 flex-1 flex-col items-start">
                    <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 mb-2.5 gap-2.5 rounded-xl">
                      <img width={20} height={20}
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82a9fb05-f645-4dd1-99f3-3077c7ee8569"
                        className="w-5 h-5 rounded-xl object-fill"
                        alt=""
                      />
                      <span className="text-[#FFF4D6] text-xs font-bold">INFOKOM • HMDTIF 2026</span>
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px]">
                        Departemen Informasi dan Komunikasi{"\n"}(INFOKOM)
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className="text-[#1f7189] text-xs font-bold">2 BIDANG • MEDIA KREATIF &amp; HUMAS</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[9px]">
                      <span className="text-[#1F3A4D] text-[13px]">
                        Departemen Informasi dan Komunikasi (INFOKOM) berperan sebagai penyedia dan pengelola informasi dari{"\n"}
                        HMDTIF melalui pengumpulan, penyaringan, dan penyebaran informasi secara efektif kepada seluruh{"\n"}
                        mahasiswa DTIF dan masyarakat umum, serta manajemen seluruh media sosial resmi HMDTIF.
                      </span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pt-1.5 mb-5 gap-[7px]">
                      <div className="flex items-center flex-wrap gap-1">
                        {["Social Media Management", "ADA ADIT (Ada Apa Dengan IT)", "SILAT (Silaturahmi HMDTIF)", "KomaTitik Podcast"].map((tag) => (
                          <div key={tag} className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                            <span className="text-[#164A6E] text-[10px]">{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col items-start bg-[#FBC02D4D] py-[1px] px-2.5 rounded-[9999px]">
                        <span className="text-[#1F3A4D] text-[10px] font-bold">+4 Proker Lainnya</span>
                      </div>
                    </div>
                    <button
                      className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                      style={{ boxShadow: "0px 1px 2px #0000000D" }}
                      onClick={() => openModal("infokom")}
                    >
                      <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> INFOKOM</span></span>
                      <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87b3e628-59e2-403e-8214-f06c05770fc0" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Wakadiv INFOKOM */}
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["vior\ntekkom", "nurdin\ntekkom"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ADVOKESMA ── */}
            <div className="mb-24 flex flex-col self-stretch gap-[1px] px-4 md:mx-20 md:mb-[145px]">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a992c820-2dd0-4047-897a-d377b19ca338" className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] object-fill" alt="" />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  <div className="w-full min-w-0 flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 gap-3 rounded-xl">
                        <span className="text-[#FFF4D6] text-xs font-bold">ADVOKESMA • HMDTIF 2026</span>
                        <img width={20} height={20} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6e19756-7836-4496-a192-26b56fc72ae6" className="w-5 h-5 rounded-xl object-fill" alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start self-stretch py-0.5 pl-9 mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px] text-right w-full max-w-[644px]">
                        Departemen Advokasi dan Kesejahteraan{"\n"}Mahasiswa
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className="text-[#1f7189] text-xs font-bold">2 BIDANG • ADVOKASI &amp; KESEJAHTERAAN MAHASISWA</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pl-7 mb-2.5">
                      <span className="text-[#1F3A4D] text-[13px] text-right w-full max-w-[652px]">
                        Departemen ADVOKESMA berperan sebagai pusat pelayanan untuk meningkatkan fungsi advokasi serta{"\n"}
                        kesejahteraan mahasiswa DTIF, menyediakan dukungan menyeluruh dalam aspek akademik maupun non-{"\n"}
                        akademik guna menciptakan lingkungan perkuliahan yang kondusif.
                      </span>
                    </div>
                    <div className="flex flex-col items-end self-stretch py-[3px] mb-5 gap-1.5">
                      <div className="flex items-center flex-wrap gap-1 mr-[1px]">
                        {["DISMIK KRS (Diskusi Akademik KRS)", "ACE (Academic Completion and Excellence)", "Echo Advo"].map((tag) => (
                          <div key={tag} className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                            <span className="text-[#164A6E] text-[10px]">{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                          <span className="text-[#164A6E] text-[10px]">CC KRS SA (Crisis Center KRS &amp; SA)</span>
                        </div>
                        <div className="flex flex-col items-start bg-[#FBC02D4D] py-0.5 px-2.5 rounded-[9999px]">
                          <span className="text-[#1F3A4D] text-[10px] font-bold">+4 Proker Lainnya</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end self-stretch">
                      <button
                        className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] mr-[1px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                        style={{ boxShadow: "0px 1px 2px #0000000D" }}
                        onClick={() => openModal("advokesma")}
                      >
                        <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> ADVOKESMA</span></span>
                        <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a465a276-01ea-493b-95b1-7af5b62e858d" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                      </button>
                    </div>
                  </div>
                  {/* Ketua Divisi Card */}
                  <div className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">mikael{"\n"}tekkom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wakadiv ADVOKESMA */}
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["lebron\ntekkom", "kobe tif"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PSDM ── */}
            <div className="mb-24 self-stretch px-4 md:mx-20 md:mb-36">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc46aac8-50b7-4203-bd5f-75430f04fa42" className="w-40 h-[138px] absolute bottom-0 right-[25px] object-fill" alt="" />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  <div className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">jordan{"\n"}tif</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full min-w-0 flex-1 flex-col items-start">
                    <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 mb-2.5 gap-2.5 rounded-xl">
                      <img width={20} height={20} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0c0f37d-a014-4249-beb1-00a28fca2cf2" className="w-5 h-5 rounded-xl object-fill" alt="" />
                      <span className="text-[#FFF4D6] text-xs font-bold">PSDM • HMDTIF 2026</span>
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px]">
                        Departemen Pengembangan Sumber Daya{"\n"}Mahasiswa
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className="text-[#1f7189] text-xs font-bold">2 DIVISI • DIVISI HUMANIORA &amp; DIVISI WIDYANTARA</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[9px]">
                      <span className="text-[#1F3A4D] text-[13px]">
                        Departemen PSDM berfungsi sebagai sentra akselerasi kompetensi anggota HMDTIF yang berfokus pada{"\n"}
                        pembentukan karakter kepemimpinan serta peningkatan hardskill dan softskill melalui integrasi Divisi{"\n"}
                        Humaniora dan Divisi Widyantara guna mencetak SDM berdaya saing tinggi.
                      </span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pt-1.5 mb-5 gap-[7px]">
                      <div className="flex items-center flex-wrap gap-1">
                        {["ASA (Assemble Study Association)", "MAGANG GO!", "INFORCE (Informatics Career Excellence)"].map((tag) => (
                          <div key={tag} className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                            <span className="text-[#164A6E] text-[10px]">{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-0.5 px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                          <span className="text-[#164A6E] text-[10px]">TEKRA (Technology &amp; Creativity Arena)</span>
                        </div>
                        <div className="flex flex-col items-start bg-[#FBC02D4D] py-0.5 px-2.5 rounded-[9999px]">
                          <span className="text-[#1F3A4D] text-[10px] font-bold">+4 Proker Lainnya</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                      style={{ boxShadow: "0px 1px 2px #0000000D" }}
                      onClick={() => openModal("psdm")}
                    >
                      <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> PSDM</span></span>
                      <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a291185-e707-4085-830c-78aba0ab83ca" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["adam\ntekkom", "sigit\ntekkom"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── BISNIS ── */}
            <div className="mb-24 flex flex-col self-stretch gap-[1px] px-4 md:mx-20 md:mb-[145px]">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/909b86dc-97b5-4909-9127-beb87a3727a0" className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] object-fill" alt="" />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  <div className="w-full min-w-0 flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 gap-3 rounded-xl">
                        <span className="text-[#FFF4D6] text-xs font-bold">BISNIS • HMDTIF 2026</span>
                        <img width={20} height={20} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e42400aa-355b-458c-b19a-4e13593838de" className="w-5 h-5 rounded-xl object-fill" alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start self-stretch py-0.5 pl-9 mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px] text-right w-full max-w-[644px]">
                        Departemen Bisnis (Entrepreneurship &amp;{"\n"}Partnership)
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className="text-[#1f7189] text-xs font-bold">ENTREPRENEURSHIP • FUNDRAISING &amp; SPONSORSHIP</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pl-[13px] mb-2.5">
                      <span className="text-[#1F3A4D] text-[13px] text-right w-full max-w-[667px]">
                        Departemen Bisnis berfungsi sebagai sentra strategis pengembangan kompetensi kewirausahaan{"\n"}
                        (entrepreneurship) bagi mahasiswa Teknik Informatika, yang mengintegrasikan fungsi fundraising organisasi{"\n"}
                        dengan edukasi manajemen bisnis serta perluasan jejaring kemitraan.
                      </span>
                    </div>
                    <div className="flex justify-end items-center self-stretch py-1.5 mb-5 gap-1.5">
                      {["Warung Informatika", "HMDTIF Wear", "Informatics Partnership and Sponsorship"].map((tag) => (
                        <div key={tag} className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-[3px] px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                          <span className="text-[#164A6E] text-[10px]">{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col items-end self-stretch">
                      <button
                        className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] mr-[1px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                        style={{ boxShadow: "0px 1px 2px #0000000D" }}
                        onClick={() => openModal("bisnis")}
                      >
                        <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> BISNIS</span></span>
                        <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e60d6694-fa6e-40bd-8071-f2ba292ff44e" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">aldo{"\n"}tekkom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["zahra\ntif", "akup\ntekkom"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PIT ── */}
            <div className="mb-24 self-stretch px-4 md:mx-20 md:mb-36">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/865b45f1-3c33-4ec1-bb21-a15744af7440" className="w-40 h-[138px] absolute bottom-0 right-[25px] object-fill" alt="" />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  <div className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">morant{"\n"}tekkom</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full min-w-0 flex-1 flex-col items-start">
                    <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 mb-2.5 gap-2.5 rounded-xl">
                      <img width={20} height={20} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c252373e-d0a2-4e04-b26f-aac999165030" className="w-5 h-5 rounded-xl object-fill" alt="" />
                      <span className="text-[#FFF4D6] text-xs font-bold">PIT • HMDTIF 2026</span>
                    </div>
                    <div className="flex flex-col self-stretch py-[3px] mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px]">
                        Departemen Pengembangan Informasi dan{"\n"}Teknologi (PIT)
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-2.5" />
                    <div className="flex flex-col items-start self-stretch pt-1 mb-[9px]">
                      <span className="text-[#1f7189] text-xs font-bold">AGILE SDLC • INFORMATION SYSTEMS &amp; DIGITAL PLATFORM</span>
                    </div>
                    <div className="flex flex-col self-stretch mb-[15px]">
                      <span className="text-[#1F3A4D] text-[13px]">
                        Pengembangan Informasi dan Teknologi (PIT) bertanggung jawab atas pengembangan sistem informasi,{"\n"}
                        teknologi, dan media digital guna mendukung kegiatan serta kebutuhan HMDTIF dengan menerapkan{"\n"}
                        pendekatan Software Development Life Cycle (SDLC) berbasis Agile yang iteratif dan fleksibel.
                      </span>
                    </div>
                    <div className="flex flex-col items-start bg-[#FFFBF0] py-0.5 px-[11px] mb-5 rounded-[9999px] border border-solid border-[#2F547040]">
                      <span className="text-[#164A6E] text-[10px]">Pemeliharaan dan Optimalisasi Website (hmdtif.filkom.ub.ac.id)</span>
                    </div>
                    <button
                      className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                      style={{ boxShadow: "0px 1px 2px #0000000D" }}
                      onClick={() => openModal("pit")}
                    >
                      <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> PIT</span></span>
                      <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39ed8d9a-944b-48bd-9474-692613b78d7f" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["irving\ntif", "kevint\ntekkom"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SENAT ── */}
            <div className="flex flex-col self-stretch gap-[1px] px-4 md:mx-20">
              <div
                className="flex flex-col items-start self-stretch bg-[#FFF4D6] relative p-[38px] rounded-[18px] border-2 border-solid border-[#E2C887]"
                style={{ boxShadow: "0px 10px 28px #1F3A4D12" }}
              >
                <img width={160} height={138} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b9600f4-f0f3-4e08-856c-3a700cd89d7c" className="w-40 h-[138px] absolute bottom-[-1px] left-[26px] object-fill" alt="" />
                <div className="flex flex-col items-start gap-4 self-stretch md:flex-row md:items-center md:gap-8">
                  <div className="w-full min-w-0 flex-1">
                    <div className="flex flex-col items-end self-stretch mb-2.5">
                      <div className="flex items-center bg-[#2F5470] text-left py-1.5 px-3.5 gap-3 rounded-xl">
                        <span className="text-[#FFF4D6] text-xs font-bold">SENAT • HMDTIF 2026</span>
                        <img width={20} height={20} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39c5ba50-ce83-41fd-a8d0-f8d06713eeb0" className="w-5 h-5 rounded-xl object-fill" alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end self-stretch py-0.5 mb-2.5">
                      <span className="text-[#1F3A4D] text-xl font-bold md:text-[29px] text-right w-full max-w-[557px]">
                        Senat HMDTIF (Lembaga Legislatif{"\n"}Mahasiswa)
                      </span>
                    </div>
                    <div className="self-stretch bg-[#1F3A4D57] h-[1px] mb-[11px]" />
                    <div className="flex flex-col items-end self-stretch pt-1 pr-[1px] mb-2.5">
                      <span className="text-[#1f7189] text-xs font-bold">LEGISLATIF • KONSTITUSI, ASPIRASI &amp; PENGAWASAN</span>
                    </div>
                    <div className="flex flex-col items-start self-stretch pl-[38px] mb-2.5">
                      <span className="text-[#1F3A4D] text-[13px] text-right w-full max-w-[642px]">
                        Senat HMDTIF merupakan lembaga legislatif yang berperan strategis dalam memastikan arah gerak dan{"\n"}
                        kualitas tata kelola organisasi, menjadi wadah mahasiswa untuk terlibat langsung dalam pengambilan{"\n"}
                        keputusan, penghimpunan aspirasi, pengawasan program kerja, serta perumusan AD/ART dan GBHK.
                      </span>
                    </div>
                    <div className="flex justify-end items-center self-stretch py-1.5 mb-5 gap-1.5">
                      {["Musyawarah HMDTIF", "Evaluasi Triwulan", "Rapat Besar"].map((tag) => (
                        <div key={tag} className="flex flex-col shrink-0 items-start bg-[#FFFBF0] py-[3px] px-[11px] rounded-[9999px] border border-solid border-[#2F547040]">
                          <span className="text-[#164A6E] text-[10px]">{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col items-end self-stretch">
                      <button
                        className="flex items-center bg-[#E5CE96] text-left py-[11px] px-[21px] mr-[1px] gap-2 rounded-[10px] border border-solid border-[#C8B072]"
                        style={{ boxShadow: "0px 1px 2px #0000000D" }}
                        onClick={() => openModal("senat")}
                      >
                        <span className="text-[#1F3A4D] text-[13px] font-bold">See Details &amp; Fokus Kerja<span className="sr-only"> Senat</span></span>
                        <img width={16} height={16} src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e08cb49f-abae-4dc8-9150-7066524e154b" className="w-4 h-4 rounded-[10px] object-fill" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#EED9A4] w-[172px] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                    <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                      <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-[9px] mb-[87px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                        <span className="text-white text-[10px] font-bold">ketua divisi</span>
                      </div>
                      <div className="bg-[#1F3A4D40] w-10 h-[1px] mb-[87px]" />
                      <div className="flex flex-col self-stretch bg-[#E6CF96] py-[5px] px-[9px] mx-[1px] border-t border-solid border-t-[#1F3A4D26]">
                        <span className="text-white text-[9px] font-bold text-center">devin{"\n"}tif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center self-stretch pt-1 gap-4 md:gap-16">
                {["johnson\ntif", "russel\ntekkom"].map((name) => (
                  <div key={name} className="w-[148px] pt-[72px]">
                    <div className="self-stretch bg-[#EED9A4] p-2 rounded-[14px] border-2 border-solid border-[#D5BC7E]" style={{ boxShadow: "0px 8px 24px #00000026" }}>
                      <div className="flex flex-col items-center self-stretch bg-[#F4E3B8] py-[1px] rounded-[10px] border border-solid border-[#2F547040]">
                        <div className="flex flex-col items-center self-stretch bg-[#2F5470] py-2.5 mb-[71px] mx-[1px] border-b-2 border-solid border-b-[#FBC02D]">
                          <span className="text-white text-[10px] font-bold">wakadiv</span>
                        </div>
                        <div className="self-stretch bg-[#1F3A4D40] h-[1px] mb-[71px] mx-[46px]" />
                        <div className="flex flex-col items-center bg-[#E6CF96] py-[5px] border-t border-solid border-t-[#1F3A4D26]">
                          <span className="text-white text-[9px] font-bold text-center w-[130px]">{name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Department Modal Overlay ── */}
      {activeDept && (
        <DepartmentModal department={activeDept} onClose={closeModal} />
      )}
    </div>
  );
}
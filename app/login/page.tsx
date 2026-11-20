"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [sandi, setSandi] = useState("");
  const [lihat, setLihat] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const errorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  const kirim = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Same-origin lewat rewrite di next.config.ts, jadi cookie sesi ikut
      // terkirim dan tidak ada CORS.
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: sandi }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Pesan server hanya ditampilkan untuk kegagalan yang memang ditujukan
        // ke pengguna. 5xx bisa memuat detail internal, jadi diganti.
        // 422 datang dari validasi huma dan berbahasa Inggris ("validation
        // failed"), jadi diterjemahkan di sini, bukan ditampilkan mentah.
        const pesan =
          res.status === 422
            ? "Format email atau kata sandi belum benar."
            : res.status < 500 && data.detail
              ? data.detail
              : "Server sedang bermasalah. Coba lagi beberapa saat.";
        setError(pesan);
        setLoading(false);
        return;
      }

      // Server sudah menaruh cookie httpOnly. Tidak ada token di JavaScript.
      router.push("/");
      router.refresh();
    } catch {
      setError("Tidak bisa terhubung ke server");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Kiri: identitas merek. Disembunyikan di HP supaya form dapat ruang. */}
      <div
        data-surface="dark"
        className="relative hidden w-[630px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#164A6E] via-[#2F5470] to-[#456B85] p-[52px] text-[#F2F7FA] lg:flex"
      >
        {/* Pola garis halus */}
        <div className="absolute inset-0 opacity-[0.09]" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="gridLogin" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#gridLogin)" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="mb-1 text-[25px] font-bold leading-8 text-[#FFF4D6]">HMDTIF FILKOM UB</p>
          <p className="text-[11px] font-medium uppercase leading-[18px] tracking-[2px] text-[#F6D977]">
            Kabinet Bahtera Gatra 2026
          </p>
        </div>

        <div className="relative z-10 -mt-20 flex flex-col items-center justify-center">
          <div className="mb-16 h-[221px] w-[167px]">
            <Image
              src="/images/logo-hmdtif.png"
              alt=""
              width={167}
              height={221}
              className="h-full w-full object-contain drop-shadow-[0_0_56px_rgba(102,255,255,0.38)]"
            />
          </div>

          <h2 className="mb-8 max-w-[520px] text-center text-5xl font-bold leading-[55px] tracking-[-1.4px] text-[#FFF4D6]">
            Berlayar Bersama Satukan Gatra
          </h2>

          <p className="mb-12 max-w-[510px] text-center text-[15px] leading-[26px] text-[#F2F7FA]/85">
            Himpunan Mahasiswa Departemen Teknik Informatika yang berkomitmen
            membangun komunitas solid, suportif, dan profesional.
          </p>

          <div className="mb-6 h-[3px] w-11 bg-[#F6D977]" aria-hidden="true" />

          <p className="mb-8 text-lg font-bold leading-[26px] text-[#FFF4D6]">
            #BerlayarBersamaSatukanGatra
          </p>
        </div>

        <div className="relative z-10">
          <p className="max-w-[510px] text-xs leading-5 text-[#F2F7FA]/75">
            Gedung Kreativitas Mahasiswa, Fakultas Ilmu Komputer
            <br />
            Universitas Brawijaya, Jl. Veteran No. 8, Lowokwaru, Malang
          </p>
        </div>
      </div>

      {/* Kanan: form login */}
      <div className="flex flex-1 flex-col bg-[#FFFBF0]">
        <div className="px-6 pt-10 md:px-10 md:pt-[46px]">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium text-[#2F5470] transition-colors duration-300 hover:text-[#164A6E] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span aria-hidden="true">←</span> Kembali ke beranda
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-8">
              <p className="mb-3 text-[11px] font-bold uppercase leading-[18px] tracking-[1.8px] text-[#2F5470]">
                Portal Fungsionaris
              </p>
              <h1 className="mb-4 text-[33px] font-bold leading-[43px] text-[#1F3A4D]">
                Masuk ke Akun Anda
              </h1>
              <p className="text-sm leading-[23px] text-[#1F3A4D]/70">
                Gunakan email dan kata sandi yang telah terdaftar untuk mengakses
                portal internal HMDTIF.
              </p>
            </div>

            <form onSubmit={kirim} className="flex flex-col gap-6">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="email" className="text-[13px] font-medium leading-5 text-[#1F3A4D]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  inputMode="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="nama.lengkap@student.ub.ac.id"
                  required
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "login-error" : undefined}
                  className="h-[52px] w-full rounded-lg border border-[#1F3A4D]/20 bg-[#FFFBF0] px-4 text-sm text-[#1F3A4D] outline-none placeholder:text-[#1F3A4D]/50 focus-visible:outline-2 focus-visible:outline-offset-2"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label htmlFor="sandi" className="text-[13px] font-medium leading-5 text-[#1F3A4D]">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    id="sandi"
                    name="password"
                    type={lihat ? "text" : "password"}
                    autoComplete="current-password"
                    value={sandi}
                    onChange={(e) => {
                      setSandi(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Masukkan kata sandi Anda"
                    required
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "login-error" : undefined}
                    className="h-[52px] w-full rounded-lg border border-[#1F3A4D]/20 bg-[#FFFBF0] px-4 pr-24 text-sm text-[#1F3A4D] outline-none placeholder:text-[#1F3A4D]/50 focus-visible:outline-2 focus-visible:outline-offset-2"
                  />
                  <button
                    type="button"
                    onClick={() => setLihat(!lihat)}
                    aria-pressed={lihat}
                    aria-controls="sandi"
                    aria-label={lihat ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                    className="absolute right-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-md px-2 text-xs font-medium text-[#2F5470] hover:text-[#164A6E] focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {lihat ? "Sembunyikan" : "Tampilkan"}
                  </button>
                </div>
              </div>

              {error && (
                <div
                  id="login-error"
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border-2 border-red-700 bg-red-50 px-4 py-3 text-xs font-semibold leading-relaxed text-red-800 focus:outline-2 focus:outline-offset-4"
                >
                  <AlertCircle size={16} aria-hidden="true" className="mt-px shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#2F5470] text-[15px] font-bold leading-[22px] text-[#FFF4D6] transition-colors duration-300 hover:bg-[#164A6E] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 group"
              >
                {loading ? "Memproses..." : "Masuk"}
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <div className="pt-4 text-center">
                <p className="mb-1 text-xs leading-[21px] text-[#1F3A4D]/70">
                  Tidak bisa masuk atau lupa kredensial?
                </p>
                {/* Belum ada endpoint reset kata sandi; hubungi admin dulu. */}
                <a
                  href="mailto:hmdtif@ub.ac.id"
                  className="inline-flex min-h-11 items-center text-[13px] font-semibold leading-[22px] text-[#2F5470] hover:text-[#164A6E] focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Hubungi admin HMDTIF
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="p-6 text-center">
          <p className="text-[11px] leading-[18px] text-[#1F3A4D]/60">
            © 2026 HMDTIF FILKOM UB — Kabinet Bahtera Gatra. Made with ♥ by
            Departemen PIT.
          </p>
        </div>
      </div>
    </div>
  );
}

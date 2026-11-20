"use client";

<<<<<<< Updated upstream
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react'
=======
import { useState } from "react";
import Link from "next/link";
>>>>>>> Stashed changes

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< Updated upstream
 
  const [email, setEmail] = useState("")
  const [sandi, setSandi] = useState("")
  
  const [lihat, setLihat] = useState(false)
 
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorSeq, setErrorSeq] = useState(0)
  const [bergetar, setBergetar] = useState(false)
  const errorRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (error) errorRef.current?.focus()
  }, [error])

  React.useEffect(() => {
    if (errorSeq > 0) setBergetar(true)
  }, [errorSeq])

  const kirim = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Same-origin lewat rewrite di next.config.ts, jadi cookie sesi ikut
      // terkirim dan tidak ada CORS.
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: sandi }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Pesan server hanya ditampilkan untuk kegagalan yang memang ditujukan
        // ke pengguna. 5xx bisa memuat detail internal, jadi diganti.
        const aman = res.status < 500
        setError(aman && data.detail ? data.detail : "Server sedang bermasalah. Coba lagi beberapa saat.")
        setErrorSeq((n) => n + 1)
        setLoading(false)
        return
      }

      // Server sudah menaruh cookie httpOnly. Tidak ada token di JavaScript.
      router.push("/")
      router.refresh()
    } catch {
      setError("Tidak bisa terhubung ke server")
      setErrorSeq((n) => n + 1)
    }

    setLoading(false)
  }
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password, rememberMe });
  };
>>>>>>> Stashed changes

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Brand Identity */}
      <div className="relative w-[630px] bg-gradient-to-br from-[#164A6E] via-[#2F5470] to-[#456B85] flex flex-col justify-between p-[52px] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.09]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="gridLogin" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#gridLogin)" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Logo & Name */}
          <h1 className="text-[#FFF4D6] text-[25px] leading-8 font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
            HMDTIF FILKOM UB
          </h1>
          <p className="text-[#F6D977] text-[11px] leading-[18px] tracking-[2px] font-medium font-[family-name:var(--font-space-grotesk)]">
            KABINET BAHTERA GATRA 2026
          </p>
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center -mt-20">
          {/* Logo Bahtera */}
          <div className="w-[167.4px] h-[220.97px] mb-16">
            <img 
              src="/images/logo-hmdtif.png" 
              alt="Logo Bahtera Gatra" 
              className="w-full h-full object-contain drop-shadow-[0_0_56px_rgba(102,255,255,0.38)]"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-[#FFF4D6] text-5xl leading-[55px] font-bold tracking-[-1.4px] text-center mb-8 max-w-[520px] font-[family-name:var(--font-space-grotesk)]">
            Berlayar Bersama Satukan Gatra
          </h2>

          {/* Description */}
          <p className="text-[#E3EDF0] text-[15px] leading-[26px] text-center max-w-[510px] mb-12">
            Himpunan Mahasiswa Departemen Teknik Informatika yang berkomitmen membangun komunitas solid, suportif, dan profesional.
          </p>

          {/* Accent Line */}
          <div className="w-11 h-[3px] bg-[#F6D977] mb-6"></div>

          {/* Slogan */}
          <p className="text-[#FFF4D6] text-lg leading-[26px] font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">
            #BerlayarBersamaSatukanGatra
          </p>
        </div>

        {/* Footer Info */}
        <div className="relative z-10">
          <p className="text-[#D6E3E8] text-xs leading-5 max-w-[510px]">
            Gedung Kreativitas Mahasiswa, Fakultas Ilmu Komputer<br />
            Universitas Brawijaya, Jl. Veteran No. 8, Lowokwaru, Malang
          </p>
        </div>
      </div>

<<<<<<< Updated upstream
      {/* Panel kanan */}
      <div className="login-box flex flex-col bg-[#FFFBF0] px-6 py-8 md:px-10">
        <Link href={"/"} className="flex min-h-11 items-center gap-2 text-xs font-semibold text-[#2d5373] hover:text-[#1f7189] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189]">
          <ArrowLeft size={14} />
          Kembali ke beranda
        </Link>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">

          {/* Judul versi HP */}
          <h3 className="mb-6 text-lg font-bold tracking-wider text-[#2d5373] md:hidden">HMDTIF</h3>

          <p className="text-[10px] font-bold tracking-widest text-[#2d5373]">PORTAL HMDTIF</p>
          <h1 className="mt-3 text-3xl font-bold text-[#1e3a5f]">Selamat datang kembali!</h1>
          <p className="mt-3 text-xs leading-relaxed text-[#2d5373]/80 md:text-sm">
            Masuk ke akunmu untuk melanjutkan perjalanan bersama Bahtera Gatra.
          </p>

          <form
            onSubmit={kirim}
            onAnimationEnd={() => setBergetar(false)}
            className={`mt-8 ${bergetar ? "animate-shake" : ""}`}
          >
            <label htmlFor="email" className={`text-xs font-semibold ${error ? "text-red-700" : "text-[#1e3a5f]"}`}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              inputMode="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (error) setError("") }}
              placeholder="Masukkan alamat email"
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "login-error" : undefined}
              className={`mt-2 w-full rounded-lg border bg-[#FFFDF6] px-4 py-3.5 text-sm text-[#1e3a5f] outline-none placeholder:text-[#2d5373]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189] ${
                error ? "border-red-600 ring-1 ring-red-600" : "border-black/10 focus:border-[#1f7189]"
              }`}
            />

            <label htmlFor="sandi" className={`mt-5 block text-xs font-semibold ${error ? "text-red-700" : "text-[#1e3a5f]"}`}>Kata sandi</label>
            <div className={`mt-2 flex items-center rounded-lg border bg-[#FFFDF6] px-4 ${
              error ? "border-red-600 ring-1 ring-red-600" : "border-black/10 focus-within:border-[#1f7189]"
            }`}>
              <input
                id="sandi"
                name="password"
                type={lihat ? "text" : "password"}
                autoComplete="current-password"
                value={sandi}
                onChange={(e) => { setSandi(e.target.value); if (error) setError("") }}
                placeholder="Masukkan kata sandi"
                required
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "login-error" : undefined}
                className="w-full bg-transparent py-3.5 text-sm text-[#1e3a5f] outline-none placeholder:text-[#2d5373]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189]"
              />
              <button
                type="button"
                onClick={() => setLihat(!lihat)}
                aria-pressed={lihat}
                aria-controls="sandi"
                aria-label={lihat ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                className="-mr-2 flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 text-xs font-semibold text-[#2d5373] hover:text-[#1f7189] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189]"
              >
                {lihat ? "Sembunyi" : "Lihat"}
              </button>
            </div>

            {error && (
              <div
                key={errorSeq}
                id="login-error"
                ref={errorRef}
                tabIndex={-1}
                role="alert"
                className="mt-5 flex items-start gap-2 rounded-lg border-2 border-red-700 bg-red-50 px-4 py-3 text-xs font-semibold leading-relaxed text-red-800 focus:outline-2 focus:outline-offset-4 focus:outline-[#1e3a5f]"
              >
                <AlertCircle size={16} aria-hidden="true" className="mt-px shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="mt-6 flex w-full items-center justify-between rounded-lg bg-[#2d5373] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1e3a5f] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="flex-1 text-center">{loading ? "Memproses..." : "Masuk"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-8 text-center text-[11px] text-[#2d5373]/80">Belum memiliki akun atau mengalami kendala?</p>
          <p className="mt-2 text-center">
            <a href="mailto:hmdtif@ub.ac.id" className="inline-flex min-h-11 items-center text-xs font-bold text-[#1e3a5f] hover:text-[#1f7189] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f7189]">Hubungi admin HMDTIF</a>
          </p>
        </div>

        <p className="text-center text-[11px] text-[#2d5373]/85">© 2026 HMDTIF FILKOM UB · Bahtera Gatra</p>
=======
      {/* Right Side - Login Form */}
      <div className="flex-1 bg-[#FFFBF0] flex flex-col">
        {/* Back Button */}
        <div className="p-[46px] pb-0">
          <Link 
            href="/" 
            className="text-[#2F5470] text-[13px] leading-[22px] font-medium hover:underline inline-flex items-center gap-2"
          >
            <span>←</span> Kembali ke beranda
          </Link>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-[420px]">
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-[#2F5470] text-[11px] leading-[18px] tracking-[1.8px] uppercase font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                PORTAL FUNGSIONARIS
              </p>
              <h1 className="text-[#1F3A4D] text-[33px] leading-[43px] font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                Masuk ke Akun Anda
              </h1>
              <p className="text-[#59696E] text-sm leading-[23px]">
                Gunakan email dan kata sandi yang telah terdaftar untuk mengakses portal internal HMDTIF.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Email Field */}
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="email" className="text-[#1F3A4D] text-[13px] leading-5 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama.lengkap@student.ub.ac.id"
                  className="w-full h-[52px] px-4 bg-[#FFFDF7] border border-[#CFCFBD] rounded-lg text-sm text-[#1F3A4D] placeholder:text-[#59696E] focus:outline-none focus:border-[#2F5470] focus:ring-1 focus:ring-[#2F5470]"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="password" className="text-[#1F3A4D] text-[13px] leading-5 font-medium">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi Anda"
                    className="w-full h-[52px] px-4 pr-24 bg-[#FFFDF7] border border-[#CFCFBD] rounded-lg text-sm text-[#1F3A4D] placeholder:text-[#59696E] focus:outline-none focus:border-[#2F5470] focus:ring-1 focus:ring-[#2F5470]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2F5470] text-xs leading-[22px] font-medium hover:underline"
                  >
                    {showPassword ? "Sembunyikan" : "Tampilkan"}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border border-[#59696E] rounded accent-[#2F5470] cursor-pointer"
                  />
                  <span className="text-[#59696E] text-[13px] leading-[22px]">
                    Ingat saya
                  </span>
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-[#2F5470] text-[13px] leading-[22px] font-semibold hover:underline"
                >
                  Lupa kata sandi?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[52px] bg-[#2F5470] hover:bg-[#264159] text-[#FFF4D6] text-[15px] leading-[22px] font-bold rounded-lg flex items-center justify-center gap-2 transition-colors font-[family-name:var(--font-space-grotesk)] group"
              >
                Masuk
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>

              {/* Help Text */}
              <div className="text-center pt-4">
                <p className="text-[#59696E] text-xs leading-[21px] mb-1">
                  Tidak bisa masuk atau lupa kredensial?
                </p>
                <Link 
                  href="mailto:hmdtif@ub.ac.id" 
                  className="text-[#2F5470] text-[13px] leading-[22px] font-semibold hover:underline"
                >
                  Hubungi admin HMDTIF
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center">
          <p className="text-[#59696E] text-[11px] leading-[18px]">
            © 2026 HMDTIF FILKOM UB — Kabinet Bahtera Gatra. Made with ♥ by Departemen PIT.
          </p>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

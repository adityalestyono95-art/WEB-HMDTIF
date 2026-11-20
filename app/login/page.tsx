'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react'

export default function Page() {
  const router = useRouter()

 
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

  return (
    <div className="container-login grid min-h-screen grid-cols-1 md:grid-cols-2">

      {/* Panel kiri, hanya tampil di tablet ke atas */}
      <div className="login-box hidden flex-col justify-between bg-gradient-to-b from-[#1e4d73] to-[#436a87] px-10 py-10 md:flex lg:px-14">
        <div>
          <h3 className="text-xl font-bold tracking-wider text-[#FFF4D6]">HMDTIF</h3>
          <p className="mt-1 text-[10px] font-semibold tracking-widest text-yellow-400">BAHTERA GATRA 2026</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/logo-hmdtif.png" alt="Logo HMDTIF" width={160} height={160} />
        </div>

        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#FFF4D6] lg:text-5xl">Satu bahtera.</h2>
          <h2 className="text-4xl font-bold leading-tight text-[#FFF4D6] lg:text-5xl">Tumbuh bersama.</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
            Ruang untuk terhubung, berkolaborasi, dan bertumbuh bersama keluarga Teknik Informatika.
          </p>
          <hr className="mt-8 w-12 border-t-2 border-yellow-300" />
          <p className="mt-4 text-sm font-bold text-[#FFF4D6]">Tumbuh Bersama, Satukan Gatra!</p>
          <p className="mt-10 text-[11px] leading-relaxed text-white/70">Himpunan Mahasiswa Departemen Teknik Informatika</p>
          <p className="text-[11px] leading-relaxed text-white/70">FILKOM Universitas Brawijaya</p>
        </div>
      </div>

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
      </div>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Page() {
  const router = useRouter()

 
  const [email, setEmail] = useState("")
  const [sandi, setSandi] = useState("")
  
  const [lihat, setLihat] = useState(false)
 
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const kirim = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: sandi }),
      })

      const data = await res.json()

      if (!res.ok) {
       
        setError(data.message || "Login gagal, coba lagi")
        setLoading(false)
        return
      }

    
      localStorage.setItem("token", data.token)
      router.push("/")
    } catch (err) {
      
      setError("Tidak bisa terhubung ke server")
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
        <Link href={"/"} className="flex items-center gap-2 text-xs font-semibold text-[#2d5373] hover:text-[#3a8fa3] transition-colors duration-300">
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

          <form onSubmit={kirim} className="mt-8">
            <label className="text-xs font-semibold text-[#1e3a5f]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan alamat email"
              required
              className="mt-2 w-full rounded-lg border border-black/10 bg-[#FFFDF6] px-4 py-3.5 text-sm text-[#1e3a5f] outline-none placeholder:text-[#2d5373]/50 focus:border-[#3a8fa3]"
            />

            <label className="mt-5 block text-xs font-semibold text-[#1e3a5f]">Kata sandi</label>
            <div className="mt-2 flex items-center rounded-lg border border-black/10 bg-[#FFFDF6] px-4 focus-within:border-[#3a8fa3]">
              <input
                type={lihat ? "text" : "password"}
                value={sandi}
                onChange={(e) => setSandi(e.target.value)}
                placeholder="Masukkan kata sandi"
                required
                className="w-full bg-transparent py-3.5 text-sm text-[#1e3a5f] outline-none placeholder:text-[#2d5373]/50"
              />
              <button
                type="button"
                onClick={() => setLihat(!lihat)}
                className="text-xs font-semibold text-[#2d5373] hover:text-[#3a8fa3]"
              >
                {lihat ? "Sembunyi" : "Lihat"}
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#2d5373]">
                <input type="checkbox" className="h-4 w-4" />
                Ingat saya
              </label>
              <Link href={""} className="font-bold text-[#1e3a5f] hover:text-[#3a8fa3]">Lupa kata sandi?</Link>
            </div>

            {error && <p className="mt-4 text-xs font-semibold text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-between rounded-lg bg-[#2d5373] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#1e3a5f] transition-colors duration-300 disabled:opacity-60"
            >
              <span className="flex-1 text-center">{loading ? "Memproses..." : "Masuk"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-8 text-center text-[11px] text-[#2d5373]/80">Belum memiliki akun atau mengalami kendala?</p>
          <p className="mt-2 text-center">
            <Link href={""} className="text-xs font-bold text-[#1e3a5f] hover:text-[#3a8fa3]">Hubungi admin HMDTIF</Link>
          </p>
        </div>

        <p className="text-center text-[11px] text-[#2d5373]/70">© 2026 HMDTIF FILKOM UB · Bahtera Gatra</p>
      </div>
    </div>
  )
}
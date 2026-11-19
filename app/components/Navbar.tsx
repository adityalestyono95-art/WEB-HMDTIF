'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  
  const terang = pathname.startsWith("/news") || pathname.startsWith("/cabinet")

  
  const warnaHeader = terang ? "bg-[#FFFBF0]" : "bg-[#1e4d73]"
  const warnaLogo = terang ? "border-transparent bg-[#2d7a94]" : "border-white/30 bg-white/15 backdrop-blur-md"
  const warnaMenu = terang ? "border-black/5 bg-[#FFF4D6]" : "border-white/30 bg-white/15 backdrop-blur-md"
  const warnaTombol = terang ? "border-black/10 bg-[#FFF4D6] text-[#2d5373]" : "border-white/30 bg-white/15 text-white"

  
  const aktif = terang
    ? "pb-1 border-b-2 border-yellow-400 text-[#2d5373] font-semibold transition-colors duration-300 ease-in-out"
    : "pb-1 border-b-2 border-yellow-400 text-white transition-colors duration-300 ease-in-out"
  const biasa = terang
    ? "pb-1 border-b-2 border-transparent text-[#2d5373]/80 hover:border-yellow-400 hover:text-[#2d5373] transition-colors duration-300 ease-in-out"
    : "pb-1 border-b-2 border-transparent hover:border-yellow-400 hover:text-white transition-colors duration-300 ease-in-out"

  return (
    <header className={`px-4 py-4 md:px-8 md:py-5 ${warnaHeader}`}>
        <div className="container flex flex-wrap items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className={`navbar-box justify-self-start flex items-center gap-3 rounded-full border px-4 py-2 md:px-5 md:py-2.5 shadow-lg ${warnaLogo}`}>
            <Image src={"/images/logo-hmdtif.png"} width={30} height={30} alt='Logo hmdtif'></Image>
            <div className="kiri leading-tight">
              <h3 className="text-sm font-bold tracking-wider text-white">HMDTIF</h3>
              <p className="text-[9px] tracking-widest text-yellow-400">BAHTERA GATRA</p>
            </div>
          </div>


          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden flex h-10 w-10 items-center justify-center rounded-full border ${warnaTombol}`}
            aria-label="Buka menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className={`${open ? 'block' : 'hidden'} navbar-box mt-4 w-full rounded-2xl border px-6 py-4 shadow-lg md:mt-0 md:block md:w-auto md:px-8 md:py-3 ${warnaMenu}`}>
            <ul className={`flex flex-col gap-4 text-xs tracking-widest md:flex-row md:gap-8 ${terang ? "text-[#2d5373]" : "text-white/70"}`}>
              <li>
                <Link href={"/"} onClick={() => setOpen(false)} className={pathname === "/" ? aktif : biasa}>HOME</Link>
              </li>
              <li>
                <Link href={"/news"} onClick={() => setOpen(false)} className={pathname.startsWith("/news") ? aktif : biasa}>NEWS</Link>
              </li>
              <li>
                <Link href={"/about"} onClick={() => setOpen(false)} className={pathname.startsWith("/about") ? aktif : biasa}>ABOUT</Link>
              </li>
              <li>
                <Link href={"/cabinet"} onClick={() => setOpen(false)} className={pathname.startsWith("/cabinet") ? aktif : biasa}>CABINET</Link>
              </li>

              <li className="md:hidden">
                <Link href={"/login"} className="inline-block rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2 font-bold tracking-wider text-[#1e3a5f]">LOGIN</Link>
              </li>
            </ul>
          </div>


          <div className="nabar-box hidden md:block justify-self-end rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2 shadow-md">
              <Link href={"/login"} className="text-xs font-bold tracking-wider text-[#1e3a5f] hover:opacity-75">LOGIN</Link>
          </div>
        </div>
    </header>
  )
}
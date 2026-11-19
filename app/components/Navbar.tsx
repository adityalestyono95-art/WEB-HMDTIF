'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  
  const [open, setOpen] = useState(false)

  return (
    <header className='px-4 py-4 md:px-8 md:py-5 bg-[#1e4d73]'>
        <div className="container flex flex-wrap items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="navbar-box justify-self-start flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-4 py-2 md:px-5 md:py-2.5 shadow-lg backdrop-blur-md">
            <Image src={"/images/logo-hmdtif.png"} width={30} height={30} alt='Logo hmdtif'></Image>
            <div className="kiri leading-tight">
              <h3 className="text-sm font-bold tracking-wider text-white">HMDTIF</h3>
              <p className="text-[9px] tracking-widest text-yellow-400">BAHTERA GATRA</p>
            </div>
          </div>

          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white"
            aria-label="Buka menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className={`${open ? 'block' : 'hidden'} navbar-box mt-4 w-full rounded-2xl border border-white/30 bg-white/15 px-6 py-4 shadow-lg backdrop-blur-md md:mt-0 md:block md:w-auto md:px-8 md:py-3`}>
            <ul className='flex flex-col gap-4 text-xs tracking-widest text-white/70 md:flex-row md:gap-8'>
              <li>
                <Link href={"/"} onClick={() => setOpen(false)} className="border-b-2 border-yellow-400 pb-1 text-white hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out">HOME</Link>
              </li>
              <li>
                <Link href={"/news"} onClick={() => setOpen(false)} className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out '>NEWS</Link>
              </li>
              <li>
                <Link href={"/about"} onClick={() => setOpen(false)} className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out ' >ABOUT</Link>
              </li>
              <li>
                <Link href={"/cabinet"} onClick={() => setOpen(false)} className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out '>CABINET</Link>
              </li>
              
              <li className="md:hidden">
                <Link href={""} className="inline-block rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2 font-bold tracking-wider text-[#1e3a5f]">LOGIN</Link>
              </li>
            </ul>
          </div>

    
          <div className="nabar-box hidden md:block justify-self-end rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2 shadow-md">
              <Link href={""} className="text-xs font-bold tracking-wider text-[#1e3a5f] hover:opacity-75">LOGIN</Link>
          </div>
        </div>
    </header>
  )
}
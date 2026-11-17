import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='px-8 py-5 bg-[#1e4d73]'>
        <div className="container grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="navbar-box justify-self-start flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 shadow-lg backdrop-blur-md">
            <Image src={"/images/logo-hmdtif.png"} width={30} height={30} alt='Logo hmdtif'></Image>
            <div className="kiri leading-tight">
              <h3 className="text-sm font-bold tracking-wider text-white">HMDTIF</h3>
              <p className="text-[9px] tracking-widest text-yellow-400">BAHTERA GATRA</p>
            </div>
          </div>
          <div className="navbar-box rounded-2xl border border-white/30 bg-white/15 px-8 py-3 shadow-lg backdrop-blur-md">
            <ul className='flex gap-8 text-xs tracking-widest text-white/70'>
              <li>
                <Link href={"/"} className="border-b-2 border-yellow-400 pb-1 text-white hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out">HOME</Link>
              </li>
              <li>
                <Link href={"/"} className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out '>NEWS</Link>
              </li>
              <li>
                <Link href={"/"}className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out ' >ABOUT</Link>
              </li>
              <li>
                <Link href={"/"} className='hover:text-[#FFF4D6] transition-colors duration-300 ease-in-out '>CABINET</Link>
              </li>
            </ul>
          </div>
          <div className="nabar-box justify-self-end rounded-lg border border-yellow-400/60 bg-[#FFF4D6] px-5 py-2 shadow-md">
              <Link href={""} className="text-xs font-bold tracking-wider text-[#1e3a5f] hover:opacity-75">LOGIN</Link>
          </div>
        </div>
    </header>
  )
}
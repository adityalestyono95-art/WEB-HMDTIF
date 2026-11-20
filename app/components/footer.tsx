'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()

 
  if (pathname === "/login") return null

  return (
    <footer className='w-full bg-[#1e4d73] text-white px-6 py-10 md:px-10'>
      <div className="container-footer grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:justify-between">
        <div className="footer-box max-w-sm sm:col-span-2 lg:col-span-1">
          <div className="kiri flex items-center gap-3">
            <Image src={"/images/logo-hmdtif.png"} width={50} height={50} alt='logo hmdtif'></Image>
            <div className="leading-tight">
              <h3 className="text-lg font-bold tracking-wider">HMDTIF FILKOM UB</h3>
              <p className="text-[10px] tracking-widest text-yellow-400">KABINET BAHTERA GATRA 2026</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/80">Himpunan Mahasiswa Departement Teknik Informatika,</p>
          <p className="text-xs leading-relaxed text-white/80">Fakultas Ilmu Komputer, Universitas Brawijaya.</p>

        </div>

        <div className="footer-box">
            <h3 className="mb-4 text-xs font-bold tracking-widest text-yellow-400">LINKS</h3>
            <ul className="space-y-0 text-xs text-white/80">
              <li>
                <Link href={"/"} className="-mx-2 inline-flex min-h-11 min-w-11 items-center px-2 hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link href={"/news"} className="-mx-2 inline-flex min-h-11 min-w-11 items-center px-2 hover:text-yellow-400">News</Link>
              </li>
              <li>
                <Link href={"/#about"} className="-mx-2 inline-flex min-h-11 min-w-11 items-center px-2 hover:text-yellow-400">About</Link>
              </li>
              <li>
                <Link href={"/cabinet"} className="-mx-2 inline-flex min-h-11 min-w-11 items-center px-2 hover:text-yellow-400">Cabinet</Link>
              </li>
            </ul>
        </div>

        <div className="footer-box sm:col-span-2 lg:col-span-1 lg:max-w-[220px]">
           <h3 className="mb-4 text-xs font-bold tracking-widest text-yellow-400">ADDRESS</h3>
           <div className="flex gap-2 text-xs leading-relaxed text-white/80">
             <MapPin size={14} className="mt-0.5 shrink-0" />
             <p>Gedung Kreativitas Mahasiswa, Fakultas Ilmu Komputer Universitas Brawijaya, Jl. Veteran No. 8, Lowokwaru, Malang</p>
           </div>

           <h3 className="mb-3 mt-6 text-xs font-bold tracking-widest text-yellow-400">CONTACT</h3>
           <div className="flex items-center gap-2 text-xs text-white/80">
             <Mail size={14} />
             <p>hmdtif@ub.ac.id</p>
           </div>
        </div>
      </div>

      <hr className="my-8 border-t border-white/15" />

      <p className='text-center text-[11px] leading-relaxed text-yellow-400 md:text-xs'>Made with <span aria-hidden="true" className="text-red-400">♥</span> by Departemen PIT (Pengembangan Informasi dan Teknologi), HMDTIF 2026</p>

    </footer>
  )
}
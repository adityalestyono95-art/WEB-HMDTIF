import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='bg-[#060E1A] pt-3 pb-3 border-b border-white/10'>
        <div className="container-navbar flex items-center mx-10 border-amber-50" >

            
            <div className="navbar-box w-12 h-12 flex items-center justify-center border border-[#FFD700] rounded-xl">
                <Image
                    src="/images/logo-hmdtif.png"
                    width={34}
                    height={34}
                    alt='logo Bahtera Gatra'
                />
            </div>

            
            <div className="navbar-box whitespace-nowrap ml-3">
                <h3 className='font-semibold text-base'>HMDTIF FILKOM UB</h3>
                <p className='text-[#FFD700] text-xs'>Kabinet Bahter Gatra 2026</p>
            </div>

            
            <ul className='ml-30 flex gap-12 text-sm'>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>Home</Link>
                </li>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>Welcoming</Link>
                </li>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>About</Link>
                </li>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>Departement</Link>
                </li>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>Events</Link>
                </li>
                <li>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>News</Link>
                </li>
                <li className='ml-90'>
                    <Link href={""} className='hover:text-[#FFD700] transition-all duration-300 ease-in-out'>Login</Link>
                </li>
            </ul>

        </div>
    </header>
  )
}
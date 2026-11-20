'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

// Scroll halus untuk seluruh halaman. Dijalankan sekali di root layout.
// Dimatikan saat pengguna meminta gerak minimal, karena animasi scroll
// adalah salah satu pemicu mual bagi sebagian orang.
export default function SmoothScroll() {
  useEffect(() => {
    const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (kurangiGerak.matches) return

    const lenis = new Lenis({
      duration: 0.9,
      // Anchors aktif supaya tautan /#about tetap mendarat di seksi tujuan.
      anchors: true,
    })

    let frame = 0
    const loop = (waktu: number) => {
      lenis.raf(waktu)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}

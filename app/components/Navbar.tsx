"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

import BahteraGatraLogo from "./bahtera/Logo";

const SG = "var(--font-space-grotesk), sans-serif";

const MENU = [
  { href: "/", label: "HOME" },
  { href: "/news", label: "NEWS" },
  { href: "/about", label: "ABOUT" },
  { href: "/cabinet", label: "CABINET" },
];

// Navbar pill melayang: transparan di atas hero, berubah setelah halaman
// di-scroll 340px. Bentuknya dari prototipe desain (/tmp/app.jsx).
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [masuk, setMasuk] = useState<boolean | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cookie httpOnly, jadi status login hanya diketahui setelah panggil API.
  useEffect(() => {
    let batal = false;
    fetch("/api/me")
      .then((r) => { if (!batal) setMasuk(r.ok); })
      .catch(() => { if (!batal) setMasuk(false); });
    return () => { batal = true; };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const keluar = async () => {
    await fetch("/api/logout", { method: "POST" });
    setMasuk(false);
    setOpen(false);
    router.push("/");
    router.refresh();
  };

  const aktif = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Halaman login punya layout sendiri tanpa navbar.
  if (pathname === "/login") return null;

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-4 z-50 px-4 sm:px-12">
      <div className="mx-auto flex h-[64px] max-w-[1320px] items-center justify-between">
        {/* Kiri: merek */}
        <Link
          href="/"
          className={`pointer-events-auto flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-md transition-all ${
            isScrolled
              ? "border-white/30 bg-[#2F5470]/95 text-[#FFF4D6] shadow-md"
              : "border-white/35 bg-white/[0.18] text-[#F2F7FA]"
          }`}
        >
          <BahteraGatraLogo size={32} idSuffix="navbar-logo" />
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-[0.08em] text-[#FFF4D6]" style={{ fontFamily: SG }}>
              HMDTIF
            </span>
            <span
              className="block text-[9.5px] font-medium uppercase tracking-[0.14em] text-[#F6D977]"
              style={{ fontFamily: SG }}
            >
              Bahtera Gatra
            </span>
          </span>
        </Link>

        {/* Tengah: pill glass (desktop) */}
        <nav
          aria-label="Navigasi utama"
          className={`pointer-events-auto hidden items-center gap-1 rounded-full border px-6 py-2.5 backdrop-blur-[14px] transition-all md:flex ${
            isScrolled
              ? "border-[#1F3A4D]/20 bg-[#FFF4D6]/90 text-[#1F3A4D] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              : "border-white/35 bg-white/[0.18] text-[#F2F7FA] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          }`}
        >
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={aktif(item.href) ? "page" : undefined}
              className={`relative px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.08em] transition-colors ${
                aktif(item.href)
                  ? isScrolled
                    ? "font-bold text-[#1F3A4D]"
                    : "font-bold text-[#FFF4D6]"
                  : "opacity-80 hover:opacity-100"
              }`}
              style={{ fontFamily: SG }}
            >
              {item.label}
              {aktif(item.href) && (
                <span aria-hidden="true" className="absolute -bottom-0.5 left-3 right-3 h-[2.5px] rounded-full bg-[#FBC02D]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Kanan: Kontak + auth + hamburger */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          <a
            href="mailto:hmdtif@ub.ac.id"
            className="hidden items-center rounded-[12px] border border-[#FBC02D] bg-[#FFF4D6] px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-[#1F3A4D] shadow-md transition-all hover:bg-[#FBC02D] sm:inline-flex"
            style={{ fontFamily: SG }}
          >
            Kontak
          </a>

          {masuk ? (
            <button
              type="button"
              onClick={keluar}
              className="hidden items-center rounded-[12px] border border-white/35 bg-[#2F5470]/80 px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-[#FFF4D6] backdrop-blur-md transition-all hover:bg-[#164A6E] sm:inline-flex"
              style={{ fontFamily: SG }}
            >
              Keluar
            </button>
          ) : (
            <Link
              href="/login"
              className="hidden items-center rounded-[12px] border border-white/35 bg-white/[0.18] px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-[#FFF4D6] backdrop-blur-md transition-all hover:bg-white/25 sm:inline-flex"
              style={{ fontFamily: SG }}
            >
              Masuk
            </Link>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#2F5470] text-[#FFF4D6] shadow-md md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Panel menu HP */}
      {open && (
        <div
          id="menu-mobile"
          className="pointer-events-auto ml-auto mt-3 max-w-sm rounded-[20px] border border-white/35 bg-[#2F5470]/95 p-5 text-[#F2F7FA] shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col space-y-2">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[13px] font-bold uppercase tracking-[0.08em] ${
                  aktif(item.href) ? "bg-[#FBC02D] text-[#1F3A4D]" : "text-[#FFF4D6] hover:bg-white/10"
                }`}
                style={{ fontFamily: SG }}
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}

            {masuk ? (
              <button
                type="button"
                onClick={keluar}
                className="flex min-h-[44px] w-full items-center justify-between rounded-xl border border-[#FBC02D] bg-[#FFF4D6] px-4 py-2.5 text-left text-[13px] font-bold uppercase tracking-[0.08em] text-[#1F3A4D]"
                style={{ fontFamily: SG }}
              >
                <span>Keluar</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-between rounded-xl border border-[#FBC02D] bg-[#FFF4D6] px-4 py-2.5 text-left text-[13px] font-bold uppercase tracking-[0.08em] text-[#1F3A4D]"
                style={{ fontFamily: SG }}
              >
                <span>Masuk</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Portfolyo", href: "#portfolyo" },
  { label: "Bize Ulaşın", href: "#iletisim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setIsClosing(false);
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      window.setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 180);
      return;
    }

    setMenuOpen(true);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#6d4b2f]/10 bg-[#f5ebdb]/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#anasayfa" className="relative block h-9 w-12" aria-label="MAF Mühendislik ana sayfa">
          <span className="maf-symbol block h-full w-full" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="rounded-full border border-[#6d4b2f]/20 p-2 text-[#4f6b43] sm:hidden"
          onClick={handleToggleMenu}
          aria-label="Menü aç"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <div className="hidden items-center gap-4 text-sm text-[#826644] sm:flex sm:gap-6 font-weight-600 font-bold">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition click:scale-105 hover:text-[#4f6b43]">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {menuOpen || isClosing ? (
        <>
          <div
            onClick={handleToggleMenu}
            className={`fixed inset-0 z-[55] overflow-hidden bg-[#f5ebdb] transition-all duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
          />

          <div
            className={`nav-mobile-menu fixed inset-0 z-[60] h-dvh w-full overflow-hidden sm:hidden ${
              isClosing
                ? "animate-[fadeOut_0.18s_ease-out_forwards]"
                : "animate-[fadeIn_0.18s_ease-out]"
            }`}
          >
            <div
              className={`relative flex h-full flex-col rounded-none border border-[#6d4b2f]/10 bg-[#f5ebdb] p-6 ${
                isClosing
                  ? "animate-[slideUp_0.18s_ease-out_forwards]"
                  : "animate-[slideDown_0.18s_ease-out]"
              }`}
            >
              <div className="flex items-center justify-between">
                <a
                  href="#anasayfa"
                  className="relative block h-9 w-12"
                  onClick={handleToggleMenu}
                  aria-label="MAF Mühendislik ana sayfa"
                >
                  <span className="maf-symbol block h-full w-full" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className="rounded-full border border-[#6d4b2f]/20 p-2 text-[#4f6b43]"
                  onClick={handleToggleMenu}
                  aria-label="Menüyü kapat"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-6 text-center text-[1.20rem] font-semibold text-[#2f241d]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="w-full rounded-2xl px-4 py-4 text-lg font-semibold transition hover:bg-[#dce8d5] hover:text-[#4f6b43]"
                    onClick={handleToggleMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}

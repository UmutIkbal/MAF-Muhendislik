"use client";

import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import About from "./components/sections/about";
import Portfolio from "./components/sections/references";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5ebdb] text-[#3f2b21]">
      <Navbar />

      <section
        className="page-section relative overflow-hidden  "
        id="anasayfa"
        style={{ backgroundImage: "url('/stokfotro.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
       <div className="absolute inset-[-2px] bg-gradient-to-b from-black/70 via-black/90 to-black/90" />
        <div className="absolute left-[10%] top-[-10%] h-56 w-56 rounded-full bg-[#4f6b43]/10 blur-3xl" />
        <div className="absolute  bottom-[-8%] right-[-10%] h-64 w-64 rounded-full bg-[#4f6b43]/8 blur-3xl" />
        <Hero />
      </section>

      <section className="page-section relative bg-[#0E120D] text-[#f5ebdb]" id="hizmetler">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#4F6B43]/20 blur-[100px]" />
          <div className="absolute -right-28 bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-[#4F6B43]/18 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,#4F6B432B,transparent_58%)]" />
        </div>
        <div className="relative z-10 w-full">
          <Services />
        </div>
      </section>

      <section className="page-section relative overflow-hidden bg-[#eee2cc] text-[#2f241d]" id="hakkimizda">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_-10%_-15%,rgba(79,107,67,0.48)_0%,rgba(79,107,67,0.25)_42%,transparent_72%),radial-gradient(ellipse_at_110%_115%,rgba(79,107,67,0.46)_0%,rgba(79,107,67,0.22)_43%,transparent_74%)]" />
          <div className="absolute -left-28 -top-28 h-[28rem] w-[28rem] rounded-full bg-[#4F6B43]/24 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#4F6B43]/22 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(109,75,47,0.05)_55%,transparent_85%)]" />
        </div>
        <div className="relative z-10 w-full">
          <About />
        </div>
      </section>

      <section className="page-section relative overflow-hidden bg-[#0E120D] text-[#f5ebdb]" id="portfolyo">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#4F6B43]/25 blur-[110px]" />
          <div className="absolute -right-24 bottom-[-25%] h-96 w-96 rounded-full bg-[#4F6B43]/20 blur-[120px]" />
        </div>
        <div className="relative z-10 flex w-full justify-center">
          <Portfolio />
        </div>
      </section>

      <section className="page-section relative overflow-hidden bg-[#eee2cc] text-[#2f241d]" id="iletisim">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_-10%_-15%,rgba(79,107,67,0.48)_0%,rgba(79,107,67,0.25)_42%,transparent_72%),radial-gradient(ellipse_at_110%_115%,rgba(79,107,67,0.46)_0%,rgba(79,107,67,0.22)_43%,transparent_74%)]" />
          <div className="absolute -left-28 -top-28 h-[28rem] w-[28rem] rounded-full bg-[#4F6B43]/24 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#4F6B43]/22 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(109,75,47,0.05)_55%,transparent_85%)]" />
        </div>
        <div className="relative z-10 flex w-full justify-center">
          <Contact />
        </div>
      </section>

      <footer className="border-t border-[#6d4b2f]/10 bg-[#efe2cb]/70 px-6 py-8 text-sm text-[#5b4333] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MAF Mühendislik. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#anasayfa" className="transition hover:text-[#4f6b43]">
              Ana Sayfa
            </a>
            <a href="#hizmetler" className="transition hover:text-[#4f6b43]">
              Hizmetler
            </a>
            <a href="#iletisim" className="transition hover:text-[#4f6b43]">
              İletişim
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

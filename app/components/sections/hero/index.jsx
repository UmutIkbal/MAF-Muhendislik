"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const labelClass = isVisible ? "mb-4 text-md font-aux uppercase tracking-[0.35em] text-[#4f6b43] opacity-100 animate-heroSlideIn delay-150" : "mb-4 text-md font-aux uppercase tracking-[0.35em] text-[#4f6b43] opacity-0";
  const headingClass = isVisible ? "text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl opacity-100 animate-heroSlideIn delay-300" : "text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl opacity-0";
  const paragraphClass = isVisible ? "mt-6 max-w-xl text-lg leading-8 text-white font-semibold opacity-100 animate-heroSlideIn delay-450" : "mt-6 max-w-xl text-lg leading-8 text-white font-semibold opacity-0";
  const actionsClass = isVisible ? "mt-8 flex flex-wrap gap-4 opacity-100 animate-heroSlideIn delay-600" : "mt-8 flex flex-wrap gap-4 opacity-0";

  return (
    <div ref={heroRef} className="relative w-full max-w-6xl px-4 py-8 sm:px-0 sm:py-10 lg:py-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className={labelClass}>
            MAF Mühendislik
          </p>
          <h1 className={headingClass}>
            Her Detayda <br className="block sm:hidden" /> <span className="text-[#4f6b43] font-extrabold italic drop-shadow-[0_6px_24px_rgba(255,255,255,0.24)]">Estetik</span><br /> Her Yapıda <br className="block sm:hidden" /> <span className="text-[#4f6b43] font-extrabold italic drop-shadow-[0_6px_24px_rgba(255,255,255,0.24)]">Güven</span>
          </h1>
          <p className={paragraphClass}>
            Mühendislik, planlama ve teknik destek alanlarında net bir yol haritası sunuyoruz.
          </p>

          <div className={actionsClass}>
            
            <a href="#iletisim" className="group relative inline-flex overflow-hidden rounded-full p-[1px] shadow-lg shadow-green-950/60 transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span aria-hidden="true" className="absolute inset-[-100%] animate-[spin_4.5s_linear_infinite] bg-[conic-gradient(from_0deg,#B7C96F,#5F643C,#B7C96F,#5F643C,#B7C96F)] motion-reduce:animate-none" />
              <div className="flex justify-between items-center gap-2 relative rounded-full bg-[#4f6b43] px-6 py-4 text-white transition group-hover:bg-[#3f5737] active:scale-95">
                <span>
                  Bize Ulaşın
                </span>
                <span className="pt-1">
                  →
                </span>
              </div>
            </a>

            <a
              href="#hizmetler"
              className="rounded-full border-1 border-[#4f6b43] px-6 py-3  flex items-center font-medium text-white transition active:scale-95  hover:bg-[#4f6b43]/25 "
            >
              Hizmetler
            </a>
           
          </div>
          
        </div>
      </div>
    </div>
  );
}

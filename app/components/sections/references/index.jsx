"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageCardStack from "../../ui/ImageCardStack";
import Link from "next/link";

const portfolioImages = [
  { src: "/stokfotro.jpg", alt: "Modern konut projesi" },
  { src: "/stokfotro.jpg", alt: "İç mekan uygulaması" },
  { src: "/stokfotro.jpg", alt: "Yapı ve dekorasyon projesi" },
];

export default function Portfolio() {

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFanPreviewing, setIsFanPreviewing] = useState(false);

  useEffect(() => {
    if (!aboutRef.current) return;

    let previewTimer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsFanPreviewing(true);
          window.clearTimeout(previewTimer);
          previewTimer = window.setTimeout(() => setIsFanPreviewing(false), 900);
        } else {
          setIsFanPreviewing(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(aboutRef.current);
    return () => {
      window.clearTimeout(previewTimer);
      observer.disconnect();
    };
  }, []);

  const introClass = isVisible ? "opacity-100 animate-heroSlideIn delay-150" : "opacity-0"; 

  return (

    <div ref={aboutRef} className="mx-auto w-full max-w-6xl">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr] lg:gap-20">
        <div className={`${introClass} text-center lg:text-left`}>
          <p className="text-md font-aux font-semibold uppercase tracking-[0.35em] text-[#B7C96F]">
            Portfolyo
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#f5ebdb] sm:text-4xl lg:mx-0 lg:text-5xl">
            Tasarımdan uygulamaya, hayata geçirdiğimiz işler.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-8 text-[#efe2cb] lg:mx-0">
            Her proje; ihtiyaçları, mekanın karakterini ve teknik gereklilikleri bir arada değerlendiren özgün bir çalışma sürecinin sonucudur.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            {['İnşaat', 'Dekorasyon', 'İç Mimarlık'].map((category) => (
              <span key={category} className="font-aux rounded-full border border-[#f5ebdb]/25 bg-[#efe2cb]/10 px-4 py-2 text-sm font-semibold text-[#efe2cb]">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute inset-4 rounded-full bg-[#4f6b43]/40 blur-3xl" />
          <Link
            href="/portfolyo"
            aria-label="Tüm portfolyo çalışmalarını incele"
            className="relative block rounded-3xl transition-transform duration-300 hover:scale-[1.02] active:scale-[.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7C96F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E120D]"
          >
            <ImageCardStack images={portfolioImages} ariaLabel="Portfolyo görselleri" isPreviewing={isFanPreviewing} />
          </Link>

          <div className="mt-15 flex justify-center">
            <span className="p-10 flex flex-col items-center rounded-full border border-[#f5ebdb]/25 bg-[#efe2cb]/10 px-4 py-2 text-sm font-semibold text-[#efe2cb]">
              <span className="leading-none">
                🠕
              </span>
            <span className="leading-none">
                Projelerimizi İncele!
            </span>

  </span>
</div>

        </div>
      </div>
    </div>
  );
}

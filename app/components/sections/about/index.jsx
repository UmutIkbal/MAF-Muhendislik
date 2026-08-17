"use client";

import React, { useEffect, useRef, useState } from "react";

const values = [
  { number: "1", title: "Net iletişim", text: "Her aşamada doğru bilgiyi, anlaşılır bir dille paylaşırız.", delay: "0.3s" },
  { number: "2", title: "Sürekli takip", text: "Planı ve uygulamayı aynı özenle, baştan sona yönetiriz.", delay: "0.3s" },
  { number: "3", title: "Güvenilir çözüm", text: "Estetik kararları teknik gerekliliklerle dengeleriz.", delay: "0.3s" },
];

export default function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const introClass = isVisible ? "opacity-100 animate-heroSlideIn delay-150" : "opacity-0";

  return (
    <div ref={aboutRef} className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col items-center gap-7 text-center sm:gap-8">
        <div className={introClass}>
          <p className="text-md font-aux font-semibold uppercase tracking-[0.35em] text-[#4f6b43]">
            Hakkımızda
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-tight text-[#2f241d] sm:text-3xl lg:text-4xl">
            Sade bir yaklaşım, her ayrıntıda güçlü bir teknik altyapı.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#4b3428] sm:text-lg">
            MAF Mühendislik olarak projelerin doğru planlanması ve doğru sunulması için çalışıyor; detaylara önem veren, bütüncül bir anlayışla ilerliyoruz.
          </p>
          <div className="mx-auto mt-6 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-[#4f6b43] to-transparent" />
        </div>

        <div className="grid w-full max-w-5xl gap-3 sm:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className={`group rounded-[20px] border border-[#6d4b2f]/20 bg-[#efe2cb]/75 p-4 shadow-lg shadow-[#6d4b2f]/5 transition duration-300 hover:-translate-y-1 hover:border-[#4f6b43]/45 hover:bg-[#efe2cb] ${isVisible ? "opacity-100 animate-heroSlideIn" : "opacity-0"}`}
              style={isVisible ? { /* animationDelay: value.delay */ } : undefined}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="font-aux text-sm font-semibold tracking-[0.2em] text-[#4f6b43] font-bold text-xl ">{value.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f241d]">{value.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#4b3428]">{value.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import GlassCard from "../../ui/GlassCard";

export default function Services() {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!servicesRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  const introClass = isVisible ? "opacity-100 animate-heroSlideIn delay-150" : "opacity-0";
  const cardClasses = [
    isVisible ? "opacity-100 animate-heroSlideIn delay-300" : "opacity-0",
    isVisible ? "opacity-100 animate-heroSlideIn delay-450" : "opacity-0",
    isVisible ? "opacity-100 animate-heroSlideIn delay-600" : "opacity-0",
  ];
  const buttonClass = isVisible ? "opacity-100 animate-heroSlideIn delay-600" : "opacity-0";

  return (
    <div className="flex justify-center">

    
    <div ref={servicesRef} className="w-full max-w-6xl">
      <div className={`mx-auto max-w-4xl px-3 text-center sm:px-6 ${introClass}`}>
        <p className="text-md font-aux font-semibold uppercase tracking-[0.35em] text-[#B7C96F]">
          Hizmetlerimiz
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#f5ebdb] sm:text-4xl">
          Yapınızı, yaşam alanınızı ve her detayı birlikte tasarlıyoruz.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#efe2cb] font-medium">
          İnşaat, dekorasyon ve iç mimarlık süreçlerinde ihtiyacınıza uygun, bütüncül çözümler üretiyoruz.
        </p>
      </div>
      <div id="service-cards" className="services-card-scroll mt-10 overflow-x-auto pb-4 scrollbar-none md:mx-0 md:overflow-visible md:px-0 md:pb-0">
        <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3">
          <div className={`min-w-[82%] snap-start sm:min-w-[58%] md:min-w-0 ${cardClasses[0]}`}>
            <GlassCard
              className="h-full"
              image="/stokfotro.jpg"
              imageAlt="İnşaat hizmeti"
              cardHead={<h3 className="text-xl font-semibold text-[#2f241d]">İnşaat</h3>}
              cardBody={<p className="text-sm leading-7 text-[#2f241d] font-medium">Planlama, uygulama ve teknik koordinasyonu titizlikle yöneterek sağlam yapılar inşa ediyoruz.</p>}
            />
          </div>

          <div className={`min-w-[82%] snap-start sm:min-w-[58%] md:min-w-0 ${cardClasses[1]}`}>
            <GlassCard
              className="h-full"
              image="/stokfotro.jpg"
              imageAlt="Dekorasyon hizmeti"
              cardHead={<h3 className="text-xl font-semibold text-[#2f241d]">Dekorasyon</h3>}
              cardBody={<p className="text-sm leading-7 text-[#2f241d] font-medium">Malzeme, renk ve detay seçimlerini bir araya getirerek karakteri olan mekanlar oluşturuyoruz.</p>}
            />
          </div>

          <div className={`min-w-[82%] snap-start sm:min-w-[58%] md:min-w-0 ${cardClasses[2]}`}>
            <GlassCard
              className="h-full"
              image="/stokfotro.jpg"
              imageAlt="İç mimarlık hizmeti"
              cardHead={<h3 className="text-xl font-semibold text-[#2f241d]">İç Mimarlık</h3>}
              cardBody={<p className="text-sm leading-7 text-[#2f241d] font-medium">İşlevsellik ve estetiği dengede tutarak size özel, yaşanabilir iç mekanlar tasarlıyoruz.</p>}
            />
          </div>
          <div aria-hidden="true" className="w-4 shrink-0 md:hidden" />
        </div>
      </div>
      <div className={`mt-4 flex justify-center ${buttonClass}`}>
        <a
          href="/hizmetler"
          className="inline-flex items-center gap-2 rounded-full border border-[#f5ebdb]/35 bg-[#efe2cb]/10 px-6 py-3 text-sm font-semibold text-[#f5ebdb] transition hover:bg-[#f5ebdb]/35 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ebdb]"
        >
          Hizmetleri İncele
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    </div>
  );
}

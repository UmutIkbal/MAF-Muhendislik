"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, projects } from "./projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "Tümü" || project.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="min-h-screen bg-[#eee2cc] text-[#2f241d]">
      <header className="border-b border-[#6d4b2f]/15 bg-[#f5ebdb]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="relative block h-9 w-12 transition hover:opacity-75" aria-label="MAF Mühendislik ana sayfa">
            <span className="maf-symbol block h-full w-full" aria-hidden="true" />
          </Link>
          <Link href="/#portfolyo" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4b3428] transition hover:text-[#4f6b43]">
            <span aria-hidden="true">←</span>
            Ana sayfaya dön
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-[#6d4b2f]/15 bg-[#0E120D] px-5 py-20 text-[#f5ebdb] sm:px-8 sm:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-44 h-[32rem] w-[32rem] rounded-full bg-[#4f6b43]/35 blur-[130px]" />
          <div className="absolute -bottom-52 -right-36 h-[34rem] w-[34rem] rounded-full bg-[#4f6b43]/25 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <p className="text-md font-aux font-semibold uppercase tracking-[0.35em] text-[#B7C96F]">Portfolyo</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Projelerimizi keşfedin.</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#efe2cb]">
            Planlama, uygulama ve tasarım süreçlerinde hayata geçirdiğimiz çalışmaları bir arada inceleyin.
          </p>

          <dl className="font-aux mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-[#f5ebdb]/20 pt-7 sm:gap-8">
            <div>
              <dt className="text-2xl font-semibold text-[#B7C96F] sm:text-3xl">6+</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#efe2cb] sm:text-sm">Proje</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-[#B7C96F] sm:text-3xl">3</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#efe2cb] sm:text-sm">Kategori</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-[#B7C96F] sm:text-3xl">2023</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#efe2cb] sm:text-sm">Başlangıç</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-6 border-b border-[#6d4b2f]/20 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-aux text-sm font-semibold uppercase tracking-[0.25em] text-[#4f6b43]">Çalışmalarımız</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tüm projeler</h2>
          </div>
          <p className="text-sm font-semibold text-[#6d4b2f]">{filteredProjects.length} proje gösteriliyor</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2" aria-label="Portfolyo kategorileri">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6b43] ${
                activeCategory === category
                  ? "bg-[#4f6b43] text-[#f5ebdb] shadow-md shadow-[#4f6b43]/25"
                  : "border border-[#6d4b2f]/25 bg-[#f5ebdb]/60 text-[#4b3428] hover:border-[#4f6b43]/50 hover:text-[#4f6b43]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolyo/${project.slug}`}
              aria-label={`${project.title} projesini incele`}
              className="group overflow-hidden rounded-[26px] border border-[#6d4b2f]/20 bg-[#f5ebdb] shadow-lg shadow-[#6d4b2f]/8 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6b43] focus-visible:ring-offset-4"
            >
              <article>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 30vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f241d]/90 via-[#2f241d]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#f5ebdb]">
                  <div className="font-aux flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#B7C96F]">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#efe2cb]">{project.location}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Projeyi incele <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#6d4b2f]/15 bg-[#f5ebdb] px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-aux text-sm font-semibold uppercase tracking-[0.25em] text-[#4f6b43]">Yeni proje</p>
            <h2 className="mt-3 text-3xl font-semibold">Projenizi birlikte hayata geçirelim.</h2>
          </div>
          <Link href="/#iletisim" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4f6b43] px-6 py-3.5 font-semibold text-[#f5ebdb] transition hover:bg-[#3f5737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6b43] focus-visible:ring-offset-2">
            Bize ulaşın
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

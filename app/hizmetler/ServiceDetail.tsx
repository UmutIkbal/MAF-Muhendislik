import Image from "next/image";
import Link from "next/link";
import type { Service } from "./services-data";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0E120D] px-4 py-4 text-[#f5ebdb] sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#4F6B43]/20 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#4F6B43]/18 blur-[120px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100svh-2rem)] max-w-6xl items-center py-4 sm:min-h-[calc(100svh-3rem)] sm:py-8">
        <div className="w-full rounded-[28px] border border-[#f5ebdb]/20 bg-[#efe2cb]/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="flex items-center justify-between border-b border-[#f5ebdb]/15 pb-5">
            <Link href="/" className="relative block h-9 w-12 transition hover:opacity-75" aria-label="MAF Mühendislik ana sayfa">
              <span className="maf-symbol block h-full w-full" aria-hidden="true" />
            </Link>
            <Link href="/hizmetler" className="text-sm text-[#efe2cb] transition hover:text-[#f5ebdb]">
              ← Hizmetler
            </Link>
          </div>

          <div className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:py-14">
            <div className="relative isolate overflow-hidden rounded-[20px] border border-[#f5ebdb]/10 p-6 shadow-lg shadow-black/15 sm:p-8">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="-z-20 scale-105 object-cover opacity-70 blur-[1px]"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-black/70 via-black/45 to-[#4F6B43]/35 backdrop-blur-[1px]" />
              <div className="relative">
                <p className="font-aux text-sm font-semibold uppercase tracking-[0.35em] text-[#CAC4B4]">{service.title}</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{service.detailTitle}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe2cb] sm:text-xl">{service.summary}</p>
                <Link
                  href="/#iletisim"
                  className="hidden mt-6 items-center gap-2 rounded-full border border-[#f5ebdb]/35 bg-[#efe2cb]/10 px-6 py-3 text-sm font-semibold text-[#f5ebdb] transition hover:bg-[#f5ebdb]/35 active:scale-95"
                >
                  Bize Ulaşın
                  <span aria-hidden="true">→</span>
                </Link>

                <div className="mt-10">
                  <h2 className="text-xl font-semibold sm:text-2xl">MAF Mühendislik Yaklaşımı</h2>
                  <p className="mt-4 max-w-2xl leading-8 text-[#efe2cb]">{service.intro}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#f5ebdb]/20 pt-10 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
              <h2 className="text-xl font-semibold sm:text-2xl">Tasarım Sürecimiz</h2>
              <p className="mt-4 leading-8 text-[#efe2cb]">{service.process}</p>
              <div className="mt-10 flex flex-col items-start gap-3">
                <Link
                  href="/#iletisim"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f5ebdb]/35 bg-[#efe2cb]/10 px-6 py-3 text-sm font-semibold text-[#f5ebdb] transition hover:bg-[#f5ebdb]/35 active:scale-95"
                >
                  Bize Ulaşın
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/portfolyo"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CAC4B4]/45 px-6 py-3 text-sm font-semibold text-[#CAC4B4] transition hover:bg-[#CAC4B4]/15 hover:text-[#f5ebdb] active:scale-95"
                >
                  Portfolyoyu Gör
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

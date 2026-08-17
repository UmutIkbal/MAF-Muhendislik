import Image from "next/image";
import Link from "next/link";
import { services } from "./services-data";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0E120D] px-6 py-8 text-[#f5ebdb] sm:px-8 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#4F6B43]/20 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#4F6B43]/18 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#f5ebdb]/15 pb-6">
          <Link href="/" className="relative block h-9 w-12 transition hover:opacity-75" aria-label="MAF Mühendislik ana sayfa">
            <span className="maf-symbol block h-full w-full" aria-hidden="true" />
          </Link>
          <Link href="/" className="text-sm text-[#efe2cb] transition hover:text-[#f5ebdb]">
            Ana sayfa
          </Link>
        </header>

        <section className="py-16 sm:py-24">
          <p className="font-aux text-sm font-semibold uppercase tracking-[0.35em] text-[#CAC4B4]">Hizmetlerimiz</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">İhtiyacınız olan her aşamada yanınızdayız.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#efe2cb]">
            Tasarımdan uygulamaya, mekanlarınıza teknik doğruluk ve estetik değer katan çözümler sunuyoruz.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${encodeURIComponent(service.slug)}`}
                className="group relative min-h-80 overflow-hidden rounded-[28px] border border-[#f5ebdb]/30 bg-[#efe2cb]/15 p-6 shadow-xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#f5ebdb]/50"
              >
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
                <div className="relative flex h-full flex-col justify-end">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 max-h-0 translate-y-2 overflow-hidden text-sm leading-6 text-[#efe2cb] opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:translate-y-0 group-hover:opacity-100">
                    {service.summary}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[#CAC4B4]">İncele →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

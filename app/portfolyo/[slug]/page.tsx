import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolyo/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | MAF Mühendislik`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps<"/portfolyo/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#eee2cc] text-[#2f241d]">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-[#0E120D]/55 text-[#f5ebdb] backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="relative block h-9 w-12 transition hover:opacity-75" aria-label="MAF Mühendislik ana sayfa">
            <span className="maf-symbol block h-full w-full" aria-hidden="true" />
          </Link>
          <Link href="/portfolyo" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#B7C96F]">
            <span aria-hidden="true">←</span> Tüm projeler
          </Link>
        </nav>
      </header>

      <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-[#0E120D] px-5 pb-14 pt-32 text-[#f5ebdb] sm:px-8 sm:pb-20">
        <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E120D] via-[#0E120D]/45 to-[#0E120D]/35" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-aux text-sm font-semibold uppercase tracking-[0.3em] text-[#B7C96F]">{project.category}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#efe2cb] sm:text-lg">{project.summary}</p>
          </div>
          <dl className="font-aux grid grid-cols-2 gap-x-10 gap-y-5 border-t border-white/20 pt-6 text-sm lg:min-w-72">
            <div><dt className="text-[#B7C96F]">Konum</dt><dd className="mt-1 font-semibold">{project.location}</dd></div>
            <div><dt className="text-[#B7C96F]">Yıl</dt><dd className="mt-1 font-semibold">{project.year}</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <p className="font-aux text-sm font-semibold uppercase tracking-[0.25em] text-[#4f6b43]">Proje hakkında</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Detaylara gösterilen özen, bütünün karakterini belirler.</h2>
          <p className="mt-7 text-base leading-8 text-[#5d4638] sm:text-lg">{project.description}</p>
        </div>
        <aside className="rounded-[26px] border border-[#6d4b2f]/15 bg-[#f5ebdb] p-7 shadow-lg shadow-[#6d4b2f]/5">
          <h2 className="font-aux text-sm font-semibold uppercase tracking-[0.22em] text-[#4f6b43]">Proje kapsamı</h2>
          <ul className="mt-6 divide-y divide-[#6d4b2f]/15">
            {project.scope.map((item, index) => <li key={item} className="flex gap-4 py-4 text-sm font-semibold"><span className="font-aux text-[#4f6b43]">0{index + 1}</span>{item}</li>)}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#6d4b2f]/20 pb-6">
          <div><p className="font-aux text-sm font-semibold uppercase tracking-[0.25em] text-[#4f6b43]">Galeri</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Projeden kareler</h2></div>
          <span className="font-aux hidden text-sm text-[#6d4b2f] sm:block">{project.images.length} fotoğraf</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {project.images.map((image, index) => (
            <figure key={`${image}-${index}`} className={`relative overflow-hidden rounded-[24px] ${index === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"}`}>
              <Image src={image} alt={`${project.title} - proje görseli ${index + 1}`} fill sizes={index === 0 ? "(max-width: 767px) 90vw, 1100px" : "(max-width: 767px) 90vw, 540px"} className="object-cover transition duration-500 hover:scale-[1.02]" />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#0E120D] px-5 py-16 text-[#f5ebdb] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-aux text-sm font-semibold uppercase tracking-[0.25em] text-[#B7C96F]">Bir fikriniz mi var?</p><h2 className="mt-3 text-3xl font-semibold">Sizin projenizi de konuşalım.</h2></div>
          <Link href="/#iletisim" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#B7C96F] px-6 py-3.5 font-semibold text-[#0E120D] transition hover:bg-[#cadb7c]">Bize ulaşın <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}

import React from "react";

const contactDetails = {
  phoneDisplay: "0530 145 44 29",
  phoneHref: "+905301454429",
  email: "info@mafmuhendislik.com",
  address: "Gümüşpala, Galip Sk. No:6, İstanbul İş Merkezi Ofis No:3, 34000 Avcılar/İstanbul",
};

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&output=embed`;

const contactItems = [
  {
    label: "Telefon",
    value: contactDetails.phoneDisplay,
    href: `tel:${contactDetails.phoneHref}`,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 2.8 9 2.25l1.65 4.2-1.8 1.5a15.3 15.3 0 0 0 7.2 7.2l1.5-1.8 4.2 1.65-.55 2.4a3 3 0 0 1-2.95 2.35C10.52 19.75 4.25 13.48 4.25 5.75A3 3 0 0 1 6.6 2.8Z" />,
  },
  {
    label: "E-posta",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: <><rect x="2.75" y="5" width="18.5" height="14" rx="2.5" /><path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" /></>,
  },
];

export default function Contact() {
  return (
    <div className="w-full max-w-6xl">
      <div className="grid items-center gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
        <div>
          <p className="font-aux text-sm font-semibold uppercase tracking-[0.35em] text-[#4f6b43]">Bize Ulaşın</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f241d] sm:text-4xl">Projenizi birlikte hayata geçirelim.</h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#4b3428] sm:text-lg">
            Kısa bir soru ya da detaylı bir proje teklifi için dilediğiniz kanaldan bize ulaşabilirsiniz.
          </p>

          <div className="mt-7 grid gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[20px] border border-[#6d4b2f]/20 bg-[#efe2cb]/75 p-4 shadow-lg shadow-[#6d4b2f]/5 transition duration-300 hover:-translate-y-0.5 hover:border-[#4f6b43]/45 hover:bg-[#efe2cb] active:scale-[.98]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4f6b43] text-[#f5ebdb]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{item.icon}</svg>
                </span>
                <span className="min-w-0">
                  <span className="font-aux block text-xs font-semibold uppercase tracking-[0.22em] text-[#4f6b43]">{item.label}</span>
                  <span className="mt-1 block break-all text-sm font-semibold text-[#2f241d] sm:text-base">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#6d4b2f]/20 bg-[#efe2cb]/75 p-3 shadow-xl shadow-[#6d4b2f]/10">
          <iframe
            title="MAF Mühendislik konumu"
            src={mapUrl}
            className="h-64 w-full rounded-[16px] border-0 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 px-2 pb-2 pt-4 text-[#4b3428] transition hover:text-[#4f6b43]"
          >
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="text-sm font-semibold leading-6 sm:text-base">{contactDetails.address}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

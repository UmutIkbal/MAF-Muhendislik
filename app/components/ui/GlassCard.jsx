import React from "react";
import Image from "next/image";

export default function GlassCard({ cardHead, cardBody, cardFooter, className = "", image, imageAlt = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-[#f5ebdb]/30 bg-[#efe2cb]/15 p-6 shadow-xl shadow-[#3f2b21]/20 backdrop-blur-xl [&_h3]:!text-[#f5ebdb] [&_p]:!text-[#efe2cb] ${className}`.trim()}
    >
      {image ? (
        <>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 82vw, 33vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </>
      ) : null}
      <div className={`relative z-10 ${image ? "flex min-h-56 flex-col justify-end" : ""}`}>
        {cardHead ? <div className={image ? "text-left" : "mb-4 border-b border-[#f5ebdb]/20 pb-4"}>{cardHead}</div> : null}
        {cardBody ? (
          <div className={image ? "max-h-0 translate-y-2 overflow-hidden text-[#efe2cb] opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:max-h-24 group-hover:translate-y-0 group-hover:opacity-100" : "text-[#efe2cb]"}>
            {cardBody}
          </div>
        ) : null}
        {cardFooter ? <div className="mt-6 border-t border-[#f5ebdb]/20 pt-4">{cardFooter}</div> : null}
      </div>
    </div>
  );
}

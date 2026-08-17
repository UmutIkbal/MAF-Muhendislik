import Image from "next/image";

const cardPositions = [
  { resting: "left-2 top-8 rotate-[-9deg]", opened: "-translate-x-6 -translate-y-2 rotate-[-14deg]", hover: "group-hover:-translate-x-6 group-hover:-translate-y-2 group-hover:rotate-[-14deg]" },
  { resting: "left-1/2 top-2 -translate-x-1/2 rotate-[2deg]", opened: "-translate-x-1/2 -translate-y-5 rotate-0", hover: "group-hover:-translate-y-5 group-hover:rotate-0" },
  { resting: "right-2 top-9 rotate-[10deg]", opened: "translate-x-6 -translate-y-2 rotate-[15deg]", hover: "group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-[15deg]" },
];

export default function ImageCardStack({ images = [], ariaLabel = "Görsel kartlar", isPreviewing = false }) {
  return (
    <div className="group relative mx-auto h-64 w-full max-w-sm sm:h-72" aria-label={ariaLabel}>
      {images.slice(0, 3).map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className={`absolute h-[78%] w-[64%] overflow-hidden rounded-2xl border border-[#f5ebdb]/30 bg-[#efe2cb]/10 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl transition-transform duration-500 ease-out ${cardPositions[index].resting} ${cardPositions[index].hover} ${isPreviewing ? cardPositions[index].opened : ""}`}
          style={{ zIndex: index + 1 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[0.8rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 639px) 58vw, 220px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </figure>
      ))}
    </div>
  );
}

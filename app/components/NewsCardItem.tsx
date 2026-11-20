import BahteraGatraLogo from "./bahtera/Logo";
import { CulturalWatermarkBg } from "./bahtera/Ornaments";
import type { ALL_NEWS_ITEMS } from "@/app/lib/home-data";

const SG = "var(--font-space-grotesk), sans-serif";

export type BeritaItem = (typeof ALL_NEWS_ITEMS)[number];

export default function NewsCardItem({
  item,
  onSelect,
}: {
  item: BeritaItem;
  onSelect: (item: BeritaItem) => void;
}) {
  return (
    <article
      onClick={() => onSelect(item)}
      className="group flex w-[280px] shrink-0 cursor-pointer flex-col rounded-[20px] border border-[#1F3A4D]/12 bg-[#FFF4D6] p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBC02D] sm:w-full sm:shrink"
      style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)" }}
    >
      <div
        className={`relative mb-3.5 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br ${item.imgTheme}`}
      >
        <CulturalWatermarkBg variant="dark" />
        <div className="relative z-10 flex flex-col items-center px-3 text-center">
          <BahteraGatraLogo size={32} idSuffix={`news-${item.id}`} />
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#FFF4D6]/85">
            DOKUMENTASI HMDTIF 2026
          </span>
        </div>
        <span
          className="absolute right-2.5 top-2.5 rounded-full border border-white/40 bg-[#1F3A4D]/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#FFF4D6] backdrop-blur-md"
          style={{ fontFamily: SG }}
        >
          {item.category}
        </span>
      </div>

      <span className="mb-1 text-[12px] font-medium leading-[18px] text-[#1F3A4D]/65">{item.date}</span>

      <h3
        className="mb-2 line-clamp-2 text-[16px] font-bold leading-[22px] text-[#1F3A4D] transition-colors group-hover:text-[#2E8FA6]"
        style={{ fontFamily: SG }}
      >
        {item.title}
      </h3>

      <p className="mt-auto line-clamp-3 text-[13px] leading-[20px] text-[#1F3A4D]/75">{item.summary}</p>
    </article>
  );
}

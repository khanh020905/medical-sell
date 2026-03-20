import { motion } from "framer-motion";
import BlurText from './BlurText';

/* ─── Brand Data ─── */
const brands = [
  { name: "KLS Martin", origin: "GERMANY" },
  { name: "PHILIPS", origin: "HEALTHCARE" },
  { name: "JVM", origin: "SOUTH KOREA" },
  { name: "Perfint", origin: "HEALTHCARE" },
  { name: "CHAMMED", origin: "SOUTH KOREA" },
  { name: "SONESTA", origin: "MEDICAL" },
  { name: "SIEMENS", origin: "GERMANY" },
  { name: "GE Healthcare", origin: "USA" },
];

/* ─── Single Brand Item ─── */
function BrandItem({ brand }: { brand: (typeof brands)[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-10">
      <div className="text-center">
        <p className="font-heading font-extrabold text-neutral-800 text-xl lg:text-2xl tracking-wide whitespace-nowrap">
          {brand.name}
        </p>
        <p className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase mt-0.5">
          {brand.origin}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function BrandMarquee() {
  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section className="relative py-14 lg:py-16 bg-neutral-50 overflow-hidden">
      {/* ─── Header ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Đối tác chiến lược
        </p>
        <BlurText
          text="Hợp tác với những thương hiệu hàng đầu thế giới"
          delay={80}
          animateBy="words"
          direction="top"
          className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] leading-[1.15] mb-3"
        />
        <p className="text-neutral-500 text-sm lg:text-base max-w-[550px] mx-auto">
          Đại diện phân phối chính thức các hãng thiết bị y tế uy tín từ Đức, Hà
          Lan, Hàn Quốc
        </p>
      </motion.div>

      {/* ─── Marquee Track ─── */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling row 1 (left) */}
        <div className="flex items-center mb-4 marquee-left">
          <div className="flex items-center animate-marquee-left">
            {allBrands.map((brand, i) => (
              <BrandItem key={`l-${i}`} brand={brand} />
            ))}
          </div>
          <div className="flex items-center animate-marquee-left" aria-hidden>
            {allBrands.map((brand, i) => (
              <BrandItem key={`l2-${i}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Scrolling row 2 (right, reverse) */}
        <div className="flex items-center marquee-right">
          <div className="flex items-center animate-marquee-right">
            {allBrands.map((brand, i) => (
              <BrandItem key={`r-${i}`} brand={brand} />
            ))}
          </div>
          <div className="flex items-center animate-marquee-right" aria-hidden>
            {allBrands.map((brand, i) => (
              <BrandItem key={`r2-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

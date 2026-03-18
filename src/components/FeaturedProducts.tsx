import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Product Data ─── */
const products = [
  {
    image: "/images/product-robot-surgery.png",
    brand: "PERFINT HEALTHCARE",
    name: "MAXIO® III",
    description:
      "Hệ thống robot can thiệp dẫn đường CT/PET-CT với công nghệ InstaReg™, cánh tay 5 trục độ chính xác cao.",
    tag: "Bán chạy",
  },
  {
    image: "/images/product-surgical-table.png",
    brand: "SONESTA",
    name: "SONESTA 6210",
    description:
      "Bàn phẫu thuật cao cấp 3 motor với khả năng điều chỉnh đa chiều, chuyên dụng cho chỉnh hình và thần kinh.",
    tag: "Mới",
  },
  {
    image: "/images/product-ent-workstation.png",
    brand: "CHAMMED",
    name: "CHAMMED CU-5000",
    description:
      "Trạm khám tai mũi họng tích hợp đa chức năng: camera, đèn chiều, hệ thống hút, nguồn sáng LED hiện đại.",
    tag: null,
  },
  {
    image: "/images/product-surgical-tools.png",
    brand: "KLS MARTIN · ĐỨC",
    name: "Dụng cụ phẫu thuật",
    description:
      "Bộ dụng cụ phẫu thuật cao cấp từ Đức: tim mạch, lồng ngực, tiêu hóa, chỉnh hình — tiêu chuẩn châu Âu.",
    tag: null,
  },
  {
    image: "/images/product-pharmacy-auto.png",
    brand: "JVM · HÀN QUỐC",
    name: "Tự động hóa nhà thuốc",
    description:
      "Hệ thống cấp phát thuốc tự động, quản lý kho dược phẩm thông minh cho bệnh viện và nhà thuốc lớn.",
    tag: "Hot",
  },
  {
    image: "/images/product-xray-digital.png",
    brand: "PHILIPS HEALTHCARE · HÀ LAN",
    name: "Hệ thống X-ray kỹ thuật số",
    description:
      "Hệ thống chụp X-quang kỹ thuật số Philips với chất lượng hình ảnh vượt trội, giảm liều phóng xạ cho bệnh nhân.",
    tag: null,
  },
];

/* ─── Product Card ─── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* Tag badge */}
      {product.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
              product.tag === "Bán chạy"
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : product.tag === "Mới"
                  ? "bg-primary-50 text-primary-700 border border-primary-200"
                  : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {product.tag}
          </span>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-[260px] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
          {product.brand}
        </p>
        {/* Product name */}
        <h3 className="font-heading font-extrabold text-neutral-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        {/* Description */}
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {product.description}
        </p>
        {/* CTA link */}
        <Link
          to="/san-pham"
          className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-bold hover:gap-3 transition-all duration-300"
        >
          Chi tiết
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-primary-300 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function FeaturedProducts() {
  return (
    <section className="relative pt-10 lg:pt-14 pb-10 lg:pb-14 bg-gradient-to-b from-neutral-50 to-white" style={{ overflowX: 'clip' }}>
      {/* Decorative blurs */}
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary-100/30 blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-accent-100/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-5">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-primary-700 text-xs font-bold tracking-wider uppercase">
              Sản phẩm nổi bật
            </span>
          </div>
          <h2 className="font-display font-extrabold text-neutral-900 text-[36px] lg:text-[48px] leading-[1.1] italic mb-4">
            Thiết bị y tế{" "}
            <span className="text-primary-600">công nghệ cao</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-[600px] mx-auto">
            Những giải pháp thiết bị y tế tiên tiến nhất từ các hãng sản xuất
            hàng đầu thế giới
          </p>
        </motion.div>

        {/* ─── Product Grid (Stack Scroll) ─── */}
        <div className="relative mb-14">
          {/* Row 1 — sticks first */}
          <div
            className="sticky z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-6"
            style={{ top: "80px" }}
          >
            {products.slice(0, 3).map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
          {/* Row 2 — scrolls up and stacks over Row 1 */}
          <div
            className="sticky z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            style={{ top: "100px" }}
          >
            {products.slice(3, 6).map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>

        {/* ─── View All CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-primary-600 text-white font-bold text-base shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Xem tất cả sản phẩm
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone } from 'lucide-react'
import BlurText from '../components/BlurText'
import products from '../data/products'

gsap.registerPlugin(ScrollTrigger)

/* ─── Category filter labels ─── */
const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'medical-imaging', label: 'Chẩn đoán hình ảnh' },
  { id: 'surgical', label: 'Phẫu thuật' },
  { id: 'automation', label: 'Tự động hóa' },
  { id: 'ent', label: 'ENT' },
  { id: 'others', label: 'Khác' },
]



/* ─── Product Card ─── */
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1.5">
          {product.brand}
        </p>
        <h3 className="font-heading font-extrabold text-neutral-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {product.shortDesc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-bold hover:gap-3 transition-all duration-300"
          >
            Chi tiết
            <ArrowRight size={14} />
          </Link>
          {product.tag && (
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {product.tag}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-primary-300 group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════ */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  /* ─── GSAP Animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA section
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-white">
      {/* ═══ HERO BANNER ═══ */}
      <div
        ref={heroRef}
        className="relative min-h-[320px] lg:min-h-[380px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/medtech-innovations.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/30" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-accent-400/8 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-wider uppercase">
                Sản phẩm nổi bật
              </span>
            </motion.div>

            <BlurText
              text="Danh mục sản phẩm"
              delay={60}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-white text-[36px] lg:text-[52px] leading-[1.05] mb-5 !justify-start"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary-100/90 text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Thiết bị y tế công nghệ cao từ các hãng sản xuất hàng đầu thế giới
            </motion.p>
          </div>

          {/* Floating stats on right */}
          <div className="hidden lg:flex flex-col gap-4 ml-auto">
            {[
              { value: '500+', label: 'Sản phẩm' },
              { value: '50+', label: 'Đối tác quốc tế' },
              { value: '20+', label: 'Năm kinh nghiệm' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 text-left min-w-[180px]"
              >
                <p className="font-heading font-extrabold text-white text-2xl leading-none">
                  {stat.value}
                </p>
                <p className="text-primary-200 text-xs font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ PRODUCTS SECTION ═══ */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* ─── Category Filter ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* ─── Product Grid ─── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section ref={ctaRef} className="py-14 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center cta-content">
          <BlurText
            text="Cần tư vấn chọn thiết bị phù hợp?"
            delay={80}
            animateBy="words"
            direction="top"
            className="font-heading font-extrabold text-neutral-900 text-[24px] lg:text-[32px] mb-4"
          />
          <p className="text-neutral-600 text-[15px] mb-8 max-w-lg mx-auto">
            Đội ngũ chuyên gia HAMEDCO sẵn sàng phân tích nhu cầu và đề xuất
            giải pháp tối ưu nhất cho cơ sở của bạn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-heading font-bold text-sm rounded-xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Yêu cầu báo giá
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-800 font-heading font-bold text-sm rounded-xl border-2 border-neutral-200 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA BAR ═══ */}
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-heading font-bold text-lg">
              Cần tư vấn chọn thiết bị phù hợp?
            </h3>
            <p className="text-primary-100 text-sm mt-1">
              Đội ngũ chuyên gia MEDITECH sẵn sàng phân tích nhu cầu và đề
              xuất giải pháp tối ưu nhất cho cơ sở của bạn.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 bg-accent-500 text-white font-heading font-bold text-sm rounded-xl hover:bg-accent-600 transition-colors"
            >
              Yêu cầu báo giá
            </Link>
            <a
              href="tel:+84869009486"
              className="px-6 py-3 bg-white/10 text-white font-heading font-bold text-sm rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              086 900 9486
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

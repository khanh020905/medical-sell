import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChevronRight,
  Phone,
  FileText,
  Check,
  Shield,
} from 'lucide-react'
import BlurText from '../components/BlurText'
import products from '../data/products'

gsap.registerPlugin(ScrollTrigger)

const tabs = [
  { id: 'overview', label: 'Tổng quan' },
  { id: 'features', label: 'Tính năng' },
  { id: 'specs', label: 'Thông số kỹ thuật' },
  { id: 'applications', label: 'Ứng dụng lâm sàng' },
]

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [activeTab, setActiveTab] = useState('overview')
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const product = products.find((p) => p.slug === slug)
  const relatedProducts = products
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  useEffect(() => {
    if (!product) return
    const ctx = gsap.context(() => {
      // Product image
      gsap.from('.product-hero-image', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      // Product info items
      gsap.from('.product-info-item', {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: 'power3.out',
      })

      // Tab content
      gsap.from('.tab-content-section', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      // CTA
      gsap.from('.detail-cta', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [product])

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
            Sản phẩm không tìm thấy
          </h1>
          <Link
            to="/products"
            className="text-primary-600 font-semibold hover:underline"
          >
            ← Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* ═══ BREADCRUMB ═══ */}
      <div className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-neutral-500"
          >
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Trang chủ
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/products"
              className="hover:text-primary-600 transition-colors"
            >
              Sản phẩm
            </Link>
            <ChevronRight size={14} />
            <span className="text-neutral-900 font-medium">{product.name}</span>
          </motion.div>
        </div>
      </div>

      {/* ═══ PRODUCT HERO ═══ */}
      <section ref={heroRef} className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="product-hero-image relative bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 p-8 lg:p-12">
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain max-h-[500px]"
                />
              </div>
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-bl-full" />
            </div>

            {/* Info */}
            <div className="lg:sticky lg:top-32">
              <div className="product-info-item">
                <p className="text-neutral-500 text-sm font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary-500 inline-block" />
                  {product.brand}
                </p>
              </div>

              <div className="product-info-item">
                <BlurText
                  text={product.name}
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="font-heading font-extrabold text-neutral-900 text-[32px] lg:text-[42px] leading-[1.1] mb-3 !justify-start"
                />
              </div>

              <div className="product-info-item">
                <p className="text-neutral-600 text-base mb-4">
                  {product.subtitle}
                </p>
              </div>

              {/* Tags + Certifications */}
              <div className="product-info-item flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full border border-primary-100">
                  {product.tag}
                </span>
                <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
                  Đang phân phối
                </span>
                <span className="text-xs text-neutral-500 font-medium ml-1">
                  {product.certifications}
                </span>
              </div>

              {/* Short description */}
              <div className="product-info-item">
                <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 border-l-[3px] border-primary-200 pl-4">
                  {product.shortDesc}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="product-info-item space-y-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent-500 text-white font-heading font-bold text-sm rounded-2xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-accent-500/25"
                >
                  <FileText size={18} />
                  Yêu cầu báo giá
                </Link>
                <a
                  href="tel:+84869009486"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-neutral-800 font-heading font-bold text-sm rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={18} />
                  Gọi tư vấn: 086 900 9486
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TABS SECTION ═══ */}
      <section ref={contentRef} className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="tab-content-section border-b border-neutral-200 mb-10">
            <div className="flex gap-0 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-primary-600'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-500 rounded-t-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-[1fr_380px] gap-12">
                {/* Left - Description */}
                <div>
                  <h2 className="font-heading font-bold text-neutral-900 text-xl mb-6">
                    Hệ thống {product.name.toLowerCase().includes('hệ thống') ? '' : ''}{product.name}
                  </h2>
                  <div className="space-y-4">
                    {product.fullDescription.map((para, i) => (
                      <p
                        key={i}
                        className="text-neutral-600 text-[15px] leading-[1.8]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right - Highlights */}
                <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8 border border-neutral-100 h-fit">
                  <h3 className="font-heading font-bold text-neutral-900 text-lg mb-5 flex items-center gap-2">
                    <Shield size={20} className="text-primary-500" />
                    Điểm nổi bật
                  </h3>
                  <ul className="space-y-3">
                    {product.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-neutral-600 text-sm"
                      >
                        <Check
                          size={16}
                          className="text-primary-500 mt-0.5 shrink-0"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <div
                      key={i}
                      className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                          <Icon size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-neutral-900 text-base mb-1">
                            {f.title}
                          </h4>
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="text-left px-6 py-4 font-heading font-bold text-sm">
                        Thông số
                      </th>
                      <th className="text-left px-6 py-4 font-heading font-bold text-sm">
                        Giá trị
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={`${
                          i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                        } hover:bg-primary-50/50 transition-colors`}
                      >
                        <td className="px-6 py-4 text-neutral-500 text-sm font-medium">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-neutral-900 text-sm font-semibold">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h2 className="font-heading font-bold text-neutral-900 text-xl mb-2">
                  Ứng dụng lâm sàng
                </h2>
                <p className="text-neutral-500 text-sm mb-8 max-w-2xl">
                  {product.name} được ứng dụng rộng rãi trong các cơ sở y tế từ
                  bệnh viện tuyến trung ương đến các phòng khám chuyên khoa.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.applications.map((app, i) => {
                    const Icon = app.icon
                    return (
                      <div
                        key={i}
                        className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center shrink-0 group-hover:bg-accent-100 transition-colors">
                            <Icon size={20} className="text-accent-600" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-neutral-900 text-base mb-1">
                              {app.title}
                            </h4>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                              {app.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══ RELATED PRODUCTS ═══ */}
      <section className="py-14 lg:py-20 bg-neutral-50 related-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BlurText
            text="Sản phẩm liên quan"
            delay={80}
            animateBy="words"
            direction="top"
            className="font-heading font-extrabold text-neutral-900 text-[24px] lg:text-[32px] mb-10 !justify-start"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((rp, i) => (
              <motion.div
                key={rp.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/products/${rp.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400"
                >
                  <div className="h-[220px] bg-neutral-50 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                      {rp.brand}
                    </p>
                    <h3 className="font-heading font-bold text-neutral-900 text-base group-hover:text-primary-600 transition-colors mb-1.5">
                      {rp.name}
                    </h3>
                    <p className="text-neutral-500 text-sm line-clamp-2">
                      {rp.shortDesc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section
        ref={ctaRef}
        className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 py-8"
      >
        <div className="detail-cta max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-heading font-bold text-lg">
              Cần tư vấn chọn thiết bị phù hợp?
            </h3>
            <p className="text-primary-100 text-sm mt-1">
              Đội ngũ chuyên gia HAMEDCO sẵn sàng phân tích nhu cầu và đề
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

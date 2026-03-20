import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, ArrowRight, Check, Phone, FileText } from 'lucide-react'
import articles from '../data/articles'
import BlurText from '../components/BlurText'

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()

  const [activeSection, setActiveSection] = useState('')

  const article = articles.find((a) => a.slug === slug)

  // Scroll spy for TOC
  useEffect(() => {
    if (!article) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )

    article.sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [article])

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 mb-3">
            Bài viết không tồn tại
          </h1>
          <p className="text-neutral-500 mb-6">
            Bài viết bạn tìm kiếm không có hoặc đã bị gỡ bỏ.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Quay lại Tin tức
          </Link>
        </div>
      </div>
    )
  }

  // Get related articles (same category, exclude current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2)

  // Simple markdown bold renderer
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-neutral-800">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="bg-white">
      {/* ═══ HERO ═══ */}
      <div className="bg-neutral-50 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary-600 text-sm font-bold hover:text-primary-700 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Quay lại Tin tức
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-bold text-white bg-primary-600 px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
              {article.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BlurText
              text={article.title}
              delay={40}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[32px] lg:text-[44px] leading-[1.15] mb-6 !justify-start"
            />
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-5 text-neutral-500 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ═══ HERO IMAGE ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-5xl mx-auto px-6 lg:px-8 -mt-4"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[300px] lg:h-[440px] object-cover"
          />
        </div>
      </motion.div>

      {/* ═══ CONTENT + TOC ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-12 lg:gap-16">
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              {article.sections.map((section, si) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: si * 0.05 }}
                  className="mb-10 lg:mb-14 scroll-mt-24"
                >
                  {/* Section title */}
                  <h2 className="font-heading font-extrabold text-neutral-900 text-2xl lg:text-[28px] mb-5 pb-3 border-b-2 border-primary-100">
                    {section.title}
                  </h2>

                  {/* Paragraphs */}
                  {section.content.map((para, pi) => (
                    <p
                      key={pi}
                      className="text-neutral-600 text-[15px] leading-[1.9] mb-4"
                    >
                      {renderText(para)}
                    </p>
                  ))}

                  {/* Highlights */}
                  {section.highlights && section.highlights.length > 0 && (
                    <div className="mt-5 bg-primary-50/60 rounded-2xl p-6 border border-primary-100/50">
                      <ul className="space-y-3">
                        {section.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-3 text-neutral-700 text-[14px] leading-relaxed"
                          >
                            <Check
                              size={16}
                              className="text-primary-500 shrink-0 mt-0.5"
                            />
                            <span>{renderText(h)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Sticky TOC sidebar */}
            <div className="hidden lg:block w-[260px] shrink-0">
              <div className="sticky top-28">
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <p className="font-heading font-bold text-neutral-800 text-sm uppercase tracking-wider mb-4">
                    Mục lục
                  </p>
                  <nav className="space-y-1">
                    {article.sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`block text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-primary-100 text-primary-700 font-bold border-l-3 border-primary-500'
                            : 'text-neutral-500 hover:text-primary-600 hover:bg-primary-50'
                        }`}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLE CTA ═══ */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-2xl p-8 lg:p-10 text-center">
            <h3 className="font-heading font-extrabold text-white text-2xl mb-3">
              Quan tâm đến sản phẩm?
            </h3>
            <p className="text-primary-100 text-sm mb-6 max-w-md mx-auto">
              Liên hệ Meditech để nhận tài liệu kỹ thuật chi tiết và báo giá.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-heading font-bold text-sm rounded-2xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <FileText size={18} />
              Yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ RELATED ARTICLES ═══ */}
      {relatedArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h3 className="font-heading font-extrabold text-neutral-900 text-2xl mb-8 text-center">
              Bài viết liên quan
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((ra, i) => (
                <motion.div
                  key={ra.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/news/${ra.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-400"
                  >
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={ra.image}
                        alt={ra.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-0.5 rounded-full">
                          {ra.category}
                        </span>
                        <span className="text-neutral-400 text-xs flex items-center gap-1">
                          <Calendar size={11} />
                          {ra.date}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-neutral-900 text-base group-hover:text-primary-600 transition-colors line-clamp-2">
                        {ra.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-bold mt-3 group-hover:gap-2 transition-all">
                        Đọc thêm <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ BOTTOM CTA BAR ═══ */}
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-heading font-bold text-lg">
              Cần tư vấn chọn thiết bị phù hợp?
            </h3>
            <p className="text-primary-100 text-sm mt-1">
              Đội ngũ chuyên gia Meditech sẵn sàng phân tích nhu cầu và đề
              xuất giải pháp tối ưu nhất cho cơ sở của bạn.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/quote"
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

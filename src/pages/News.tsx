import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import BlurText from '../components/BlurText'
import articles from '../data/articles'

/* ─── Categories ─── */
const categories = ['Tất cả', 'Tin công ty', 'Kiến thức', 'Ngành y tế']

export default function News() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const filteredArticles =
    activeCategory === 'Tất cả'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="bg-white">
      {/* ═══ HERO BANNER ═══ */}
      <div className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/banner-news.png"
            alt=""
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-accent-700/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/20" />
        </div>

        {/* Decorative */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-wider uppercase">
                Tin tức
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <BlurText
                text="Tin tức & Kiến thức"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-heading font-extrabold text-white text-[40px] lg:text-[56px] leading-[1.05] mb-5 !justify-start"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary-100/90 text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Cập nhật xu hướng thiết bị y tế, kiến thức chuyên ngành và tin tức mới nhất từ HAMEDCO.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══ FILTER + ARTICLES ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Articles grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filteredArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-400"
                >
                  <Link to={`/news/${article.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-neutral-400 text-xs">
                          <Calendar size={12} />
                          {article.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-neutral-900 text-base leading-snug mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read more */}
                      <span className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-bold group-hover:gap-2.5 transition-all duration-300">
                        Đọc thêm
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-lg">Chưa có bài viết nào trong danh mục này.</p>
            </div>
          )}
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
              Đội ngũ chuyên gia HAMEDCO sẵn sàng phân tích nhu cầu và đề
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

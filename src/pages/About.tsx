import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from '../components/BlurText'
import {
  ShieldCheck,
  Heart,
  Zap,
  ArrowRight,
  Phone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ─── Timeline data ─── */
const milestones = [
  {
    year: '2005',
    title: 'Thành lập MEDITECH',
    desc: 'Công ty Cổ phần Vật tư và Thiết bị Y tế được thành lập chính thức vào ngày 05/09/2005.',
  },
  {
    year: '2008',
    title: 'Đối tác KLS Martin Group',
    desc: 'Ký kết hợp đồng đại diện phân phối chính thức dụng cụ phẫu thuật KLS Martin tại Việt Nam.',
  },
  {
    year: '2012',
    title: 'Mở rộng văn phòng TP.HCM',
    desc: 'Thành lập văn phòng đại diện tại Quận 10, TP.HCM để phục vụ khách hàng phía Nam.',
  },
  {
    year: '2016',
    title: 'Đối tác Philips Healthcare',
    desc: 'Trở thành đối tác phân phối thiết bị chẩn đoán hình ảnh Philips, mở rộng danh mục sản phẩm imaging.',
  },
  {
    year: '2020',
    title: 'Tự động hóa dược phẩm',
    desc: 'Hợp tác với JVM (Hàn Quốc) triển khai giải pháp tự động hóa nhà thuốc bệnh viện đầu tiên tại Việt Nam.',
  },
  {
    year: '2024',
    title: '200+ dự án thành công',
    desc: 'Cột mốc triển khai thành công hơn 200 dự án thiết bị y tế quy mô lớn trên toàn quốc.',
  },
]

/* ─── Core values data ─── */
const values = [
  {
    icon: ShieldCheck,
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    title: 'Uy tín',
    desc: 'Uy tín là ưu tiên hàng đầu trong sự phát triển. Chúng tôi xây dựng lòng tin qua chất lượng sản phẩm và dịch vụ vượt trội.',
  },
  {
    icon: Heart,
    color: 'text-accent-500',
    bg: 'bg-accent-50',
    title: 'Trách nhiệm',
    desc: 'Trách nhiệm là yếu tố thiết yếu trong mọi lĩnh vực. Cam kết với khách hàng, đối tác và cộng đồng bằng hành động cụ thể.',
  },
  {
    icon: Zap,
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    title: 'Hiệu quả',
    desc: 'Luôn hướng đến hiệu quả tối ưu trong từng dự án. Giải pháp đúng, triển khai nhanh, vận hành ổn định lâu dài.',
  },
]

/* ─── Counter hook ─── */
function useCounter(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

/* ═══════════════════════════════════════════════════════════ */
export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const [statsInView, setStatsInView] = useState(false)

  const years = useCounter(20, 1200, statsInView)
  const partners = useCounter(50, 1200, statsInView)
  const products = useCounter(500, 1500, statsInView)
  const projects = useCounter(200, 1200, statsInView)

  /* ─── GSAP ScrollTrigger animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      })
      gsap.from('.hero-breadcrumb', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power3.out',
      })

      // Story section
      gsap.from('.story-text', {
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
      gsap.from('.story-image', {
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
      })

      // Vision & Mission cards — each card gets its own trigger
      document.querySelectorAll('.vision-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: 'power3.out',
        })
      })

      // Values cards — each gets its own trigger
      document.querySelectorAll('.value-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        })
      })

      // Timeline items — each milestone has its own scroll-trigger
      document.querySelectorAll('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          x: -50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: 'power3.out',
        })

        // Animate the dot separately with a scale pop
        const dot = item.querySelector('.timeline-dot')
        if (dot) {
          gsap.from(dot, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            scale: 0,
            duration: 0.5,
            delay: 0.2 + i * 0.05,
            ease: 'back.out(2)',
          })
        }

        // Animate the year badge
        const year = item.querySelector('.timeline-year')
        if (year) {
          gsap.from(year, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            x: -20,
            opacity: 0,
            duration: 0.5,
            delay: 0.15 + i * 0.05,
            ease: 'power3.out',
          })
        }
      })

      // Timeline vertical line grows
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.2,
        ease: 'power2.out',
      })

      // Stats section — trigger counter
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        onEnter: () => setStatsInView(true),
      })

      // Stats numbers bounce up
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.7)',
      })

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
      {/* ═══ 1. HERO BANNER ═══ */}
      <div
        ref={heroRef}
        className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/doctor-group-coats.png"
            alt=""
            className="w-full h-full object-cover object-[center_20%]"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-primary-900/20" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-accent-400/8 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex items-center">
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
                Về chúng tôi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-heading font-extrabold text-white text-[44px] lg:text-[60px] leading-[1.05] mb-5 max-w-xl"
            >
              MEDITECH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-primary-100/90 text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Hơn 20 năm đồng hành cùng ngành y tế Việt Nam, kiến tạo giá trị bền vững.
            </motion.p>
          </div>

          {/* Floating stats on right */}
          <div className="hidden lg:flex flex-col gap-4 ml-auto">
            {[
              { value: '20+', label: 'Năm kinh nghiệm' },
              { value: '200+', label: 'Dự án triển khai' },
              { value: '50+', label: 'Đối tác quốc tế' },
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

      {/* ═══ 2. STORY SECTION ═══ */}
      <section ref={storyRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="story-text">
              <p className="text-primary-600 font-heading font-bold text-sm uppercase tracking-widest mb-3">
                Câu chuyện của chúng tôi
              </p>
              <BlurText
                text="Từ khát vọng đến hành động"
                delay={80}
                animateBy="words"
                direction="top"
                className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] leading-tight mb-6 !justify-start"
              />

              <div className="space-y-4 text-neutral-600 text-[15px] leading-relaxed">
                <p>
                  Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội{' '}
                  <strong className="text-neutral-800">(MEDITECH)</strong> được
                  thành lập ngày 05/09/2005 với sứ mệnh mang đến những giải
                  pháp thiết bị y tế tiên tiến nhất cho hệ thống y tế Việt Nam.
                </p>
                <p>
                  Trải qua hơn <strong className="text-neutral-800">20 năm</strong>{' '}
                  phát triển, MEDITECH đã trở thành đối tác chiến lược của hàng
                  chục hãng thiết bị y tế hàng đầu thế giới và đã triển khai
                  thành công hơn <strong className="text-neutral-800">200 dự án</strong>{' '}
                  quy mô lớn tại các bệnh viện và cơ sở y tế trên toàn quốc.
                </p>
                <p>
                  Chúng tôi không chỉ cung cấp thiết bị mà còn mang đến{' '}
                  <strong className="text-neutral-800">giải pháp toàn diện</strong>{' '}
                  — từ tư vấn, triển khai, đào tạo đến bảo trì bảo hành — giúp
                  các cơ sở y tế tối ưu hóa hiệu quả chăm sóc sức khỏe cộng
                  đồng.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="story-image relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/medtech-innovations.png"
                  alt="MEDITECH Innovations"
                  className="w-full h-[340px] lg:h-[420px] object-cover"
                />
              </div>
              {/* Decorative accent corner */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-primary-100 -z-10" />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-accent-100 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. VISION & MISSION ═══ */}
      <section ref={visionRef} className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-heading font-bold text-sm uppercase tracking-widest mb-3">
              Tầm nhìn & Sứ mệnh
            </p>
            <BlurText
              text="Giá trị cốt lõi định hướng mọi hoạt động"
              delay={80}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <div className="vision-card bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <span className="inline-block text-primary-600 font-heading font-bold text-xs uppercase tracking-widest mb-4 bg-primary-50 px-3 py-1.5 rounded-full">
                Tầm nhìn
              </span>
              <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3">
                Đối tác dẫn đầu trong lĩnh vực thiết bị y tế
              </h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Trở thành đối tác hàng đầu cung cấp giải pháp y tế toàn diện và
                hiệu quả, góp phần nâng cao chất lượng khám chữa bệnh tại Việt
                Nam.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-card bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <span className="inline-block text-accent-600 font-heading font-bold text-xs uppercase tracking-widest mb-4 bg-accent-50 px-3 py-1.5 rounded-full">
                Sứ mệnh
              </span>
              <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3">
                Xây dựng môi trường chuyên nghiệp, hiện đại
              </h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Tạo dựng môi trường làm việc chuyên nghiệp, hiện đại và truyền
                cảm hứng, mang đến những giá trị tốt đẹp nhất cho đối tác,
                khách hàng và cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. CORE VALUES ═══ */}
      <section ref={valuesRef} className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="value-card bg-neutral-50 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-neutral-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${v.bg} mb-5`}
                >
                  <v.icon size={28} className={v.color} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-3 ${v.color}`}>
                  {v.title}
                </h3>
                <p className="text-neutral-600 text-[14px] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. TIMELINE ═══ */}
      <section ref={timelineRef} className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-heading font-bold text-sm uppercase tracking-widest mb-3">
              Lịch sử phát triển
            </p>
            <BlurText
              text="Hành trình hơn 20 năm"
              delay={80}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px]"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-[18px] top-2 bottom-2 w-[2px] bg-primary-200 rounded-full" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="timeline-item relative pl-14">
                  {/* Dot */}
                  <div className="timeline-dot absolute left-[10px] top-1.5 w-[18px] h-[18px] rounded-full border-[3px] border-primary-500 bg-white z-10" />

                  <span className="timeline-year text-primary-600 font-heading font-bold text-sm">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-bold text-neutral-900 text-lg mt-0.5">
                    {m.title}
                  </h3>
                  <p className="text-neutral-600 text-[14px] leading-relaxed mt-1">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. STATS COUNTER ═══ */}
      <section
        ref={statsRef}
        className="relative py-14 lg:py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 overflow-hidden"
      >
        {/* Decorative blur */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: years, suffix: '+', label: 'NĂM KINH NGHIỆM' },
              { value: partners, suffix: '+', label: 'ĐỐI TÁC QUỐC TẾ' },
              { value: products, suffix: '+', label: 'SẢN PHẨM' },
              { value: projects, suffix: '+', label: 'DỰ ÁN TRIỂN KHAI' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <p className="font-heading font-extrabold text-white text-[40px] lg:text-[52px] leading-none">
                  {stat.value}
                  <span className="text-accent-400">{stat.suffix}</span>
                </p>
                <p className="text-primary-100 text-xs lg:text-sm font-medium tracking-wider uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. CTA SECTION ═══ */}
      <section ref={ctaRef} className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center cta-content">
          <BlurText
            text="Tìm hiểu giải pháp phù hợp"
            delay={80}
            animateBy="words"
            direction="top"
            className="font-heading font-extrabold text-neutral-900 text-[24px] lg:text-[32px] mb-4"
          />
          <p className="text-neutral-600 text-[15px] mb-8 max-w-lg mx-auto">
            Liên hệ ngay để được đội ngũ chuyên gia tư vấn giải pháp thiết bị y
            tế tối ưu nhất.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 text-white font-heading font-bold text-sm rounded-xl hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Xem sản phẩm
              <ArrowRight size={16} />
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

      {/* ═══ 8. BOTTOM CTA BAR ═══ */}
      <section className="bg-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-heading font-bold text-lg">
              Cần tư vấn chọn thiết bị phù hợp?
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              Đội ngũ chuyên gia MEDITECH sẵn sàng phân tích nhu cầu và đề xuất
              giải pháp tối ưu nhất cho cơ sở của bạn.
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

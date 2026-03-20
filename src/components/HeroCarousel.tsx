import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlurText from './BlurText'

/* ─── Slide Data ─── */
interface Slide {
  doctorImage: string
  imageHeight?: string
  bgTitle: string
  description: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
  cta: { label: string; href: string }
}

const slides: Slide[] = [
  {
    doctorImage: '/images/doctor-group-surgery.png',
    imageHeight: '76vh',
    bgTitle: 'THIẾT BỊ Y TẾ',
    description:
      'Cung cấp giải pháp thiết bị y tế toàn diện từ các hãng hàng đầu thế giới cho hệ thống bệnh viện và cơ sở y tế.',
    stat1: { value: '130k+', label: 'Bệnh viện đối tác' },
    stat2: { value: '872+', label: 'Bác sĩ' },
    cta: { label: 'Yêu cầu tư vấn', href: '/contact' },
  },
  {
    doctorImage: '/images/doctor-3.png',
    imageHeight: '76vh',
    bgTitle: 'CHẨN ĐOÁN',
    description:
      'Hệ thống CT, MRI, X-ray kỹ thuật số với chất lượng hình ảnh vượt trội, tối ưu quy trình chẩn đoán.',
    stat1: { value: '20+', label: 'Năm kinh nghiệm' },
    stat2: { value: '50+', label: 'Đối tác' },
    cta: { label: 'Khám phá sản phẩm', href: '/products' },
  },
  {
    doctorImage: '/images/doctor-group-coats.png',
    imageHeight: '74vh',
    bgTitle: 'GIẢI PHÁP',
    description:
      'Từ tư vấn, triển khai, đào tạo đến bảo trì bảo hành — đồng hành cùng bạn trong mọi giai đoạn.',
    stat1: { value: '500+', label: 'Khách hàng' },
    stat2: { value: '99%', label: 'Hài lòng' },
    cta: { label: 'Xem dịch vụ', href: '/services' },
  },
]

const AUTO_PLAY_INTERVAL = 6000

/* ─── Variants ─── */
const doctorVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.5 },
  },
}


const floatLeft = {
  enter: { opacity: 0, x: -40 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.35 } },
}

const floatRight = {
  enter: { opacity: 0, x: 40 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.35 } },
}

const descVariants = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.2 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

const ctaVariants = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.3 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export default function HeroCarousel() {
  const [[current, _direction], setCurrent] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)

  const paginate = useCallback(
    (newDirection: number) => {
      const next = (current + newDirection + slides.length) % slides.length
      setCurrent([next, newDirection])
    },
    [current]
  )

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isPaused, paginate])

  const slide = slides[current]

  return (
    <section
      className="relative w-full h-[90dvh] lg:h-[calc(100dvh-96px)] overflow-hidden flex flex-col items-center bg-gradient-to-b from-primary-900 to-primary-600"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══ BIG BACKGROUND TITLE ═══ */}
      <div className="absolute top-[18%] lg:top-[12%] w-full flex justify-center pointer-events-none select-none z-0">
        <BlurText
          key={`bgt-${current}`}
          text={slide.bgTitle}
          delay={60}
          animateBy="letters"
          direction="top"
          className="font-heading font-black text-white whitespace-nowrap !flex-nowrap"
          stepDuration={0.25}
          style={{
            fontSize: 'clamp(56px, 11vw, 180px)',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
          animationFrom={{ filter: 'blur(12px)', opacity: 0, y: -30 }}
          animationTo={[
            { filter: 'blur(4px)', opacity: 0.6, y: 5 },
            { filter: 'blur(0px)', opacity: 1, y: 0 },
          ]}
        />
      </div>

      {/* ═══ DOCTOR CUTOUT (CENTER) ═══ */}
      <div className="absolute bottom-0 w-full flex justify-center pointer-events-none z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`doc-${current}`}
            variants={doctorVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
            style={{ height: slide.imageHeight || '700px' }}
          >
            <img
              src={slide.doctorImage}
              alt=""
              className="h-full w-auto object-contain object-bottom"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══ INNER CONTAINER FOR FLOATING ELEMENTS ═══ */}
      <div className="relative w-full max-w-[1400px] h-full flex-grow z-20 pointer-events-none">
        {/* ═══ FLOATING STAT CARD — LEFT ═══ */}
        {/* Pill shape with avatar stack + number + label */}
        <div className="absolute left-4 lg:left-[8%] bottom-[48%] lg:bottom-[33%] pointer-events-auto scale-[0.85] lg:scale-100 origin-bottom-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={`s1-${current}`}
              variants={floatLeft}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-center gap-4 pl-3 pr-6 py-3 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-transparent overflow-hidden">
                  <img
                    src="/images/avatars.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '5% 10%', transform: 'scale(2.2)' }}
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-transparent overflow-hidden">
                  <img
                    src="/images/avatars.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '35% 10%', transform: 'scale(2.2)' }}
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-transparent overflow-hidden">
                  <img
                    src="/images/avatars.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '65% 10%', transform: 'scale(2.2)' }}
                  />
                </div>
              </div>
              {/* Text */}
              <div>
                <p className="text-white font-bold text-xl leading-tight">
                  {slide.stat1.value}
                </p>
                <p className="text-white text-sm" style={{ opacity: 0.85 }}>
                  {slide.stat1.label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ═══ DESCRIPTION TEXT + NAV ARROWS ═══ */}
        {/* Positioned directly under the left stat card */}
        <div className="absolute left-4 lg:left-[8%] bottom-[8%] lg:bottom-[10%] pointer-events-auto max-w-[220px] lg:max-w-[320px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              variants={descVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-white/80 text-[12px] lg:text-[15px] leading-relaxed"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* Navigation arrows below description */}
          <div className="flex items-center gap-3 mt-5">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ═══ FLOATING STAT CARD — RIGHT (Shield shape) ═══ */}
        <div className="absolute right-2 lg:right-[8%] bottom-[30%] lg:bottom-[25%] pointer-events-auto hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={`s2-${current}`}
              variants={floatRight}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative flex flex-col items-center pt-5 pb-7 px-4 w-[160px]"
            >
              {/* Shield SVG background - Transparent with white stroke */}
              <svg
                className="absolute inset-0 w-[120%] h-[110%] -left-[10%] -top-[5%]"
                viewBox="0 0 160 180"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 80,0 C 100,20 130,25 150,30 C 150,80 130,140 80,180 C 30,140 10,80 10,30 C 30,25 60,20 80,0 Z"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Content on top of shield */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Doctor Avatars (Center dominant, overlapping arc effect) */}
                <div className="flex items-center justify-center -space-x-3 mb-2 mt-4">
                  {[
                    { src: '/images/doctor-11.png', size: 'w-7 h-7', z: 'z-10', opacity: 'opacity-90' },
                    { src: '/images/doctor-22.png', size: 'w-9 h-9', z: 'z-20', opacity: 'opacity-100' },
                    { src: '/images/doctor-33.png', size: 'w-12 h-12', z: 'z-30', opacity: 'opacity-100 shadow-md' },
                    { src: '/images/doctor-22.png', size: 'w-9 h-9', z: 'z-20', opacity: 'opacity-100' },
                    { src: '/images/doctor-11.png', size: 'w-7 h-7', z: 'z-10', opacity: 'opacity-90' },
                  ].map((cfg, idx) => (
                    <div
                      key={idx}
                      className={`${cfg.size} ${cfg.z} ${cfg.opacity} rounded-full overflow-hidden border-2 border-white bg-white shrink-0`}
                    >
                      <img
                        src={cfg.src}
                        alt="Doctor"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white font-bold text-[32px] leading-tight">
                  {slide.stat2.value}
                </p>
                <p className="text-white/90 text-[15px] mt-1">
                  {slide.stat2.label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ═══ CTA BUTTON ═══ */}
        {/* Positioned directly under the right stat card */}
        <div className="absolute left-4 lg:left-auto lg:right-[10%] bottom-[8%] lg:bottom-[12%] pointer-events-auto flex w-[130px] justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${current}`}
              variants={ctaVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Link
                to={slide.cta.href}
                className="flex items-center justify-between w-[200px] -ml-5 pl-7 pr-2 py-2 bg-[#2a3044] rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                {/* MediCare ref has "Book Appointment" text + white circle with black arrow */}
                <span className="text-[15px] font-medium leading-none mb-0.5">
                  {slide.cta.label}
                </span>
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-[#2a3044]" />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ═══ BOTTOM CURVE DIVIDER ═══ */}
      <div className="absolute bottom-0 w-full pointer-events-none z-30 leading-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          {/* Perfectly symmetric curve */}
          <path
            d="M0 120V60C480 120 960 120 1440 60V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

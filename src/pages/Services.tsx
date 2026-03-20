import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Settings,
  Truck,
  HeartPulse,
  GraduationCap,
  Phone,
  FileText,
  ClipboardList,
  Search,
  Lightbulb,
  PackageCheck,
  Users,
  Headphones,
  Check,
} from 'lucide-react'
import BlurText from '../components/BlurText'

gsap.registerPlugin(ScrollTrigger)

/* ─── Service Data ─── */
const services = [
  {
    icon: Settings,
    title: 'Tư vấn giải pháp thiết bị y tế',
    description:
      'Đội ngũ kỹ sư và chuyên gia y tế HAMEDCO phân tích nhu cầu chuyên sâu, khảo sát thực tế và đề xuất giải pháp thiết bị tối ưu nhất cho từng chuyên khoa, quy mô và ngân sách. Bao gồm tư vấn quy hoạch phòng kỹ thuật, workflow, và tích hợp hệ thống.',
    bullets: [
      'Khảo sát thực tế & phân tích nhu cầu',
      'Tư vấn quy hoạch không gian phòng kỹ thuật',
      'Lập hồ sơ kỹ thuật chi tiết',
      'Đề xuất giải pháp phù hợp ngân sách',
    ],
  },
  {
    icon: Truck,
    title: 'Triển khai & Lắp đặt',
    description:
      'Lắp đặt chuyên nghiệp đúng tiêu chuẩn nhà sản xuất. Kỹ thuật viên được đào tạo bài bản và có chứng chỉ từ hãng. Bàn giao vận hành đầy đủ, test toàn diện trước khi đưa vào sử dụng.',
    bullets: [
      'Vận chuyển & lắp đặt chuyên nghiệp',
      'Kiểm tra, hiệu chuẩn thiết bị',
      'Bàn giao vận hành đầy đủ',
      'Hỗ trợ đăng ký & hoàn thiện hồ sơ TTBYT',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Bảo trì & Bảo hành',
    description:
      'Chế độ bảo hành chính hãng từ 12-24 tháng. Bảo trì phòng ngừa định kỳ theo tiêu chuẩn nhà sản xuất. Hotline hỗ trợ 24/7, thời gian phản hồi trong vòng 4 giờ làm việc.',
    bullets: [
      'Bảo hành chính hãng 12-24 tháng',
      'Bảo trì phòng ngừa định kỳ (PM)',
      'Sửa chữa nhanh — phản hồi 4h',
      'Cung cấp linh kiện chính hãng',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Đào tạo & Chuyển giao công nghệ',
    description:
      'Chương trình đào tạo bài bản cho đội ngũ y bác sĩ, kỹ thuật viên. Đào tạo tại chỗ và tại trung tâm hãng sản xuất. Cấp chứng nhận hoàn thành khóa học.',
    bullets: [
      'Đào tạo vận hành thiết bị',
      'Đào tạo bảo trì cơ bản',
      'Chương trình training tại hãng',
      'Cấp chứng nhận hoàn thành',
    ],
  },
]

/* ─── Workflow Steps ─── */
const steps = [
  {
    icon: ClipboardList,
    title: 'Tiếp nhận yêu cầu',
    description: 'Lắng nghe nhu cầu, thu thập thông tin chi tiết từ khách hàng.',
  },
  {
    icon: Search,
    title: 'Khảo sát & Phân tích',
    description: 'Khảo sát thực tế, phân tích nhu cầu và đánh giá khả thi.',
  },
  {
    icon: Lightbulb,
    title: 'Đề xuất giải pháp',
    description: 'Lập hồ sơ kỹ thuật, đề xuất gói giải pháp phù hợp nhất.',
  },
  {
    icon: PackageCheck,
    title: 'Triển khai & Lắp đặt',
    description: 'Vận chuyển, lắp đặt, hiệu chuẩn và test toàn diện.',
  },
  {
    icon: Users,
    title: 'Đào tạo & Bàn giao',
    description: 'Đào tạo đội ngũ sử dụng, bàn giao vận hành chính thức.',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ sau bán hàng',
    description: 'Bảo hành, bảo trì định kỳ và hỗ trợ kỹ thuật lâu dài.',
  },
]

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {




      // CTA
      gsap.from('.services-cta', {
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
  }, [])

  return (
    <div className="bg-white">
      {/* ═══ HERO BANNER ═══ */}
      <div
        ref={heroRef}
        className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/banner-services.png"
            alt=""
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-accent-700/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/20" />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-wider uppercase">
                Dịch vụ
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <BlurText
                text="Dịch vụ toàn diện"
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
              Đồng hành cùng bạn từ tư vấn ban đầu cho đến bảo trì dài hạn
            </motion.p>
          </div>

          {/* Floating stats */}
          <div className="hidden lg:flex flex-col gap-4 ml-auto">
            {[
              { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
              { value: '4h', label: 'Phản hồi nhanh' },
              { value: '98%', label: 'Hài lòng' },
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

      {/* ═══ SERVICES GRID ═══ */}
      <section ref={servicesRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-600 text-xs font-bold tracking-wider uppercase mb-3"
            >
              Dịch vụ của chúng tôi
            </motion.p>
            <BlurText
              text="Giải pháp trọn gói cho cơ sở y tế"
              delay={60}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] mb-4 !justify-center"
            />
            <p className="text-neutral-500 text-base max-w-2xl mx-auto">
              Từ tư vấn chuyên sâu đến lắp đặt, đào tạo và bảo trì — chúng tôi cam kết đồng hành trọn vẹn.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-400"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                    <Icon size={26} className="text-primary-600" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-sm leading-[1.8] mb-5">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 text-neutral-600 text-sm"
                      >
                        <Check
                          size={15}
                          className="text-primary-500 shrink-0"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOW PROCESS ═══ */}
      <section ref={processRef} className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-600 text-xs font-bold tracking-wider uppercase mb-3"
            >
              Quy trình
            </motion.p>
            <BlurText
              text="Quy trình làm việc chuyên nghiệp"
              delay={60}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] !justify-center"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute left-[43px] top-0 bottom-0 w-[2px] origin-top hidden md:block bg-primary-300"
            />

            <div className="space-y-2">
              {steps.map((step, i) => {
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                    className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-400 cursor-default"
                  >
                    {/* Step icon with animated ring */}
                    <div className="relative z-10 shrink-0">
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-primary-400/20 scale-100 group-hover:scale-[1.35] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 flex items-center justify-center shadow-sm group-hover:border-primary-400 group-hover:shadow-md group-hover:shadow-primary-200/40 transition-all duration-300"
                      >
                        <StepIcon size={22} className="text-primary-600 group-hover:text-primary-700 transition-colors" />
                      </motion.div>
                      {/* Connecting dot */}
                      {i < steps.length - 1 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.12 + 0.3 }}
                          className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary-400 border-2 border-white shadow-sm"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-1 pb-2">
                      <motion.span
                        className="inline-block text-primary-500 text-xs font-bold tracking-wider uppercase mb-1.5 bg-primary-50 px-2.5 py-0.5 rounded-full group-hover:bg-primary-100 transition-colors"
                      >
                        Bước {i + 1}
                      </motion.span>
                      <h4 className="font-heading font-bold text-neutral-900 text-lg mb-1.5 group-hover:text-primary-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section ref={ctaRef} className="py-16 lg:py-20 bg-white">
        <div className="services-cta max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <BlurText
            text="Cần hỗ trợ dịch vụ?"
            delay={60}
            animateBy="words"
            direction="top"
            className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] mb-4 !justify-center"
          />
          <p className="text-neutral-500 text-base mb-8">
            Liên hệ ngay để được tư vấn và hỗ trợ kỹ thuật nhanh nhất.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-heading font-bold text-sm rounded-2xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-accent-500/25"
            >
              <FileText size={18} />
              Liên hệ ngay
            </Link>
            <a
              href="tel:+84869009486"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-800 font-heading font-bold text-sm rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={18} />
              086 900 9486
            </a>
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

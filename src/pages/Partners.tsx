import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, FileText, Handshake } from 'lucide-react'
import BlurText from '../components/BlurText'

gsap.registerPlugin(ScrollTrigger)

/* ─── Partner Data ─── */
const partners = [
  {
    logoText: 'KLS Martin',
    logoSub: 'GERMANY · SINCE 1923',
    name: 'KLS Martin Group',
    image: '/images/partner-kls-martin.png',
    description:
      'Nhà sản xuất dụng cụ phẫu thuật hàng đầu từ Đức với hơn 100 năm lịch sử. Chuyên cung cấp các dòng sản phẩm cho phẫu thuật tim mạch, lồng ngực, tiêu hóa, chỉnh hình, thần kinh, hàm mặt và phẫu thuật tạo hình. Tất cả sản phẩm đạt tiêu chuẩn CE Mark và được sản xuất tại Đức.',
    tags: ['Phẫu thuật', 'CE Mark', 'Made in Germany'],
  },
  {
    logoText: 'PHILIPS',
    logoSub: 'THE NETHERLANDS',
    name: 'Philips Healthcare',
    image: '/images/partner-philips.png',
    description:
      'Tập đoàn công nghệ y tế đa quốc gia hàng đầu thế giới từ Hà Lan. Cung cấp các giải pháp chẩn đoán hình ảnh tiên tiến bao gồm hệ thống CT, MRI, X-ray, siêu âm, và hệ thống theo dõi bệnh nhân. Được tin dùng tại hơn 100 quốc gia.',
    tags: ['Chẩn đoán hình ảnh', 'FDA', 'Top 4 Global'],
  },
  {
    logoText: 'JVM',
    logoSub: 'SOUTH KOREA',
    name: 'JVM Co., Ltd',
    image: '/images/partner-jvm.png',
    description:
      'Công ty hàng đầu Hàn Quốc trong lĩnh vực tự động hóa dược phẩm. Thiết kế và sản xuất hệ thống cấp phát thuốc tự động, robot quản lý kho dược phẩm cho bệnh viện và nhà thuốc quy mô lớn. Sản phẩm đã triển khai tại hàng nghìn bệnh viện trên thế giới.',
    tags: ['Tự động hóa', 'CE Mark', 'KFDA'],
  },
  {
    logoText: 'Perfint',
    logoSub: 'HEALTHCARE · INDIA',
    name: 'Perfint Healthcare',
    image: '/images/partner-perfint.png',
    description:
      'Nhà sản xuất hàng đầu trong lĩnh vực robot can thiệp dẫn đường hình ảnh. Sản phẩm MAXIO® III là hệ thống robot tiên tiến nhất cho sinh thiết và can thiệp dưới CT, được FDA approved và CE certified.',
    tags: ['Robotics', 'FDA 510(k)', 'CE Mark'],
  },
  {
    logoText: 'CHAMMED',
    logoSub: 'SOUTH KOREA',
    name: 'CHAMMED Co., Ltd',
    image: '/images/partner-chammed.png',
    description:
      'Chuyên gia trong lĩnh vực thiết bị Tai Mũi Họng (ENT) từ Hàn Quốc. Sản phẩm chính là trạm khám TMH tích hợp CU-5000 với camera nội soi, hệ thống hút, nguồn sáng LED và đa dạng dụng cụ chuyên khoa.',
    tags: ['ENT', 'CE Mark'],
  },
  {
    logoText: 'SONESTA',
    logoSub: 'MEDICAL',
    name: 'SONESTA Medical',
    image: '/images/partner-sonesta.png',
    description:
      'Nhà sản xuất bàn phẫu thuật cao cấp với thiết kế motor điện, điều chỉnh đa chiều chính xác. Dòng sản phẩm SONESTA 6210 được thiết kế đặc biệt cho chỉnh hình và tiết niệu, đáp ứng yêu cầu khắt khe nhất của phẫu thuật viên.',
    tags: ['Operating Table', 'CE Mark'],
  },
]

export default function Partners() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-cta', {
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
      <div className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/banner-partners.png"
            alt=""
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-accent-700/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/20" />
        </div>

        {/* Decorative */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />

        {/* Grid pattern */}
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
                Đối tác
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <BlurText
                text="Đối tác chiến lược"
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
              Đại diện phân phối chính thức các hãng thiết bị y tế hàng đầu thế giới
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══ PARTNERS LIST ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-400"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left - Image with logo overlay */}
                  <div className="relative md:w-[260px] lg:w-[300px] shrink-0 h-[180px] md:h-auto overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/60 to-primary-700/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <p className="font-heading font-extrabold text-white text-3xl lg:text-[34px] leading-tight tracking-tight drop-shadow-lg">
                        {partner.logoText}
                      </p>
                      <p className="text-primary-200 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
                        {partner.logoSub}
                      </p>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3 group-hover:text-primary-600 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-[1.8] mb-4">
                      {partner.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {partner.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BECOME PARTNER CTA ═══ */}
      <section
        ref={ctaRef}
        className="relative py-16 lg:py-20 overflow-hidden"
      >
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600" />
        <div className="absolute -top-20 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl" />

        <div className="partner-cta relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Handshake size={40} className="text-white/80 mx-auto mb-5" />
          <BlurText
            text="Trở thành đối tác của HAMEDCO"
            delay={60}
            animateBy="words"
            direction="top"
            className="font-heading font-extrabold text-white text-[28px] lg:text-[36px] mb-4 !justify-center"
          />
          <p className="text-primary-100/90 text-base mb-8 max-w-lg mx-auto">
            Chúng tôi luôn tìm kiếm cơ hội hợp tác với các nhà sản xuất thiết bị y tế uy tín trên toàn cầu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-heading font-bold text-sm rounded-2xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <FileText size={18} />
              Liên hệ hợp tác
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-heading font-bold text-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Về chúng tôi
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

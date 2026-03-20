import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Send,
  ChevronDown,
  ShieldCheck,
  Award,
  Headphones,
  Wrench,
  Clock,
} from 'lucide-react'
import BlurText from '../components/BlurText'

const productCategories = [
  'Chọn nhóm sản phẩm',
  'Dụng cụ phẫu thuật (KLS Martin)',
  'Thiết bị chẩn đoán hình ảnh (Philips)',
  'Hệ thống cấp phát thuốc (JVM)',
  'Robot can thiệp sinh thiết (Perfint)',
  'Thiết bị vật lý trị liệu (Chammed)',
  'Thiết bị nội soi (Sonesta)',
  'Khác',
]

const benefits = [
  {
    icon: ShieldCheck,
    text: 'Đại diện phân phối chính thức — hàng chính hãng 100%',
  },
  {
    icon: Award,
    text: 'Hơn 20 năm kinh nghiệm trong lĩnh vực thiết bị y tế',
  },
  {
    icon: Headphones,
    text: 'Tư vấn kỹ thuật miễn phí, báo giá chi tiết',
  },
  {
    icon: Wrench,
    text: 'Bảo hành chính hãng 12–24 tháng',
  },
  {
    icon: Clock,
    text: 'Triển khai & đào tạo chuyên nghiệp',
  },
  {
    icon: Headphones,
    text: 'Hỗ trợ kỹ thuật trong vòng 4 giờ làm việc',
  },
]

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    department: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-white">
      {/* ═══ HERO BANNER ═══ */}
      <div className="relative min-h-[320px] lg:min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banner-quote.png"
            alt=""
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/20" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-white/90 text-xs font-bold tracking-wider uppercase">
                Báo giá
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <BlurText
                text="Yêu cầu báo giá"
                delay={60}
                animateBy="words"
                direction="top"
                className="font-heading font-extrabold text-white text-[40px] lg:text-[56px] leading-[1.05] mb-5 !justify-start"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-primary-100/90 text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Điền thông tin bên dưới để nhận báo giá chi tiết trong vòng 24 giờ
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══ FORM + SIDEBAR ═══ */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* ── Left: Form ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="bg-white rounded-2xl p-7 lg:p-10 border border-neutral-100 shadow-lg shadow-neutral-100/40">
                <h2 className="font-heading font-extrabold text-neutral-900 text-2xl mb-7">
                  Thông tin yêu cầu
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Họ và tên <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Chức vụ
                      </label>
                      <input
                        type="text"
                        placeholder="Trưởng phòng VTYT"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Đơn vị công tác{' '}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Bệnh viện / Công ty"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Khoa / Phòng
                      </label>
                      <input
                        type="text"
                        placeholder="Khoa chẩn đoán hình ảnh"
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            department: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-bold mb-2">
                        Số điện thoại{' '}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-neutral-700 text-sm font-bold mb-2">
                      Sản phẩm quan tâm{' '}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({ ...formData, product: e.target.value })
                        }
                        className="w-full appearance-none px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white"
                      >
                        {productCategories.map((s) => (
                          <option
                            key={s}
                            value={
                              s === 'Chọn nhóm sản phẩm' ? '' : s
                            }
                          >
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-neutral-700 text-sm font-bold mb-2">
                      Số lượng dự kiến
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: 2 bộ"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-neutral-700 text-sm font-bold mb-2">
                      Chi tiết yêu cầu
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Mô tả chi tiết yêu cầu, cấu hình mong muốn, thời gian cần thiết..."
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-heading font-bold text-sm rounded-2xl hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary-500/20"
                  >
                    <Send size={16} />
                    {submitted
                      ? '✓ Đã gửi yêu cầu thành công!'
                      : 'Gửi yêu cầu báo giá'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── Right: Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:w-[360px] shrink-0 space-y-6"
            >
              {/* Benefits */}
              <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100">
                <h3 className="font-heading font-extrabold text-neutral-900 text-lg mb-5">
                  Tại sao chọn Meditech?
                </h3>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                        <b.icon size={16} className="text-primary-600" />
                      </div>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotline CTA */}
              <div className="bg-primary-600 rounded-2xl p-7">
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Cần tư vấn gấp?
                </h3>
                <p className="text-primary-100 text-sm mb-5">
                  Gọi hotline để được tư vấn trực tiếp ngay lập tức.
                </p>
                <a
                  href="tel:+84869009486"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-primary-700 font-heading font-bold text-sm rounded-xl hover:bg-primary-50 transition-colors"
                >
                  <Phone size={16} />
                  +84 86 9009 486
                </a>
              </div>
            </motion.div>
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
              Đội ngũ chuyên gia Meditech sẵn sàng phân tích nhu cầu và đề
              xuất giải pháp tối ưu nhất cho cơ sở của bạn.
            </p>
          </div>
          <a
            href="tel:+84869009486"
            className="px-6 py-3 bg-white/10 text-white font-heading font-bold text-sm rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone size={16} />
            086 900 9486
          </a>
        </div>
      </section>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Send,
  ChevronDown,
} from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import BlurText from '../components/BlurText'

/* Fix Leaflet default icon */
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// @ts-ignore
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

/* Custom green marker */
const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

/* ─── Ctrl + Scroll zoom component ─── */
function CtrlScrollZoom({ onHint }: { onHint: () => void }) {
  const map = useMapEvents({})

  useEffect(() => {
    const container = map.getContainer()

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        const delta = e.deltaY > 0 ? -1 : 1
        map.setZoom(map.getZoom() + delta, { animate: true })
      } else {
        onHint()
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [map, onHint])

  return null
}

/* ─── Office Data ─── */
const offices = [
  {
    name: 'Trụ sở chính — Hà Nội',
    address: 'Tầng 5, Tòa nhà Vimeco, Lô E9, Phạm Hùng, Cầu Giấy, Hà Nội',
    phone: '+84 86 9009 486',
    email: 'info@meditech.vn',
    hours: 'Thứ 2 – Thứ 6: 08:00 – 17:00',
    lat: 21.0165,
    lng: 105.7827,
    primary: true,
  },
  {
    name: 'Văn phòng 2 — Hà Nội',
    address: 'Số 7, Ngõ 136, Tây Sơn, Đống Đa, Hà Nội',
    phone: '+84 86 9009 486',
    email: '',
    hours: 'Thứ 2 – Thứ 6: 08:00 – 17:00',
    lat: 21.0105,
    lng: 105.8252,
    primary: false,
  },
  {
    name: 'Văn phòng TP.HCM',
    address:
      'Số 436B/22, Đường 3/2, Phường 12, Quận 10, TP. Hồ Chí Minh',
    phone: '+84 86 9009 486',
    email: '',
    hours: 'Thứ 2 – Thứ 6: 08:00 – 17:00',
    lat: 10.7709,
    lng: 106.6689,
    primary: false,
  },
]

const subjects = [
  'Chọn chủ đề',
  'Yêu cầu báo giá',
  'Tư vấn sản phẩm',
  'Hỗ trợ kỹ thuật',
  'Hợp tác đối tác',
  'Khác',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeOffice, setActiveOffice] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const mapRef = useRef<L.Map | null>(null)
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  // Pan map when clicking on office card
  const handleOfficeClick = (idx: number) => {
    setActiveOffice(idx)
    const office = offices[idx]
    if (mapRef.current) {
      mapRef.current.flyTo([office.lat, office.lng], 15, {
        duration: 1.5,
      })
    }
  }

  return (
    <div className="bg-white">
      {/* ═══ HERO BANNER ═══ */}
      <div className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banner-contact.png"
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
                Liên hệ
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <BlurText
                text="Liên hệ với chúng tôi"
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
              Đội ngũ chuyên gia Meditech luôn sẵn sàng hỗ trợ và tư vấn cho
              bạn
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══ OFFICE CARDS ═══ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase">
              Văn phòng
            </span>
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl lg:text-4xl mt-2">
              Hệ thống văn phòng Meditech
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => handleOfficeClick(i)}
                className={`group relative bg-white rounded-2xl p-6 border cursor-pointer transition-all duration-400 ${
                  activeOffice === i
                    ? 'border-primary-300 shadow-xl shadow-primary-100/30 ring-2 ring-primary-100'
                    : 'border-neutral-100 hover:shadow-lg hover:border-primary-200'
                }`}
              >
                {/* Active indicator */}
                {activeOffice === i && (
                  <div className="absolute -top-px left-6 right-6 h-[3px] rounded-b-full bg-primary-500" />
                )}

                <div className="flex items-center gap-2 mb-4">
                  <Building2
                    size={18}
                    className={`${
                      activeOffice === i
                        ? 'text-primary-600'
                        : 'text-neutral-400'
                    } transition-colors`}
                  />
                  <h3
                    className={`font-heading font-bold text-base ${
                      activeOffice === i
                        ? 'text-primary-600'
                        : 'text-neutral-900 group-hover:text-primary-600'
                    } transition-colors`}
                  >
                    {office.name}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      size={14}
                      className="text-neutral-400 shrink-0 mt-0.5"
                    />
                    <span className="text-neutral-600">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-neutral-400 shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-primary-600 font-medium hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  {office.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail size={14} className="text-neutral-400 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-primary-600 font-medium hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-500">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase">
              Gửi yêu cầu
            </span>
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl mt-2 mb-3">
              Liên hệ trực tiếp
            </h2>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">
              Điền thông tin bên dưới và chúng tôi sẽ phản hồi trong vòng 24
              giờ làm việc
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-neutral-100 shadow-lg shadow-neutral-100/50"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
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
                  Đơn vị công tác
                </label>
                <input
                  type="text"
                  placeholder="Tên bệnh viện / công ty"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
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
                  Số điện thoại <span className="text-red-400">*</span>
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

            {/* Subject */}
            <div className="mb-5">
              <label className="block text-neutral-700 text-sm font-bold mb-2">
                Chủ đề
              </label>
              <div className="relative">
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full appearance-none px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s === 'Chọn chủ đề' ? '' : s}>
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

            {/* Message */}
            <div className="mb-6">
              <label className="block text-neutral-700 text-sm font-bold mb-2">
                Nội dung <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Mô tả chi tiết yêu cầu của bạn..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
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
              {submitted ? '✓ Đã gửi thành công!' : 'Gửi liên hệ'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ═══ LEAFLET MAP ═══ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase">
              Bản đồ
            </span>
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl mt-2">
              Vị trí văn phòng
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-0 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg shadow-neutral-100/50"
            style={{ height: '480px' }}
          >
            <MapContainer
              center={[offices[activeOffice].lat, offices[activeOffice].lng]}
              zoom={13}
              scrollWheelZoom={false}
              attributionControl={false}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <CtrlScrollZoom onHint={() => {
                setShowScrollHint(true)
                if (hintTimerRef.current) clearTimeout(hintTimerRef.current)
                hintTimerRef.current = setTimeout(() => setShowScrollHint(false), 2000)
              }} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {offices.map((office, i) => (
                <Marker
                  key={office.name}
                  position={[office.lat, office.lng]}
                  icon={greenIcon}
                  eventHandlers={{
                    click: () => setActiveOffice(i),
                  }}
                >
                  <Popup>
                    <div className="!font-sans">
                      <strong className="block text-sm mb-1">
                        {office.name}
                      </strong>
                      <span className="text-xs text-gray-600">
                        {office.address}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* Scroll hint overlay */}
            {showScrollHint && (
              <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none transition-opacity duration-300">
                <div className="bg-white/95 px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-neutral-700 text-sm font-bold">
                    Sử dụng <kbd className="px-2 py-0.5 bg-neutral-100 rounded text-xs border border-neutral-200 mx-1">Ctrl</kbd> + cuộn để thu phóng bản đồ
                  </p>
                </div>
              </div>
            )}
          </motion.div>
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

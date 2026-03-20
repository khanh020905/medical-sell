import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/about' },
  {
    label: 'Sản phẩm',
    href: '/products',
    children: [
      { label: 'Chẩn đoán hình ảnh', href: '/products#medical-imaging' },
      { label: 'Dụng cụ phẫu thuật', href: '/products#surgical' },
      { label: 'Tự động hóa dược phẩm', href: '/products#automation' },
      { label: 'Thiết bị khác', href: '/products#others' },
    ],
  },
  { label: 'Dịch vụ', href: '/services' },
  { label: 'Đối tác', href: '/partners' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Liên hệ', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-700 text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Tầng 5, Vimeco, Phạm Hùng, Cầu Giấy, Hà Nội
            </span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> T2 – T6: 08:00 – 17:00</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+84869009486" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Phone size={14} /> +84 86 9009 486
            </a>
            <a href="mailto:info@meditech.vn" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Mail size={14} /> info@meditech.vn
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="10" fill="#0f766e"/>
              <path d="M18 8v20M8 18h20" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
            <div className="leading-tight">
              <span className="font-heading font-bold text-[18px] text-neutral-800 tracking-tight">Medi<span className="text-primary-600">Tech</span></span>
              <span className="block text-[10px] text-neutral-400 font-medium tracking-wider uppercase">Medical Devices</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(true)}
                onMouseLeave={() => link.children && setDropdownOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === link.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.children && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-xl hover:bg-accent-600 transition-colors shadow-sm"
            >
              Yêu cầu báo giá
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-neutral-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-4 py-3 bg-accent-500 text-white text-sm font-semibold rounded-xl text-center"
                >
                  Yêu cầu báo giá
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

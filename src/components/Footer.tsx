import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative flex flex-col items-center bg-[#09221D] pt-32 pb-8 overflow-hidden">
      {/* 1. CTA Section */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mb-12">
        <h2 className="font-display font-bold italic text-white text-[56px] leading-[1.1] mb-6 tracking-tight">
          Tiêu chuẩn mới cho quản lý<br className="hidden sm:block" /> thiết bị y tế.
        </h2>
        <p className="text-[#4F9583] text-[17px] font-medium max-w-[600px] leading-relaxed mb-10">
          MediTech là hệ thống vận hành dành cho các nhà quản lý hiện đại. Nhanh chóng,
          tuân thủ và được xây dựng cho tương lai của ngành y tế.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="#"
            className="w-full sm:w-auto px-10 py-4 rounded-[14px] bg-[#D6F88E] text-[#09221D] font-black text-[15px] hover:bg-[#cbf471] transition-colors"
          >
            Đặt lịch tư vấn miễn phí
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-10 py-4 rounded-[14px] bg-[#112F28] text-white font-black text-[15px] border border-[#204B40] hover:bg-[#153a31] transition-colors"
          >
            Xem bảng giá
          </a>
        </div>
      </div>

      {/* 2. Logos Section */}
      <div className="relative z-20 flex flex-col items-center px-6 w-full mb-[180px]">
        <h3 className="text-[#3B5B53] text-[10px] font-black tracking-[0.2em] uppercase mb-8">
          Được tin tưởng bởi các đối tác hàng đầu
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 text-[#4F9583]">
          {['BV BẠCH MAI', 'BV CHỢ RẪY', 'BV 108', 'VINMEC', 'MEDLATEC'].map((logo) => (
            <span key={logo} className="text-[18px] sm:text-[20px] font-bold tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Watermark (Absolutely positioned in background) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] z-0 pointer-events-none select-none w-full flex justify-center overflow-hidden">
        <span
          className="font-display text-[#0E2A24]"
          style={{
            fontSize: 'clamp(150px, 30vw, 420px)',
            lineHeight: 0.75,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          meditech
        </span>
      </div>

      {/* 4. Bottom Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 flex flex-col">
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#1C3F37] mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-[#678981] text-[10px] font-black tracking-[0.1em] uppercase leading-relaxed text-center md:text-left">
            © {year} MEDITECH SYSTEMS.<br className="hidden md:block" />
            MỌI QUYỀN ĐƯỢC BẢO LƯU.
          </p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black tracking-[0.1em] uppercase">
            <Link to="#" className="text-white hover:text-white/80 transition-colors">Sản phẩm</Link>
            <Link to="#" className="text-white hover:text-white/80 transition-colors">Điều khoản</Link>
            <Link to="#" className="text-white hover:text-white/80 transition-colors">Bảo mật</Link>
            <Link to="#" className="text-white hover:text-white/80 transition-colors">Liên hệ</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-[11px] font-black tracking-[0.1em] uppercase text-white">
            <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

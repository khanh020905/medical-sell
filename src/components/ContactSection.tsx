import { motion } from "framer-motion";
import BlurText from './BlurText';
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-16 lg:py-20" style={{ overflowX: "clip" }}>
      {/* ─── Dark gradient background ─── */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900" />

      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* ─── Left: Text Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Liên hệ ngay
            </p>

            <BlurText
              text="Bạn cần tư vấn giải pháp thiết bị y tế?"
              delay={80}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-white text-[28px] lg:text-[36px] leading-[1.1] mb-5 !justify-start"
            />

            <p className="text-neutral-400 text-[15px] leading-relaxed mb-8 max-w-[440px]">
              Hãy để lại thông tin, đội ngũ chuyên gia của MediTech sẽ liên hệ
              tư vấn miễn phí trong vòng 24 giờ.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 flex items-center justify-center">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[15px]">
                    +84 86 9009 486
                  </p>
                  <p className="text-neutral-500 text-xs">Hotline tư vấn</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 flex items-center justify-center">
                  <Mail size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[15px]">
                    info@meditech.vn
                  </p>
                  <p className="text-neutral-500 text-xs">Email liên hệ</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 flex items-center justify-center">
                  <MapPin size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[15px]">
                    TP. Hồ Chí Minh
                  </p>
                  <p className="text-neutral-500 text-xs">Trụ sở chính</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-600/15 flex items-center justify-center">
                  <Clock size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[15px]">
                    T2 – T7: 8:00 – 17:30
                  </p>
                  <p className="text-neutral-500 text-xs">Giờ làm việc</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/10 p-8 lg:p-10">
              {/* Subtle inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

              <h3 className="font-heading font-bold text-white text-xl mb-7">
                Yêu cầu tư vấn nhanh
              </h3>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label className="text-neutral-400 text-xs font-medium block mb-1.5">
                    Họ và tên <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-neutral-400 text-xs font-medium block mb-1.5">
                    Số điện thoại <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0912 345 678"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-neutral-400 text-xs font-medium block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-neutral-400 text-xs font-medium block mb-1.5">
                    Nội dung quan tâm
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Thiết bị cần tư vấn, số lượng, thời gian..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-heading font-bold text-[15px] shadow-lg shadow-primary-600/25 hover:from-primary-600 hover:to-primary-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Gửi yêu cầu tư vấn
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

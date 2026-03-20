import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="relative" style={{ overflowX: "clip" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl px-8 py-7 lg:px-10 lg:py-8 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 shadow-xl shadow-primary-900/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          {/* Text */}
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-white text-lg lg:text-xl mb-1">
              Sẵn sàng nâng cấp thiết bị y tế?
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed max-w-[420px]">
              Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết từ đội
              ngũ chuyên gia MediTech.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-heading font-bold text-sm shadow-lg shadow-amber-500/25 hover:from-amber-500 hover:to-amber-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              Yêu cầu báo giá
            </Link>
            <a
              href="tel:+84869009486"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-heading font-bold text-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone size={15} />
              086 900 9486
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


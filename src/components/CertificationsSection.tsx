import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── Certification Data ─── */
const certifications = [
  { name: "CE Mark", subtitle: "European Conformity" },
  { name: "FDA 510(k)", subtitle: "U.S. Cleared" },
  { name: "ISO 13485", subtitle: "Medical Devices QMS" },
  { name: "IEC 60601", subtitle: "Electrical Safety" },
  { name: "Bộ Y tế VN", subtitle: "Giấy phép TTBYT" },
];

/* ─── Main Section ─── */
export default function CertificationsSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-white" style={{ overflowX: 'clip' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Chứng nhận & Tiêu chuẩn
          </p>
          <h2 className="font-display font-extrabold text-neutral-900 text-[28px] lg:text-[40px] leading-[1.15] italic mb-3">
            Cam kết chất lượng quốc tế
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base max-w-[520px] mx-auto">
            Toàn bộ sản phẩm đều đạt các chứng nhận quốc tế nghiêm ngặt nhất
            trong ngành y tế
          </p>
        </motion.div>

        {/* ─── Certification Grid ─── */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center px-8 py-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-400 min-w-[160px]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={22} className="text-primary-500" />
              </div>
              <p className="font-heading font-bold text-neutral-900 text-sm mb-0.5">
                {cert.name}
              </p>
              <p className="text-neutral-400 text-xs">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Lightbulb, Wrench, ShieldCheck, GraduationCap } from "lucide-react";

/* ─── Service Data ─── */
const services = [
  {
    icon: Lightbulb,
    title: "Tư vấn giải pháp",
    description:
      "Phân tích nhu cầu và đề xuất giải pháp thiết bị phù hợp nhất cho từng chuyên khoa và quy mô cơ sở.",
    color: "from-primary-500 to-primary-600",
    bgLight: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Wrench,
    title: "Triển khai & Lắp đặt",
    description:
      "Đội ngũ kỹ thuật viên chuyên nghiệp, lắp đặt đúng tiêu chuẩn nhà sản xuất, bàn giao vận hành đầy đủ.",
    color: "from-sky-500 to-sky-600",
    bgLight: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: ShieldCheck,
    title: "Bảo trì & Bảo hành",
    description:
      "Chế độ bảo hành chính hãng, bảo trì định kỳ, sửa chữa nhanh chóng — đảm bảo uptime tối đa.",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo",
    description:
      "Chương trình đào tạo sử dụng thiết bị cho đội ngũ y bác sĩ, cấp chứng nhận hoàn thành khóa học.",
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

/* ─── Service Card ─── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgLight} mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={26} className={service.iconColor} />
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-neutral-900 text-lg mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-500 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Bottom gradient line on hover */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-full bg-gradient-to-r ${service.color} group-hover:w-3/4 transition-all duration-500`}
      />
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function ServicesSection() {
  return (
    <section className="relative pt-16 lg:pt-16 pb-20 lg:pb-24 bg-white" style={{ overflowX: 'clip' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Dịch vụ
          </p>
          <h2 className="font-display font-extrabold text-neutral-900 text-[32px] lg:text-[44px] leading-[1.15] italic mb-4">
            Giải pháp toàn diện
          </h2>
          <p className="text-neutral-500 text-base max-w-[580px] mx-auto leading-relaxed">
            Đồng hành cùng khách hàng từ tư vấn, triển khai đến bảo trì — đảm
            bảo thiết bị hoạt động tối ưu
          </p>
        </motion.div>

        {/* ─── Service Cards Grid ─── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

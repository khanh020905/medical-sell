import { motion } from "framer-motion";
import {
  Award,
  Headset,
  Building2,
  BookOpenCheck,
  FileCheck2,
  Briefcase,
} from "lucide-react";

/* ─── Feature Data ─── */
const features = [
  {
    icon: Award,
    title: "Chính hãng 100%",
    description:
      "Cam kết phân phối sản phẩm chính hãng từ nhà sản xuất, đầy đủ chứng từ CO-CQ và giấy phép TTBYT.",
    color: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Headset,
    title: "Phản hồi nhanh 4 giờ",
    description:
      "Đội ngũ kỹ thuật túc trực sẵn sàng hỗ trợ. Cam kết phản hồi yêu cầu kỹ thuật trong 4 giờ làm việc.",
    color: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Building2,
    title: "Đối tác quốc tế",
    description:
      "Đại diện phân phối chính thức của các thương hiệu hàng đầu từ Đức, Hà Lan, Hàn Quốc, Ấn Độ.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpenCheck,
    title: "Đào tạo chuyên sâu",
    description:
      "Chương trình đào tạo vận hành thiết bị cho đội ngũ y bác sĩ, cấp chứng nhận hoàn thành khóa học.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: FileCheck2,
    title: "Bảo hành toàn diện",
    description:
      "Chế độ bảo hành chính hãng 12–24 tháng, bảo trì định kỳ theo lịch và kho linh kiện dự phòng tại chỗ.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Briefcase,
    title: "20+ năm kinh nghiệm",
    description:
      "Với hơn 20 năm hoạt động, MediTech am hiểu sâu sắc thị trường và nhu cầu của hệ thống y tế Việt Nam.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

/* ─── Feature Card ─── */
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group flex items-start gap-5 p-6 rounded-2xl border border-neutral-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={22} className={feature.iconColor} />
      </div>
      <div>
        <h3 className="font-heading font-bold text-neutral-900 text-base mb-1.5">
          {feature.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function WhyChooseUs() {
  return (
    <section className="relative py-16 lg:py-20 bg-neutral-50">
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
            Tại sao chọn MediTech
          </p>
          <h2 className="font-display font-extrabold text-neutral-900 text-[28px] lg:text-[40px] leading-[1.15] italic mb-3">
            Đối tác tin cậy của hàng trăm bệnh viện
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base max-w-[520px] mx-auto">
            Chúng tôi cam kết mang đến giải pháp thiết bị y tế toàn diện với
            chất lượng dịch vụ vượt trội
          </p>
        </motion.div>

        {/* ─── Feature Grid (Stack Scroll) ─── */}
        <div className="relative">
          {/* Row 1 */}
          <div
            className="sticky z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5"
            style={{ top: "80px" }}
          >
            {features.slice(0, 3).map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
          {/* Row 2 — stacks over Row 1 */}
          <div
            className="sticky z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            style={{ top: "100px" }}
          >
            {features.slice(3, 6).map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

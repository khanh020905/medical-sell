import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/* ─── Testimonial Data ─── */
const testimonials = [
  {
    quote:
      "MediTech đã cung cấp hệ thống MAXIO III cho khoa Can thiệp. Chất lượng thiết bị và dịch vụ hậu mãi rất chuyên nghiệp, đội ngũ kỹ thuật phản hồi nhanh.",
    name: "TS. BS. Nguyễn Thanh H.",
    title: "Khoa Can thiệp",
    hospital: "BV Đa khoa Quốc tế",
    avatar: "/assets/doctor_avatar_1.png",
  },
  {
    quote:
      "Chúng tôi đã hợp tác với MediTech trong hơn 5 năm. Dụng cụ phẫu thuật KLS Martin chất lượng vượt trội, quy trình nhập khẩu minh bạch và đúng tiến độ.",
    name: "PGS. TS. Phạm Văn M.",
    title: "Trưởng khoa Ngoại",
    hospital: "BV Trung ương",
    avatar: "/assets/doctor_avatar_2.png",
  },
  {
    quote:
      "Hệ thống tự động hóa nhà thuốc JVM do MediTech triển khai giúp giảm 60% sai sót trong cấp phát thuốc. Đặc biệt ấn tượng với chương trình đào tạo bài bản.",
    name: "DS. Lê Thị K.",
    title: "Trưởng khoa Dược",
    hospital: "BV tỉnh",
    avatar: "/assets/doctor_avatar_3.png",
  },
  {
    quote:
      "Là đối tác nhiều năm của MediTech, chúng tôi đánh giá cao sự chuyên nghiệp và khả năng triển khai dự án lớn. Bàn mổ SONESTA hoạt động ổn định sau 3 năm sử dụng.",
    name: "BSCKI. Vũ Đức A.",
    title: "Phó khoa Phẫu thuật",
    hospital: "BV Quân Y 103",
    avatar: "/assets/doctor_avatar_4.png",
  },
];

/* ─── Testimonial Card ─── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-400"
    >
      {/* Quote icon */}
      <Quote
        size={28}
        className="text-primary-200 mb-4 group-hover:text-primary-400 transition-colors duration-300"
      />

      {/* Quote text */}
      <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-50">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-heading font-bold text-neutral-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-primary-600 text-xs">
            {testimonial.title} — {testimonial.hospital}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function TestimonialsSection() {
  return (
    <section
      className="relative py-16 lg:py-20 bg-neutral-50"
      style={{ overflowX: "clip" }}
    >
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
            Khách hàng nói gì
          </p>
          <h2 className="font-display font-extrabold text-neutral-900 text-[28px] lg:text-[40px] leading-[1.15] italic mb-3">
            Được tin tưởng bởi hàng trăm bệnh viện
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base max-w-[500px] mx-auto">
            Cảm nhận của đối tác và khách hàng đã hợp tác cùng MediTech
          </p>
        </motion.div>

        {/* ─── Testimonial Grid ─── */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

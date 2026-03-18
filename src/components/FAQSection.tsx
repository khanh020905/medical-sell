import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Triangle, Mail } from "lucide-react";

/* ─── FAQ Data ─── */
const faqs = [
  {
    question: "MediTech phân phối sản phẩm của những hãng nào?",
    answer:
      "MediTech là đại diện phân phối chính thức của KLS Martin (Đức), Philips Healthcare (Hà Lan), JVM (Hàn Quốc), Perfint Healthcare (Ấn Độ), CHAMMED (Hàn Quốc) và SONESTA. Tất cả sản phẩm đều có đầy đủ giấy tờ CO-CQ và giấy phép TTBYT.",
  },
  {
    question: "Chế độ bảo hành và bảo trì như thế nào?",
    answer:
      "Chúng tôi cung cấp chế độ bảo hành chính hãng từ 12–24 tháng tùy sản phẩm. Ngoài ra, MediTech có chương trình bảo trì định kỳ theo lịch và kho linh kiện dự phòng tại chỗ.",
  },
  {
    question: "Thời gian triển khai dự án trung bình là bao lâu?",
    answer:
      "Với các thiết bị đơn lẻ, thời gian lắp đặt và bàn giao từ 1–2 tuần. Với các dự án tổng thể phòng mổ hoặc hệ thống nhà thuốc, thời gian triển khai từ 4–8 tuần bao gồm cả đào tạo.",
  },
  {
    question: "MediTech có hỗ trợ đào tạo sử dụng thiết bị không?",
    answer:
      "Có. Chúng tôi cung cấp chương trình đào tạo toàn diện cho đội ngũ y bác sĩ và kỹ thuật viên, bao gồm lý thuyết, thực hành và cấp chứng nhận hoàn thành.",
  },
  {
    question: "Làm thế nào để yêu cầu báo giá?",
    answer:
      "Bạn có thể nhấn nút 'Yêu cầu báo giá' trên website, gọi hotline 1900-xxxx, hoặc gửi email đến info@meditech.vn. Đội ngũ tư vấn sẽ phản hồi trong vòng 4 giờ làm việc.",
  },
];

/* ─── FAQ Item ─── */
function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border border-neutral-100 rounded-xl bg-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-50/60 transition-colors duration-200 rounded-xl"
      >
        <span className="font-heading font-semibold text-neutral-800 text-[15px] leading-snug">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center"
        >
          <Triangle
            size={12}
            className="text-primary-600 fill-primary-600"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-neutral-500 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function FAQSection() {
  return (
    <section
      className="relative py-12 lg:py-16 bg-neutral-50"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* ─── Left Column ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-200 text-primary-700 text-xs font-bold tracking-wide mb-6">
              Câu hỏi thường gặp
            </span>

            <h2 className="font-display font-extrabold text-neutral-900 text-[36px] lg:text-[48px] leading-[1.05] italic mb-8">
              Giải đáp thắc mắc
            </h2>

            {/* CTA Card */}
            <div className="relative rounded-2xl p-7 overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700">
              {/* Decorative blur */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />

              <div className="relative z-10">
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Vẫn còn thắc mắc?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Không tìm thấy câu trả lời? Gửi email cho chúng tôi và
                  chúng tôi sẽ phản hồi trong thời gian sớm nhất!
                </p>
                <a
                  href="mailto:info@meditech.vn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary-700 font-heading font-bold text-sm hover:bg-white/90 transition-colors duration-200"
                >
                  <Mail size={15} />
                  Gửi email
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─── Right Column — FAQ List ─── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

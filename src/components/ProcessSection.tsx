import { motion } from "framer-motion";

/* ─── Step Data ─── */
const steps = [
  {
    number: "01",
    title: "Tư vấn & Khảo sát",
    description:
      "Đội ngũ chuyên gia đến khảo sát thực tế, phân tích nhu cầu và đề xuất giải pháp phù hợp.",
  },
  {
    number: "02",
    title: "Báo giá & Hợp đồng",
    description:
      "Cung cấp báo giá chi tiết, đàm phán điều khoản hợp đồng minh bạch và có lợi nhất.",
  },
  {
    number: "03",
    title: "Lắp đặt & Đào tạo",
    description:
      "Triển khai lắp đặt đúng tiêu chuẩn, đào tạo sử dụng cho toàn bộ đội ngũ vận hành.",
  },
  {
    number: "04",
    title: "Bảo hành & Hỗ trợ",
    description:
      "Bảo hành chính hãng, bảo trì định kỳ và hỗ trợ kỹ thuật xuyên suốt vòng đời thiết bị.",
  },
];

/* ─── Main Section ─── */
export default function ProcessSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-white" style={{ overflowX: "clip" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Quy trình hợp tác
          </p>
          <h2 className="font-display font-extrabold text-neutral-900 text-[28px] lg:text-[40px] leading-[1.15] italic mb-3">
            4 bước để sở hữu thiết bị y tế chất lượng
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base max-w-[500px] mx-auto">
            Quy trình chuyên nghiệp, minh bạch — từ tư vấn đến bàn giao vận
            hành
          </p>
        </motion.div>

        {/* ─── Steps ─── */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) — centered on 72px circles → top = 36px */}
          <div className="hidden lg:block absolute top-[36px] left-[12%] right-[12%] h-[2px] bg-primary-100" />
          {/* Animated progress line — slower */}
          <motion.div
            className="hidden lg:block absolute top-[36px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-primary-500 to-primary-400 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          />

          {steps.map((step, i) => {
            // Each circle pulses when the line reaches it
            const circleDelay = 0.3 + i * 0.75; // 0.3, 1.05, 1.8, 2.55
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number circle with zoom pulse */}
                <motion.div
                  className="relative z-10 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mb-5 shadow-lg shadow-primary-600/20"
                  initial={{ scale: 0.6, opacity: 0.5 }}
                  whileInView={{ scale: [0.6, 1.2, 1], opacity: [0.5, 1, 1] }}
                  transition={{
                    duration: 0.6,
                    delay: circleDelay,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-white font-heading font-extrabold text-xl">
                    {step.number}
                  </span>
                  {/* Outer ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-[3px] border-primary-200 scale-[1.25]"
                    initial={{ scale: 1.25, opacity: 0 }}
                    whileInView={{ scale: 1.25, opacity: 1 }}
                    transition={{ duration: 0.4, delay: circleDelay + 0.15 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="font-heading font-bold text-neutral-900 text-base mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

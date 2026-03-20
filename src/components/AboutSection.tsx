import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import BlurText from './BlurText';
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/* ─── Animated Counter ─── */
function useCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

/* ─── Main Section ─── */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const hospitals = useCounter(500, 800, isInView);
  const years = useCounter(20, 800, isInView);
  const partners = useCounter(15, 800, isInView);

  return (
    <section
      ref={sectionRef}
      className="relative mt-6 pt-10 pb-12 lg:pb-16 bg-white"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Hero Image with Stats Overlay ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden h-[320px] lg:h-[420px]">
            <img
              src="/assets/about_hero.png"
              alt="MediTech headquarters"
              className="w-full h-full object-cover"
            />
            {/* Decorative shape top-right */}
            <div className="absolute -top-1 -right-1 w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] bg-primary-600 rounded-bl-[80px]" />
          </div>

          {/* Stats overlay — bottom right with white backdrop */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 text-right bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-[36px] lg:text-[48px] font-heading font-extrabold leading-none">
              <span className="text-primary-600">{hospitals}+</span>{" "}
              <span className="text-neutral-900">BỆNH VIỆN</span>
            </p>
            <p className="text-neutral-600 text-sm lg:text-base font-medium mt-1">
              <span className="text-primary-600 font-bold">{years}+ năm</span>{" "}
              kinh nghiệm
            </p>
          </div>
        </motion.div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-6"
        >
          <p className="text-sm">
            <span className="text-primary-600 font-bold text-base">
              {years}+
            </span>{" "}
            <span className="text-neutral-500 italic">năm kinh nghiệm</span>
          </p>
          <span className="text-neutral-200">|</span>
          <p className="text-sm">
            <span className="text-primary-600 font-bold text-base">
              {partners}+
            </span>{" "}
            <span className="text-neutral-500 italic">đối tác quốc tế</span>
          </p>
        </motion.div>

        {/* ─── Bottom: Title + Company + Text ─── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
          {/* Left: Title + Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <BlurText
              text="Nhà cung cấp thiết bị y tế hàng đầu Việt Nam."
              delay={80}
              animateBy="words"
              direction="top"
              className="font-heading font-extrabold text-neutral-900 text-[28px] lg:text-[36px] leading-[1.1] mb-6 !justify-start"
            />

            {/* Two-column text */}
            <div className="grid sm:grid-cols-2 gap-6">
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Thành lập từ năm 2005,{" "}
                <strong className="text-neutral-800">
                  Công ty Cổ phần Vật tư và Thiết bị Y tế MediTech
                </strong>{" "}
                tự hào là đối tác tin cậy của hàng trăm bệnh viện và cơ sở y tế
                trên toàn quốc.
              </p>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Với mạng lưới đối tác quốc tế rộng khắp, chúng tôi mang đến
                những{" "}
                <strong className="text-neutral-800">
                  giải pháp thiết bị y tế tiên tiến nhất
                </strong>{" "}
                từ Đức, Hà Lan, Hàn Quốc và nhiều quốc gia phát triển.
              </p>
            </div>
          </motion.div>

          {/* Right: Company Name + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-right whitespace-nowrap"
          >
            <p className="font-heading font-extrabold text-primary-600 text-2xl tracking-tight mb-1">
              MEDITECH
            </p>
            <p className="text-neutral-500 text-sm mb-5">
              Thiết bị Y tế | Giải pháp Toàn diện
            </p>

            <p className="font-heading font-bold text-neutral-800 text-[15px] mb-5">
              Sẵn sàng nâng cấp hệ thống y tế
              <br />
              cho bệnh viện của bạn?
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-neutral-900 text-white font-heading font-bold text-sm tracking-wide uppercase hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-300"
            >
              Tìm hiểu thêm
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

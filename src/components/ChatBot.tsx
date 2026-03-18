import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
} from "lucide-react";

/* ─── System Prompt ─── */
const SYSTEM_PROMPT = `Bạn là MediBot — trợ lý tư vấn AI chính thức của Công ty Cổ phần Vật tư và Thiết bị Y tế MediTech.

## VỀ MEDITECH
- Thành lập năm 2005, trụ sở tại TP. Hồ Chí Minh.
- Là nhà phân phối chính thức của: KLS Martin (Đức), Philips Healthcare (Hà Lan), JVM (Hàn Quốc), Perfint Healthcare (Ấn Độ), CHAMMED (Hàn Quốc), SONESTA.
- Đối tác của hơn 500 bệnh viện và cơ sở y tế trên toàn quốc.
- Có 20+ năm kinh nghiệm, 15+ đối tác quốc tế.
- Website: meditech.vn | Hotline: 086 900 9486 | Email: info@meditech.vn
- Giờ làm việc: T2–T7, 8:00–17:30.

## SẢN PHẨM CHÍNH
1. **Hệ thống phẫu thuật robot** — Phẫu thuật xâm lấn tối thiểu, độ chính xác cao.
2. **Bàn mổ SONESTA** — Bàn mổ đa năng, điều khiển điện, phù hợp nhiều chuyên khoa.
3. **Máy chụp X-quang kỹ thuật số** — Hình ảnh sắc nét, liều phóng xạ thấp.
4. **Dụng cụ phẫu thuật KLS Martin** — Dụng cụ CMF, cột sống, phẫu thuật tổng quát từ Đức.
5. **Hệ thống tự động hóa nhà thuốc JVM** — Cấp phát thuốc tự động, giảm 60% sai sót.
6. **Hệ thống nội soi Perfint** — Sinh thiết dẫn đường bằng robot.
7. **Thiết bị xạ trị CHAMMED** — Máy gia tốc tuyến tính, xạ trị chính xác.

## DỊCH VỤ
- Tư vấn giải pháp thiết bị y tế toàn diện.
- Lắp đặt, bàn giao thiết bị tại bệnh viện.
- Bảo hành chính hãng 12–24 tháng.
- Bảo trì định kỳ và sửa chữa.
- Đào tạo sử dụng thiết bị cho y bác sĩ và kỹ thuật viên.
- Cung cấp linh kiện thay thế.

## CHỨNG NHẬN
- CE Mark (Châu Âu)
- FDA 510(k) (Hoa Kỳ)
- ISO 13485
- IEC 60601
- Giấy phép Bộ Y tế Việt Nam, CO-CQ, TTBYT.

## QUY TẮC TRẢ LỜI
1. Luôn trả lời bằng tiếng Việt, trừ khi khách hàng dùng tiếng Anh.
2. Giọng điệu: chuyên nghiệp, thân thiện, đáng tin cậy.
3. Trả lời ngắn gọn, súc tích (tối đa 3-4 câu). Nếu cần chi tiết, hỏi lại.
4. Khi khách hỏi về giá: "Giá sản phẩm phụ thuộc vào cấu hình và số lượng. Anh/chị vui lòng liên hệ hotline 086 900 9486 hoặc email info@meditech.vn để nhận báo giá chi tiết."
5. Khi khách hỏi ngoài phạm vi: nhẹ nhàng hướng về thiết bị y tế và dịch vụ MediTech.
6. Luôn gợi ý liên hệ hotline hoặc để lại thông tin khi phù hợp.
7. KHÔNG bịa thông tin sản phẩm hoặc giá cả.
8. Nếu không biết, nói: "Để đảm bảo chính xác, anh/chị vui lòng liên hệ đội ngũ tư vấn qua hotline 086 900 9486."
9. Xưng hô: "em" (MediBot) và "anh/chị" (khách hàng).

## ĐỊNH DẠNG TRẢ LỜI
- Khi liệt kê thông tin, mỗi mục trên một dòng riêng, bắt đầu bằng dấu "•" hoặc emoji phù hợp.
- Dùng **in đậm** cho tên sản phẩm, số điện thoại, email.
- Giữ mỗi đoạn ngắn gọn, tối đa 2-3 dòng.
- KHÔNG dùng heading markdown (##, ###). Chỉ dùng plain text với **bold** và bullet points.`;

/* ─── Simple Markdown Renderer ─── */
function renderMarkdown(text: string) {
  // Split by newlines, process each line
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Process bold (**text**)
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="font-semibold text-neutral-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={j}>{part}</span>;
    });

    // Detect bullet lines
    const isBullet = /^[•\-\*]\s/.test(line.trim()) || /^\d+\.\s/.test(line.trim());

    if (isBullet) {
      const content = line.trim().replace(/^[•\-\*]\s/, "").replace(/^\d+\.\s/, "");
      const bulletParts = content.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>;
        }
        return <span key={j}>{part}</span>;
      });
      return (
        <span key={i} className="flex items-start gap-1.5 mt-1">
          <span className="text-primary-500 mt-0.5 text-[10px]">●</span>
          <span>{bulletParts}</span>
        </span>
      );
    }

    return (
      <span key={i}>
        {rendered}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

/* ─── Types ─── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

/* ─── Main Component ─── */
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào! 👋 Em là MediBot, trợ lý tư vấn của MediTech. Anh/chị cần tìm hiểu về thiết bị y tế nào ạ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...newMessages.map((m) => ({
                role: m.role,
                content: m.content,
              })),
            ],
            temperature: 0.6,
            max_tokens: 512,
          }),
        }
      );

      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "Xin lỗi, em không xử lý được yêu cầu. Vui lòng thử lại.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Xin lỗi, hệ thống đang gặp sự cố. Anh/chị vui lòng liên hệ hotline 086 900 9486 để được hỗ trợ trực tiếp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ─── Floating Button ─── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl shadow-primary-600/30 flex items-center justify-center"
          >
            <MessageCircle size={24} />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Chat Window ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-neutral-200 flex flex-col"
            style={{ height: "min(560px, calc(100vh - 80px))" }}
          >
            {/* ─── Header ─── */}
            <div className="relative bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 px-5 py-4 flex items-center gap-3 flex-shrink-0">
              {/* Decorative dots */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
                  backgroundSize: "16px 16px",
                }}
              />

              <div className="relative z-10 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-white font-heading font-bold text-sm">
                  MediBot
                </p>
                <p className="text-primary-200 text-[11px]">
                  Trợ lý tư vấn AI • Online
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>

            {/* ─── Messages ─── */}
            <div className="flex-1 overflow-y-auto bg-neutral-50 px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                      msg.role === "assistant"
                        ? "bg-primary-100 text-primary-600"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={14} />
                    ) : (
                      <User size={14} />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary-600 text-white rounded-br-md"
                        : "bg-white text-neutral-700 border border-neutral-100 rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? renderMarkdown(msg.content) : msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white border border-neutral-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ─── Input ─── */}
            <div className="flex-shrink-0 bg-white border-t border-neutral-100 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-300 focus:bg-white transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </form>
              <p className="text-center text-[10px] text-neutral-400 mt-2">
                Powered by MediTech AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

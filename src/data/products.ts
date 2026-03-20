import { Zap, Target, Monitor, Cpu, Wrench, Settings, Stethoscope, Activity, Syringe, Pill, Scan, HeartPulse } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ProductFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProductApplication {
  icon: LucideIcon
  title: string
  description: string
}

export interface Product {
  slug: string
  image: string
  brand: string
  name: string
  category: string
  tag: string
  shortDesc: string
  subtitle: string
  certifications: string
  fullDescription: string[]
  highlights: string[]
  specs: { label: string; value: string }[]
  features: ProductFeature[]
  applications: ProductApplication[]
}

const products: Product[] = [
  {
    slug: 'maxio-iii',
    image: '/images/product-robot-surgery.png',
    brand: 'Perfint Healthcare',
    name: 'MAXIO® III',
    category: 'medical-imaging',
    tag: 'Medical Imaging',
    shortDesc: 'Hệ thống robot can thiệp dẫn đường CT/PET-CT thế hệ mới. Công nghệ InstaReg™, cánh tay 5 trục, độ chính xác cao.',
    subtitle: 'Hệ thống Robot Can thiệp Dẫn đường CT/PET-CT',
    certifications: 'CE · FDA · ISO 13485',
    fullDescription: [
      'MAXIO® III kết hợp công nghệ robot tiên tiến với phần mềm dẫn đường thông minh, cho phép bác sĩ thực hiện các thủ thuật can thiệp dưới hướng dẫn hình ảnh với độ chính xác chưa từng có.',
      'Hệ thống được thiết kế để tương thích với tất cả các máy CT và PET-CT trên thị trường, mang đến sự linh hoạt tối đa cho các cơ sở y tế.',
      'Với công nghệ InstaReg™ cho phép kết nối nhanh với CT, lập kế hoạch 2D/3D trước phẫu thuật và xác minh sau thủ thuật — MAXIO® III là giải pháp toàn diện cho interventional radiology.',
    ],
    highlights: [
      'InstaReg™ — kết nối CT nhanh chóng',
      'Lập kế hoạch 2D/3D trước thủ thuật',
      'Cánh tay stereotactic 5 trục (5 DOF)',
      'Độ chính xác dưới milimet (sub-mm)',
      'Tương thích mọi hệ thống CT/PET-CT',
      'So sánh trước/sau thủ thuật tự động',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'Perfint Healthcare' },
      { label: 'Model', value: 'MAXIO® III' },
      { label: 'Loại hệ thống', value: 'Robot can thiệp dẫn đường hình ảnh' },
      { label: 'Tương thích', value: 'CT scanners, PET-CT (tất cả nhà sản xuất)' },
      { label: 'Cánh tay robot', value: 'Stereotactic Arm — 5 bậc tự do (5 DOF)' },
      { label: 'Độ chính xác', value: '< 1 mm (sub-millimeter accuracy)' },
      { label: 'Phần mềm', value: 'InstaReg™, Pre-op Planning 2D/3D, Verification Suite' },
      { label: 'End Effectors', value: 'Needle guides, needle stabilizers, biopsy adapters' },
      { label: 'Màn hình', value: 'Touchscreen display tích hợp trên cart' },
      { label: 'Di động', value: 'Mobile cart với bánh xe khóa, dễ dàng di chuyển giữa phòng' },
      { label: 'Chứng nhận', value: 'CE Mark, FDA 510(k) Cleared, ISO 13485:2016' },
      { label: 'An toàn điện', value: 'IEC 60601-1 compliant' },
    ],
    features: [
      {
        icon: Zap,
        title: 'InstaReg™ Technology',
        description: 'Kết nối nhanh với bất kỳ hệ thống CT nào, giảm thời gian setup và tăng throughput phòng CT.',
      },
      {
        icon: Target,
        title: 'Pre-operative Planning',
        description: 'Phần mềm lập kế hoạch 2D/3D cho phép xác định đường đi kim chính xác trước khi thực hiện.',
      },
      {
        icon: Monitor,
        title: 'Planning & Verification Suite',
        description: 'So sánh tự động giữa kế hoạch và kết quả thực tế, đảm bảo accuracy trong mọi thủ thuật.',
      },
      {
        icon: Cpu,
        title: 'Stereotactic Arm 5 DOF',
        description: 'Cánh tay robot 5 bậc tự do với end effector chuyên dụng, needle guide và stabilizer tích hợp.',
      },
    ],
    applications: [
      {
        icon: Syringe,
        title: 'Sinh thiết qua da dưới CT',
        description: 'Sinh thiết phổi, gan, thận, xương — các tổn thương sâu, khó tiếp cận bằng tay.',
      },
      {
        icon: Activity,
        title: 'Ablation khối u',
        description: 'Radiofrequency ablation (RFA), microwave ablation, cryoablation dưới dẫn đường chính xác.',
      },
      {
        icon: Stethoscope,
        title: 'Dẫn lưu ổ bụng',
        description: 'Đặt drain chính xác cho áp xe, tràn dịch, các collection phức tạp đa phòng.',
      },
      {
        icon: HeartPulse,
        title: 'Can thiệp cột sống',
        description: 'Vertebroplasty, kyphoplasty, và các thủ thuật cột sống xâm lấn tối thiểu.',
      },
    ],
  },
  {
    slug: 'sonesta-6210',
    image: '/images/product-surgical-table.png',
    brand: 'Sonesta',
    name: 'SONESTA 6210',
    category: 'surgical',
    tag: 'Operating Table',
    shortDesc: 'Bàn phẫu thuật 3 motor cao cấp cho chỉnh hình và tiết niệu. Điều chỉnh đa chiều chính xác, thiết kế nhân thể học.',
    subtitle: 'Bàn phẫu thuật điện 3 motor cao cấp',
    certifications: 'CE · ISO 13485',
    fullDescription: [
      'SONESTA 6210 là bàn phẫu thuật điện cao cấp với 3 motor độc lập, cho phép điều chỉnh đa chiều mượt mà và chính xác trong suốt quá trình phẫu thuật.',
      'Thiết kế nhân thể học tối ưu, mặt bàn carbon fiber giảm nhiễu X-ray, phù hợp cho phẫu thuật chỉnh hình, tiết niệu, và tổng quát.',
      'Hệ thống phanh điện từ đảm bảo an toàn tuyệt đối, kết hợp với remote control không dây tiện lợi. Pin dự phòng cho phép hoạt động liên tục trong trường hợp mất điện.',
    ],
    highlights: [
      '3 motor điện độc lập',
      'Mặt bàn carbon fiber X-ray transparent',
      'Tải trọng tối đa 300kg',
      'Điều khiển từ xa không dây IR',
      'Tương thích C-arm và O-arm',
      'Phanh điện từ an toàn',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'Sonesta Medical' },
      { label: 'Model', value: 'SONESTA 6210' },
      { label: 'Loại', value: 'Bàn phẫu thuật điện đa năng' },
      { label: 'Số motor', value: '3 motor điện độc lập' },
      { label: 'Tải trọng max', value: '300 kg (bao gồm phụ kiện)' },
      { label: 'Chiều cao điều chỉnh', value: '700 – 1000 mm' },
      { label: 'Mặt bàn', value: 'Carbon Fiber, X-ray transparent' },
      { label: 'Trendelenburg', value: '±30°' },
      { label: 'Nghiêng ngang', value: '±20°' },
      { label: 'Điều khiển', value: 'Remote IR không dây + bảng điều khiển cạnh bàn' },
      { label: 'Pin dự phòng', value: 'Có, hoạt động liên tục khi mất điện' },
      { label: 'Chứng nhận', value: 'CE Mark, ISO 13485:2016' },
    ],
    features: [
      {
        icon: Settings,
        title: 'Điều chỉnh Trendelenburg/Reverse',
        description: 'Nghiêng đầu cao/thấp ±30° mượt mà, hỗ trợ tối ưu tư thế phẫu thuật bụng và ngực.',
      },
      {
        icon: Monitor,
        title: 'Mặt bàn Carbon Fiber',
        description: 'Trong suốt với tia X, cho phép chụp C-arm và O-arm xuyên bàn mà không gây artifact.',
      },
      {
        icon: Cpu,
        title: 'Remote Control IR không dây',
        description: 'Điều khiển từ xa hồng ngoại cho phép phẫu thuật viên điều chỉnh tư thế bệnh nhân từ vùng vô trùng.',
      },
      {
        icon: Wrench,
        title: 'Phụ kiện modular đa dạng',
        description: 'Hệ thống rail tiêu chuẩn, tương thích hàng trăm phụ kiện: kẹp chân, giá đỡ tay, headrest.',
      },
    ],
    applications: [
      {
        icon: Stethoscope,
        title: 'Phẫu thuật chỉnh hình',
        description: 'Thay khớp háng, khớp gối, cố định gãy xương — các phẫu thuật yêu cầu C-arm liên tục.',
      },
      {
        icon: Syringe,
        title: 'Phẫu thuật tiết niệu',
        description: 'PCNL, tán sỏi, phẫu thuật nội soi tiết niệu với tư thế lithotomy tối ưu.',
      },
      {
        icon: Activity,
        title: 'Phẫu thuật thần kinh',
        description: 'Mổ cột sống, u não — yêu cầu độ ổn định và chính xác tuyệt đối.',
      },
      {
        icon: HeartPulse,
        title: 'Phẫu thuật tim mạch',
        description: 'Mổ bắc cầu, thay van tim, các phẫu thuật lồng ngực cần Trendelenburg sâu.',
      },
    ],
  },
  {
    slug: 'chammed-cu-5000',
    image: '/images/product-ent-workstation.png',
    brand: 'Chammed · Hàn Quốc',
    name: 'CHAMMED CU-5000',
    category: 'ent',
    tag: 'ENT',
    shortDesc: 'Trạm khám tai mũi họng (ENT) toàn diện: camera nội soi, đèn LED, hệ thống hút, nhiều công dụng cụ, màn hình tích hợp.',
    subtitle: 'Trạm khám Tai Mũi Họng đa chức năng',
    certifications: 'CE · KFDA · ISO 13485',
    fullDescription: [
      'CHAMMED CU-5000 là trạm khám tai mũi họng tích hợp toàn diện, được thiết kế cho phòng khám ENT hiện đại với đầy đủ công cụ chẩn đoán và thủ thuật.',
      'Hệ thống tích hợp camera nội soi HD, nguồn sáng LED lạnh, hệ thống hút chân không, và nhiều dụng cụ chuyên khoa trong một thiết kế compact tiết kiệm không gian.',
      'Màn hình Full HD tích hợp cho phép bác sĩ và bệnh nhân cùng quan sát, hỗ trợ chẩn đoán trực quan và tư vấn hiệu quả. Kết nối PACS/HIS để lưu trữ và quản lý hình ảnh.',
    ],
    highlights: [
      'Camera nội soi HD 1080p tích hợp',
      'Nguồn sáng LED lạnh 5500K',
      'Hệ thống hút chân không công suất lớn',
      'Màn hình 21.5" Full HD IPS',
      'Thiết kế compact, tiết kiệm không gian',
      'Tích hợp đa dụng cụ chuyên khoa ENT',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'Chammed Co., Ltd.' },
      { label: 'Model', value: 'CU-5000' },
      { label: 'Xuất xứ', value: 'Hàn Quốc' },
      { label: 'Camera nội soi', value: 'HD 1080p, CMOS sensor' },
      { label: 'Màn hình', value: '21.5" Full HD IPS, độ sáng 300 nit' },
      { label: 'Nguồn sáng', value: 'LED lạnh 5500K, tuổi thọ 50.000 giờ' },
      { label: 'Hệ thống hút', value: 'Chân không, áp suất điều chỉnh 0-80 kPa' },
      { label: 'Lưu trữ', value: 'Ghi hình video + chụp ảnh tức thì, USB export' },
      { label: 'Kết nối', value: 'DICOM, PACS/HIS compatible, LAN/WiFi' },
      { label: 'Nguồn điện', value: '220V, 50/60Hz' },
      { label: 'Kích thước', value: '600 x 550 x 1400 mm' },
      { label: 'Chứng nhận', value: 'CE, KFDA, ISO 13485:2016' },
    ],
    features: [
      {
        icon: Scan,
        title: 'Camera nội soi HD tích hợp',
        description: 'Cảm biến CMOS 1080p với góc nhìn rộng, hình ảnh rõ nét cho chẩn đoán chính xác.',
      },
      {
        icon: Monitor,
        title: 'Màn hình 21.5" Full HD',
        description: 'Panel IPS góc nhìn rộng 178°, cho phép bác sĩ và bệnh nhân cùng quan sát trực tiếp.',
      },
      {
        icon: Zap,
        title: 'Nguồn sáng LED lạnh',
        description: 'LED 5500K không tỏa nhiệt, tuổi thọ 50.000 giờ, ánh sáng tự nhiên cho chẩn đoán.',
      },
      {
        icon: Cpu,
        title: 'Ghi hình & kết nối PACS',
        description: 'Ghi video HD và chụp ảnh tức thì, export USB hoặc đồng bộ trực tiếp về PACS/HIS.',
      },
    ],
    applications: [
      {
        icon: Stethoscope,
        title: 'Khám tai',
        description: 'Soi tai, lấy ráy tai, đặt ống thông khí, điều trị viêm tai giữa. Camera phóng đại chi tiết.',
      },
      {
        icon: Activity,
        title: 'Khám mũi xoang',
        description: 'Nội soi mũi, rửa xoang, cắt polyp mũi, xử lý chảy máu mũi dưới nội soi.',
      },
      {
        icon: Syringe,
        title: 'Khám họng thanh quản',
        description: 'Soi thanh quản, lấy xương hóc, sinh thiết vòm họng, xử lý các tổn thương vùng họng.',
      },
      {
        icon: HeartPulse,
        title: 'Thủ thuật ENT minor',
        description: 'Cắt amidan, nạo VA, chích áp xe quanh amidan — các thủ thuật ENT thường quy tại phòng khám.',
      },
    ],
  },
  {
    slug: 'dung-cu-phau-thuat',
    image: '/images/product-surgical-tools.png',
    brand: 'KLS Martin · Đức',
    name: 'Dụng cụ phẫu thuật',
    category: 'surgical',
    tag: 'Surgical',
    shortDesc: 'Bộ dụng cụ phẫu thuật premium từ Đức: tim mạch, lồng ngực, tiêu hóa, chỉnh hình, thần kinh. Thép không gỉ y tế.',
    subtitle: 'Dụng cụ phẫu thuật cao cấp tiêu chuẩn Đức',
    certifications: 'CE · ISO 13485 · ISO 7153',
    fullDescription: [
      'Bộ dụng cụ phẫu thuật KLS Martin được sản xuất tại Đức với tiêu chuẩn chất lượng cao nhất, sử dụng thép không gỉ y tế chuyên dụng đạt tiêu chuẩn ISO 7153.',
      'Danh mục sản phẩm bao gồm đầy đủ dụng cụ cho các chuyên khoa: tim mạch, lồng ngực, tổng quát, chỉnh hình, thần kinh, và hàm mặt. Mỗi set được thiết kế tối ưu cho từng loại phẫu thuật.',
      'Mỗi dụng cụ được chế tạo với độ chính xác cao trên dây chuyền CNC, thiết kế ergonomic giảm mỏi tay, và quy trình kiểm định nghiêm ngặt 100% trước khi xuất xưởng.',
    ],
    highlights: [
      'Thép không gỉ y tế ISO 7153 cao cấp',
      'Sản xuất tại Tuttlingen, Đức',
      'Đa chuyên khoa: tim mạch, lồng ngực, tổng quát',
      'Thiết kế ergonomic, giảm mỏi tay',
      'Chịu nhiệt hấp tiệt trùng autoclave 134°C',
      'Bảo hành chính hãng, dịch vụ mài sửa',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'KLS Martin Group' },
      { label: 'Xuất xứ', value: 'Tuttlingen, Đức — thủ phủ dụng cụ phẫu thuật thế giới' },
      { label: 'Chất liệu', value: 'Thép không gỉ y tế ISO 7153 (AISI 420/440)' },
      { label: 'Tiệt trùng', value: 'Autoclave tới 134°C / 273°F, 2000+ chu kỳ' },
      { label: 'Chuyên khoa', value: 'Tim mạch, Lồng ngực, Tổng quát, Chỉnh hình, Thần kinh, Hàm mặt' },
      { label: 'Bề mặt', value: 'Satin finish chống lóa dưới đèn phẫu thuật' },
      { label: 'Gia công', value: 'CNC precision machining, kiểm tra 100%' },
      { label: 'Container', value: 'Container tiệt trùng chuyên dụng từ chính hãng' },
      { label: 'Truy xuất', value: 'Mã vạch laser trên mỗi dụng cụ, UDI compliant' },
      { label: 'Bảo hành', value: 'Chính hãng, dịch vụ mài sửa định kỳ' },
    ],
    features: [
      {
        icon: Wrench,
        title: 'Bộ set phẫu thuật theo chuyên khoa',
        description: 'Thiết kế tối ưu từng set cho từng loại phẫu thuật: major set, minor set, specialty set.',
      },
      {
        icon: Target,
        title: 'Container tiệt trùng chuyên dụng',
        description: 'Container nhôm anodized với bộ lọc vi khuẩn, đảm bảo vô trùng tuyệt đối sau autoclave.',
      },
      {
        icon: Scan,
        title: 'Hệ thống truy xuất UDI',
        description: 'Mã vạch laser khắc vĩnh viễn trên mỗi dụng cụ, tích hợp phần mềm quản lý theo dõi lifecycle.',
      },
      {
        icon: Settings,
        title: 'Dịch vụ mài sửa định kỳ',
        description: 'Chương trình bảo trì chính hãng, mài sắc và hiệu chỉnh dụng cụ theo tiêu chuẩn nhà máy.',
      },
    ],
    applications: [
      {
        icon: HeartPulse,
        title: 'Phẫu thuật tim mạch',
        description: 'Bộ dụng cụ mổ bắc cầu, thay van tim, sửa van — thiết kế chuyên biệt cho phẫu thuật tim mở.',
      },
      {
        icon: Activity,
        title: 'Phẫu thuật tổng quát',
        description: 'Set mổ bụng, mổ ruột, mổ gan mật — dụng cụ retractor, clamp, scissors đầy đủ kích cỡ.',
      },
      {
        icon: Stethoscope,
        title: 'Phẫu thuật chỉnh hình',
        description: 'Dụng cụ mổ xương, thay khớp — chisels, osteotomes, bone holding forceps chất lượng cao.',
      },
      {
        icon: Syringe,
        title: 'Phẫu thuật thần kinh',
        description: 'Micro instruments cho craniotomy, laminectomy — dụng cụ tinh xảo dưới kính hiển vi.',
      },
    ],
  },
  {
    slug: 'tu-dong-hoa-nha-thuoc',
    image: '/images/product-pharmacy-auto.png',
    brand: 'JVM · Hàn Quốc',
    name: 'Tự động hóa nhà thuốc',
    category: 'automation',
    tag: 'Automation',
    shortDesc: 'Hệ thống cấp phát thuốc tự động, robot pick & place, quản lý kho dược phẩm thông minh cho bệnh viện.',
    subtitle: 'Hệ thống Tự động hóa Nhà thuốc Bệnh viện',
    certifications: 'CE · KFDA · GMP',
    fullDescription: [
      'Hệ thống tự động hóa nhà thuốc JVM giúp tối ưu quy trình cấp phát thuốc tại bệnh viện, giảm thiểu sai sót dùng thuốc và tăng hiệu suất vận hành lên đến 300%.',
      'Robot pick & place tốc độ cao có khả năng xử lý hàng ngàn đơn thuốc mỗi ngày, tích hợp trực tiếp với hệ thống HIS/EMR bệnh viện để đảm bảo chính xác 99.99%.',
      'Phần mềm quản lý kho thông minh theo dõi hạn sử dụng FEFO (First Expired First Out), mức tồn kho realtime, và tự động đề xuất đặt hàng bổ sung khi tồn kho thấp.',
    ],
    highlights: [
      'Robot cấp phát thuốc tự động tốc độ cao',
      'Tích hợp HIS/EMR bệnh viện realtime',
      'Độ chính xác 99.99%, giảm sai sót dùng thuốc',
      'Xử lý 2000+ đơn/ngày liên tục',
      'Quản lý kho FEFO thông minh',
      'Theo dõi hạn sử dụng & cảnh báo tự động',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'JVM Co., Ltd.' },
      { label: 'Xuất xứ', value: 'Hàn Quốc' },
      { label: 'Công suất cấp phát', value: '2000+ đơn/ngày (liên tục 24/7)' },
      { label: 'Độ chính xác', value: '99.99% (giảm medication error)' },
      { label: 'Lưu trữ thuốc', value: '500+ SKU, mở rộng modular' },
      { label: 'Kết nối', value: 'HIS/EMR, HL7/FHIR, barcode/QR Code' },
      { label: 'Quản lý kho', value: 'FEFO (First Expired First Out), auto-reorder' },
      { label: 'Robot', value: 'Multi-axis robotic arm, pick & place tốc độ cao' },
      { label: 'Báo cáo', value: 'Dashboard realtime, analytics, audit trail' },
      { label: 'Nguồn điện', value: '220V, 50Hz, UPS backup' },
      { label: 'GMP', value: 'Đáp ứng tiêu chuẩn GMP nhà thuốc bệnh viện' },
      { label: 'Chứng nhận', value: 'CE, KFDA, GMP compliant' },
    ],
    features: [
      {
        icon: Cpu,
        title: 'Robot cấp phát tự động',
        description: 'Cánh tay robot đa trục pick & place tốc độ cao, cấp phát chính xác từng viên thuốc theo đơn.',
      },
      {
        icon: Monitor,
        title: 'Tích hợp HIS/EMR',
        description: 'Nhận đơn thuốc trực tiếp từ hệ thống bệnh viện qua HL7/FHIR, loại bỏ nhập liệu thủ công.',
      },
      {
        icon: Scan,
        title: 'Quản lý kho FEFO thông minh',
        description: 'Thuốc gần hết hạn được cấp phát trước, cảnh báo khi tồn kho thấp, auto-reorder via API.',
      },
      {
        icon: Activity,
        title: 'Dashboard & Analytics realtime',
        description: 'Theo dõi hiệu suất, thống kê tiêu thụ, audit trail đầy đủ cho thanh tra dược.',
      },
    ],
    applications: [
      {
        icon: Pill,
        title: 'Nhà thuốc nội trú',
        description: 'Cấp phát thuốc cho bệnh nhân nội trú theo liều đơn vị (unit-dose), giảm tồn kho tại khoa.',
      },
      {
        icon: Stethoscope,
        title: 'Nhà thuốc ngoại trú',
        description: 'Xử lý đơn thuốc ngoại trú nhanh chóng, giảm thời gian chờ bệnh nhân từ 15 phút xuống 3 phút.',
      },
      {
        icon: Syringe,
        title: 'Kho dược trung tâm',
        description: 'Quản lý kho dược tập trung, phân phối tự động cho các khoa/phòng trong bệnh viện.',
      },
      {
        icon: HeartPulse,
        title: 'Cấp cứu & ICU',
        description: 'Cung cấp thuốc cấp cứu nhanh chóng qua hệ thống STAT order, ưu tiên xử lý tức thì.',
      },
    ],
  },
  {
    slug: 'he-thong-xray-ky-thuat-so',
    image: '/images/product-xray-digital.png',
    brand: 'Philips Healthcare · Hà Lan',
    name: 'Hệ thống X-ray kỹ thuật số',
    category: 'medical-imaging',
    tag: 'Medical Imaging',
    shortDesc: 'Hệ thống X-quang kỹ thuật số Philips, chất lượng hình ảnh vượt trội, giảm liều phóng xạ cho bệnh nhân.',
    subtitle: 'Hệ thống chụp X-quang Kỹ thuật số Philips',
    certifications: 'CE · FDA · ISO 13485',
    fullDescription: [
      'Hệ thống X-ray kỹ thuật số Philips mang đến chất lượng hình ảnh vượt trội với liều phóng xạ thấp nhất trong phân khúc, bảo vệ an toàn cho cả bệnh nhân và nhân viên y tế.',
      'Công nghệ detector SkyFlow Plus với CsI scintillator cho phép chụp X-quang kỹ thuật số với độ phân giải cao 3.6 lp/mm, xử lý hình ảnh AI thông minh và workflow tối ưu.',
      'Tích hợp DICOM 3.0 và kết nối PACS giúp lưu trữ, truyền tải và chia sẻ hình ảnh dễ dàng trong toàn hệ thống bệnh viện. Hệ thống auto-positioning giảm thao tác cho kỹ thuật viên.',
    ],
    highlights: [
      'Liều phóng xạ thấp nhất phân khúc',
      'Detector SkyFlow Plus CsI scintillator',
      'Độ phân giải 3.6 lp/mm, DQE > 65%',
      'Tích hợp DICOM 3.0 / PACS',
      'AI image processing tự động',
      'Auto-positioning giảm thao tác',
    ],
    specs: [
      { label: 'Nhà sản xuất', value: 'Philips Healthcare' },
      { label: 'Xuất xứ', value: 'Hà Lan / Đức' },
      { label: 'Detector', value: 'SkyFlow Plus, CsI scintillator, TFT amorphous silicon' },
      { label: 'Kích thước detector', value: '43 x 43 cm (17" x 17")' },
      { label: 'Độ phân giải', value: '3.6 lp/mm, pixel pitch 139 μm' },
      { label: 'DQE', value: '> 65% @ 0 lp/mm, > 30% @ 2 lp/mm' },
      { label: 'Generator', value: '65 kW, high frequency, 150 kV max' },
      { label: 'Ống X-ray', value: 'Rotating anode, dual focal spot 0.6/1.2 mm' },
      { label: 'Kết nối', value: 'DICOM 3.0, PACS, RIS, HL7' },
      { label: 'Xử lý hình ảnh', value: 'AI-powered auto exposure, noise reduction' },
      { label: 'Collimator', value: 'Auto-collimation, DAP meter tích hợp' },
      { label: 'Chứng nhận', value: 'CE, FDA 510(k), ISO 13485:2016, IEC 60601' },
    ],
    features: [
      {
        icon: Scan,
        title: 'Detector SkyFlow Plus',
        description: 'CsI scintillator cho DQE cao nhất phân khúc, giảm liều phóng xạ tới 50% so với CR thông thường.',
      },
      {
        icon: Cpu,
        title: 'AI Image Processing',
        description: 'Xử lý hình ảnh AI tự động: auto exposure, noise reduction, edge enhancement, bone suppression.',
      },
      {
        icon: Monitor,
        title: 'Auto-positioning System',
        description: 'Hệ thống tự động định vị tube và detector theo chương trình chụp, giảm 60% thao tác kỹ thuật viên.',
      },
      {
        icon: Zap,
        title: 'Collimator thông minh',
        description: 'Auto-collimation + DAP meter đo liều realtime, đảm bảo ALARA (As Low As Reasonably Achievable).',
      },
    ],
    applications: [
      {
        icon: Stethoscope,
        title: 'Chẩn đoán tổng quát',
        description: 'Chụp X-quang ngực, bụng, xương khớp — hình ảnh rõ nét cho chẩn đoán nhanh chóng.',
      },
      {
        icon: Activity,
        title: 'Cấp cứu & Chấn thương',
        description: 'Chụp nhanh tại giường với detector di động, hỗ trợ chẩn đoán cấp cứu chấn thương.',
      },
      {
        icon: HeartPulse,
        title: 'Tim mạch & Hô hấp',
        description: 'Chụp tim phổi liều thấp, theo dõi tiến triển bệnh hô hấp, đánh giá bóng tim.',
      },
      {
        icon: Syringe,
        title: 'Nhi khoa',
        description: 'Chế độ chụp nhi khoa liều cực thấp, bảo vệ tối đa cho bệnh nhi theo khuyến cáo ICRP.',
      },
    ],
  },
]

export default products

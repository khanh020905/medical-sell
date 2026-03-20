export interface ArticleSection {
  id: string
  title: string
  content: string[]
  highlights?: string[]
}

export interface Article {
  id: number
  slug: string
  category: string
  date: string
  readTime: string
  image: string
  title: string
  excerpt: string
  sections: ArticleSection[]
}

const articles: Article[] = [
  {
    id: 1,
    slug: 'meditech-ky-ket-hop-tac-perfint-healthcare',
    category: 'Tin công ty',
    date: '15/03/2026',
    readTime: '5 phút đọc',
    image: '/images/news-perfint.png',
    title: 'Meditech ký kết hợp tác chiến lược với Perfint Healthcare',
    excerpt:
      'Meditech chính thức trở thành đối tác phân phối độc quyền hệ thống sinh thiết MAXIO® III của Perfint Healthcare (Ấn Độ) tại Việt Nam.',
    sections: [
      {
        id: 'gioi-thieu',
        title: 'Giới thiệu',
        content: [
          'Ngày 15/03/2026, tại trụ sở chính tại Hà Nội, **Công ty CP Vật tư và Thiết bị Y tế Hà Nội (Meditech)** đã chính thức ký kết hợp đồng hợp tác chiến lược với **Perfint Healthcare** (Ấn Độ) — nhà sản xuất hàng đầu thế giới trong lĩnh vực hệ thống robot can thiệp dẫn đường.',
          'Theo thỏa thuận, Meditech trở thành **đối tác phân phối độc quyền** hệ thống sinh thiết robot MAXIO® III tại thị trường Việt Nam, đánh dấu bước phát triển quan trọng trong chiến lược mở rộng danh mục sản phẩm công nghệ cao.',
        ],
      },
      {
        id: 've-perfint',
        title: 'Về Perfint Healthcare',
        content: [
          '**Perfint Healthcare** được thành lập năm 2005 tại Chennai, Ấn Độ, chuyên phát triển các hệ thống robot dẫn đường cho lĩnh vực can thiệp u bướu. Sản phẩm của Perfint đã được triển khai tại hơn **30 quốc gia** với hàng nghìn ca can thiệp thành công.',
        ],
        highlights: [
          '30+ quốc gia đang sử dụng sản phẩm Perfint',
          '10,000+ ca can thiệp thành công trên toàn cầu',
          'Chứng nhận FDA (Mỹ), CE Mark (EU), CFDA (Trung Quốc)',
          'Đối tác chiến lược với nhiều bệnh viện hàng đầu thế giới',
        ],
      },
      {
        id: 'he-thong-maxio',
        title: 'Hệ thống MAXIO® III',
        content: [
          'MAXIO® III là hệ thống robot can thiệp thế hệ mới nhất của Perfint Healthcare, tích hợp công nghệ dẫn đường CT/PET-CT tiên tiến:',
        ],
        highlights: [
          'Công nghệ InstaReg™ — đăng ký bệnh nhân tự động trong 10 giây',
          'Cánh tay robot 5 bậc tự do, độ chính xác <1mm',
          'Hỗ trợ biopsy, RFA, cryoablation và brachytherapy',
          'Tương thích với tất cả máy CT scan chính hãng',
          'Giao diện màn hình cảm ứng, quy trình thao tác trực quan',
        ],
      },
      {
        id: 'y-nghia-hop-tac',
        title: 'Ý nghĩa hợp tác',
        content: [
          'Việc hợp tác với Perfint Healthcare đánh dấu bước tiến quan trọng của Meditech trong lĩnh vực **robot y tế** — một xu hướng tất yếu của ngành y tế toàn cầu. Với sự hợp tác này, các bệnh viện Việt Nam sẽ có cơ hội tiếp cận công nghệ can thiệp u bướu tiên tiến nhất thế giới, giúp:',
        ],
        highlights: [
          '**Tăng độ chính xác**: Giảm thiểu sai sót trong sinh thiết và các thủ thuật can thiệp',
          '**Giảm thời gian**: Rút ngắn thời gian thủ thuật đáng kể so với phương pháp truyền thống',
          '**An toàn hơn**: Giảm tối đa liều phóng xạ cho cả bệnh nhân và bác sĩ',
        ],
      },
      {
        id: 'ke-hoach-trien-khai',
        title: 'Kế hoạch triển khai',
        content: [
          'Meditech dự kiến triển khai hệ thống MAXIO® III tại 5 bệnh viện lớn trong năm 2026:',
        ],
        highlights: [
          'Bệnh viện Đa khoa Quốc tế — Hà Nội (Q2/2026)',
          'Bệnh viện Chợ Rẫy — TP.HCM (Q3/2026)',
          'Bệnh viện Trung ương Quân đội 108 (Q3/2026)',
          'Bệnh viện Đại học Y Hà Nội (Q4/2026)',
          'Bệnh viện K — Cơ sở Tân Triều (Q4/2026)',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: '5-xu-huong-thiet-bi-y-te-2026',
    category: 'Kiến thức',
    date: '10/03/2026',
    readTime: '7 phút đọc',
    image: '/images/news-medtech.png',
    title: '5 xu hướng thiết bị y tế năm 2026 bệnh viện cần biết',
    excerpt:
      'Từ AI trong chẩn đoán hình ảnh đến tự động hóa nhà thuốc, các xu hướng công nghệ đang thay đổi diện mạo ngành y tế.',
    sections: [
      {
        id: 'tong-quan',
        title: 'Tổng quan',
        content: [
          'Năm 2026 đánh dấu bước ngoặt quan trọng trong ngành thiết bị y tế toàn cầu. Các công nghệ mới đang được triển khai nhanh chóng, thay đổi cách các bệnh viện vận hành và chăm sóc bệnh nhân.',
          'Dưới đây là 5 xu hướng nổi bật mà các bệnh viện cần nắm bắt để không bị tụt hậu trong cuộc cách mạng y tế số.',
        ],
      },
      {
        id: 'ai-chan-doan',
        title: '1. AI trong chẩn đoán hình ảnh',
        content: [
          'Trí tuệ nhân tạo đang được tích hợp sâu vào các hệ thống X-ray, CT, MRI để hỗ trợ bác sĩ phát hiện bệnh lý sớm hơn 30-40% so với phương pháp truyền thống. Các thuật toán deep learning có thể phân tích hàng nghìn hình ảnh y tế trong vài giây.',
        ],
        highlights: [
          'Phát hiện u phổi sớm với độ chính xác 95%+',
          'Giảm 40% thời gian đọc kết quả chẩn đoán',
          'Tích hợp seamless với hệ thống PACS hiện có',
        ],
      },
      {
        id: 'robot-phau-thuat',
        title: '2. Robot hỗ trợ phẫu thuật',
        content: [
          'Các hệ thống robot phẫu thuật thế hệ mới nhỏ gọn hơn, chi phí thấp hơn, và dễ tiếp cận hơn cho các bệnh viện tuyến tỉnh. Robot can thiệp dẫn đường CT như MAXIO® III đang mở ra khả năng thực hiện sinh thiết chính xác tại các cơ sở y tế quy mô vừa.',
        ],
        highlights: [
          'Độ chính xác dưới 1mm trong can thiệp',
          'Giảm 50% thời gian phẫu thuật',
          'Phục hồi nhanh hơn cho bệnh nhân',
        ],
      },
      {
        id: 'tu-dong-hoa',
        title: '3. Tự động hóa nhà thuốc bệnh viện',
        content: [
          'Hệ thống cấp phát thuốc tự động đang trở thành tiêu chuẩn tại các bệnh viện lớn. Công nghệ robot quản lý kho dược phẩm giảm thiểu sai sót cấp phát và tối ưu hóa quy trình logistics nội viện.',
        ],
        highlights: [
          'Giảm 60% sai sót trong cấp phát thuốc',
          'Tiết kiệm 30% nhân lực tại khoa Dược',
          'Quản lý hạn sử dụng và tồn kho tự động',
        ],
      },
      {
        id: 'thiet-bi-iot',
        title: '4. Thiết bị IoT và theo dõi từ xa',
        content: [
          'Internet of Things (IoT) trong y tế cho phép theo dõi bệnh nhân liên tục, cảnh báo sớm các chỉ số bất thường, và truyền dữ liệu real-time đến bác sĩ điều trị. Xu hướng này đặc biệt quan trọng trong bối cảnh telemedicine phát triển mạnh.',
        ],
        highlights: [
          'Theo dõi SpO2, nhịp tim, huyết áp 24/7',
          'Cảnh báo sớm khi chỉ số vượt ngưỡng',
          'Tích hợp với bệnh án điện tử (EMR)',
        ],
      },
      {
        id: 'in-3d',
        title: '5. In 3D trong y tế',
        content: [
          'Công nghệ in 3D đang được ứng dụng rộng rãi để tạo mô hình giải phẫu trước phẫu thuật, sản xuất implant tùy chỉnh, và nghiên cứu phát triển thiết bị y tế mới. Chi phí in 3D giảm mạnh khiến công nghệ này trở nên khả thi cho nhiều bệnh viện.',
        ],
        highlights: [
          'Mô hình giải phẫu cá nhân hóa cho phẫu thuật',
          'Implant tùy chỉnh theo hình thái bệnh nhân',
          'Giảm 25% thời gian phẫu thuật phức tạp',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'quy-dinh-moi-nhap-khau-thiet-bi-y-te-2026',
    category: 'Ngành y tế',
    date: '05/03/2026',
    readTime: '6 phút đọc',
    image: '/images/news-regulations.png',
    title: 'Quy định mới về nhập khẩu trang thiết bị y tế 2026',
    excerpt:
      'Bộ Y tế ban hành thông tư mới về quản lý trang thiết bị y tế có hiệu lực từ tháng 7/2026.',
    sections: [
      {
        id: 'boi-canh',
        title: 'Bối cảnh ban hành',
        content: [
          'Ngày 01/03/2026, Bộ Y tế chính thức ban hành **Thông tư số 15/2026/TT-BYT** quy định chi tiết về quản lý, nhập khẩu và phân phối trang thiết bị y tế. Thông tư này thay thế một số quy định cũ và có hiệu lực từ ngày 01/07/2026.',
          'Đây là bước đi quan trọng nhằm đơn giản hóa thủ tục hành chính, đồng thời nâng cao tiêu chuẩn chất lượng cho thiết bị y tế lưu hành tại Việt Nam.',
        ],
      },
      {
        id: 'thay-doi-chinh',
        title: 'Những thay đổi chính',
        content: [
          'Thông tư mới có nhiều điểm đáng chú ý mà các doanh nghiệp nhập khẩu và phân phối cần nắm rõ:',
        ],
        highlights: [
          '**Phân loại mới**: Thiết bị y tế được chia thành 4 nhóm (A, B, C, D) thay vì 3 nhóm như trước',
          '**Quy trình rút gọn**: Thiết bị nhóm A và B được áp dụng quy trình đăng ký nhanh trong 30 ngày',
          '**Chứng nhận quốc tế**: Công nhận trực tiếp chứng nhận FDA, CE Mark, TGA mà không cần thử nghiệm lại',
          '**Hậu kiểm tăng cường**: Tần suất kiểm tra định kỳ tăng từ 2 năm xuống 1 năm cho nhóm C, D',
          '**Số hóa hồ sơ**: Bắt buộc nộp hồ sơ điện tử qua Cổng dịch vụ công từ Q3/2026',
        ],
      },
      {
        id: 'tac-dong',
        title: 'Tác động đến doanh nghiệp',
        content: [
          'Các doanh nghiệp nhập khẩu và phân phối thiết bị y tế cần chuẩn bị kỹ lưỡng để thích ứng với quy định mới. Meditech đã chủ động cập nhật quy trình nội bộ để đảm bảo tuân thủ đầy đủ.',
        ],
        highlights: [
          'Cập nhật hệ thống quản lý chất lượng theo ISO 13485:2016',
          'Đào tạo nhân viên về quy trình đăng ký mới',
          'Thiết lập hệ thống truy xuất nguồn gốc điện tử',
          'Phối hợp với nhà sản xuất hoàn thiện hồ sơ kỹ thuật',
        ],
      },
      {
        id: 'lo-trinh',
        title: 'Lộ trình áp dụng',
        content: [
          'Bộ Y tế đưa ra lộ trình áp dụng theo từng giai đoạn để các doanh nghiệp có thời gian chuẩn bị:',
        ],
        highlights: [
          '**Giai đoạn 1** (07/2026): Áp dụng cho thiết bị nhóm C, D mới đăng ký',
          '**Giai đoạn 2** (01/2027): Áp dụng cho tất cả thiết bị mới đăng ký',
          '**Giai đoạn 3** (07/2027): Chuyển đổi toàn bộ giấy phép cũ sang hệ thống mới',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'meditech-trien-khai-jvm-bac-ninh',
    category: 'Tin công ty',
    date: '28/02/2026',
    readTime: '4 phút đọc',
    image: '/images/news-jvm.png',
    title: 'Meditech triển khai hệ thống JVM tại BV Đa khoa tỉnh Bắc Ninh',
    excerpt:
      'Hệ thống tự động hóa cấp phát thuốc JVM đầu tiên tại miền Bắc chính thức đi vào hoạt động.',
    sections: [
      {
        id: 'gioi-thieu',
        title: 'Giới thiệu dự án',
        content: [
          'Ngày 25/02/2026, Meditech đã hoàn thành lắp đặt và bàn giao hệ thống cấp phát thuốc tự động **JVM** tại Bệnh viện Đa khoa tỉnh Bắc Ninh. Đây là hệ thống JVM đầu tiên được triển khai tại khu vực miền Bắc Việt Nam.',
          'Dự án được thực hiện trong 3 tháng, từ khảo sát thiết kế đến lắp đặt hoàn thiện, với sự phối hợp chặt chẽ giữa đội ngũ kỹ thuật Meditech và chuyên gia JVM từ Hàn Quốc.',
        ],
      },
      {
        id: 'he-thong',
        title: 'Về hệ thống JVM',
        content: [
          'Hệ thống JVM được triển khai tại Bắc Ninh bao gồm các module chính:',
        ],
        highlights: [
          '**ATDPS-200**: Máy cấp phát thuốc tự động, xử lý 200 đơn/giờ',
          '**Robot Arm**: Cánh tay robot gắp và phân loại thuốc tự động',
          '**Smart Cabinet**: Tủ thuốc thông minh tại các khoa lâm sàng',
          '**Central Software**: Phần mềm quản lý trung tâm tích hợp HIS',
        ],
      },
      {
        id: 'ket-qua',
        title: 'Kết quả sau 1 tuần vận hành',
        content: [
          'Sau 1 tuần đi vào hoạt động, hệ thống JVM đã chứng minh hiệu quả vượt trội:',
        ],
        highlights: [
          'Giảm **60%** sai sót trong cấp phát thuốc',
          'Tăng **40%** tốc độ xử lý đơn thuốc',
          'Tiết kiệm **3 nhân viên** mỗi ca trực tại Khoa Dược',
          'Theo dõi tồn kho **real-time**, cảnh báo thuốc hết hạn tự động',
          'Truy xuất **100%** lịch sử cấp phát theo mã bệnh nhân',
        ],
      },
      {
        id: 'ke-hoach',
        title: 'Kế hoạch mở rộng',
        content: [
          'Thành công tại Bắc Ninh mở đường cho kế hoạch triển khai JVM tại nhiều bệnh viện lớn khác. Meditech dự kiến lắp đặt thêm 4 hệ thống JVM trong năm 2026 tại các bệnh viện tuyến tỉnh và trung ương.',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'huong-dan-chon-dung-cu-phau-thuat',
    category: 'Kiến thức',
    date: '20/02/2026',
    readTime: '8 phút đọc',
    image: '/images/news-surgical.png',
    title: 'Hướng dẫn chọn mua dụng cụ phẫu thuật chất lượng cao',
    excerpt:
      'Tiêu chí đánh giá chất lượng, chứng nhận cần thiết, và so sánh các thương hiệu dụng cụ phẫu thuật hàng đầu.',
    sections: [
      {
        id: 'gioi-thieu',
        title: 'Tầm quan trọng của dụng cụ phẫu thuật',
        content: [
          'Dụng cụ phẫu thuật là yếu tố then chốt ảnh hưởng trực tiếp đến kết quả phẫu thuật và sự an toàn của bệnh nhân. Việc lựa chọn dụng cụ chất lượng cao không chỉ đảm bảo hiệu quả can thiệp mà còn giảm thiểu rủi ro nhiễm khuẩn và biến chứng.',
          'Bài viết này cung cấp hướng dẫn chi tiết giúp các cơ sở y tế đưa ra quyết định chính xác khi mua sắm dụng cụ phẫu thuật.',
        ],
      },
      {
        id: 'tieu-chi',
        title: 'Tiêu chí đánh giá chất lượng',
        content: [
          'Khi đánh giá dụng cụ phẫu thuật, cần xem xét các tiêu chí sau:',
        ],
        highlights: [
          '**Chất liệu thép**: Thép không gỉ y tế (Medical Grade Stainless Steel) tiêu chuẩn AISI 420 hoặc AISI 316L',
          '**Xử lý bề mặt**: Đánh bóng bề mặt mịn, không có rỗ hay vết xước micro gây tích tụ vi khuẩn',
          '**Độ cứng**: Kiểm tra Rockwell HRC 54-58 cho lưỡi cắt, HRC 40-44 cho thân dụng cụ',
          '**Ergonomics**: Tay cầm thiết kế theo công thái học, giảm mỏi tay cho phẫu thuật viên',
          '**Khả năng tiệt trùng**: Chịu nhiệt autoclave 134°C, tương thích với các dung dịch khử trùng tiêu chuẩn',
        ],
      },
      {
        id: 'chung-nhan',
        title: 'Chứng nhận cần thiết',
        content: [
          'Các chứng nhận quan trọng mà dụng cụ phẫu thuật cần có:',
        ],
        highlights: [
          '**CE Mark** (EU): Đáp ứng tiêu chuẩn an toàn Liên minh Châu Âu',
          '**FDA 510(k)** (Mỹ): Được FDA Hoa Kỳ chấp thuận lưu hành',
          '**ISO 13485**: Hệ thống quản lý chất lượng cho thiết bị y tế',
          '**ISO 7153-1**: Tiêu chuẩn vật liệu cho dụng cụ phẫu thuật bằng thép không gỉ',
        ],
      },
      {
        id: 'thuong-hieu',
        title: 'So sánh các thương hiệu hàng đầu',
        content: [
          'Dưới đây là so sánh 3 thương hiệu dụng cụ phẫu thuật phổ biến nhất tại Việt Nam:',
          '**KLS Martin (Đức)**: 100+ năm kinh nghiệm, chuyên phẫu thuật tim mạch, lồng ngực, chỉnh hình. Chất liệu thép Đức cao cấp, bảo hành trọn đời.',
          '**Aesculap (Đức)**: Thuộc tập đoàn B.Braun, đa dạng sản phẩm từ kéo, kẹp đến dụng cụ nội soi. Hệ thống container tiệt trùng tiên tiến.',
          '**Ethicon (Mỹ)**: Thuộc Johnson & Johnson, nổi bật với dụng cụ phẫu thuật nội soi và chỉ khâu phẫu thuật. Đổi mới công nghệ liên tục.',
        ],
      },
      {
        id: 'khuyen-nghi',
        title: 'Khuyến nghị từ Meditech',
        content: [
          'Với kinh nghiệm nhiều năm cung cấp dụng cụ phẫu thuật cho hơn 200 bệnh viện, Meditech khuyến nghị:',
        ],
        highlights: [
          'Ưu tiên các thương hiệu có đại lý chính thức tại Việt Nam',
          'Yêu cầu chứng nhận CE Mark hoặc FDA cho mọi sản phẩm',
          'Kiểm tra dịch vụ hậu mãi: bảo hành, mài lại, thay thế linh kiện',
          'Thử nghiệm sản phẩm trước khi mua số lượng lớn',
          'Liên hệ Meditech để được tư vấn và báo giá miễn phí',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'ai-chan-doan-hinh-anh-viet-nam',
    category: 'Ngành y tế',
    date: '15/02/2026',
    readTime: '6 phút đọc',
    image: '/images/news-ai.png',
    title: 'AI trong chẩn đoán hình ảnh: Hiện tại và tương lai tại VN',
    excerpt:
      'Công nghệ AI đang được tích hợp vào hệ thống X-ray và siêu âm, giúp bác sĩ phát hiện bệnh lý sớm.',
    sections: [
      {
        id: 'tong-quan',
        title: 'Tổng quan',
        content: [
          'Trí tuệ nhân tạo (AI) đang cách mạng hóa lĩnh vực chẩn đoán hình ảnh y tế trên toàn thế giới. Tại Việt Nam, xu hướng này bắt đầu được các bệnh viện lớn đón nhận và triển khai từ năm 2024.',
          'Bài viết này phân tích thực trạng ứng dụng AI trong chẩn đoán hình ảnh tại Việt Nam và dự báo xu hướng phát triển trong những năm tới.',
        ],
      },
      {
        id: 'ung-dung-hien-tai',
        title: 'Ứng dụng hiện tại',
        content: [
          'Hiện tại, AI đang được ứng dụng trong 3 lĩnh vực chính tại các bệnh viện Việt Nam:',
        ],
        highlights: [
          '**Phát hiện u phổi**: Hệ thống AI hỗ trợ sàng lọc ung thư phổi qua CT ngực, độ nhạy 96%',
          '**Chẩn đoán tim mạch**: AI phân tích ECG và siêu âm tim, phát hiện bất thường trong nhịp tim',
          '**Sàng lọc mắt**: AI đọc ảnh đáy mắt phát hiện bệnh võng mạc tiểu đường giai đoạn sớm',
        ],
      },
      {
        id: 'thach-thuc',
        title: 'Thách thức triển khai',
        content: [
          'Dù có tiềm năng lớn, việc triển khai AI trong y tế Việt Nam vẫn đối mặt với nhiều thách thức:',
        ],
        highlights: [
          '**Chi phí đầu tư**: Hệ thống AI đòi hỏi hạ tầng GPU mạnh và phí bản quyền phần mềm',
          '**Dữ liệu huấn luyện**: Thiếu dataset y tế đủ lớn và đa dạng tại Việt Nam',
          '**Quy định pháp lý**: Chưa có khung pháp lý rõ ràng cho AI trong chẩn đoán y tế',
          '**Đào tạo nhân lực**: Bác sĩ cần được đào tạo để sử dụng và đánh giá kết quả AI',
        ],
      },
      {
        id: 'tuong-lai',
        title: 'Tương lai tại Việt Nam',
        content: [
          'Dự báo đến năm 2028, AI sẽ được tích hợp vào hầu hết các hệ thống chẩn đoán hình ảnh tại bệnh viện tuyến trung ương và tuyến tỉnh. Bộ Y tế đang xây dựng khung pháp lý và tiêu chuẩn cho phần mềm AI y tế.',
          'Meditech đang phối hợp với các đối tác công nghệ để mang các giải pháp AI chẩn đoán hình ảnh tiên tiến nhất đến Việt Nam, giúp rút ngắn khoảng cách công nghệ với thế giới.',
        ],
      },
    ],
  },
]

export default articles

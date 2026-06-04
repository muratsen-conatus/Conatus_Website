import type { ProductionSubsystemId } from "@/data/technology/production-system";

export type SubsystemTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type SubsystemDetailLocaleContent = {
  metaDescription: string;
  hero: {
    headline: string;
    problem: string;
    ease: string;
    experience: string;
  };
  features: {
    performance: string[];
    premium: string[];
    basic: string[];
  };
  testimonials: SubsystemTestimonial[];
};

export type SubsystemDetailContent = Record<
  "tr" | "en",
  SubsystemDetailLocaleContent
>;

const t = (
  tr: SubsystemDetailLocaleContent,
  en: SubsystemDetailLocaleContent,
): SubsystemDetailContent => ({ tr, en });

export const subsystemDetailContent: Record<
  ProductionSubsystemId,
  SubsystemDetailContent
> = {
  toolManagement: t(
    {
      metaDescription:
        "Kesici takım envanteri, ömür ve kullanım verisini tek platformda yönetin; saha tecrübesiyle şekillenen CIP Takım Yönetimi.",
      hero: {
        headline: "Kesici takım karmaşasını görünür ve yönetilebilir kılın",
        problem:
          "Takım stokları tablolarda, gerçek tüketim sahadaki makinelerde kalır. Ömür ve maliyet izlenmediğinde fire, duruş ve yanlış takım seçimi günlük operasyonu yavaşlatır.",
        ease:
          "Envanter, ömür ve kullanım verisini tek ekranda birleştirir; doğru takımı doğru istasyonda, doğru zamanda önererek planlama ve satın alma kararlarını hızlandırır.",
        experience:
          "Yüzlerce saha ziyareti ve iyileştirme projesinden süzülen ihtiyaçlarla tasarlandı; Excel ve kağıt formların yerine geçecek pratiklikte bir modül.",
      },
      features: {
        performance: [
          "Merkezi takım kartı ve stok görünürlüğü",
          "Ömür ve kullanım sayacı takibi",
          "İstasyon bazlı tüketim kaydı",
          "Kritik stok uyarıları",
        ],
        premium: [
          "Tüketim trendine göre otomatik yenileme önerisi",
          "Takım maliyeti ve fire korelasyon analizi",
          "Çok tesisli konsolide raporlama",
          "Öneri modülü ile kaizen entegrasyonu",
        ],
        basic: [
          "Rol bazlı erişim ve denetim izi",
          "Standart rapor şablonları",
          "Platform içi bildirimler",
        ],
      },
      testimonials: [
        {
          quote:
            "Takım stoğu artık ‘tahmin’ değil; hat durduğunda hangi kalemin biteceğini önceden görüyoruz.",
          name: "M. Kaya",
          role: "Üretim Planlama Müdürü",
          company: "Otomotiv tedarikçisi",
        },
        {
          quote:
            "Setup sürelerinde düşüş, takım ömrü takibinin günlük rutin haline gelmesiyle geldi.",
          name: "E. Demir",
          role: "Takım Teknolojileri Uzmanı",
          company: "Beyaz eşya üreticisi",
        },
      ],
    },
    {
      metaDescription:
        "Manage cutting tool inventory, life and usage in one platform — CIP Tool Management shaped by shop-floor experience.",
      hero: {
        headline: "Make cutting-tool complexity visible and manageable",
        problem:
          "Stock lives in spreadsheets while real consumption happens on the shop floor. Without life and cost tracking, scrap, downtime and wrong tool choices slow operations every day.",
        ease:
          "Combines inventory, life and usage on one screen; speeds planning and purchasing by recommending the right tool at the right station at the right time.",
        experience:
          "Designed from needs distilled in hundreds of plant visits and improvement projects — practical enough to replace Excel and paper forms.",
      },
      features: {
        performance: [
          "Central tool master and stock visibility",
          "Life and usage counter tracking",
          "Station-level consumption logging",
          "Critical stock alerts",
        ],
        premium: [
          "Automatic replenishment suggestions from consumption trends",
          "Tool cost and scrap correlation analysis",
          "Multi-site consolidated reporting",
          "Kaizen integration via suggestion module",
        ],
        basic: [
          "Role-based access and audit trail",
          "Standard report templates",
          "In-platform notifications",
        ],
      },
      testimonials: [
        {
          quote:
            "We finally see which inserts will run out before the line stops — stock is no longer guesswork.",
          name: "M. Kaya",
          role: "Production Planning Manager",
          company: "Automotive supplier",
        },
        {
          quote:
            "Setup times dropped once tool life tracking became part of our daily routine.",
          name: "E. Demir",
          role: "Tooling Specialist",
          company: "Appliance manufacturer",
        },
      ],
    },
  ),

  fieldManagement: t(
    {
      metaDescription:
        "Saha verisini anlık toplayın, görünür kılın ve müdahale edin — CIP Saha Yönetimi.",
      hero: {
        headline: "Saha ile ofis arasındaki bilgi gecikmesini kapatın",
        problem:
          "Üretim gerçeği sahadan gelir; veri geç veya eksik ulaştığında müdahale gecikir, kayıplar büyür.",
        ease:
          "Mobil ve masaüstü kanallarla veriyi standart formlarda toplar; anlık panolarla ekiplerin aynı tabloya bakmasını sağlar.",
        experience:
          "Hat kenarında yaşanan iletişim kopukluklarından doğdu; saha liderlerinin gerçekten kullanacağı sade akışlarla kurgulandı.",
      },
      features: {
        performance: [
          "Mobil saha veri girişi",
          "Anlık durum panoları",
          "Olay ve sapma kaydı",
          "Bildirim ve eskalasyon kuralları",
        ],
        premium: [
          "Coğrafi ve hat bazlı ısı haritaları",
          "Tahmine dayalı sapma uyarıları",
          "Offline senkronizasyon",
          "Üçüncü parti SCADA/MES köprüleri",
        ],
        basic: [
          "Form şablon yönetimi",
          "Fotoğraf ve ek dosya ekleme",
          "Çok dilli arayüz",
        ],
      },
      testimonials: [
        {
          quote:
            "Vardiya devir teslim süremiz kısaldı; herkes aynı canlı tabloya bakıyor.",
          name: "S. Yılmaz",
          role: "Saha Süpervizörü",
          company: "Metal işleme",
        },
        {
          quote:
            "Müdahale süresi ölçülebilir hale geldi; gecikmenin nedeni artık tartışma konusu değil.",
          name: "A. Çelik",
          role: "Operasyon Müdürü",
          company: "Gıda ambalaj",
        },
      ],
    },
    {
      metaDescription:
        "Collect, visualize and act on shop-floor data in real time — CIP Field Management.",
      hero: {
        headline: "Close the latency between the shop floor and the office",
        problem:
          "Production truth lives on the floor; when data arrives late or incomplete, response lags and losses grow.",
        ease:
          "Captures data through standard mobile and desktop flows; live boards keep teams aligned on one version of the truth.",
        experience:
          "Born from communication gaps at the line — built with simple flows field leaders actually adopt.",
      },
      features: {
        performance: [
          "Mobile shop-floor data capture",
          "Live status dashboards",
          "Incident and deviation logging",
          "Notification and escalation rules",
        ],
        premium: [
          "Geographic and line heat maps",
          "Predictive deviation alerts",
          "Offline synchronization",
          "Third-party SCADA/MES bridges",
        ],
        basic: [
          "Form template management",
          "Photo and attachment capture",
          "Multilingual UI",
        ],
      },
      testimonials: [
        {
          quote:
            "Shift handover is faster — everyone watches the same live board.",
          name: "S. Yılmaz",
          role: "Floor Supervisor",
          company: "Metal fabrication",
        },
        {
          quote:
            "Response time is measurable now; delay is no longer a debate.",
          name: "A. Çelik",
          role: "Operations Manager",
          company: "Food packaging",
        },
      ],
    },
  ),

  operationsManagement: t(
    {
      metaDescription:
        "Günlük operasyon planlama, izleme ve performans yönetimi — yayında olan CIP Operasyon Yönetimi.",
      hero: {
        headline: "Günlük operasyonu tek ritimde yönetin",
        problem:
          "Plan, gerçekleşen ve sapma farklı araçlarda tutulduğunda ekipler reaktif kalır; verimlilik hedefleri görünmez olur.",
        ease:
          "Planlama, izleme ve performans göstergelerini tek akışta birleştirir; günlük yönetim toplantılarını veriye dayalı hale getirir.",
        experience:
          "Üretim direktörleri ve hat liderleriyle birlikte şekillendi; ‘rapor için rapor’ değil, karar için veri prensibiyle geliştirildi.",
      },
      features: {
        performance: [
          "Günlük / haftalık operasyon planı",
          "KPI ve hedef–gerçekleşen takibi",
          "Sapma kök neden kaydı",
          "Verimlilik modülü entegrasyonu",
        ],
        premium: [
          "Senaryo bazlı kapasite simülasyonu",
          "Otomatik aksiyon önerileri",
          "Çok hatlı konsolide görünüm",
          "Yönetici mobil özeti",
        ],
        basic: [
          "Standart PDCA döngüsü şablonları",
          "Excel dışa aktarım",
          "E-posta özetleri",
        ],
      },
      testimonials: [
        {
          quote:
            "Sabah toplantımız artık 20 dakika; herkes aynı KPI setine bakıyor.",
          name: "H. Arslan",
          role: "Fabrika Müdürü",
          company: "Savunma sanayi",
        },
        {
          quote:
            "Plan–gerçekleşen farkını aynı gün kapatıyoruz; bu modül günlük ritmimizin parçası.",
          name: "D. Öztürk",
          role: "Operasyon Direktörü",
          company: "Plastik enjeksiyon",
        },
      ],
    },
    {
      metaDescription:
        "Daily operations planning, monitoring and performance — CIP Operations Management, now live.",
      hero: {
        headline: "Run daily operations on a single rhythm",
        problem:
          "When plan, actual and variance live in different tools, teams stay reactive and efficiency targets fade from view.",
        ease:
          "Unifies planning, monitoring and KPIs in one flow; makes daily management meetings evidence-based.",
        experience:
          "Co-created with plant directors and line leaders — built for decisions, not reports for their own sake.",
      },
      features: {
        performance: [
          "Daily / weekly operations plan",
          "KPI and target–actual tracking",
          "Variance root-cause logging",
          "Efficiency module integration",
        ],
        premium: [
          "Scenario-based capacity simulation",
          "Automated action suggestions",
          "Multi-line consolidated view",
          "Executive mobile digest",
        ],
        basic: [
          "Standard PDCA cycle templates",
          "Excel export",
          "Email summaries",
        ],
      },
      testimonials: [
        {
          quote:
            "Our morning meeting is 20 minutes now — everyone shares the same KPI set.",
          name: "H. Arslan",
          role: "Plant Manager",
          company: "Defence industry",
        },
        {
          quote:
            "We close plan–actual gaps the same day; this module is part of our daily rhythm.",
          name: "D. Öztürk",
          role: "Operations Director",
          company: "Injection moulding",
        },
      ],
    },
  ),

  productionManagement: t(
    {
      metaDescription:
        "Üretim emrinden sevkiyata VSM, Kanban ve hat izleme — CIP Üretim Yönetimi.",
      hero: {
        headline: "Üretim akışını uçtan uca görün ve hızlandırın",
        problem:
          "Darboğazlar gizli kalır, WIP şişer; emir–sevkiyat zinciri parçalı sistemlerde takip edilemez.",
        ease:
          "VSM, Kanban ve hat izleme modülleriyle akışı görünür kılar; çıktı ve teslim performansını anlık izlemenizi sağlar.",
        experience:
          "Yalın üretim uygulamalarından elde edilen saha dersleriyle modüler olarak inşa edildi; büyük ERP’ye alternatif değil, tamamlayıcı.",
      },
      features: {
        performance: [
          "Üretim emri ve rota takibi",
          "Hat izleme ve OEE temel metrikleri",
          "Kanban kart yönetimi",
          "VSM çizim ve lead time",
        ],
        premium: [
          "Darboğaz tahmin ve senaryo analizi",
          "Dijital iş talimatı entegrasyonu",
          "Sevkiyat–üretim senkronizasyonu",
          "Çok ürünlü hat dengeleme",
        ],
        basic: [
          "Barkod / QR ile hızlı okuma",
          "Standart üretim raporları",
          "Alarm ve duruş kodları",
        ],
      },
      testimonials: [
        {
          quote:
            "WIP’i yarıya indirdik; Kanban ve hat izleme aynı ekranda olunca akış konuşulabilir oldu.",
          name: "R. Aydın",
          role: "Üretim Müdürü",
          company: "Elektronik EMS",
        },
        {
          quote:
            "VSM artık duvar kağıdı değil; canlı veriyle güncelleniyor.",
          name: "L. Şahin",
          role: "Sürekli İyileştirme Lideri",
          company: "Otomotiv yan sanayi",
        },
      ],
    },
    {
      metaDescription:
        "From order to shipment with VSM, Kanban and line monitoring — CIP Production Management.",
      hero: {
        headline: "See and accelerate production flow end to end",
        problem:
          "Bottlenecks stay hidden, WIP swells, and the order-to-shipment chain is untraceable across fragmented systems.",
        ease:
          "VSM, Kanban and line monitoring make flow visible; track output and delivery performance in real time.",
        experience:
          "Built modularly from lean shop-floor lessons — a complement to large ERP, not a replacement.",
      },
      features: {
        performance: [
          "Production order and routing tracking",
          "Line monitoring and core OEE metrics",
          "Kanban card management",
          "VSM mapping and lead time",
        ],
        premium: [
          "Bottleneck forecasting and scenario analysis",
          "Digital work instruction integration",
          "Shipment–production synchronization",
          "Mixed-model line balancing",
        ],
        basic: [
          "Barcode / QR quick capture",
          "Standard production reports",
          "Alarms and downtime codes",
        ],
      },
      testimonials: [
        {
          quote:
            "We halved WIP — with Kanban and line monitoring on one screen, flow became discussable.",
          name: "R. Aydın",
          role: "Production Manager",
          company: "Electronics EMS",
        },
        {
          quote:
            "VSM is no longer wall paper — it updates with live data.",
          name: "L. Şahin",
          role: "Continuous Improvement Lead",
          company: "Automotive tier-1",
        },
      ],
    },
  ),

  maintenanceManagement: t(
    {
      metaDescription:
        "Önleyici bakım, iş emri ve ekipman güvenilirliği — CIP Bakım Yönetimi.",
      hero: {
        headline: "Plansız duruşu öngörülebilir bakıma dönüştürün",
        problem:
          "Arıza kayıtları dağınık, önleyici planlar uygulanmıyor; ekipman güvenilirliği maliyet ve teslimat riski yaratıyor.",
        ease:
          "İş emri, önleyici takvim ve arıza geçmişini tek yerde toplar; bakım ekiplerinin önceliklerini netleştirir.",
        experience:
          "Bakım mühendisleri ve TPM uygulayıcılarının geri bildirimleriyle evrildi; karmaşık CMMS’lerin hafif ve odaklı alternatifi.",
      },
      features: {
        performance: [
          "İş emri oluşturma ve atama",
          "Önleyici bakım takvimi",
          "Arıza kodları ve MTBF / MTTR",
          "Yedek parça bağlantısı",
        ],
        premium: [
          "Koşula dayalı bakım uyarıları",
          "Mobil teknisyen uygulaması",
          "Bakım maliyeti ve duruş korelasyonu",
          "TPM otonom bakım entegrasyonu",
        ],
        basic: [
          "Check-list şablonları",
          "Fotoğraflı kapanış raporu",
          "Bildirimler",
        ],
      },
      testimonials: [
        {
          quote:
            "Plansız duruş süremiz üç ayda gözle görülür şekilde düştü.",
          name: "C. Koç",
          role: "Bakım Müdürü",
          company: "Çimento",
        },
        {
          quote:
            "Teknisyenlerimiz iş emrini telefonda değil, sistemden yönetiyor.",
          name: "F. Güneş",
          role: "TPM Koordinatörü",
          company: "Kağıt ambalaj",
        },
      ],
    },
    {
      metaDescription:
        "Preventive maintenance, work orders and asset reliability — CIP Maintenance Management.",
      hero: {
        headline: "Turn unplanned downtime into predictable maintenance",
        problem:
          "Failure records are scattered, preventive plans slip, and asset reliability creates cost and delivery risk.",
        ease:
          "Consolidates work orders, preventive schedules and failure history; clarifies priorities for maintenance teams.",
        experience:
          "Evolved with maintenance engineers and TPM practitioners — a focused, lighter alternative to heavy CMMS.",
      },
      features: {
        performance: [
          "Work order creation and assignment",
          "Preventive maintenance calendar",
          "Failure codes and MTBF / MTTR",
          "Spare parts linkage",
        ],
        premium: [
          "Condition-based maintenance alerts",
          "Mobile technician app",
          "Maintenance cost and downtime correlation",
          "TPM autonomous maintenance integration",
        ],
        basic: [
          "Checklist templates",
          "Photo-rich closure reports",
          "Notifications",
        ],
      },
      testimonials: [
        {
          quote:
            "Unplanned downtime dropped visibly within three months.",
          name: "C. Koç",
          role: "Maintenance Manager",
          company: "Cement",
        },
        {
          quote:
            "Technicians manage work orders in the system, not on the phone.",
          name: "F. Güneş",
          role: "TPM Coordinator",
          company: "Paper packaging",
        },
      ],
    },
  ),

  qualityManagement: t(
    {
      metaDescription:
        "Kalite kontrol, uygunsuzluk ve sürekli iyileştirme verisi — CIP Kalite Yönetimi.",
      hero: {
        headline: "Kalite verisini karar mekanizmasına dönüştürün",
        problem:
          "Kontrol sonuçları ve uygunsuzluklar gecikmeli veya tutarsız kaydedildiğinde tekrarlayan hatalar ve müşteri riski artar.",
        ease:
          "Kontrol planları, uygunsuzluk akışı ve trend analizlerini standartlaştırır; kalite ekibinin müdahalesini hızlandırır.",
        experience:
          "ISO ve yalın kalite uygulamalarından gelen ortak ihtiyaçlarla tasarlandı; denetim hazırlığını kolaylaştıran izlenebilirlik sunar.",
      },
      features: {
        performance: [
          "Kontrol planı ve ölçüm kaydı",
          "Uygunsuzluk (NCR) yönetimi",
          "Hata kodları ve Pareto",
          "Lot / seri izlenebilirlik",
        ],
        premium: [
          "İstatistiksel proses kontrol (SPC)",
          "Tedarikçi kalite portalı",
          "8D ve CAPA iş akışı",
          "Müşteri şikayeti entegrasyonu",
        ],
        basic: [
          "Dijital kontrol listeleri",
          "Ek ve fotoğraf",
          "Rol onay akışları",
        ],
      },
      testimonials: [
        {
          quote:
            "Tekrarlayan uygunsuzluk oranımız düştü; kök neden artık kayıt altında.",
          name: "N. Acar",
          role: "Kalite Müdürü",
          company: "Medikal cihaz",
        },
        {
          quote:
            "Denetim öncesi veri toplama stresi kalmadı; izlenebilirlik hazır.",
          name: "P. Erdem",
          role: "Kalite Sistemleri Uzmanı",
          company: "Kimya",
        },
      ],
    },
    {
      metaDescription:
        "Quality control, non-conformance and continuous improvement data — CIP Quality Management.",
      hero: {
        headline: "Turn quality data into a decision engine",
        problem:
          "When inspection results and non-conformances are logged late or inconsistently, repeat defects and customer risk increase.",
        ease:
          "Standardizes control plans, NCR flows and trend analysis; speeds quality team response.",
        experience:
          "Designed around shared needs from ISO and lean quality practice — traceability that eases audit readiness.",
      },
      features: {
        performance: [
          "Control plan and measurement logging",
          "Non-conformance (NCR) management",
          "Defect codes and Pareto",
          "Lot / serial traceability",
        ],
        premium: [
          "Statistical process control (SPC)",
          "Supplier quality portal",
          "8D and CAPA workflows",
          "Customer complaint integration",
        ],
        basic: [
          "Digital checklists",
          "Attachments and photos",
          "Role approval flows",
        ],
      },
      testimonials: [
        {
          quote:
            "Repeat non-conformance rate fell — root causes are finally on record.",
          name: "N. Acar",
          role: "Quality Manager",
          company: "Medical devices",
        },
        {
          quote:
            "Pre-audit data crunch stress is gone — traceability is ready.",
          name: "P. Erdem",
          role: "Quality Systems Specialist",
          company: "Chemicals",
        },
      ],
    },
  ),
};

export function getSubsystemDetailContent(
  id: ProductionSubsystemId,
  locale: string,
): SubsystemDetailLocaleContent {
  const block = subsystemDetailContent[id];
  return locale === "en" ? block.en : block.tr;
}

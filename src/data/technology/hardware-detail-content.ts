import type { HardwareProductId } from "@/data/technology/hardware-product-images";

export type HardwareDetailLocaleContent = {
  metaDescription: string;
  hero: {
    headline: string;
    problem: string;
    ease: string;
    experience: string;
  };
  capabilities: {
    title: string;
    description: string;
    items: string[];
  };
  applications: {
    title: string;
    items: string[];
  };
  platform: {
    title: string;
    description: string;
  };
};

export type HardwareDetailContent = Record<"tr" | "en", HardwareDetailLocaleContent>;

const loc = (
  tr: HardwareDetailLocaleContent,
  en: HardwareDetailLocaleContent,
): HardwareDetailContent => ({ tr, en });

export const hardwareDetailContent: Record<
  HardwareProductId,
  HardwareDetailContent
> = {
  lines: loc(
    {
      metaDescription:
        "Seri üretim hatları: ürün ve hacim ihtiyacınıza göre hat tasarımı, robotik entegrasyon ve CIP ile saha verisi.",
      hero: {
        headline: "Ürününüze özel seri üretim hattı",
        problem:
          "Mevcut hat kapasitesi pazar talebini karşılamıyor; manuel adımlar darboğaz yaratıyor ve veri hat üzerinde toplanmıyor.",
        ease:
          "Ürün akışından robot yerleşimine kadar uçtan uca hat tasarımı; sensör ve otomasyon katmanlarıyla Platform’a bağlanabilir yapı.",
        experience:
          "Otomotivden beyaz eşyaya onlarca hat devreye alma tecrübesi; DEGER modeliyle keşiften devreye almaya kadar proje yönetimi.",
      },
      capabilities: {
        title: "Hat tasarımında neler sunuyoruz?",
        description:
          "Fiziksel hat ile dijital izleme birlikte kurgulanır; yalnızca makine değil, ölçülebilir operasyon hedeflenir.",
        items: [
          "Ürün ve takt süresine göre hat dengesi ve istasyon dizilimi",
          "Pick & place, montaj ve test istasyonları entegrasyonu",
          "Robot kolu ve konveyör senkronizasyonu",
          "Andon, sensör ve OEE veri noktaları için hazırlık",
          "Emniyet bariyerleri ve ergonomi standartlarına uyum",
          "Devreye alma, operatör eğitimi ve süreç dokümantasyonu",
        ],
      },
      applications: {
        title: "Tipik kullanım alanları",
        items: [
          "Yeni ürün lansmanı ve kapasite artırımı",
          "Manuel montajın otomasyona geçişi",
          "Mevcut hattın yeniden dengelenmesi (rebalancing)",
          "Fason üretimde hat kurulumu ve devri",
        ],
      },
      platform: {
        title: "CIP ile bağlantı",
        description:
          "Hat üzerindeki sensör ve istasyon verileri Conatus Improvement Platform’a aktarılabilir; üretim yönetimi ve hat izleme modülleriyle darboğazlar görünür hale gelir.",
      },
    },
    {
      metaDescription:
        "Serial production lines tailored to your product and volume, with robotics integration and shop-floor data via CIP.",
      hero: {
        headline: "Serial production lines built for your product",
        problem:
          "Current line capacity no longer meets demand; manual steps create bottlenecks and data is not captured on the line.",
        ease:
          "End-to-end line design from product flow to robot layout, connectable to the Platform through sensors and automation layers.",
        experience:
          "Dozens of lines commissioned from automotive to appliances; project management from discovery to go-live using the DEGER model.",
      },
      capabilities: {
        title: "What we deliver in line design",
        description:
          "Physical layout and digital monitoring are designed together — the goal is measurable operations, not machines alone.",
        items: [
          "Line balancing and station sequence based on product and takt time",
          "Integration of pick & place, assembly and test stations",
          "Robot arm and conveyor synchronisation",
          "Prepared data points for andon, sensors and OEE",
          "Safety guarding and ergonomic compliance",
          "Commissioning, operator training and process documentation",
        ],
      },
      applications: {
        title: "Typical use cases",
        items: [
          "New product launch and capacity expansion",
          "Transition from manual assembly to automation",
          "Rebalancing of existing lines",
          "Line build and handover in contract manufacturing",
        ],
      },
      platform: {
        title: "Connection to CIP",
        description:
          "Sensor and station data from the line can feed the Conatus Improvement Platform, making bottlenecks visible through production and line-monitoring modules.",
      },
    },
  ),
  fixtures: loc(
    {
      metaDescription:
        "Montaj ve malzeme akışı için özel fikstürler, raflar ve depolama çözümleri — yalın saha uygulaması.",
      hero: {
        headline: "Montaj ve akış için özel fikstürler",
        problem:
          "Standart raf ve aparatlar ürün varyantlarına uyumsuz; hatalı montaj ve arama süresi operasyonu yavaşlatıyor.",
        ease:
          "Ürün geometrisine ve operatör hareketine göre fikstür, raf ve malzeme sunum sistemleri; hızlı setup ve görsel yönetim.",
        experience:
          "Yalın üretim saha ziyaretlerinden süzülen ergonomi ve malzeme akışı prensipleriyle tasarlanmış çözümler.",
      },
      capabilities: {
        title: "Fikstür ve raf yetenekleri",
        description:
          "Her aparat, sahadaki gerçek kullanım senaryosuna göre tasarlanır ve üretilir.",
        items: [
          "Montaj ve kontrol fikstürleri",
          "FIFO raflar ve malzeme sunum üniteleri",
          "Kitting ve set hazırlık istasyonları",
          "Hızlı değişim (SMED) için modüler aparatlar",
          "Alüminyum profil, sac ve kompozit malzeme seçenekleri",
          "CAD, prototip ve saha doğrulama",
        ],
      },
      applications: {
        title: "Tipik kullanım alanları",
        items: [
          "Varyantlı montaj hatları",
          "Depo ve üretim arası malzeme sunumu",
          "Kalite kontrol noktalarında sabitleme",
          "5S ve görsel yönetim projeleri",
        ],
      },
      platform: {
        title: "CIP ile bağlantı",
        description:
          "Fikstür ve malzeme noktalarına sensör eklenebilir; stok ve tüketim verisi saha yönetimi modülleriyle izlenebilir.",
      },
    },
    {
      metaDescription:
        "Custom fixtures, racks and presentation systems for assembly and material flow — lean shop-floor practice.",
      hero: {
        headline: "Custom fixtures for assembly and flow",
        problem:
          "Standard racks and jigs do not fit product variants; wrong assembly and search time slow operations.",
        ease:
          "Fixtures, racks and presentation systems aligned to product geometry and operator motion; fast setup and visual control.",
        experience:
          "Solutions shaped by ergonomics and material-flow principles from lean manufacturing plant visits.",
      },
      capabilities: {
        title: "Fixture and rack capabilities",
        description: "Every jig is designed and built for real shop-floor usage.",
        items: [
          "Assembly and inspection fixtures",
          "FIFO racks and presentation units",
          "Kitting and set-preparation stations",
          "Modular jigs for quick changeover (SMED)",
          "Aluminium extrusion, sheet metal and composite options",
          "CAD, prototyping and shop-floor validation",
        ],
      },
      applications: {
        title: "Typical use cases",
        items: [
          "Variant assembly lines",
          "Presentation between warehouse and production",
          "Fixturing at quality checkpoints",
          "5S and visual management projects",
        ],
      },
      platform: {
        title: "Connection to CIP",
        description:
          "Sensors can be added at fixture and material points; stock and consumption can be tracked via field-management modules.",
      },
    },
  ),
  karakuri: loc(
    {
      metaDescription:
        "Yalın karakuri ve mekanik yardımcı sistemler — enerji verimli, sürdürülebilir saha çözümleri.",
      hero: {
        headline: "Yalın karakuri ve mekanik yardımcı sistemler",
        problem:
          "Pnömatik veya karmaşık otomasyon yüksek bakım ve enerji maliyeti getiriyor; basit işler için aşırı mühendislik yapılıyor.",
        ease:
          "Yerçekimi ve mekanik prensiplerle çalışan karakuri; operatör yükünü azaltır, enerji tüketmez, bakımı kolaydır.",
        experience:
          "Toyota Production System yaklaşımına uygun yalın çözümler; saha çalışanlarının fikirlerini hayata geçirme kültürüyle uyumlu.",
      },
      capabilities: {
        title: "Karakuri tasarım yaklaşımı",
        description:
          "Basitlik, güvenilirlik ve sürdürülebilirlik ön plandadır; gerektiğinde sensörle Platform’a bağlanabilir.",
        items: [
          "Yerçekimi ile malzeme besleme ve boşaltma",
          "Döner, eğimli ve kaldıraç kolları",
          "Otomatik kapak ve kapak kilitleme mekanizmaları",
          "Operatör ergonomisi ve tekrarlayan hareket azaltma",
          "Düşük maliyetli prototip ve saha testi",
          "Bakım ve ayar talimatları",
        ],
      },
      applications: {
        title: "Tipik kullanım alanları",
        items: [
          "Hafif parça taşıma ve sunum",
          "Otomatik besleme ve boşaltma noktaları",
          "Kaizen projelerinde hızlı iyileştirme",
          "Enerji maliyetini düşürme hedefleri",
        ],
      },
      platform: {
        title: "CIP ile bağlantı",
        description:
          "Karakuri noktalarına sayaç veya sensör eklenebilir; malzeme tüketimi ve öneri modülüyle iyileştirme döngüsü desteklenir.",
      },
    },
    {
      metaDescription:
        "Lean karakuri and mechanical assist systems — energy-efficient, sustainable shop-floor solutions.",
      hero: {
        headline: "Lean karakuri and mechanical assist systems",
        problem:
          "Pneumatic or complex automation brings high maintenance and energy cost; simple tasks are over-engineered.",
        ease:
          "Karakuri driven by gravity and mechanics; reduces operator strain, uses no energy, easy to maintain.",
        experience:
          "Lean solutions aligned with TPS thinking; compatible with a culture of implementing frontline ideas.",
      },
      capabilities: {
        title: "Karakuri design approach",
        description:
          "Simplicity, reliability and sustainability come first; sensors can connect to the Platform when needed.",
        items: [
          "Gravity-fed material supply and discharge",
          "Rotary, inclined and lever arms",
          "Automatic lids and latching mechanisms",
          "Operator ergonomics and reduced repetitive motion",
          "Low-cost prototyping and shop-floor trials",
          "Maintenance and adjustment instructions",
        ],
      },
      applications: {
        title: "Typical use cases",
        items: [
          "Light part handling and presentation",
          "Auto feed and discharge points",
          "Quick improvements in kaizen projects",
          "Energy-cost reduction targets",
        ],
      },
      platform: {
        title: "Connection to CIP",
        description:
          "Counters or sensors can be added at karakuri points; material use and the suggestion module can support improvement cycles.",
      },
    },
  ),
  custom: loc(
    {
      metaDescription:
        "Özel mühendislik: keşif, tasarım, imalat ve devreye alma — DEGER yaklaşımıyla uçtan uca proje yönetimi.",
      hero: {
        headline: "Özel mühendislik ve proje yönetimi",
        problem:
          "Standart ürünler saha ihtiyacını karşılamıyor; tedarikçi, danışman ve üretici arasında koordinasyon kopuk.",
        ease:
          "Tek sorumlu ekip: keşif, konsept, detay tasarım, imalat, kurulum ve operatör devri — danışmanlık ve eğitimle desteklenir.",
        experience:
          "Conatus’un danışmanlık ve eğitim hizmetleriyle entegre; sürdürülebilir sonuç için DEGER modeli uygulanır.",
      },
      capabilities: {
        title: "Proje kapsamı",
        description:
          "İhtiyaca göre yalnızca mühendislik veya anahtar teslim uygulama; yazılım ve donanım birlikte planlanabilir.",
        items: [
          "Saha keşfi ve ihtiyaç analizi",
          "Konsept ve fizibilite çalışması",
          "3D tasarım, simülasyon ve risk değerlendirmesi",
          "İmalat, montaj ve saha kurulumu",
          "Devreye alma, eğitim ve dokümantasyon",
          "Performans ölçümü ve iyileştirme döngüsü",
        ],
      },
      applications: {
        title: "Ne zaman tercih edilir?",
        items: [
          "Benzersiz ürün veya proses gereksinimleri",
          "Mevcut tesis yenileme (brownfield) projeleri",
          "Platform + Products birlikte yatırım",
          "Tedarik zinciri darboğazına özel çözüm",
        ],
      },
      platform: {
        title: "Bütüncül ekosistem",
        description:
          "Özel mühendislik projeleri CIP yazılımı ve diğer Products hatlarıyla birlikte kurgulanabilir; danışmanlık ve eğitim ile sürdürülebilirlik sağlanır.",
      },
    },
    {
      metaDescription:
        "Custom engineering from discovery to go-live — end-to-end project management with the DEGER approach.",
      hero: {
        headline: "Custom engineering and project delivery",
        problem:
          "Standard products do not fit the shop floor; coordination breaks between supplier, consultant and manufacturer.",
        ease:
          "Single accountable team: discovery, concept, detailed design, build, installation and handover — supported by consulting and training.",
        experience:
          "Integrated with Conatus consulting and training; the DEGER model applied for sustainable outcomes.",
      },
      capabilities: {
        title: "Project scope",
        description:
          "Engineering-only or turnkey delivery; software and hardware can be planned together.",
        items: [
          "Shop-floor discovery and needs analysis",
          "Concept and feasibility study",
          "3D design, simulation and risk assessment",
          "Manufacturing, assembly and on-site installation",
          "Commissioning, training and documentation",
          "Performance measurement and improvement cycles",
        ],
      },
      applications: {
        title: "When to choose this path",
        items: [
          "Unique product or process requirements",
          "Brownfield refurbishment projects",
          "Combined Platform + Products investment",
          "Solutions for specific supply-chain bottlenecks",
        ],
      },
      platform: {
        title: "Holistic ecosystem",
        description:
          "Custom engineering can be designed with CIP software and other Products lines; consulting and training ensure sustainability.",
      },
    },
  ),
};

export function getHardwareDetailContent(
  id: HardwareProductId,
  locale: string,
): HardwareDetailLocaleContent {
  const block = hardwareDetailContent[id];
  return locale === "en" ? block.en : block.tr;
}

export type CarouselTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageSrc: string;
};

/** Kart gövdesinde sabit 5 satır alıntı alanı için üst sınır */
export const TESTIMONIAL_QUOTE_MAX_LENGTH = 118;
const TESTIMONIAL_NAME_MAX_LENGTH = 32;
const TESTIMONIAL_ROLE_MAX_LENGTH = 42;
const TESTIMONIAL_COMPANY_MAX_LENGTH = 36;

function clampText(value: string, max: number): string {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function normalizeTestimonial(item: CarouselTestimonial): CarouselTestimonial {
  return {
    ...item,
    quote: clampText(item.quote, TESTIMONIAL_QUOTE_MAX_LENGTH),
    name: clampText(item.name, TESTIMONIAL_NAME_MAX_LENGTH),
    role: clampText(item.role, TESTIMONIAL_ROLE_MAX_LENGTH),
    company: clampText(item.company, TESTIMONIAL_COMPANY_MAX_LENGTH),
  };
}

const images = {
  person1: "/testimonials/person-1.jpg",
  person2: "/testimonials/person-2.jpg",
  person3: "/testimonials/person-3.jpg",
  person4: "/testimonials/person-4.jpg",
  person5: "/testimonials/person-5.jpg",
  person6: "/testimonials/person-6.jpg",
} as const;

const carouselTr: CarouselTestimonial[] = [
  {
    id: "tr-1",
    quote:
      "Conatus gerçekten fark yarattı. Önerileri verimliliğimizi artırdı, maliyet görünürlüğümüz netleşti.",
    name: "Ayşe Yılmaz",
    role: "Operasyon Müdürü",
    company: "Otomotiv tedarikçisi",
    imageSrc: images.person1,
  },
  {
    id: "tr-2",
    quote:
      "Üretimde zorlanıyorduk; Conatus zayıf noktaları netleştirdi. Bugün hat performansımız istikrarlı.",
    name: "Can Demir",
    role: "Üretim Direktörü",
    company: "Beyaz eşya üreticisi",
    imageSrc: images.person2,
  },
  {
    id: "tr-3",
    quote:
      "Her büyük kapasite artışında Conatus’tan görüş alıyoruz. Yatırım kararlarımız her seferinde güçleniyor.",
    name: "Elif Korkmaz",
    role: "Tesis Yöneticisi",
    company: "Metal işleme",
    imageSrc: images.person3,
  },
  {
    id: "tr-4",
    quote:
      "Saha verisi artık toplantıda değil, ekranda. Planlama ile üretim aynı gerçeği konuşuyor.",
    name: "Murat Şahin",
    role: "Bakım Koordinatörü",
    company: "Savunma sanayi",
    imageSrc: images.person4,
  },
  {
    id: "tr-5",
    quote:
      "Kalite kayıtları dağınıktı; modül sayesinde izlenebilirlik denetimlerinde ciddi zaman kazandık.",
    name: "Zeynep Arslan",
    role: "Kalite Müdürü",
    company: "Plastik enjeksiyon",
    imageSrc: images.person5,
  },
  {
    id: "tr-6",
    quote:
      "Takım ve stok yönetimi Excel’den çıktı. Setup süreleri ve fire oranı gözle görülür düştü.",
    name: "Burak Öztürk",
    role: "Takım Teknolojileri Lideri",
    company: "Makine imalat",
    imageSrc: images.person6,
  },
];

const carouselEn: CarouselTestimonial[] = [
  {
    id: "en-1",
    quote:
      "Conatus really made a difference. Their guidance improved productivity and gave us clear cost visibility.",
    name: "Ayşe Yılmaz",
    role: "Operations Manager",
    company: "Automotive supplier",
    imageSrc: images.person1,
  },
  {
    id: "en-2",
    quote:
      "We were struggling on the floor; Conatus surfaced the weak spots. Line performance is stable again.",
    name: "Can Demir",
    role: "Production Director",
    company: "Appliance manufacturer",
    imageSrc: images.person2,
  },
  {
    id: "en-3",
    quote:
      "We bring Conatus in on every major capacity increase. Investment decisions are stronger every time.",
    name: "Elif Korkmaz",
    role: "Plant Manager",
    company: "Metal fabrication",
    imageSrc: images.person3,
  },
  {
    id: "en-4",
    quote:
      "Shop-floor data lives on screen now, not in meetings. Planning and production share one truth.",
    name: "Murat Şahin",
    role: "Maintenance Coordinator",
    company: "Defense industry",
    imageSrc: images.person4,
  },
  {
    id: "en-5",
    quote:
      "Quality records were scattered; traceability in audits is far faster with the module in daily use.",
    name: "Zeynep Arslan",
    role: "Quality Manager",
    company: "Injection molding",
    imageSrc: images.person5,
  },
  {
    id: "en-6",
    quote:
      "Tool and stock management left Excel. Setup times and scrap dropped in a way we could measure.",
    name: "Burak Öztürk",
    role: "Tooling Team Lead",
    company: "Machine building",
    imageSrc: images.person6,
  },
];

export function getSubsystemTestimonialsCarousel(
  locale: string,
): CarouselTestimonial[] {
  const items = locale === "en" ? carouselEn : carouselTr;
  return items.map(normalizeTestimonial);
}

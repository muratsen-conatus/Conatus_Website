export const logos = {
  color: "/logos/logo-color.png",
  black: "/logos/logo-black.png",
  white: "/logos/logo-white.png",
  colorBg: "/logos/logo-color-bg.png",
} as const;

export const siteConfig = {
  name: "CONATUS",
  url: "https://www.conatus.com.tr",
  email: "info@conatus.com.tr",
  phone: "+90 505 398 7430",
} as const;

/** Footer sosyal medya — URL'leri güncelleyin */
export const socialLinks = [
  {
    id: "linkedin" as const,
    href: "https://www.linkedin.com/company/conatus",
    labelKey: "linkedin" as const,
  },
  {
    id: "youtube" as const,
    href: "https://www.youtube.com/@conatus",
    labelKey: "youtube" as const,
  },
  {
    id: "instagram" as const,
    href: "https://www.instagram.com/conatus",
    labelKey: "instagram" as const,
  },
] as const;

export const navItems = [
  { href: "/" as const, labelKey: "home" as const },
  { href: "/kurumsal" as const, labelKey: "corporate" as const },
  { href: "/danismanlik" as const, labelKey: "consulting" as const },
  { href: "/egitim" as const, labelKey: "training" as const },
  { href: "/teknoloji" as const, labelKey: "technology" as const },
] as const;

export const heroSlideSources = [
  "/hero/slide-matrix.png",
  "/hero/slide-consulting.jpg",
  "/hero/slide-training.jpg",
  "/hero/slide-technology.jpg",
] as const;

export const whyUsSlideSources = [
  "/why-us/slide-1.jpg",
  "/why-us/slide-2.jpg",
  "/why-us/slide-3.jpg",
] as const;

/** Kurumsal Değerler carousel ile aynı çerçeve ve görsel yerleşimi */
export const framedCarouselProps = {
  imageFit: "contain" as const,
  aspectClassName: "aspect-[3/2]",
  imagePaddingClassName: "p-2 sm:p-3",
};

export const corporateAssets = {
  aboutVideo: "/corporate/about-video.mp4",
  valuesCover: "/corporate/values/cover.png",
  valuesImages: Array.from({ length: 15 }, (_, i) =>
    `/corporate/values/value-${String(i + 1).padStart(2, "0")}.jpg`,
  ),
  /** İlk N görsel «Değerler», kalanlar «Yol gösterici ilkeler» sekmesinde */
  valuesTabSplit: 5,
  team: [
    {
      photo: "/corporate/team/murat-sen.png",
      memberKey: "murat" as const,
      slug: "murat-sen",
    },
    {
      photo: "/corporate/team/tayfun-yoru.png",
      memberKey: "tayfun" as const,
      slug: "tayfun-yoru",
    },
  ],
} as const;

export const teamMemberSlugs = corporateAssets.team.map((m) => m.slug);

export type TeamMemberSlug = (typeof teamMemberSlugs)[number];


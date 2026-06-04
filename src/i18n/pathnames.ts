export const pathnames = {
  "/": "/",
  "/kurumsal": "/kurumsal",
  "/kurumsal/ekip/[slug]": "/kurumsal/ekip/[slug]",
  "/danismanlik": "/danismanlik",
  "/egitim": "/egitim",
  "/egitim/[slug]": "/egitim/[slug]",
  "/egitim/program/[slug]": "/egitim/program/[slug]",
  "/teknoloji": "/teknoloji",
  "/teknoloji/[slug]": "/teknoloji/[slug]",
  "/iletisim": "/iletisim",
  "/gizlilik-kvkk": "/gizlilik-kvkk",
} as const;

export type Pathname = keyof typeof pathnames;

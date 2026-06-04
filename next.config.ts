import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Eski yerelleştirilmiş EN URL'leri (training, consulting, …) gerçek
 * uygulama rotalarına yönlendirir. Hedefler dosya sistemindeki segmentlerdir.
 */
const legacyEnPathRedirects = [
  { source: "/en/about", destination: "/en/kurumsal" },
  { source: "/en/about/team/:slug", destination: "/en/kurumsal/ekip/:slug" },
  { source: "/en/consulting", destination: "/en/danismanlik" },
  { source: "/en/training", destination: "/en/egitim" },
  { source: "/en/training/program/:slug", destination: "/en/egitim/program/:slug" },
  { source: "/en/training/:slug", destination: "/en/egitim/:slug" },
  { source: "/en/technology", destination: "/en/teknoloji" },
  { source: "/en/technology/:slug", destination: "/en/teknoloji/:slug" },
  { source: "/en/contact", destination: "/en/iletisim" },
  { source: "/en/privacy", destination: "/en/gizlilik-kvkk" },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return legacyEnPathRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default withNextIntl(nextConfig);

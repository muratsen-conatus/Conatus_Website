import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Manrope } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";

/** Tarayıcı önbelleğini aşmak için sürüm parametresi — favicon sembolü */
const FAVICON_VERSION = "3";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: `/Favicons/browser.png?v=${FAVICON_VERSION}`,
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: `/Favicons/browser.png?v=${FAVICON_VERSION}`,
    apple: [
      {
        url: `/Favicons/iPhone.png?v=${FAVICON_VERSION}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={manrope.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

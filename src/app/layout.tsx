import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.conatus.com.tr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

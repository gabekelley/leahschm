import type { Metadata } from "next";
import { DM_Sans, Old_Standard_TT, Azeret_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WIPBanner from "@/components/WIPBanner";
import { HalloProvider } from "@/contexts/HalloContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const oldStandard = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-old-standard",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-azeret-mono",
});

export const metadata: Metadata = {
  title: "Leah Schmidt — Product Designer & Illustrator",
  description:
    "Leah Schmidt is a product designer and illustrator based in Richmond, Virginia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${oldStandard.variable} ${azeretMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <HalloProvider>
          <WIPBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </HalloProvider>
      </body>
    </html>
  );
}

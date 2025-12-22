import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Roboto,
  Noto_Sans,
} from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontMozillaHeadline = localFont({
  src: [
    {
      path: "../../public/fonts/Mozilla-Headline-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mozilla-Headline-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mozilla-Headline-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mozilla-headline",
});

const fontJetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const fontNotoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "MechEngineerLK",
  description: "A portfolio and blog for a Mechanical Engineering professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.variable} ${fontMozillaHeadline.variable} ${fontJetBrainsMono.variable} ${fontRoboto.variable} ${fontNotoSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

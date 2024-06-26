import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/footer/footer";
import Headers from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdiDev",
  description: "Portfolio developed using Next JS, Tailwind, Framer Motion, NextUI, ShadCN/UI & Aceternity UI",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            <Headers />
          </header>
          <main className="mt-16 mb-6 lg:mb-10 dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
            <div className="bg-gradient-to-bl from-white/60 dark:from-black/90 via-transparent dark:via-transparent to-white/60  dark:to-black/90">
              <div className="bg-gradient-to-br from-white/60 dark:from-black/90 via-transparent dark:via-transparent to-white/60 dark:to-black/90">{children}
              </div>
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

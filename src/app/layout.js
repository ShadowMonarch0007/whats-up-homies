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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            <Headers/>
          </header>
          <main  className="mb-6 lg:mb-10">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

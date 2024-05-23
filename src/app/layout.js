import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdiDev",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
    borderRadius: "50%",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

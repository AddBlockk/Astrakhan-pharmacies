import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./media";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Астраханские аптеки",
  description: "Астраханские аптеки",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`open_Sans.className bg-[#23272F] max-w-[320px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] text-white h-[100%] scrollbar scrollbar-none m-[0_auto]`}
      >
        <div className="min-h-[100vh] flex flex-col">
          <div className="z-0" />
          <Header />
          <main /*className=flex flex-[1_1_auto]*/>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

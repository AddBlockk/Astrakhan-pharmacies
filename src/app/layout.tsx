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
    <html lang="en" className="h-[100%]">
      <body
        className={`open_Sans.className bg-[#23272F] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] h-[100%] text-white scrollbar scrollbar-none m-[0_auto]`}
      >
        <div className="min-h-[100%] flex flex-col">
          <div className="mb-[100px]">
            <Header />
          </div>
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

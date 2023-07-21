import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

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
        className={`open_Sans.className bg-black max-w-[1180px] m-auto text-white h-[100%] scrollbar scrollbar-none`}
      >
        <div className="min-h-[100vh] flex flex-col">
          <Header />
          <main className="flex flex-[1_1_auto]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

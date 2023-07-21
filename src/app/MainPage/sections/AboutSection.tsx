"use client";

import Image from "next/image";
import { AboutTitle } from "@/components/Titles";
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <motion.div className="mt-[170px] text-center">
      <AboutTitle />
      <div>
        <h1 className="text-[48px] font-extrabold mb-[20px]">
          Добро пожаловать в{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8]">
            Астраханские аптеки
          </span>
        </h1>
        <div className="flex flex-col">
          <p className="mb-[20px] text-[#A3B3BC]">
            ОФИЦИАЛЬНЫЙ САЙТ ГОСУДАРСТВЕННОГО АВТОНОМНОГО УЧРЕЖДЕНИЯ
            АСТРАХАНСКОЙ ОБЛАСТИ.
          </p>
          <p>&quot;АСТРАХАНСКИЕ АПТЕКИ&quot;.</p>
        </div>
      </div>
      <Image
        src="/images/arrow-down.svg"
        className="m-[auto] pt-[10px]"
        width={30}
        height={30}
        alt=""
      />
    </motion.div>
  );
}

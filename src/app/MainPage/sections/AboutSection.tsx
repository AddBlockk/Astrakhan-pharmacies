"use client";

import Image from "next/image";
import { AboutTitle } from "@/components/Titles";
import { motion } from "framer-motion";
import { arrow, aboutTitle } from "@/app/utils/motion";
export default function AboutSection() {
  return (
    <div className="mt-[170px] text-center">
      <motion.div variants={aboutTitle} initial="hidden" whileInView="show">
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
      </motion.div>
      <motion.div
        variants={arrow}
        initial="hidden"
        className="mt-[30px] mb-[90px] flex justify-between items-center"
        whileInView="show"
      >
        <Image
          src="/images/arrow-down.svg"
          className="m-[auto] pt-[10px]"
          width={30}
          height={30}
          alt=""
        />
      </motion.div>
    </div>
  );
}

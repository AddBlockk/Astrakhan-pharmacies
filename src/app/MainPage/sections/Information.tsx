"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Information() {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-9">
      <motion.div
        initial={{ x: "-850px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-col relative"
      >
        <h1 className="uppercase text-6xl font-bold">Астраханские аптеки</h1>
        <h3 className="text-2xl font-bold my-[20px]">
          Колл-центр для обращения граждан:
          <br />
          <a href={`tel:8-800-300-37-23`}> 8-800-300-37-23</a>
        </h3>
        <h6 className="text-base font-normal text-[#A3B3BC] max-w-[500px]">
          ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ г.
          Астрахань ул. Рождественского, 1 лит А
        </h6>
        <h6 className="text-base font-normal text-[#A3B3BC] my-[20px]">
          ПН-ПТ 08:30 - 17:00
          <br />
          <a href={`tel:8-851-234-38-21`}> (8512) 34-38-21</a>
        </h6>
      </motion.div>
      <motion.div
        initial={{ x: "950px" }}
        animate={{ x: "0px" }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-col relative"
      >
        <motion.img src="/images/doctor.png" className="w-[100%]" />
        <Image
          src="/images/chain-people.svg"
          alt="chain-people"
          className="absolute top-60 right-4"
          width={500}
          height={260}
        />
      </motion.div>
    </div>
  );
}

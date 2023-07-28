"use client";

import { motion } from "framer-motion";
import { HistoryTitle } from "@/components/Titles";
import { historySection } from "@/app/utils/motion";

export default function History() {
  return (
    <motion.div
      className="text-center relative mt-[0px] flex justify-center mx-[10px]"
      variants={historySection}
      initial="hidden"
      whileInView="show"
    >
      <img
        src="/images/history_frame.svg"
        className="m-[0_auto] pt-[10px] w-[300px] absolute z-[-10] md:w-[400px] lg:w-[1100px]"
        alt=""
      />
      <div className="px-[0px] pt-[20px] md:px-[150px] md:pt-[40px]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[36px] md:text-[44px] font-extrabold mb-[20px]">
          История аптек
        </h1>
        <HistoryTitle />
        <p className="md:mt-[60px] mt-[40px] text-xl text-[#A3B3BC] m-auto">
          История началась в 1958 году, когда было образовано Астраханское
          управление отдела здравоохранения Астраханского исполнительного
          комитета областного Совета депутатов трудящихся. Сегодня структура ГАУ
          АО «Астраханские аптеки» представлена оптовым аптечным складом и
          разветвленной аптечной сетью, объединяющей 23 аптеки и аптечных
          пунктов в районе и городе. Главная задача учреждения – обеспечение
          лекарствами населения отдалённых и труднодоступных сельских поселений.
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HistoryTitle } from "@/components/Titles";

export default function History() {
  return (
    <motion.div className="text-center relative mt-[20px] flex justify-center">
      <Image
        src="/images/history_frame.svg"
        className="m-[0_auto] pt-[10px] absolute"
        width={1030}
        height={486}
        alt=""
      />
      <div className="px-[150px] pt-[70px]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[48px] font-extrabold mb-[20px]">
          История аптек
        </h1>
        <HistoryTitle />
        <p className="mt-[20px] text-xl text-[#A3B3BC]">
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

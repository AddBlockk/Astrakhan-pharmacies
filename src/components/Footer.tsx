"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-[100px] mb-[20px] gap-9 items-center ">
      <motion.div className="w-[100%]">
        <p className="text-[16px] text-[#D0DFFF] leading-8 text-justify">
          О возможных противопоказаниях проконсультируйтесь с нашими
          специалистами. Информация на сайте не является публичной офертой.
          Лицензия серии МЗ АО ЛО № 30-02-001164 от 09.12.2020
        </p>
      </motion.div>
      <motion.div>
        <div className="bg-[#16181d] py-[24px] px-[24px] rounded-[50px] text-center w-[250px] hover: dropShadow-2 m-auto">
          <p className="text-[20px] font-bold text-[#99a1b3]">
            Консультации по всем вопросам (8512) 34-38-21
          </p>
        </div>
      </motion.div>
      <motion.div className="w-[100%]">
        <p className="text-[16px] text-[#D0DFFF] leading-8 text-justify">
          &copy; 2023 Государственное автономное учреждение Астраханской области
          «Астраханские аптеки». Государственное автономное учреждение
          Астраханской области «Астраханские аптеки».
        </p>
      </motion.div>
    </div>
  );
}

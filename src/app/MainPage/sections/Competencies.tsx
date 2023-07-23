"use client";

import { motion } from "framer-motion";

export default function Competencies() {
  return (
    <div className="mt-[40px] m-[0_auto]">
      <motion.div className="mt-[40px]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[48px] text-center font-extrabold mb-[20px]">
          Ключевые компетентности
        </h1>
      </motion.div>
      <div className="grid md:grid-cols-[1fr] xl:grid-cols-[1fr_1fr] gap-7 mt-[40px]">
        <motion.div className="bg-[#161B22] rounded-[50px] px-[24px] dropShadow-1 :max-w-[320px]">
          <img
            src="/images/icon-assortment.png"
            alt="assortmen"
            className="py-5"
          />
          <h2 className="text-[24px] font-bold pb-2">Ассортимент</h2>
          <p className="text-[20px] text-[#A3B3BC] pb-[24px]">
            Широкий ассортимент лекарственных препаратов, изделий медицинского
            назначения, биологически активных добавок.
          </p>
        </motion.div>
        <motion.div className="bg-[#161B22] rounded-[50px] px-[24px] dropShadow-1">
          <img
            src="/images/icon-warehouse.png"
            alt="assortmen"
            className="py-5"
          />
          <h2 className="text-[24px] font-bold pb-2">
            Специализированный склад
          </h2>
          <p className="text-[20px] text-[#A3B3BC] pb-[24px]">
            На складе хранится запас препаратов для обеспечения медицинских
            организаций и аптек области.
          </p>
        </motion.div>
        <motion.div className="bg-[#161B22] rounded-[50px] px-[24px] dropShadow-1">
          <img
            src="/images/icon-factory.png"
            alt="assortmen"
            className="py-5"
          />
          <h2 className="text-[24px] font-bold pb-2">Свое производство</h2>
          <p className="text-[20px] text-[#A3B3BC] pb-[24px]">
            Осуществляем изготовление лекарственных форм по индивидуальным
            рецептам врачей и требованиям.
          </p>
        </motion.div>
        <motion.div className="bg-[#161B22] rounded-[50px] px-[24px] hover: dropShadow-1">
          <img
            src="/images/icon-quality.png"
            alt="assortmen"
            className="py-5"
          />
          <h2 className="text-[24px] font-bold pb-2">
            Качество и контроль на всех этапах
          </h2>
          <p className="text-[20px] text-[#A3B3BC] pb-[24px]">
            Все препараты, реализуемые учреждением, проходят строгий контроль и
            проверку качества.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

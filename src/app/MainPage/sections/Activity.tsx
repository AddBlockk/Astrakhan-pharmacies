"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transform } from "framer-motion";
import Slider from "@/components/Slider";
export default function Activity() {
  return (
    <Slider />
    // <div className="mt-[120px] place-items-center opacity-100">
    //   <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[48px] text-center font-extrabold mb-[20px]">
    //     Виды деятельности
    //   </h1>
    //   <motion.div
    //     className="flex mt-[70px] overflow-hidden w-full gap-5"
    //     // initial={{ y: 0, x: "0%" }}
    //     // animate={{ y: 0, x: "100%" }}
    //     // // transition={{ repeat: 0 }}
    //   >
    //     <div>
    //       <img src="/images/medicines-1.png" alt="medicines" />
    //       <h2>Иммунобиологические лекарственные препараты</h2>
    //     </div>
    //     <div>
    //       <img src="/images/medicines-2.png" alt="medicines" />
    //       <h2>Торговля лекарственными препаратами</h2>
    //     </div>
    //     <div>
    //       <img src="/images/medicines-3.png" alt="medicines" />
    //       <h2>Изготовление лекарственных препаратов</h2>
    //     </div>
    //     <div>
    //       <img src="/images/medicines-3.png" alt="medicines" />
    //       <h2>Изготовление лекарственных препаратов</h2>
    //     </div>
    //     <div>
    //       <img src="/images/medicines-3.png" alt="medicines" />
    //       <h2>Изготовление лекарственных препаратов</h2>
    //     </div>
    //     <div>
    //       <img src="/images/medicines-3.png" alt="medicines" />
    //       <h2>Изготовление лекарственных препаратов</h2>
    //     </div>
    //   </motion.div>
    // </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Slider from "@/components/Slider";
import styles from "@/app/media";
export default function Activity() {
  return (
    <div className="mt-[60px]">
      <motion.div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[36px] md:text-[44px] text-center font-extrabold mb-[0px]">
          Виды деятельности
        </h1>
      </motion.div>
      <Slider />
    </div>
  );
}

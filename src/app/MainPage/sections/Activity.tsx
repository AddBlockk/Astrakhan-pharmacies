"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transform } from "framer-motion";
import Slider from "@/components/Slider";
export default function Activity() {
  return (
    <div className="mt-[120px] place-items-center opacity-100">
      <motion.div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[48px] text-center font-extrabold mb-[60px]">
          Виды деятельности
        </h1>
      </motion.div>
      <Slider />
    </div>
  );
}

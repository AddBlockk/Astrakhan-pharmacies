"use client";

import { sectionTitle } from "@/app/utils/motion";
import { motion } from "framer-motion";

export function AboutTitle() {
  return (
    <motion.div
      className="text-[#C7C7C7] items-center text-[14px]"
      variants={sectionTitle}
      initial="hidden"
      whileInView="show"
    >
      &#448; О Астраханских аптеках
    </motion.div>
  );
}
export function HistoryTitle() {
  return (
    <motion.div
      className="text-[#C7C7C7] items-center text-[14px]"
      variants={sectionTitle}
      initial="hidden"
      whileInView="show"
    >
      &#448; История аптек
    </motion.div>
  );
}

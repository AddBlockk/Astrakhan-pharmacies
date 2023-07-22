"use client";

import { headerVariants } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      className="mt-[30px] mb-[90px] flex justify-between items-center"
      whileInView="show"
    >
      <Link href="/">
        <motion.img src="/images/logo.png"></motion.img>
      </Link>
      <motion.ul className="flex text-white font-semibold gap-16 text-[20px]">
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/About">Об учреждении</Link>
        </li>
        <li>
          <Link href="/News">Новости</Link>
        </li>
        <li>
          <Link href="/Patient">Пациентам</Link>
        </li>
      </motion.ul>
    </motion.div>
  );
}

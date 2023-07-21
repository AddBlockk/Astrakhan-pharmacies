"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <motion.div
      initial={{ y: "-80px" }}
      animate={{ y: "0px" }}
      transition={{ duration: 1, type: "spring", damping: 10 }}
      className="mt-[30px] mb-[90px] flex justify-between items-center"
    >
      <Link href="/">
        <motion.img src="/images/logo.png"></motion.img>
      </Link>
      <motion.ul className="flex text-white font-semibold gap-20">
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

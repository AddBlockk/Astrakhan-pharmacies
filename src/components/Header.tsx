"use client";

import styles from "@/app/media";
import { headerVariants } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      className={styles.header}
      whileInView="show"
    >
      <Link href="/">
        <motion.img
          src="/images/logo.png"
          className="m-auto lg:m-0"
        ></motion.img>
      </Link>
      <motion.ul className={styles.headerNav}>
        <li className={styles.headerText}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.headerText}>
          <Link href="/About">Об учреждении</Link>
        </li>
        <li className={styles.headerText}>
          <Link href="/News">Новости</Link>
        </li>
        <li className={styles.headerText}>
          <Link href="/Patient">Пациентам</Link>
        </li>
      </motion.ul>
    </motion.div>
  );
}

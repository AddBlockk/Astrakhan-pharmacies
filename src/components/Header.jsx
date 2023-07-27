"use client";

import styles from "@/app/media";
import React, { useState } from "react";
import { headerVariants } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from "react-icons/ai";
export default function Header() {
  const [nav, setNav] = useState(false);
  return (
    <motion.div
      // variants={headerVariants}
      // initial="hidden"
      className={styles.header}
      // whileInView="show"
    >
      <Link href="/">
        <motion.img
          src="/images/logo.png"
          className="lg:m-0 w-[200px] md:w-[260px] md:m-auto"
        ></motion.img>
      </Link>
      <motion.ul
        className={nav ? `${"headerNav"} ${"active"}` : `${"headerNav"}`}
      >
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
      <div onClick={() => setNav(!nav)} className="outlineMenu">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </motion.div>
  );
}

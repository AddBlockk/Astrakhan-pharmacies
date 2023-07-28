"use client";

import styles from "@/app/media";
import React, { useState } from "react";
import { headerVariants } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from "react-icons/ai";
import variables from "../app/variables.module.scss";
import { animate } from "framer-motion/dom";
export default function Header() {
  const [nav, setNav] = useState(false);
  const [listText, setlistText] = useState(true);

  console.log(".wrapper");
  return (
    <div className="wrapper">
      <div className={variables.header}>
        <div className={variables.container}>
          <div className={variables.header__body}>
            <Link href="/">
              <img src="/images/logo.png" className={variables.header__logo} />
            </Link>
            <div
              onClick={(closeNav) => setNav(!nav)}
              className={variables.outlineMenu}
            >
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <nav className={`${variables.header__menu}`}>
              <motion.div
                className={
                  nav
                    ? `flex justify-center ease-in-out duration-300 ${variables.header__menu} ${variables.active}`
                    : `flex justify-center ease-in-out duration-300 ${variables.header__menu} `
                }
              >
                <ul
                  className={variables.header__list}
                  onClick={(list) => setNav(!listText)}
                >
                  <li className={variables.header__text}>
                    <Link href="/">Главная</Link>
                  </li>
                  <li className={variables.header__text} id="1">
                    <Link href="/About">Об учреждении</Link>
                  </li>
                  <li className={variables.header__text}>
                    <Link href="/News">Новости</Link>
                  </li>
                  <li className={variables.header__text}>
                    <Link href="/Patient">Пациентам</Link>
                  </li>
                </ul>
              </motion.div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

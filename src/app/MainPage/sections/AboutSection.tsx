"use client";

import Image from "next/image";
import { AboutTitle } from "@/components/Titles";
import { motion } from "framer-motion";
import { arrow, aboutTitle } from "@/app/utils/motion";
import styles from "@/app/media";
export default function AboutSection() {
  return (
    <div className="mt-[170px] text-center mx-[10px]">
      <motion.div variants={aboutTitle} initial="hidden" whileInView="show">
        <AboutTitle />
        <div>
          <h1 className={styles.bigHeading}>
            Добро пожаловать в{" "}
            <span className={styles.colorHeading}>Астраханские аптеки</span>
          </h1>
          <div className={styles.default}>
            <p className="mb-[20px]">
              ОФИЦИАЛЬНЫЙ САЙТ ГОСУДАРСТВЕННОГО АВТОНОМНОГО УЧРЕЖДЕНИЯ
              АСТРАХАНСКОЙ ОБЛАСТИ.
            </p>
            <p className="text-white">&quot;АСТРАХАНСКИЕ АПТЕКИ&quot;.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={arrow}
        initial="hidden"
        className="mt-[30px] mb-[90px] flex justify-between items-center"
        whileInView="show"
      >
        <Image
          src="/images/arrow-down.svg"
          className="m-[auto] pt-[10px]"
          width={30}
          height={30}
          alt=""
        />
      </motion.div>
    </div>
  );
}

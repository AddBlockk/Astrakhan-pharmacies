"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { informationImage, informationText } from "@/app/utils/motion";
import styles from "@/app/media";
export default function Information() {
  return (
    <div className={styles.informationDiv}>
      <motion.div
      // variants={informationText}
      // initial="hidden"
      // whileInView="show"
      >
        <h1 className={styles.h1}>Астраханские аптеки</h1>
        <h3 className={styles.h2}>
          Колл-центр для обращения граждан:
          <br />
          <a href={`tel:8-800-300-37-23`}> 8-800-300-37-23</a>
        </h3>
        <p
          className={`${styles.default} max-w-[500px] md:max-w-[100%] lg:max-w-[500px]`}
        >
          ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ <br />
          г. Астрахань ул. Рождественского, 1 лит А
        </p>
        <p className={`${styles.default} text-white py-[20px]`}>
          ПН-ПТ 08:30 - 17:00
          <br />
          <a href={`tel:8-851-234-38-21`}> (8512) 34-38-21</a>
        </p>
      </motion.div>
      <motion.div
        // variants={informationImage}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true }}
        className="relative"
      >
        <img
          src="/images/doctor.png"
          alt="doctor"
          className={styles.informationImg}
        />
        <Image
          src="/images/chain-people.svg"
          alt="chain-people"
          className={styles.informationChainPeople}
          width={300}
          height={260}
        />
      </motion.div>
    </div>
  );
}

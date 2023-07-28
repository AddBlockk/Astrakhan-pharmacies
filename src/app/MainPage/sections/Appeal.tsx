"use client";

import styles from "@/app/media";
import { appealSection } from "@/app/utils/motion";
import { motion } from "framer-motion";

export default function Appeal() {
  return (
    <motion.div
      className="mt-[40px] md:mt-[40px] lg:mt-[140px] max-w-[960px] m-auto mx-[10px]"
      variants={appealSection}
      initial="hidden"
      whileInView="show"
    >
      <motion.div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[36px] md:text-[44px] text-center font-extrabold">
          Обращение граждан
        </h1>
      </motion.div>
      <motion.div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] mt-[30px] md:gap-7">
        <motion.div>
          <form action="">
            <div>
              <input
                type="text"
                className="bg-[#16181d] w-[100%] md:w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваше имя"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="bg-[#16181d] w-[100%] md:w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваш Email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                className="bg-[#16181d] w-[100%] md:w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваш Телефон"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-[#16181d] w-[100%] md:w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] my-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Тема обращения"
                required
              />
            </div>
          </form>
        </motion.div>
        <motion.div>
          <form>
            <div>
              <textarea
                name="your-message"
                className="bg-[#16181d] w-[100%] lg:w-[412px] h-[240px] rounded-[30px] px-[28px] pt-[10px] text-[20px] focus:outline-none focus:ring-2 ring-[#99a1b3] resize-none scrollbar-none"
                placeholder="Обращение"
                required
              />
            </div>
            <div className="flex justify-center md:block">
              <button
                className="text-white  bg-[#087ea4] w-[180px] h-[60px] rounded-[30px] text-[20px] mt-[24px] items-center transition-all duration-300 hover:bg-[#B673F8] active:text-[22px]"
                type="submit"
              >
                Отправить
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HistoryTitle } from "@/components/Titles";

export default function Appeal() {
  return (
    <div className="mt-[120px] max-w-[980px] m-[0_auto]">
      <motion.div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CA5FF] to-[#B673F8] text-[48px] text-center font-extrabold mb-[20px]">
          Обращение граждан
        </h1>
      </motion.div>
      <motion.div className="grid lg:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-9 mt-[70px]">
        <motion.div>
          <form action="">
            <div>
              <input
                type="text"
                className="bg-[#16181d] w-[412px]  h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваше имя"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="bg-[#16181d] w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваш Email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                className="bg-[#16181d] w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Ваш Телефон"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-[#16181d] w-[412px] h-[60px] rounded-[30px] indent-7 text-[20px] mt-[30px] focus:outline-none focus:ring-2 ring-[#99a1b3]"
                placeholder="Тема обращения"
                required
              />
            </div>
          </form>
        </motion.div>
        <motion.div className="mt-[30px]">
          <form>
            <div>
              <textarea
                name="your-message"
                className="bg-[#16181d] w-[500px] h-[240px] rounded-[30px] px-[28px] pt-[10px] text-[20px] pb-[190px] focus:outline-none focus:ring-2 ring-[#99a1b3] resize-none scrollbar-none"
                placeholder="Обращение"
                required
              />
            </div>
            <button
              className="text-white bg-[#087ea4] w-[180px] h-[60px] rounded-[30px] text-[20px] mt-[30px] transition-all duration-300 hover:bg-[#B673F8] active:text-[22px]"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

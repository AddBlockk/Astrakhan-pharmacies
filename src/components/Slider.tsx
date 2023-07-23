import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import imagesApi from "@/api/images.json";
import styles from "@/app/media";
import {
  motion,
  useMotionValue,
  useTransform,
  useVelocity,
  useScroll,
  useSpring,
  useAnimationFrame,
  useAnimate,
  wrap,
  stagger,
} from "framer-motion";

interface IApi {
  id: number;
  url: string;
  text: string;
}

export default function Slider() {
  const [images, setImages] = useState<IApi[]>([]);
  const [imageIndex, setImageIndex] = useState(0);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const [scope, animate] = useAnimate();

  const x = useTransform(baseX, (v) => `${wrap(22.5, 5.8, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 0.5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const tempApi: IApi[] = imagesApi;
    let tempArrUrl: IApi[] = [];
    for (let i = 0; i < tempApi.length; i++) {
      tempApi.map((value) => {
        tempArrUrl.push(value);
      });
    }
    setImages(tempArrUrl);
  }, []);

  return (
    <div className={styles.slider}>
      <motion.div className="flex gap-4 py-5 w-full justify-center">
        <motion.div
          style={{ x }}
          transition={{}}
          ref={scope}
          className="flex shrink-0 gap-4"
        >
          {images.map((value, index) => {
            return (
              <Link href="" key={index}>
                <div className={styles.sliderContainer}>
                  <img src={value.url} alt="" className={styles.sliderImg} />
                  <h2 className={styles.sliderText}>{value.text}</h2>
                  <p></p>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

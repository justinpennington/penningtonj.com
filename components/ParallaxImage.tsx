"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function ParallaxImage({ src }: { src: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 120]);

  return (
    <motion.div style={{ y }} className="absolute inset-0 -top-8 -bottom-32">
      <Image
        src={src}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}

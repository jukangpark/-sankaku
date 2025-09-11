"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogoSlider = () => {
  // 로고 아이템 생성 (각 로고: 64px + 96px margin = 160px)
  const logoItems = Array.from({ length: 80 }, (_, index) => (
    <div
      key={index}
      className="flex-shrink-0 mx-12 flex items-center justify-center"
    >
      <div className="relative w-16 h-16">
        <Image
          src="/SANKAKU_LOGO.jpg"
          alt="산카쿠 로고"
          fill
          className="object-cover rounded-lg shadow-lg"
          sizes="64px"
        />
      </div>
    </div>
  ));

  return (
    <div className="bg-gray-100 py-5 overflow-hidden">
      <motion.div
        className="flex items-center"
        animate={{
          x: [+0, -960], // 6개 로고 × 160px = 960px
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* 첫 번째 세트 */}
        <div className="flex items-center">{logoItems}</div>
      </motion.div>
    </div>
  );
};

export default LogoSlider;

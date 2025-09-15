"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const StoreShowCaseSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  // 매장 데이터
  const stores = [
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/1.jpg" },
    { name: "산카쿠 인계점", image: "/store-show-case-slider/2.jpg" },
    { name: "산카쿠 충대점", image: "/store-show-case-slider/3.jpg" },
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/4.jpg" },
    { name: "산카쿠 인계점", image: "/store-show-case-slider/5.jpg" },
    { name: "산카쿠 충대점", image: "/store-show-case-slider/6.jpg" },
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/7.jpg" },
    { name: "산카쿠 인계점", image: "/store-show-case-slider/8.jpg" },
    { name: "산카쿠 충대점", image: "/store-show-case-slider/9.jpg" },
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/10.jpg" },
    { name: "산카쿠 인계점", image: "/store-show-case-slider/11.jpg" },
    { name: "산카쿠 충대점", image: "/store-show-case-slider/12.jpg" },
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/13.jpg" },
    { name: "산카쿠 인계점", image: "/store-show-case-slider/14.jpg" },
    { name: "산카쿠 충대점", image: "/store-show-case-slider/15.jpg" },
    { name: "산카쿠 전대본점", image: "/store-show-case-slider/16.jpg" },
  ];

  // 무한 스크롤을 위해 매장 데이터를 3번 복제
  const infiniteStores = [...stores, ...stores, ...stores];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-xl text-gray-600 mb-4"
            variants={itemVariants}
          >
            불황 걱정 없는 창업은 산카쿠가 답!
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            variants={itemVariants}
          >
            줄서는 맛집 산카쿠
          </motion.h1>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -2016], // 6개 매장 * 336px(w-80 + mx-4) = 2016px
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {infiniteStores.map((store, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 mx-4"
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={320}
                    height={240}
                    className="object-cover w-full h-60"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-center">
                      {store.name}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreShowCaseSection;

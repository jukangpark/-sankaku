"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AwardSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  // 수상 내역 데이터
  const awards = [
    {
      image: "/awards/sec6-price1.png",
      title: "[중앙일보 우수브랜드 대상]",
      description: "3년 연속 수상",
    },
    {
      image: "/awards/sec6-price2.png",
      title: "[환경 브랜드 만족도 1위]",
      description: "2년 연속 수상",
    },
    {
      image: "/awards/sec6-price3.png",
      title: "[2024년 KPBA]",
      description: "대한민국 최고 경영자 대상",
    },
    {
      image: "/awards/sec6-price4.png",
      title: "[2023년 한국일보]",
      description: "한국 대표 브랜드 TOP100",
    },
    {
      image: "/awards/sec6-price5.png",
      title: "[2021년 한국일보]",
      description: "한국 인기 브랜드 대상",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Awards List */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                각종 공식기관에서
                <br />
                <span className="font-bold">인정받은 산카쿠</span>
              </h2>
            </motion.div>

            {/* Awards Grid */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Award Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Award Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {award.title}
                    </h3>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Big Award Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/awards/sec6-big-price.png"
                alt="산카쿠 주요 수상 이미지"
                width={600}
                height={600}
                className="object-contain w-full h-auto"
                priority
              />

              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl -z-10 opacity-30"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;

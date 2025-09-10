"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            브랜드 스토리
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            2023년 12월, 광주 전대 앞 작은 매장에서 시작한 '산카쿠'는
            <br />
            정성 가득한 한 끼를 더 많은 사람들과 나누고 싶은 마음으로
            탄생했습니다.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                '산카쿠(△)'의 의미
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                🍙 산카쿠 – 정성 가득한 삼각의 맛 <br />
                '산카쿠(△)'는 일본어로 삼각형을 뜻하며,
                <br />한 손에 쥘 수 있는 삼각형 오니기리에 담긴 세 가지 약속을
                의미합니다.
              </p>
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">맛</span>
                  </div>
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">정성</span>
                  </div>
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">가격</span>
                  </div>
                </div>
                <p className="text-lg text-gray-600 text-center">
                  이 세 가지 모두 놓치지 않겠다는 우리의 다짐입니다.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src="/SANKAKU_LOGO.jpg"
                alt="산카쿠 스토리"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              우리의 철학
            </h2>
            <p className="text-xl text-gray-600">
              프랜차이즈 그 이상의 브랜드를 꿈꾸는 산카쿠
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-12 text-center"
            variants={itemVariants}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              우리는 프랜차이즈 그 이상의 브랜드를 꿈꿉니다.
              <br />그 시작은 <strong>'정성'</strong>입니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              누구나 바쁜 일상 속에서 부담 없이
              <br />
              든든하고 따뜻한 한 끼를 즐기길 바라는 마음.
              <br />
              산카쿠는 그 마음 하나로 오늘도 정성을 쌓아갑니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              이제 막 시작한 브랜드지만,
              <br />
              진짜 좋은 음식을 만들겠다는 마음만큼은 오래전부터 준비했습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            variants={itemVariants}
          >
            산카쿠의 성장 스토리
          </motion.h2>

          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={timelineVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2023년 12월
              </h3>
              <p className="text-gray-600">
                <strong>광주 전대 본점 오픈</strong>
                <br />
                매일 웨이팅이 생기는 전대 앞 대표 맛집으로 자리잡았습니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={timelineVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2024년 3월
              </h3>
              <p className="text-gray-600">
                <strong>대전 충남대점 오픈</strong>
                <br />두 번째 직영점으로 오픈과 동시에 웨이팅 줄이 끊이지 않는
                사랑을 받고 있습니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={timelineVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2024년 5월
              </h3>
              <p className="text-gray-600">
                <strong>수원 인계점 오픈</strong>
                <br />
                산카쿠의 또 다른 도전을 알리는 공간으로, 더 많은 지역에서 따뜻한
                한 끼를 전하고 있습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-12 text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              이 작은 삼각형 속에 담긴 우직한 철학
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              이 작은 삼각형 속에 담긴
              <br />
              우직한 철학을 믿고 따라와 주셔서 감사합니다.
            </p>
            <div className="bg-black text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">앞으로도,</h3>
              <p className="text-xl">
                산카쿠는 언제나 <strong>정직하게, 따뜻하게, 정성스럽게.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

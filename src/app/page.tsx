"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="mb-12" variants={containerVariants}>
            {/* Logo */}
            <motion.div className="inline-block mb-8" variants={logoVariants}>
              <div className="relative w-40 h-40 mx-auto">
                <Image
                  src="/SANKAKU_LOGO.jpg"
                  alt="산카쿠 로고"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="160px"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              산카쿠
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-gray-600 mb-4 font-light"
              variants={itemVariants}
            >
              정성 가득한 한 끼
            </motion.p>
            <motion.p
              className="text-xl text-gray-500 mb-8"
              variants={itemVariants}
            >
              언제나 정직하게, 따뜻하게, 정성스럽게.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link
                href="/menu"
                className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                메뉴 보기
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link
                href="/store-info"
                className="border-2 border-black text-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                매장 찾기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              산카쿠만의 특별함
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              정통 일본 맛을 그대로 담은 특별한 경험을 제공합니다
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🍙</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">맛</h3>
              <p className="text-gray-600">
                정통 일본 라멘의 맛을 그대로 담아 특별한 식사 경험을 제공합니다
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">정성</h3>
              <p className="text-gray-600">
                매일 아침 직접 반죽하는 면발처럼, 모든 과정에 정성을 담아
                조리합니다
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">가격</h3>
              <p className="text-gray-600">
                정직한 가격으로 최고급 재료의 정통 라멘을 제공합니다
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Preview Section */}
      <motion.section className="py-24 bg-white" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              인기 메뉴
            </h2>
            <p className="text-xl text-gray-600">
              고객들이 가장 사랑하는 메뉴들을 소개합니다
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {/* 산카쿠 라멘 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative w-full h-72 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/menu/산카쿠 라멘.jpg"
                  alt="산카쿠 라멘"
                  width={288}
                  height={360}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  산카쿠 라멘
                </h3>
                <p className="text-gray-600 mb-4">정통 일본 라멘의 깊은 맛</p>
                <p className="text-lg font-bold text-gray-900">₩9,500</p>
              </div>
            </motion.div>

            {/* 차슈폭탄 라멘 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative w-full h-72 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/menu/차슈폭탄 라멘.jpeg"
                  alt="차슈폭탄 라멘"
                  className="object-cover"
                  width={288}
                  height={360}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  차슈폭탄 라멘
                </h3>
                <p className="text-gray-600 mb-4">
                  부드러운 차슈가 가득한 라멘
                </p>
                <p className="text-lg font-bold text-gray-900">₩13,900</p>
              </div>
            </motion.div>

            {/* 들깨크림 우동 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative w-full h-72 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/menu/들깨크림 우동.jpeg"
                  alt="들깨크림 우동"
                  className="object-cover"
                  width={288}
                  height={360}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  들깨크림 우동
                </h3>
                <p className="text-gray-600 mb-4">고소한 들깨의 진한 맛</p>
                <p className="text-lg font-bold text-gray-900">₩10,500</p>
              </div>
            </motion.div>

            {/* 나만의 오리기리 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative w-full h-72 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/menu/나만의 오리기리.jpeg"
                  alt="나만의 오리기리"
                  className="object-cover"
                  width={288}
                  height={360}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  나만의 오리기리
                </h3>
                <p className="text-gray-600 mb-4">2가지 맛 선택 가능</p>
                <p className="text-lg font-bold text-gray-900">₩2,100~</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link
              href="/menu"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              전체 메뉴 보기
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-gray-900 text-white"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            지금 바로 방문하세요
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            정통 일본 라멘의 맛을 직접 경험해보세요. 여러분의 방문을 기다리고
            있습니다.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link
                href="/store-info"
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                매장 찾기
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link
                href="/franchise"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                창업 문의
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

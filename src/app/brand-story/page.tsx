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
            산카쿠의 시작부터 현재까지, 정통 일본 라멘의 맛을 전하는 우리의
            이야기입니다.
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
                정통의 맛을 찾아서
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2010년, 일본 도쿄에서 시작된 산카쿠의 여정은 정통 라멘의 맛을
                찾는 열정으로 시작되었습니다. 3대째 이어져 온 가업의 비법을
                배우고, 한국의 입맛에 맞게 조화롭게 발전시켜 왔습니다.
              </p>
              <p className="text-lg text-gray-600">
                매일 아침 직접 반죽하는 신선한 면발과 24시간 이상 끓여 만드는
                정통 방식의 국물. 이것이 산카쿠가 지켜온 가장 소중한 가치입니다.
              </p>
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

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              우리의 가치
            </h2>
            <p className="text-xl text-gray-600">
              산카쿠가 추구하는 세 가지 핵심 가치
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">정직함</h3>
              <p className="text-gray-600">
                최고급 재료만을 사용하고, 정직한 가격으로 정통의 맛을
                제공합니다.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">정성</h3>
              <p className="text-gray-600">
                매일 아침 직접 반죽하는 면발처럼, 모든 과정에 정성을 담아
                조리합니다.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">전통</h3>
              <p className="text-gray-600">
                일본의 전통 레시피를 그대로 지켜가며, 정통 라멘의 맛을
                보존합니다.
              </p>
            </motion.div>
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
            산카쿠의 발자취
          </motion.h2>

          <motion.div className="space-y-12" variants={containerVariants}>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={timelineVariants}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2010</h3>
                <p className="text-gray-600">
                  일본 도쿄에서 라멘 제조 기술을 배우고, 한국에서 첫 번째 매장을
                  오픈했습니다.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🏪</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              variants={timelineVariants}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2015</h3>
                <p className="text-gray-600">
                  전국 10개 매장으로 확장하며, 정통 라멘의 맛을 더 많은
                  고객들에게 전했습니다.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">📈</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={timelineVariants}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2020</h3>
                <p className="text-gray-600">
                  창업 시스템을 구축하여 프랜차이즈 사업을 시작하고, 더 많은
                  분들에게 창업 기회를 제공했습니다.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              variants={timelineVariants}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2024</h3>
                <p className="text-gray-600">
                  현재 전국 50개 매장으로 성장하며, 정통 일본 라멘의 맛을
                  대표하는 브랜드로 자리매김했습니다.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/SANKAKU_LOGO.jpg"
                    alt="산카쿠 로고"
                    fill
                    className="object-cover rounded-lg"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">산카쿠</h3>
                  <p className="text-sm text-gray-400">SANKAKU</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                정통 일본 라멘의 맛을 그대로 담아 여러분께 특별한 식사 경험을
                제공합니다.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">빠른 링크</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="/brand-story"
                    className="hover:text-white transition-colors"
                  >
                    브랜드 스토리
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="hover:text-white transition-colors"
                  >
                    메뉴
                  </a>
                </li>
                <li>
                  <a
                    href="/store-info"
                    className="hover:text-white transition-colors"
                  >
                    매장안내
                  </a>
                </li>
                <li>
                  <a
                    href="/customer-voice"
                    className="hover:text-white transition-colors"
                  >
                    고객의 소리
                  </a>
                </li>
                <li>
                  <a
                    href="/franchise"
                    className="hover:text-white transition-colors"
                  >
                    창업안내
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">연락처</h4>
              <div className="space-y-3 text-gray-400">
                <div>📞 02-1234-5678</div>
                <div>📧 info@sankaku.kr</div>
                <div>📍 서울특별시 강남구</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 산카쿠. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

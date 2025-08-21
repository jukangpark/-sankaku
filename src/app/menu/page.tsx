"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Menu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const menuItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const menuCategories = [
    {
      title: "라멘",
      items: [
        {
          name: "산카쿠 라멘",
          price: "₩12,000",
          description: "정통 일본 라멘의 깊은 맛",
        },
        {
          name: "차슈폭탄 라멘",
          price: "₩14,000",
          description: "부드러운 차슈가 가득한 라멘",
        },
        {
          name: "미소 라멘",
          price: "₩13,000",
          description: "고소한 미소의 진한 맛",
        },
        {
          name: "시오 라멘",
          price: "₩11,000",
          description: "깔끔한 소금 맛의 라멘",
        },
      ],
    },
    {
      title: "우동",
      items: [
        {
          name: "들깨크림 우동",
          price: "₩11,000",
          description: "고소한 들깨의 진한 맛",
        },
        {
          name: "카레 우동",
          price: "₩12,000",
          description: "매콤달콤한 카레 소스",
        },
        {
          name: "키츠네 우동",
          price: "₩10,000",
          description: "전통적인 일본 우동",
        },
      ],
    },
    {
      title: "오니기리",
      items: [
        {
          name: "나만의 오리기리",
          price: "₩4,500",
          description: "손으로 빚은 정성 가득한 밥",
        },
        {
          name: "연어 오니기리",
          price: "₩5,500",
          description: "신선한 연어가 들어간 오니기리",
        },
        {
          name: "참치마요 오니기리",
          price: "₩5,000",
          description: "참치와 마요네즈의 조화",
        },
      ],
    },
    {
      title: "사이드 메뉴",
      items: [
        { name: "교자", price: "₩6,000", description: "바삭한 바닥의 교자" },
        {
          name: "가라아게",
          price: "₩8,000",
          description: "바삭한 일본식 치킨",
        },
        {
          name: "에비마요",
          price: "₩7,000",
          description: "새우와 마요네즈의 조화",
        },
      ],
    },
  ];

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
            메뉴
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            정통 일본 라멘부터 다양한 메뉴까지, 산카쿠만의 특별한 맛을
            경험해보세요.
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="space-y-20" variants={containerVariants}>
            {menuCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                  variants={itemVariants}
                >
                  {category.title}
                </motion.h2>

                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                      variants={menuItemVariants}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <p className="text-lg font-bold text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">특별 메뉴</h2>
            <p className="text-xl text-gray-600">
              계절에 따라 선보이는 특별한 메뉴들
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={menuItemVariants}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌸</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  벚꽃 라멘
                </h3>
                <p className="text-gray-600 mb-4">
                  봄철 한정 특별 메뉴, 벚꽃 향이 가득한 라멘
                </p>
                <p className="text-lg font-bold text-gray-900">₩15,000</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={menuItemVariants}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🍁</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  단풍 우동
                </h3>
                <p className="text-gray-600 mb-4">
                  가을 한정 메뉴, 단풍잎 모양의 특별한 우동
                </p>
                <p className="text-lg font-bold text-gray-900">₩13,000</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={menuItemVariants}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">❄️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  눈꽃 오니기리
                </h3>
                <p className="text-gray-600 mb-4">
                  겨울 한정 메뉴, 눈꽃 모양의 특별한 오니기리
                </p>
                <p className="text-lg font-bold text-gray-900">₩6,000</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Notes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              메뉴 안내
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🍜 라멘 안내
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 모든 국물은 24시간 이상 끓여 만듭니다</li>
                  <li>• 면발은 매일 아침 직접 반죽합니다</li>
                  <li>• 차슈는 3시간 이상 훈연하여 만듭니다</li>
                  <li>• 매운 정도는 조절 가능합니다</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🍱 사이드 메뉴 안내
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 교자는 주문 후 바로 튀겨서 제공합니다</li>
                  <li>• 가라아게는 신선한 닭고기로 만듭니다</li>
                  <li>• 모든 메뉴는 포장 가능합니다</li>
                  <li>• 알레르기 정보는 매장에 문의해주세요</li>
                </ul>
              </div>
            </div>
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

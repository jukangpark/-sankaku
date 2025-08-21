"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StoreInfo() {
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

  const storeCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const stores = [
    {
      name: "강남점",
      address: "서울특별시 강남구 테헤란로 123",
      phone: "02-1234-5678",
      hours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 23:00",
        holiday: "11:00 - 21:00",
      },
      features: ["주차 가능", "단체 예약 가능", "포장 가능"],
    },
    {
      name: "홍대점",
      address: "서울특별시 마포구 홍대로 456",
      phone: "02-2345-6789",
      hours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 23:00",
        holiday: "11:00 - 21:00",
      },
      features: ["포장 가능", "배달 가능"],
    },
    {
      name: "부산점",
      address: "부산광역시 해운대구 해운대로 789",
      phone: "051-3456-7890",
      hours: {
        weekday: "11:00 - 22:00",
        weekend: "11:00 - 23:00",
        holiday: "11:00 - 21:00",
      },
      features: ["바다 전망", "주차 가능", "단체 예약 가능"],
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
            매장안내
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            전국 각지의 산카쿠 매장을 찾아보세요
          </motion.p>
        </div>
      </section>

      {/* Store List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {stores.map((store, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                variants={storeCardVariants}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {store.name}
                  </h3>
                  <p className="text-gray-600">{store.address}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-red-600 mr-3">📞</span>
                    <span className="text-gray-700">{store.phone}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">영업시간</h4>
                    <div className="space-y-1 text-gray-600">
                      <div>월-금: {store.hours.weekday}</div>
                      <div>토-일: {store.hours.weekend}</div>
                      <div>공휴일: {store.hours.holiday}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">매장 특징</h4>
                    <div className="flex flex-wrap gap-2">
                      {store.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-black text-white px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">매장 위치</h2>
            <p className="text-xl text-gray-600">
              지도를 통해 매장 위치를 확인하세요
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-6">🗺️</div>
              <p className="text-xl font-medium">지도가 여기에 표시됩니다</p>
              <p className="text-gray-500 mt-2">실시간 위치 확인 가능</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Business Hours Section */}
      <motion.section className="py-24 bg-white" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              영업시간 안내
            </h2>
            <p className="text-xl text-gray-600">
              매장별 영업시간을 확인하세요
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  평일 (월-금)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">오픈</span>
                    <span className="font-bold text-gray-900">11:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">마감</span>
                    <span className="font-bold text-gray-900">22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">라스트 오더</span>
                    <span className="font-bold text-gray-900">21:30</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  주말 (토-일)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">오픈</span>
                    <span className="font-bold text-gray-900">11:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">마감</span>
                    <span className="font-bold text-gray-900">23:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">라스트 오더</span>
                    <span className="font-bold text-gray-900">22:30</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-8 p-4 bg-yellow-50 rounded-lg"
              variants={itemVariants}
            >
              <p className="text-gray-700 text-center">
                <strong>공휴일:</strong> 11:00 - 21:00 (라스트 오더 20:30)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              문의 및 예약
            </h2>
            <p className="text-xl text-gray-600">
              궁금한 점이 있으시면 언제든 연락주세요
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={storeCardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                예약 문의
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📞</span>
                  <span className="text-gray-700">02-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📧</span>
                  <span className="text-gray-700">reservation@sankaku.kr</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">⏰</span>
                  <span className="text-gray-700">평일 09:00 - 18:00</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={storeCardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                일반 문의
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📞</span>
                  <span className="text-gray-700">02-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📧</span>
                  <span className="text-gray-700">info@sankaku.kr</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📍</span>
                  <span className="text-gray-700">
                    서울특별시 강남구 테헤란로 123
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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

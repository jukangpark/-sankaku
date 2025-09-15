"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import stores from "@/constants/stores";
import Banner from "@/components/Banner";

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

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <Banner
        title="매장안내"
        description="전국 각지의 산카쿠 매장을 찾아보세요"
      />

      {/* Store List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-1 gap-12"
            variants={containerVariants}
          >
            {stores.map((store, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                variants={storeCardVariants}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Basic Info */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        {store.name}
                      </h3>
                      <div className="mb-3">
                        <div className="relative w-50 h-50 mb-3">
                          <Image
                            src="/SANKAKU_LOGO.jpg"
                            alt="산카쿠 로고"
                            className="object-cover rounded-lg"
                            quality={100}
                            width={200}
                            height={200}
                            priority
                          />
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">{store.address}</p>
                          <p className="text-gray-500 text-sm">
                            {store.roadAddress}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-red-600 mr-3 text-xl">📞</span>
                        <span className="text-gray-700 font-semibold">
                          {store.phone}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">
                          매장 소개
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {store.description}
                        </p>
                        <a
                          href={store.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors inline-block"
                        >
                          지도에서 보기
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Hours & Access */}
                  <div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">
                        영업시간
                      </h4>

                      {/* 공통 안내 */}
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-700">
                          <div className="flex justify-between mb-1">
                            <span>영업시간:</span>
                            <span className="font-semibold">11:00 - 20:30</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>브레이크타임:</span>
                            <span className="font-semibold">15:00 - 17:00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>라스트오더:</span>
                            <span className="font-semibold">20:00</span>
                          </div>
                        </div>
                      </div>

                      {/* 요일별 영업시간 */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">월요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.mon}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">화요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.tue}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">수요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.wed}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">목요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.thu}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">금요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.fri}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">토요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.sat}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">일요일</span>
                          <span className="font-semibold text-gray-900">
                            {store.hours.sun}
                          </span>
                        </div>
                      </div>
                    </div>

                    {store.accessInfo.walk.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">
                          도보 이용 시
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {store.accessInfo.walk.map((access, accessIndex) => (
                            <li key={accessIndex} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{access}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {store.accessInfo.car.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">
                          차량 이용 시
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {store.accessInfo.car.map((access, accessIndex) => (
                            <li key={accessIndex} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{access}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notice Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">매장 안내</h2>
            <p className="text-xl text-gray-600">
              산카쿠는 수제 오니기리, 라멘, 우동을 전문으로 하는 일본 가정식
              브랜드입니다
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-6xl mb-6">🍜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                매장 이용 안내
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>• 설날, 추석 당일은 쉽니다</p>
                <p>• 모든 매장에서 브레이크타임(15:00-17:00) 운영</p>
                <p>• 라스트오더는 20:00입니다</p>
                <p>• 매장별로 주차장 이용 가능</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AdminPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log("로그인 시도:", loginData);
    setIsLoginModalOpen(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 로그인 모달 */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* 모달 */}
            <motion.div
              className="relative bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex justify-center">
                  <Image
                    src="/logo_black_square3.png"
                    alt="산카쿠 로고"
                    width={200}
                    height={200}
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  관리자 로그인
                </h2>
                <p className="text-gray-600">관리자 계정으로 로그인해주세요</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    사용자명
                  </label>
                  <input
                    type="text"
                    required
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="사용자명을 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  로그인
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  취소
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 관리자 대시보드 (로그인 후 표시) */}
      {!isLoginModalOpen && (
        <motion.div
          className="min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 관리자 배너 */}
          <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/SANKAKU_LOGO.jpg"
                      alt="산카쿠 로고"
                      fill
                      className="object-cover rounded-lg"
                      sizes="64px"
                      quality={100}
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">관리자 대시보드</h1>
                    <p className="text-gray-300 text-lg">산카쿠 관리 시스템</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-sm mb-1">관리자</p>
                  <p className="text-white font-semibold">admin@sankaku.kr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  매장 관리
                </h3>
                <p className="text-gray-600 mb-4">
                  매장 정보 및 운영 현황을 관리합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  관리하기
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  메뉴 관리
                </h3>
                <p className="text-gray-600 mb-4">
                  메뉴 정보 및 가격을 관리합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  관리하기
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  주문 관리
                </h3>
                <p className="text-gray-600 mb-4">
                  주문 현황 및 배달 관리를 합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  관리하기
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  고객 관리
                </h3>
                <p className="text-gray-600 mb-4">
                  고객 정보 및 리뷰를 관리합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  관리하기
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  통계 분석
                </h3>
                <p className="text-gray-600 mb-4">
                  매출 및 방문자 통계를 확인합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  확인하기
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">설정</h3>
                <p className="text-gray-600 mb-4">
                  시스템 설정 및 계정 관리를 합니다
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  설정하기
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

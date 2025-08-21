"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerVoice() {
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

  const reviewCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const reviews = [
    {
      name: "김철수",
      rating: 5,
      date: "2024.01.15",
      content:
        "정말 맛있는 라멘을 먹었습니다! 국물이 진하고 면발도 쫄깃해서 완벽했어요. 다음에 또 방문하고 싶습니다.",
      menu: "돈코츠 라멘",
      store: "강남점",
    },
    {
      name: "이영희",
      rating: 5,
      date: "2024.01.10",
      content:
        "일본에서 먹던 맛 그대로네요. 특히 오니기리가 정말 맛있었습니다. 친절한 서비스도 감동이었어요.",
      menu: "연어 오니기리",
      store: "홍대점",
    },
    {
      name: "박민수",
      rating: 4,
      date: "2024.01.08",
      content:
        "우동이 정말 쫄깃하고 맛있었습니다. 가격도 합리적이고 분위기도 좋아서 만족스러웠어요.",
      menu: "카케 우동",
      store: "부산점",
    },
    {
      name: "최지영",
      rating: 5,
      date: "2024.01.05",
      content:
        "친구들과 함께 방문했는데 모두가 만족했어요. 특히 스파이시 라멘의 매운맛이 정말 일품이었습니다.",
      menu: "스파이시 라멘",
      store: "강남점",
    },
    {
      name: "정현우",
      rating: 4,
      date: "2024.01.03",
      content:
        "매장이 깔끔하고 음식도 맛있었습니다. 다음에 가족들과 함께 방문하고 싶어요.",
      menu: "미소 라멘",
      store: "홍대점",
    },
    {
      name: "한소영",
      rating: 5,
      date: "2024.01.01",
      content:
        "새해 첫날 방문했는데 정말 좋은 추억이 되었어요. 맛있는 음식과 따뜻한 분위기가 인상적이었습니다.",
      menu: "차슈 라멘",
      store: "부산점",
    },
  ];

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

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
            고객의 소리
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            산카쿠를 방문해주신 고객님들의 소중한 후기를 소개합니다
          </motion.p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="flex justify-center items-center mb-6">
              <div className="text-6xl font-bold text-gray-900 mr-4">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-2xl text-yellow-500">★★★★★</div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              고객 만족도
            </h2>
            <p className="text-xl text-gray-600">
              총 {reviews.length}개의 리뷰로 구성된 평균 평점입니다
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🍜</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">맛</h3>
              <p className="text-gray-600">정통 일본 맛의 깊이</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">서비스</h3>
              <p className="text-gray-600">친절하고 빠른 서비스</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">분위기</h3>
              <p className="text-gray-600">깔끔하고 편안한 공간</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">고객 리뷰</h2>
            <p className="text-xl text-gray-600">
              실제 방문 고객님들의 생생한 후기를 확인하세요
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                variants={reviewCardVariants}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="text-yellow-500">
                    {"★".repeat(review.rating)}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2">
                    {review.menu}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {review.store}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {review.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Review Form Section */}
      <motion.section className="py-24 bg-white" variants={containerVariants}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              리뷰 작성하기
            </h2>
            <p className="text-xl text-gray-600">
              산카쿠를 방문하신 후기를 남겨주세요
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    방문 매장
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black">
                    <option>매장을 선택하세요</option>
                    <option>강남점</option>
                    <option>홍대점</option>
                    <option>부산점</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주문 메뉴
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  placeholder="주문하신 메뉴를 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  평점
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-yellow-500 focus:outline-none"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  리뷰 내용
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black resize-none"
                  placeholder="방문 후기를 자유롭게 작성해주세요"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  리뷰 등록하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600">
              고객님들이 자주 궁금해하시는 질문들입니다
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={reviewCardVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                예약은 어떻게 하나요?
              </h3>
              <p className="text-gray-600">
                전화(02-1234-5678) 또는 이메일(reservation@sankaku.kr)로 예약
                가능합니다. 단체 예약의 경우 사전에 연락 부탁드립니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={reviewCardVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                포장 주문이 가능한가요?
              </h3>
              <p className="text-gray-600">
                네, 포장 주문이 가능합니다. 단, 라멘의 경우 국물과 면을 분리해서
                포장해드립니다. 포장 주문은 10분 전에 연락 주세요.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={reviewCardVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                주차가 가능한가요?
              </h3>
              <p className="text-gray-600">
                강남점과 부산점은 주차가 가능합니다. 홍대점은 주변 유료주차장을
                이용해주세요. 주차비는 매장에서 일부 지원해드립니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={reviewCardVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                알레르기가 있는데 메뉴를 변경할 수 있나요?
              </h3>
              <p className="text-gray-600">
                네, 알레르기 정보를 주문 전에 말씀해 주시면 가능한 한
                대응해드리겠습니다. 채식 메뉴도 준비되어 있습니다.
              </p>
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

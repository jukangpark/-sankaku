"use client";

import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import ReviewCard from "@/components/ReviewCard";
import reviewData from "@/constants/reviewData";
import reviewStats from "@/constants/reviewStats";
import ProgressBar from "@/components/ProgressBar";
import { useEffect, useRef, useState } from "react";

export default function CustomerVoice() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState("전대본점");
  const tooltipRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "전대본점", name: "전대 본점", enabled: true },
    { id: "인계점", name: "인계점", enabled: false },
    { id: "충대점", name: "충대점", enabled: false },
  ];

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);

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

  const averageRating =
    reviewData.reduce((acc, review) => acc + review.rating, 0) /
    reviewData.length;

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <Banner
        title="고객의 소리"
        description="산카쿠를 방문해주신 고객님들의 소중한 후기를 소개합니다"
      />

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
              총 3,452 개의 리뷰로 구성된 평균 평점입니다
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
      <motion.section className="py-24" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">고객 리뷰</h2>
            <p className="text-xl text-gray-600">
              실제 방문 고객님들의 생생한 후기를 확인하세요
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="flex justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex bg-gray-200 rounded-lg p-1">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => tab.enabled && setActiveTab(tab.id)}
                      disabled={!tab.enabled}
                      variants={itemVariants}
                      className={`
                    px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-black text-white shadow-md"
                        : tab.enabled
                        ? "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        : "text-gray-400 cursor-not-allowed opacity-50"
                    }
                  `}
                      whileHover={
                        tab.enabled && activeTab !== tab.id
                          ? { scale: 1.05 }
                          : {}
                      }
                      whileTap={
                        tab.enabled && activeTab !== tab.id
                          ? { scale: 0.95 }
                          : {}
                      }
                    >
                      {tab.name}
                      {!tab.enabled && (
                        <span className="ml-2 text-xs bg-gray-300 text-gray-500 px-2 py-0.5 rounded-full">
                          준비중
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    이런 점이 좋았어요.
                  </h2>
                  <div className="relative" ref={tooltipRef}>
                    <button
                      onClick={() => setShowTooltip(!showTooltip)}
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                      aria-label="도움말"
                    >
                      <span className="text-gray-600 text-sm font-bold">?</span>
                    </button>

                    {/* 툴팁 */}
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 w-80 bg-gray-800 text-white text-sm rounded-lg p-4 shadow-lg z-10"
                      >
                        {/* X 버튼 */}
                        <button
                          onClick={() => setShowTooltip(false)}
                          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center transition-colors duration-200"
                          aria-label="닫기"
                        >
                          <span className="text-white text-xs font-bold">
                            ×
                          </span>
                        </button>

                        <div className="text-center pr-6">
                          <p className="mb-2">
                            네이버 예약, 주문, 결제내역, 영수증 등으로 인증한
                            방문자들이 해당 장소에 대해 최대 5개 까지 선택한
                            키워드 통계 결과입니다.
                          </p>
                          <p className="text-gray-300 text-xs">
                            업데이트 주기: 하루 단위
                          </p>
                        </div>
                        {/* 화살표 */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                      </motion.div>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  <span className="text-green-600 font-bold">✅ 849회</span>{" "}
                  828명 참여
                </p>
                <motion.a
                  href="https://map.naver.com/p/search/%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EC%A0%84%EB%8C%80%EB%B3%B8%EC%A0%90/place/1477045231?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/review?additionalHeight=76&fromPanelNum=1&locale=ko&searchText=%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EC%A0%84%EB%8C%80%EB%B3%B8%EC%A0%90&svcName=map_pcv5&timestamp=202509151958&additionalHeight=76&timestamp=202509151958&locale=ko&svcName=map_pcv5&searchText=%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EC%A0%84%EB%8C%80%EB%B3%B8%EC%A0%90&fromPanelNum=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  네이버 리뷰 보러가기
                </motion.a>
              </div>
            </motion.div>

            <div className="space-y-2">
              {reviewStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProgressBar
                    label={stat.label}
                    value={stat.value}
                    maxValue={stat.maxValue}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 리뷰 카드들 */}
          <motion.div className="grid grid-cols-1" variants={containerVariants}>
            {reviewData.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ReviewCard
                  author={review.author}
                  content={review.content}
                  rating={review.rating}
                  visitDate={review.visitDate}
                  visitCount={review.visitCount}
                  verificationMethod={review.verificationMethod}
                  tags={review.tags}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-24" variants={containerVariants}>
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
    </motion.div>
  );
}

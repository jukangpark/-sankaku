"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Franchise() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const processVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const franchiseInfo = [
    {
      title: "브랜드 가치",
      description: "13년간 쌓아온 신뢰와 노하우",
      icon: "🏆",
      details: [
        "검증된 브랜드 인지도",
        "정통 일본 라멘 레시피",
        "체계적인 운영 시스템",
        "지속적인 마케팅 지원",
      ],
    },
    {
      title: "창업 지원",
      description: "처음부터 끝까지 함께하는 파트너십",
      icon: "🤝",
      details: [
        "매장 설계 및 인테리어",
        "셰프 교육 및 기술 전수",
        "오픈 준비 및 마케팅",
        "지속적인 운영 컨설팅",
      ],
    },
    {
      title: "수익성",
      description: "검증된 비즈니스 모델",
      icon: "💰",
      details: [
        "높은 고객 만족도",
        "안정적인 매출 구조",
        "효율적인 원가 관리",
        "지속적인 성장 가능성",
      ],
    },
  ];

  const requirements = [
    {
      title: "창업 자격",
      items: [
        "성실하고 열정적인 창업 의지",
        "최소 3억원 이상의 창업 자금",
        "적합한 매장 위치 확보",
        "식품업계 경험 우대",
      ],
    },
    {
      title: "매장 조건",
      items: [
        "면적: 50-80평 (150-240㎡)",
        "주차 공간 확보",
        "좋은 접근성과 가시성",
        "적절한 임대료 수준",
      ],
    },
    {
      title: "지원 내용",
      items: [
        "브랜드 라이센스 제공",
        "전문 셰프 교육",
        "매장 설계 및 인테리어",
        "마케팅 및 홍보 지원",
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
            창업안내
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            산카쿠와 함께 정통 일본 라멘의 맛을 전국에 전파해보세요
          </motion.p>
        </div>
      </section>

      {/* Franchise Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              산카쿠 프랜차이즈의 특별함
            </h2>
            <p className="text-xl text-gray-600">
              왜 산카쿠를 선택해야 할까요?
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {franchiseInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">{info.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-6">{info.description}</p>
                <ul className="space-y-2 text-left">
                  {info.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              창업 요건 및 지원
            </h2>
            <p className="text-xl text-gray-600">
              창업에 필요한 모든 정보를 확인하세요
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-gray-700"
                    >
                      <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Investment Info */}
      <motion.section className="py-24 bg-white" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">투자 정보</h2>
            <p className="text-xl text-gray-600">
              창업에 필요한 투자 비용을 안내해드립니다
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  초기 투자 비용
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">프랜차이즈 라이센스</span>
                    <span className="font-bold text-gray-900">₩30,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">매장 인테리어</span>
                    <span className="font-bold text-gray-900">₩50,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">주방 설비</span>
                    <span className="font-bold text-gray-900">₩40,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">초기 재고</span>
                    <span className="font-bold text-gray-900">₩10,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">기타 비용</span>
                    <span className="font-bold text-gray-900">₩20,000,000</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-black text-white rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">총 투자 비용</span>
                    <span className="text-2xl font-bold">₩150,000,000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  운영 비용
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">로열티 (매출의 5%)</span>
                    <span className="font-bold text-gray-900">
                      월 매출 기준
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">광고비 (매출의 2%)</span>
                    <span className="font-bold text-gray-900">
                      월 매출 기준
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">인건비</span>
                    <span className="font-bold text-gray-900">
                      월 ₩8,000,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">임대료</span>
                    <span className="font-bold text-gray-900">
                      월 ₩3,000,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">기타 운영비</span>
                    <span className="font-bold text-gray-900">
                      월 ₩2,000,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-24 bg-gray-50" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              창업 프로세스
            </h2>
            <p className="text-xl text-gray-600">
              창업부터 오픈까지의 과정을 단계별로 안내해드립니다
            </p>
          </motion.div>

          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={processVariants}
            >
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  상담 및 신청
                </h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">
                  창업 문의 후 상담을 통해 산카쿠 프랜차이즈에 대한 이해를 돕고,
                  창업 의향서를 작성하여 신청해주세요.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={processVariants}
            >
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">자격 심사</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">
                  창업 자격과 자금력을 검토하여 적합성을 판단합니다. 심사 기간은
                  약 2주 정도 소요됩니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={processVariants}
            >
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">계약 체결</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">
                  자격 심사 통과 후 프랜차이즈 계약을 체결하고, 라이센스 비용을
                  납부해주세요.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={processVariants}
            >
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900">매장 준비</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">
                  매장 위치 선정부터 인테리어, 주방 설비 설치까지 모든 과정을
                  함께 진행합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              variants={processVariants}
            >
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  교육 및 오픈
                </h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-600">
                  셰프 교육과 서비스 교육을 완료한 후 정식 오픈을 진행합니다.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section className="py-24 bg-white" variants={containerVariants}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">창업 문의</h2>
            <p className="text-xl text-gray-600">
              산카쿠 프랜차이즈에 관심이 있으시면 언제든 연락주세요
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
                    연락처
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="전화번호를 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  희망 지역
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  placeholder="창업을 희망하는 지역을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  창업 예정 시기
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black">
                  <option>시기를 선택하세요</option>
                  <option>3개월 이내</option>
                  <option>6개월 이내</option>
                  <option>1년 이내</option>
                  <option>1년 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black resize-none"
                  placeholder="궁금한 점이나 문의사항을 자유롭게 작성해주세요"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  창업 문의하기
                </button>
              </div>
            </form>
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

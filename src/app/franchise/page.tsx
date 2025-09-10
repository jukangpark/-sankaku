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

  const performanceData = [
    {
      title: "11회전",
      subtitle: "테이블 회전율",
      note: "*25년 1월 광주 전대점",
      icon: "🔄",
    },
    {
      title: "30.7%",
      subtitle: "평균 수익률",
      note: "*본점기준이며 가맹점은 다를 수 있습니다.",
      icon: "📈",
    },
    {
      title: "314만원",
      subtitle: "일 매출",
      note: "*25년 4월 대전 충남대점",
      icon: "💰",
    },
    {
      title: "240%",
      subtitle: "타 브랜드 대비 마진율",
      note: "*25년 1월 매출 자료 집계 기준",
      icon: "📊",
    },
  ];

  const menuCategories = [
    {
      title: "라멘세트",
      description: "시그니처 조합. 푸짐한 양. 가성비 9,900원 형성",
      detail:
        "일본 현지의 돈사골 맛을 한국인 입맛에 맞게 담백하게 계량한 시그니처 메뉴",
      types: "종류: 산카쿠, 카라이 산카쿠, 미소 돈코츠, 카라이 미소 돈코츠 등",
      special: "특별메뉴: 들깨해장라멘",
    },
    {
      title: "온우동",
      description: "가쓰오부시와 쑥갓으로 맛을 낸 깊은 맛의 온우동",
      types: "종류: 카케우동, 니꾸우동, 유부우동, 김치유부 우동",
      special: "특별메뉴: 들깨크림우동",
    },
    {
      title: "냉라멘(시즌메뉴)",
      description: "가쓰오부시로 맛을 낸 시원하고 새콤한 시즌메뉴",
      types: "종류: 히야시츄카, 참깨마요 히야시츄카",
    },
    {
      title: "나만의 오니기리",
      description: "취향에 맞게 선택하는 두가지 맛조합!",
      detail: "한 오니기리 안에 원하는 취향으로 다양한 조합 가능",
    },
  ];

  const advantages = [
    "감성적인 인테리어와 미니멀한 브랜드 이미지",
    "메뉴를 선택하는 과정부터 게임의 캐릭터를 고르는 느낌으로 젊은 고객과의 소통을 하는 메뉴구성",
    "라멘+오니기리 세트가 9,900원으로 고물가 시대에 가성비 좋음",
    "희소성 있는 메뉴 구성 (한정판, 프리미엄 조합)",
    "SNS에서 유행하는 비주얼과 조합",
    "풀코스처럼 구성된 라멘+오니기리+디저트",
    "체계적인 마케팅팀 구성으로 직접 기획하고 운영하여 빠른 트렌드를 반영",
  ];

  const processSteps = [
    {
      step: "01",
      title: "가맹문의",
      description:
        "홈페이지 또는 유선 문의 시 개설 절차 안내와 희망지역, 상권조사 등 창업관련 내용 상담 진행",
    },
    {
      step: "02",
      title: "상권조사",
      description:
        "지역상권을 분석 및 경쟁업체 유동인구 향후 상권변화까지 고려하여 후보지 선정",
    },
    {
      step: "03",
      title: "임대차 계약 및 가맹 계약",
      description: "임대차 계약 및 가맹계약 일정 협의",
    },
    {
      step: "04",
      title: "인테리어 공사",
      description:
        "최적의 매장 운영을 위한 인테리어 도면 및 3D디자인 제작 및 시공",
    },
    {
      step: "05",
      title: "가맹점주님 교육 및 오픈시뮬레이션",
      description: "현 매장에 맞는 교육 및 메뉴, 서비스 교육 실시",
    },
    {
      step: "06",
      title: "GRAND OPEN 및 슈퍼바이저 지원",
      description: "슈퍼바이저를 파견하여 종합적인 지도 및 사후관리",
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
            창업에 필요한 모든 정보를 확인하세요
          </motion.p>
        </div>
      </section>
      <section className="bg-white text-center">
        {/* PDF 다운로드 버튼 */}
        <motion.div className="mt-8" variants={itemVariants}>
          <a
            href="/franchise/가맹점문의.pdf"
            download="가맹점문의.pdf"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            가맹점 문의.pdf 다운로드
          </a>
        </motion.div>
      </section>

      {/* Performance Data */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {performanceData.map((data, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8"
                variants={itemVariants}
              >
                <div className="text-4xl mb-4">{data.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {data.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {data.subtitle}
                </p>
                <p className="text-sm text-gray-500">{data.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 창업 경쟁력 안내 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              창업 경쟁력 안내
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 text-center"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. 홀 영업
              </h3>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 text-center"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. 배달 판매
              </h3>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 text-center"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. 포장 판매
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1석 3조의 매출 구조로 효율성을 높이다
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              매장 하나를 운영하면서도 전통적인 홀/테이크 아웃/배달 모두 운영할
              수 있는 시스템으로
              <br />
              1개의 매장에서도 3가지의 구조를 가질 수 있도록 구성했습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 매장 운영의 효율성을 높이다 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              매장 운영의 효율성을 높이다
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                셀프 시스템
              </h3>
              <p className="text-gray-600">
                주문/배식/퇴식을 셀프로 운영인력을 최소화하여 효율성을 높이고
                매출을 증대시킵니다. 홀은 셀프 시스템을 도입함으로써 효율성을
                극대화 시켰습니다.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                조리의 간편성
              </h3>
              <p className="text-gray-600">
                소스와 고기, 그리고 오니기리 재료들의 작업이 완료되어 각 매장에
                공급됨으로써 편의성을 갖추며 맛과 퀄리티 유지.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                구성의 완성도
              </h3>
              <p className="text-gray-600">
                주메뉴와 함께 골라먹는 재미, 마지막으로 디저트를 제공함과 동시에
                가격과 고객 만족을 모두 갖추었습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 메뉴들 사진과 메뉴 설명 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              메뉴들 사진과 메뉴 설명
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {menuCategories.map((menu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8"
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {menu.title}
                </h3>
                <p className="text-gray-600 mb-4">{menu.description}</p>
                {menu.detail && (
                  <p className="text-gray-600 mb-4">{menu.detail}</p>
                )}
                {menu.types && (
                  <p className="text-sm text-gray-500 mb-2">{menu.types}</p>
                )}
                {menu.special && (
                  <p className="text-sm text-gray-500">{menu.special}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 왜 젊은층들에게 인기가 있는가? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              왜 젊은층들에게 인기가 있는가?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                variants={cardVariants}
              >
                <p className="text-gray-700">{advantage}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 타사의 재료공급과 산카쿠의 재료공급의 차이점 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              타사의 재료공급과 산카쿠의 재료공급의 차이점
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              산카쿠 브랜드는 초보자도 가능
            </h3>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 mb-12"
            variants={itemVariants}
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              전문 조리사가 산카쿠 전문 재료 가공 공장에서 조리하여 안전하게
              배송해주기 때문에
              <br />
              패스트푸드 매장처럼 편리하고 비전문가여도 전국 어느 지점에서도
              퀄리티 높은 동일한 맛으로 간단히 조리 가능합니다.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              산카쿠의 공장과 타브랜드 공장의 차이점
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    매장 운영 경험을 바탕으로 현장에서 바로 쓰기 좋은 형태로
                    제조.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    불필요한 공정을 줄이고 해동, 재가공 등의 번거로움 최소화.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    레시피 설계 단계부터 가맹점 조리 효율 고려.
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    소스, 속재료, 육수까지 전용 생산 시스템 구축.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    위생 기준이 높고, 유통과 냉장 포장 시스템이 체계화됨.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 우리의 방향성과 어떤 재료를 사용하는지 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              우리의 방향성과 어떤 재료를 사용하는지
            </h2>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              맛과 위생은 절대 타협하지 않는 원칙
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🍜
                </div>
                <p className="text-gray-700">
                  직접 개발한 산카쿠만의 육수, 최소한의 가공식품 사용
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🍙
                </div>
                <p className="text-gray-700">
                  오니기리에 최적화된 국내산 프리미엄 김과 쌀, 직접 조리한
                  속재료 사용
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🌿
                </div>
                <p className="text-gray-700">
                  MSG를 최소화하고 자연의 감칠맛 위주로 설계
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 든든한 한끼의 식사를 대접하는 기업 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              든든한 한끼의 식사를 대접하는 기업
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-700">
                단순히 한끼의 음식을 '파는' 기업이 아닌, 든든한 한끼를
                '대접하는' 기업.
              </p>
              <p className="text-lg text-gray-700">
                단순 프랜차이즈가 아닌, 제조+기술+브랜딩 융합형 시스템
              </p>
              <p className="text-lg text-gray-700">
                제품 기획, 공장 생산, 물류, 교육 시스템까지 내재화
              </p>
              <p className="text-lg text-gray-700">
                지역 상생, 장애인 고용, ESG 기반 공장 운영 계획
              </p>
              <p className="text-lg text-gray-700">
                매장을 넘어 건강한 한 끼를 제공하는 사회적 식문화 브랜드
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 bg-black text-white rounded-2xl p-8 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">성과</h3>
            <p className="text-lg mb-2">
              창업 3개월 만에 광주에서 웨이팅 맛집 3위, 매출 6,500만원 달성
            </p>
            <p className="text-lg">
              대전 충남대점은 첫 달 7,500 만원 기록하며 브랜드 성장 중
            </p>
          </motion.div>
        </div>
      </section>

      {/* 가맹절차 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">가맹절차</h2>
          </motion.div>

          <motion.div className="space-y-8" variants={containerVariants}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                variants={processVariants}
              >
                <div className="md:w-1/4 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 가맹점 문의 */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              가맹점 문의
            </h2>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 text-center mb-12"
            variants={itemVariants}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                (주)해송NS 정지윤
              </h3>
              <p className="text-3xl font-bold text-black mb-4">
                010-5841-0150
              </p>
              <p className="text-gray-600">
                부재 시 문자 남겨주시면 순차적으로 응대해 드리겠습니다.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              (주)해송NS는 (주)해송물산의 그룹사 입니다.
            </p>
          </motion.div>

          {/* 문의 폼 */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              창업 문의하기
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
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
                  희망 지역 *
                </label>
                <input
                  type="text"
                  required
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
                  창업 자금 규모
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black">
                  <option>자금 규모를 선택하세요</option>
                  <option>1억원 이하</option>
                  <option>1억원 ~ 2억원</option>
                  <option>2억원 ~ 3억원</option>
                  <option>3억원 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black resize-none"
                  placeholder="궁금한 점이나 문의사항을 자유롭게 작성해주세요"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
                >
                  문의하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

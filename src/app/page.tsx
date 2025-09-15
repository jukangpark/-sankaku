"use client";

import Navigation from "@/components/Navigation";
import BrandSlider from "@/components/BrandSlider";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import slideTexts from "./constants/slideTexts";
import ReviewSection from "@/components/ReviewSection";
import CountUpAnimation from "@/components/CountUpAnimation";
import stores from "@/app/constants/stores";
import StoreShowCaseSection from "@/components/StoreShowCaseSection";
import AwardSection from "@/components/AwardSection";

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

  const storeCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  // 베스트메뉴 데이터 추가
  const bestMenuItems = [
    { id: 1, name: "산카쿠 라멘", image: "/menu/산카쿠 라멘.jpg" },
    { id: 2, name: "차슈폭탄 라멘", image: "/menu/차슈폭탄 라멘.jpeg" },
    { id: 3, name: "들깨크림 우동", image: "/menu/들깨크림 우동.jpeg" },
    { id: 4, name: "나만의 오리기리", image: "/menu/나만의 오리기리.jpeg" },
    { id: 5, name: "우동세트", image: "/menu/우동세트 구성.png" },
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

      {/* Brand Story Slider Section */}
      <BrandSlider slideTexts={slideTexts} autoSlideInterval={5000} />

      {/* Best Menu Section */}
      {/* <BestMenuCarousel menuItems={bestMenuItems} autoSlideInterval={6000} /> */}

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
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

      <ReviewSection />

      {/* Parallax Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[400px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/menu/산카쿠 라멘.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
      </section>

      {/* YouTube & Brand Message Section */}
      <motion.section
        className="py-24 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p className="text-lg md:text-xl text-gray-500 font-medium">
                대한민국 라멘 & 오니기리 NO.1
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                산카쿠
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                한치의 의심없는 성공의 혁신,
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                모두에게 검증된 브랜드로 성공하세요.
              </motion.p>
            </motion.div>

            {/* Right - YouTube Video */}
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative w-full h-0 pb-[65.25%] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Cek_FQ05O64?autoplay=1&mute=1&loop=1&playlist=Cek_FQ05O64&controls=1&showinfo=0&rel=0"
                  title="산카쿠 브랜드 소개 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Video Overlay for better visual effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl -z-10 opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Performance Data */}
      <section className="py-24 bg-white">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            수치로 말하는 산카쿠
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: <CountUpAnimation endValue={11} suffix="회전" />,
                subtitle: "테이블 회전율",
                note: "*25년 1월 광주 전대점",
                icon: "🔄",
              },
              {
                title: <CountUpAnimation endValue={30.7} suffix="%" />,
                subtitle: "평균 수익률",
                note: "*본점기준이며 가맹점은 다를 수 있습니다.",
                icon: "📈",
              },
              {
                title: <CountUpAnimation endValue={314} suffix="만원" />,
                subtitle: "일 매출",
                note: "*25년 4월 대전 충남대점",
                icon: "💰",
              },
              {
                title: <CountUpAnimation endValue={240} suffix="%" />,
                subtitle: "타 브랜드 대비 마진율",
                note: "*25년 1월 매출 자료 집계 기준",
                icon: "📊",
              },
            ].map((data, index) => (
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

      {/* Franchise Growth Section */}
      <section className="py-24 relative">
        {/* Background Image */}
        <Image
          src="/bg-img/sankaku-bg-image.jpg"
          alt="산카쿠 라멘 배경"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              className="text-white space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                전국 205호점 돌파
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl leading-relaxed"
                variants={itemVariants}
              >
                산카쿠의 가맹점주님들과 함께 하는 역사는 계속됩니다.
              </motion.p>
            </motion.div>

            {/* Right - Line Chart */}
            <motion.div
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-30"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-80">
                {/* Chart Title */}
                <h3 className="text-2xl font-bold text-black mb-6 text-center">
                  가맹점 성장 현황
                </h3>

                {/* SVG Line Chart */}
                <svg className="w-full h-64" viewBox="0 0 400 220">
                  {/* Grid Lines */}
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 20"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Y-axis labels */}
                  <text x="10" y="35" className="text-xs fill-black">
                    250
                  </text>
                  <text x="10" y="75" className="text-xs fill-black">
                    200
                  </text>
                  <text x="10" y="115" className="text-xs fill-black">
                    150
                  </text>
                  <text x="10" y="155" className="text-xs fill-black">
                    100
                  </text>
                  <text x="10" y="195" className="text-xs fill-black">
                    50
                  </text>
                  <text x="15" y="215" className="text-xs fill-black">
                    0
                  </text>

                  {/* X-axis labels */}
                  <text x="40" y="215" className="text-xs fill-black">
                    2019
                  </text>
                  <text x="85" y="215" className="text-xs fill-black">
                    2020
                  </text>
                  <text x="130" y="215" className="text-xs fill-black">
                    2021
                  </text>
                  <text x="220" y="215" className="text-xs fill-black">
                    2022
                  </text>
                  <text x="310" y="215" className="text-xs fill-black">
                    2023
                  </text>
                  <text x="355" y="215" className="text-xs fill-black">
                    2024
                  </text>

                  {/* Line Chart Path */}
                  <motion.path
                    d="M 45,198 L 90,196 L 135,186 L 175,168 L 225,150 L 275,119 L 325,83 L 355,35"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />

                  {/* Data Points */}
                  {[
                    { x: 45, y: 198, value: 2 },
                    { x: 90, y: 196, value: 3 },
                    { x: 135, y: 186, value: 10 },
                    { x: 175, y: 168, value: 27 },
                    { x: 225, y: 150, value: 49 },
                    { x: 275, y: 119, value: 89 },
                    { x: 325, y: 83, value: 133 },
                    { x: 355, y: 35, value: 205 },
                  ].map((point, index) => (
                    <motion.g key={index}>
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#000000"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                        viewport={{ once: true }}
                      />
                      <motion.text
                        x={point.x}
                        y={point.y - 12}
                        className="text-xs font-bold fill-gray-900"
                        textAnchor="middle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.8, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {point.value}호점
                      </motion.text>
                    </motion.g>
                  ))}
                </svg>

                {/* Chart Legend */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-0.5 bg-black"></div>
                    <span className="text-sm text-gray-600">
                      가맹점 수 증가 추이
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StoreShowCaseSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <AwardSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Store List */}
      <section className="py-24 bg-white">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            매장 안내
          </h2>
        </motion.div>
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

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link
            href="/store-info"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform font-semibold"
          >
            매장 찾아보기
          </Link>
        </motion.div>
      </section>

      {/* 가맹점 문의 */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

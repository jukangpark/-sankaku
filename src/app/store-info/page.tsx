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
      name: "산카쿠 전대본점",
      address: "광주 북구 용봉로138번길 24 1층",
      roadAddress: "광주 북구 중흥동 337-4",
      phone: "0507-1308-3995",
      description:
        "광주맛집, 광주전대 인근에서 맛있는 오니기리를 즐길 수 있는 산카쿠 전대본점은 전대후문에서 도보 약 5분 거리에 위치하고 있습니다.",
      accessInfo: {
        walk: [
          "전대 후문에서 도보 약 5분",
          "광주역에서 차량 5분",
          "북구보건소에서 3분",
          "북구청에서 도보 5분",
          "메가박스 전대에서 도보 6분",
        ],
        car: ["효죽 공영주차장(1시간 무료) 이용 가능"],
      },
      hours: {
        wed: "11:00 - 20:30",
        thu: "11:00 - 20:30",
        fri: "11:00 - 20:30",
        sat: "11:00 - 20:30",
        sun: "11:00 - 20:30",
        mon: "휴무",
        tue: "11:00 - 20:30",
      },
      features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
      mapUrl:
        "https://map.naver.com/p/entry/place/1477045231?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509101426&locale=ko&svcName=map_pcv5",
    },
    {
      name: "산카쿠 인계점",
      address: "경기 수원시 팔달구 인계로124번길 27-10 1층 115호, 116호",
      roadAddress: "경기 수원시 팔달구 인계동 1040",
      phone: "0507-1412-2158",
      description: "수원 인계동에 위치한 산카쿠 인계점입니다.",
      accessInfo: {
        walk: ["수원시청역 6번 출구에서 508m"],
        car: [
          "주차가능(유료)",
          "추가 요금: 60분당 6,000원, 최대 100,000원",
          "엘리시아 타워 건물 주차 가능 (1시간 무료 주차)",
        ],
      },
      hours: {
        wed: "11:00 - 20:30",
        thu: "11:00 - 20:30",
        fri: "11:00 - 20:30",
        sat: "11:00 - 20:30",
        sun: "11:00 - 20:30",
        mon: "휴무",
        tue: "11:00 - 20:30",
      },
      features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
      mapUrl:
        "https://map.naver.com/p/search/%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98/place/2096410906?placePath=/home?entry=pll&from=nx&fromNxList=true&from=map&fromPanelNum=2&timestamp=202509101427&locale=ko&svcName=map_pcv5&searchText=%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D126.928950%26y%3D35.171035&searchType=place",
    },
    {
      name: "산카쿠 충대점",
      address: "대전 유성구 궁동로18번길 13 1층 산카쿠",
      roadAddress: "대전 유성구 궁동 395-11",
      phone: "0507-1441-0480",
      description:
        "충남대학교 바로 옆에 위치하고 있는 대전 궁동 맛집 산카쿠충대점입니다. 대전하면 성심당 많이들 오시잖아요? 성심당가시기 전에 산카쿠충대점에 들려서 맛있는 한 끼 하고 가시는건 어떠신가요?",
      accessInfo: {
        walk: [
          "네이버지도에 '산카쿠충대점' 검색하고 오시면 편리합니다!",
          "가장 가까운 역: 유성온천역 (도보 15분, 차량 5분)",
          "102번, 105번, 106번, 108번, 113번 버스 탑승 후 충남대 정문에서 하차하면 도보 3분",
        ],
        car: ["유성온천역에서 차량으로 5분", "충남대학교 바로 옆에 위치"],
      },
      hours: {
        wed: "11:00 - 20:30",
        thu: "11:00 - 20:30",
        fri: "11:00 - 20:30",
        sat: "11:00 - 20:30",
        sun: "11:00 - 20:30",
        mon: "휴무",
        tue: "11:00 - 20:30",
      },
      features: ["수제 오니기리", "라멘", "우동", "일본 가정식"],
      mapUrl:
        "https://map.naver.com/p/search/%EC%82%B0%EC%B9%B4%EC%BF%A0%20%EB%9D%BC%EB%A9%98/place/1483231321?placePath=%3Fentry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D126.928950%26y%3D35.171035&searchType=place",
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

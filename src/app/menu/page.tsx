"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  flavors?: string[];
  isNew?: boolean;
  isHot?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

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

  const menuCategories: MenuCategory[] = [
    {
      title: "세트 메뉴",
      items: [
        {
          name: "라멘 세트",
          price: "₩10,900",
          description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
          isHot: true,
        },
        {
          name: "우동 세트",
          price: "₩9,900",
          description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
        },
        {
          name: "튀김 세트",
          price: "₩12,900~",
          description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
          isHot: true,
        },
      ],
      note: "라멘, 우동, 오니기리 메뉴 변경가능",
    },
    {
      title: "오니기리",
      items: [
        {
          name: "나만의 오니기리",
          price: "₩2,100~",
          description: "2가지 맛 선택가능",
          isHot: true,
          flavors: [
            "오카카(가다랑어포조림)",
            "볶음김치",
            "오징어젓",
            "무말랭이",
            "게살",
            "날치알",
            "청양",
            "참치마요",
            "임치",
            "참치마요",
            "제육볶음",
            "명란",
            "소불고기",
            "구운연어",
            "양념게장",
            "간장게장",
          ],
        },
      ],
    },
    {
      title: "라멘",
      items: [
        {
          name: "산카쿠 라멘",
          price: "₩9,500",
          description: "정통 산카쿠 라멘",
          isHot: true,
        },
        {
          name: "들깨 해장 라멘",
          price: "₩10,500",
          description: "들깨의 고소함이 가득한 해장 라멘",
          isHot: true,
        },
        {
          name: "카라이 산카쿠 라멘",
          price: "₩9,900",
          description: "매콤한 카라이 산카쿠 라멘",
        },
        {
          name: "미소 돈코츠",
          price: "₩9,500",
          description: "진한 돼지뼈 국물의 미소 라멘",
        },
        {
          name: "카라이 미소 돈코츠",
          price: "₩9,900",
          description: "매콤한 미소 돈코츠 라멘",
        },
        {
          name: "쇼유 라멘",
          price: "₩9,500",
          description: "깔끔한 간장 맛의 라멘",
        },
        {
          name: "차슈폭탄 라멘",
          price: "₩13,900",
          description: "부드러운 차슈가 가득한 라멘",
          isNew: true,
        },
      ],
    },
    {
      title: "온우동",
      items: [
        {
          name: "들깨 크림 우동",
          price: "₩10,900",
          description: "고소한 들깨의 진한 맛",
          isHot: true,
        },
        {
          name: "카케 우동",
          price: "₩10,900",
          description: "전통적인 카케 우동",
        },
        {
          name: "유부 우동",
          price: "₩10,500",
          description: "유부가 들어간 우동",
        },
        {
          name: "니꾸 우동",
          price: "₩8,500",
          description: "고기와 야채가 가득한 우동",
          isHot: true,
        },
        {
          name: "김치 유부 우동",
          price: "₩8,900",
          description: "김치와 유부의 조화",
        },
      ],
    },
    {
      title: "냉라멘",
      items: [
        {
          name: "히야시츄카",
          price: "₩9,500",
          description: "시원한 여름 라멘",
          isNew: true,
          isHot: true,
        },
        {
          name: "참깨마요 히야시츄카",
          price: "₩9,500",
          description: "참깨마요가 들어간 시원한 라멘",
          isNew: true,
        },
      ],
    },
    {
      title: "덮밥·사이드",
      items: [
        {
          name: "미니 차슈 덮밥",
          price: "₩3,900",
          description: "부드러운 차슈 덮밥",
        },
        {
          name: "치킨 마요 덮밥",
          price: "₩4,900",
          description: "치킨과 마요네즈의 조화",
          isNew: true,
        },
        {
          name: "수제 가라아게",
          price: "₩5,900",
          description: "바삭한 일본식 치킨",
          isNew: true,
        },
        {
          name: "타코야끼",
          price: "₩4,900",
          description: "전통 일본 타코야끼",
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

      {/* Menu Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto mb-8 cursor-pointer"
            variants={itemVariants}
            onClick={() => {
              // 새 탭에서 전체 메뉴판 열기
              window.open("/menu/viewer?type=full", "_blank");
            }}
          >
            <Image
              src="/menu/SankakuMenu.png"
              alt="산카쿠 메뉴판"
              width={1200}
              height={900}
              className="rounded-2xl shadow-2xl mx-auto w-full h-auto hover:shadow-3xl transition-shadow"
              priority
            />
          </motion.div>

          {/* Download Button */}
          <motion.div className="text-center" variants={itemVariants}>
            <a
              href="/menu/SankakuMenu.png"
              download="산카쿠_메뉴판.png"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg"
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
              메뉴판 다운로드
            </a>
          </motion.div>
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

                {category.note && (
                  <motion.p
                    className="text-center text-gray-600 mb-8 text-sm"
                    variants={itemVariants}
                  >
                    * {category.note}
                  </motion.p>
                )}

                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                      variants={menuItemVariants}
                      onClick={() => {
                        // 카테고리별로 다른 메뉴 타입 설정
                        let menuType = "full";
                        if (category.title === "라멘") menuType = "ramen";
                        else if (category.title === "온우동") menuType = "udon";
                        else if (category.title === "오니기리")
                          menuType = "onigiri";

                        // 새 탭에서 메뉴 뷰어 열기
                        window.open(`/menu/viewer?type=${menuType}`, "_blank");
                      }}
                    >
                      <div className="text-center">
                        <div className="flex justify-center items-center gap-2 mb-2">
                          {item.isNew && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              NEW
                            </span>
                          )}
                          {item.isHot && (
                            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              HOT
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>

                        {item.flavors && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">
                              선택 가능한 맛:
                            </p>
                            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                              {item.flavors.map(
                                (flavor: string, flavorIndex: number) => {
                                  const isNewFlavor = [
                                    "제육볶음",
                                    "양념게장",
                                    "간장게장",
                                  ].includes(flavor);
                                  return (
                                    <div
                                      key={flavorIndex}
                                      className="flex items-center gap-1"
                                    >
                                      <span className="text-left">
                                        • {flavor}
                                      </span>
                                      {isNewFlavor && (
                                        <span className="bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded text-[10px]">
                                          NEW
                                        </span>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}

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

      {/* Business Hours Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">영업시간</h2>
            <p className="text-xl text-gray-600">산카쿠의 운영시간 안내</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={menuItemVariants}
            >
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">영업시간</h3>
              <p className="text-gray-600 mb-2">11:00 ~ 20:30</p>
              <p className="text-sm text-gray-500">매일 운영</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={menuItemVariants}
            >
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🍜</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                라스트 오더
              </h3>
              <p className="text-gray-600 mb-2">15:00, 20:00</p>
              <p className="text-sm text-gray-500">마지막 주문 시간</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={menuItemVariants}
            >
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Break Time
              </h3>
              <p className="text-gray-600 mb-2">15:30 ~ 17:00</p>
              <p className="text-sm text-gray-500">휴식시간</p>
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
                  🍜 메뉴 안내
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 세트 메뉴는 라멘, 우동, 오니기리 메뉴 변경 가능</li>
                  <li>• 오니기리는 2가지 맛을 선택하여 주문 가능</li>
                  <li>• 모든 국물은 24시간 이상 끓여 만듭니다</li>
                  <li>• 면발은 매일 아침 직접 반죽합니다</li>
                  <li>• 매운 정도는 조절 가능합니다</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🍱 주문 안내
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 모든 메뉴는 포장 가능합니다</li>
                  <li>• 라스트 오더: 15:00, 20:00</li>
                  <li>• Break Time: 15:30 ~ 17:00</li>
                  <li>• 알레르기 정보는 매장에 문의해주세요</li>
                  <li>• 매장 내 식사 시 무료 리필 가능</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

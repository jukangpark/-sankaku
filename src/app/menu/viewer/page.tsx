"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function MenuViewerContent() {
  const searchParams = useSearchParams();
  const menuType = searchParams.get("type") || "full";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getMenuImage = () => {
    switch (menuType) {
      case "ramen":
        return "/menu/산카쿠 라멘.jpg";
      case "udon":
        return "/menu/들깨크림 우동.jpeg";
      case "onigiri":
        return "/menu/나만의 오리기리.jpeg";
      case "full":
      default:
        return "/menu/SankakuMenu.png";
    }
  };

  const getMenuTitle = () => {
    switch (menuType) {
      case "ramen":
        return "라멘 메뉴";
      case "udon":
        return "우동 메뉴";
      case "onigiri":
        return "오니기리 메뉴";
      case "full":
      default:
        return "산카쿠 메뉴판";
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="text-center mb-8" variants={imageVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {getMenuTitle()}
        </h1>
        <p className="text-lg text-gray-600">클릭하여 확대하여 보세요</p>
      </motion.div>

      {/* Menu Image */}
      <motion.div className="max-w-6xl w-full" variants={imageVariants}>
        <Image
          src={getMenuImage()}
          alt={getMenuTitle()}
          width={1200}
          height={900}
          className="rounded-2xl shadow-2xl w-full h-auto cursor-zoom-in"
          priority
          onClick={() => {
            // 이미지를 새 탭에서 열기
            window.open(getMenuImage(), "_blank");
          }}
        />
      </motion.div>

      {/* Download Button */}
      <motion.div className="mt-8" variants={imageVariants}>
        <a
          href={getMenuImage()}
          download={`${getMenuTitle()}.png`}
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

      {/* Close Button */}
      <motion.button
        className="mt-6 flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        variants={imageVariants}
        onClick={() => window.close()}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span>창 닫기</span>
      </motion.button>
    </motion.div>
  );
}

export default function MenuViewer() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">메뉴를 불러오는 중...</p>
          </div>
        </div>
      }
    >
      <MenuViewerContent />
    </Suspense>
  );
}

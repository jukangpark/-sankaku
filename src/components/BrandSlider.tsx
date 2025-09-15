"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface slideTexts {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface BrandSliderProps {
  slideTexts: slideTexts[];
  autoSlideInterval?: number;
}

export default function BrandSlider({
  slideTexts,
  autoSlideInterval = 5000,
}: BrandSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(1); // 1: 오른쪽으로, -1: 왼쪽으로
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 중인지 확인

  // 자동 슬라이드 기능 (드래그 중일 때는 일시정지)
  useEffect(() => {
    if (isDragging || isAnimating) return;

    const timer = setInterval(() => {
      const newSlide = (currentSlide + 1) % slideTexts.length;
      changeSlide(newSlide, 1);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [
    slideTexts.length,
    isDragging,
    isAnimating,
    autoSlideInterval,
    currentSlide,
  ]);

  // 터치 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  // 터치 이동
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // 터치 종료
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slideTexts.length - 1) {
      changeSlide(currentSlide + 1, 1); // 왼쪽 스와이프 = 오른쪽으로 슬라이드
    }
    if (isRightSwipe && currentSlide > 0) {
      changeSlide(currentSlide - 1, -1); // 오른쪽 스와이프 = 왼쪽으로 슬라이드
    }

    setIsDragging(false);
  };

  // 마우스 드래그 (데스크톱에서도 사용 가능)
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slideTexts.length - 1) {
      changeSlide(currentSlide + 1, 1); // 왼쪽 스와이프 = 오른쪽으로 슬라이드
    }
    if (isRightSwipe && currentSlide > 0) {
      changeSlide(currentSlide - 1, -1); // 오른쪽 스와이프 = 왼쪽으로 슬라이드
    }

    setIsDragging(false);
  };

  // 슬라이드 변경 함수 (애니메이션 상태 관리 포함)
  const changeSlide = (newSlide: number, newDirection: number) => {
    if (isAnimating) return; // 애니메이션 중이면 무시

    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentSlide(newSlide);

    // 애니메이션 완료 후 버튼 활성화 (애니메이션 시간 + 여유시간)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 1초 후 버튼 활성화
  };

  // 화살표 클릭 핸들러
  const goToPrevious = () => {
    const newSlide =
      currentSlide > 0 ? currentSlide - 1 : slideTexts.length - 1;
    changeSlide(newSlide, -1); // 왼쪽 화살표 = 새 슬라이드가 왼쪽에서 나타남
  };

  const goToNext = () => {
    const newSlide =
      currentSlide < slideTexts.length - 1 ? currentSlide + 1 : 0;
    changeSlide(newSlide, 1); // 오른쪽 화살표 = 새 슬라이드가 오른쪽에서 나타남
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 1,
    }),
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
        duration: 0.1,
      },
    },
  };

  const textLineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="relative w-full h-screen cursor-grab active:cursor-grabbing select-none bg-black"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 40 },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={slideTexts[currentSlide].image}
                alt={`슬라이드 ${currentSlide + 1}`}
                fill
                className="object-cover"
                priority
                draggable={false}
              />

              {/* 오버레이 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

              {/* 텍스트 오버레이 */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    className="max-w-2xl"
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    key={currentSlide}
                  >
                    {slideTexts[currentSlide].title
                      .split("\n")
                      .map((line, index) => (
                        <motion.div
                          key={index}
                          variants={textLineVariants}
                          className={
                            index ===
                            slideTexts[currentSlide].title.split("\n").length -
                              1
                              ? "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                              : "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight"
                          }
                        >
                          {line}
                        </motion.div>
                      ))}
                    <motion.p
                      variants={textLineVariants}
                      className="text-lg md:text-xl text-gray-200 mb-6 max-w-lg"
                    >
                      {slideTexts[currentSlide].description}
                    </motion.p>

                    {/* 인디케이터 - 애니메이션 없이 텍스트 바로 아래에 배치 */}
                    <div className="flex space-x-2 mt-2">
                      {slideTexts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const newDirection = index > currentSlide ? 1 : -1;
                            changeSlide(index, newDirection);
                          }}
                          className={`w-9 transition-all duration-300 ${
                            index === currentSlide
                              ? "bg-white"
                              : isAnimating
                              ? "bg-white/20 cursor-not-allowed"
                              : "bg-white/40 hover:bg-white/70 cursor-pointer"
                          }`}
                          style={{ height: "3px" }}
                          disabled={isAnimating}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 좌측 화살표 */}
        <button
          onClick={goToPrevious}
          disabled={isAnimating}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 z-10 ${
            isAnimating
              ? "bg-black/10 text-gray-400 cursor-not-allowed"
              : "bg-black/30 hover:bg-black/50 text-white cursor-pointer"
          }`}
          aria-label="이전 슬라이드"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 우측 화살표 */}
        <button
          onClick={goToNext}
          disabled={isAnimating}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 z-10 ${
            isAnimating
              ? "bg-black/10 text-gray-400 cursor-not-allowed"
              : "bg-black/30 hover:bg-black/50 text-white cursor-pointer"
          }`}
          aria-label="다음 슬라이드"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 드래그 힌트 (모바일에서만 표시) */}
        <div className="absolute top-4 right-4 md:hidden">
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            ← → 드래그
          </div>
        </div>
      </div>
    </section>
  );
}

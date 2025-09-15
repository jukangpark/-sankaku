"use client";

import Navigation from "@/components/Navigation";
import BrandSlider from "@/components/BrandSlider";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import slideTexts from "../constants/slideTexts";
import ReviewSection from "@/components/ReviewSection";
import CountUpAnimation from "@/components/CountUpAnimation";
import stores from "@/constants/stores";
import StoreShowCaseSection from "@/components/StoreShowCaseSection";
import AwardSection from "@/components/AwardSection";
import FeatureSection from "@/components/FeatureSection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import YoutubeSection from "@/components/YoutubeSection";
import PerformanceDataSection from "@/components/PerformanceDataSection";
import FranchiseGrowthSection from "@/components/FranchiseGrowthSection";
import StoreListSection from "@/components/StoreListSection";
import FranchiseContactForm from "@/components/FranchiseContactForm";
import HomeBanner from "@/components/home/HomeBanner";

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

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HomeBanner
        containerVariants={containerVariants}
        logoVariants={logoVariants}
        itemVariants={itemVariants}
        buttonVariants={buttonVariants}
      />

      {/* Brand Story Slider Section */}
      <BrandSlider slideTexts={slideTexts} autoSlideInterval={5000} />

      <FeatureSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <MenuPreviewSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

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

      <YoutubeSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <PerformanceDataSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <FranchiseGrowthSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <StoreShowCaseSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <AwardSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <StoreListSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        storeCardVariants={storeCardVariants}
      />

      <FranchiseContactForm
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

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

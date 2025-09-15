"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ReviewCard from "./ReviewCard";
import reviewData from "@/constants/reviewData";

const ReviewSection = () => {
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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="py-24 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            고객의 후기로 증명된 산카쿠
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SNS, 각종 매체에서 핫한 브랜드로 자리잡았습니다!
          </p>
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

        {/* 더 많은 리뷰 보기 버튼 */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link
            href="/customer-voice"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform font-semibold"
          >
            더 많은 리뷰 보기
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewSection;

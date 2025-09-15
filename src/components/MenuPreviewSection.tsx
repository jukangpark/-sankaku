import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MenuPreviewSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
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
              <p className="text-gray-600 mb-4">부드러운 차슈가 가득한 라멘</p>
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
  );
};

export default MenuPreviewSection;

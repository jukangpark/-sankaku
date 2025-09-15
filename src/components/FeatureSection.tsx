import { motion } from "framer-motion";

const FeatureSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
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
  );
};

export default FeatureSection;

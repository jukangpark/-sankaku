import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({
  containerVariants,
  logoVariants,
  itemVariants,
  buttonVariants,
}: {
  containerVariants: any;
  logoVariants: any;
  itemVariants: any;
  buttonVariants: any;
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
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
  );
};

export default HomeBanner;

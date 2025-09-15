import { motion } from "framer-motion";

const YoutubeSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
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
  );
};

export default YoutubeSection;

import { motion } from "framer-motion";
import Image from "next/image";

interface BestMenuCarouselProps {
  menuItems: MenuItems[];
  autoSlideInterval: number;
}

interface MenuItems {
  id: number;
  name: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const BestMenuCarousel = ({
  menuItems,
  autoSlideInterval,
}: BestMenuCarouselProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            베스트메뉴
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            마음과 정성을 담은 푸짐한 한상, 산카쿠 베스트 메뉴
          </p>
        </motion.div>

        {/* 메뉴 캐러셀 */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-hidden">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`cursor-pointer transition-all duration-500 ${
                  index === 2
                    ? "transform scale-125 z-10"
                    : "transform scale-100 opacity-70 hover:opacity-90"
                }`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 원형 이미지 */}
                <div
                  className={`relative rounded-full overflow-hidden bg-gray-100 ${
                    index === 2
                      ? "w-32 h-32 md:w-40 md:h-40"
                      : "w-24 h-24 md:w-28 md:h-28"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes={index === 2 ? "160px" : "112px"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* 메뉴 이름 */}
                <div
                  className={`text-center mt-4 ${
                    index === 2 ? "transform scale-110" : ""
                  }`}
                >
                  <h3
                    className={`font-bold text-gray-900 ${
                      index === 2
                        ? "text-lg md:text-xl"
                        : "text-sm md:text-base"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMenuCarousel;

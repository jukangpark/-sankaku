import { motion } from "framer-motion";
import Image from "next/image";

const FranchiseGrowthSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <Image
        src="/bg-img/sankaku-bg-image.jpg"
        alt="산카쿠 라멘 배경"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="text-white space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              전국 205호점 돌파
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed"
              variants={itemVariants}
            >
              산카쿠의 가맹점주님들과 함께 하는 역사는 계속됩니다.
            </motion.p>
          </motion.div>

          {/* Right - Line Chart */}
          <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-30"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-80">
              {/* Chart Title */}
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                가맹점 성장 현황
              </h3>

              {/* SVG Line Chart */}
              <svg className="w-full h-64" viewBox="0 0 400 220">
                {/* Grid Lines */}
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 20"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Y-axis labels */}
                <text x="10" y="35" className="text-xs fill-black">
                  250
                </text>
                <text x="10" y="75" className="text-xs fill-black">
                  200
                </text>
                <text x="10" y="115" className="text-xs fill-black">
                  150
                </text>
                <text x="10" y="155" className="text-xs fill-black">
                  100
                </text>
                <text x="10" y="195" className="text-xs fill-black">
                  50
                </text>
                <text x="15" y="215" className="text-xs fill-black">
                  0
                </text>

                {/* X-axis labels */}
                <text x="40" y="215" className="text-xs fill-black">
                  2019
                </text>
                <text x="85" y="215" className="text-xs fill-black">
                  2020
                </text>
                <text x="130" y="215" className="text-xs fill-black">
                  2021
                </text>
                <text x="220" y="215" className="text-xs fill-black">
                  2022
                </text>
                <text x="310" y="215" className="text-xs fill-black">
                  2023
                </text>
                <text x="355" y="215" className="text-xs fill-black">
                  2024
                </text>

                {/* Line Chart Path */}
                <motion.path
                  d="M 45,198 L 90,196 L 135,186 L 175,168 L 225,150 L 275,119 L 325,83 L 355,35"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />

                {/* Data Points */}
                {[
                  { x: 45, y: 198, value: 2 },
                  { x: 90, y: 196, value: 3 },
                  { x: 135, y: 186, value: 10 },
                  { x: 175, y: 168, value: 27 },
                  { x: 225, y: 150, value: 49 },
                  { x: 275, y: 119, value: 89 },
                  { x: 325, y: 83, value: 133 },
                  { x: 355, y: 35, value: 205 },
                ].map((point, index) => (
                  <motion.g key={index}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#000000"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                    <motion.text
                      x={point.x}
                      y={point.y - 12}
                      className="text-xs font-bold fill-gray-900"
                      textAnchor="middle"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {point.value}호점
                    </motion.text>
                  </motion.g>
                ))}
              </svg>

              {/* Chart Legend */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-0.5 bg-black"></div>
                  <span className="text-sm text-gray-600">
                    가맹점 수 증가 추이
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseGrowthSection;

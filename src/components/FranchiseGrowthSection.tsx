import { motion } from "framer-motion";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const FranchiseGrowthSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  // 차트 데이터 정의
  const chartData = [
    { year: "2019", stores: 2, displayValue: "2호점" },
    { year: "2020", stores: 3, displayValue: "3호점" },
    { year: "2021", stores: 10, displayValue: "10호점" },
    { year: "2022-1", stores: 27, displayValue: "27호점" },
    { year: "2022-2", stores: 49, displayValue: "49호점" },
    { year: "2023-1", stores: 89, displayValue: "89호점" },
    { year: "2023-2", stores: 133, displayValue: "133호점" },
    { year: "2024", stores: 205, displayValue: "205호점" },
  ];

  // 커스텀 도트 컴포넌트
  const CustomDot = (props: {
    cx?: number;
    cy?: number;
    payload?: { displayValue: string };
    index?: number;
  }) => {
    const { cx, cy, payload } = props;

    if (!cx || !cy || !payload) return null;

    return (
      <g>
        {/* 도트 포인트 */}
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill="#000000"
          stroke="#ffffff"
          strokeWidth={2}
        />

        {/* 라벨 배경 (가독성을 위한 반투명 배경) */}
        <rect
          x={cx - 20}
          y={cy - 25}
          width={45}
          height={26}
          fill="rgba(0, 0, 0, 0.8)"
          rx={8}
          ry={8}
        />

        {/* 라벨 텍스트 */}
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          className="text-xs font-bold fill-white"
          dominantBaseline="central"
        >
          {payload.displayValue}
        </text>
      </g>
    );
  };

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

          {/* Right - Recharts Line Chart */}
          <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-4 border border-white border-opacity-30"
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

              {/* Recharts Line Chart */}
              <motion.div
                className="h-64"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{
                      top: 0,
                      right: 25,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255, 255, 255, 0.2)"
                    />
                    <XAxis
                      dataKey="year"
                      stroke="gray"
                      fontSize={12}
                      tickFormatter={(value) => {
                        if (value.includes("-")) {
                          return value.split("-")[0];
                        }
                        return value;
                      }}
                    />
                    <YAxis stroke="gray" fontSize={12} domain={[0, 250]} />
                    <Line
                      type="monotone"
                      dataKey="stores"
                      stroke="#000000"
                      strokeWidth={2}
                      dot={<CustomDot />}
                      activeDot={false}
                      animationDuration={2000}
                      animationBegin={500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseGrowthSection;

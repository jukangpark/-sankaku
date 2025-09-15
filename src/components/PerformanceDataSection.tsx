import { motion } from "framer-motion";
import CountUpAnimation from "./CountUpAnimation";

const PerformanceDataSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
    <section className="py-24 bg-white">
      <motion.div className="text-center mb-20" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          수치로 말하는 산카쿠
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: <CountUpAnimation endValue={11} suffix="회전" />,
              subtitle: "테이블 회전율",
              note: "*25년 1월 광주 전대점",
              icon: "🔄",
            },
            {
              title: <CountUpAnimation endValue={30.7} suffix="%" />,
              subtitle: "평균 수익률",
              note: "*본점기준이며 가맹점은 다를 수 있습니다.",
              icon: "📈",
            },
            {
              title: <CountUpAnimation endValue={314} suffix="만원" />,
              subtitle: "일 매출",
              note: "*25년 4월 대전 충남대점",
              icon: "💰",
            },
            {
              title: <CountUpAnimation endValue={240} suffix="%" />,
              subtitle: "타 브랜드 대비 마진율",
              note: "*25년 1월 매출 자료 집계 기준",
              icon: "📊",
            },
          ].map((data, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-50 rounded-2xl p-8"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{data.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {data.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {data.subtitle}
              </p>
              <p className="text-sm text-gray-500">{data.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceDataSection;

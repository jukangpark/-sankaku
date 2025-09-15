import { useEffect, useRef, useState } from "react";

// 카운트업 애니메이션 컴포넌트
const CountUpAnimation = ({
  endValue,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            // easeOut 함수
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = startValue + (endValue - startValue) * easeOut;

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  return (
    <div ref={ref}>
      {prefix}
      {Math.round(count)}
      {suffix}
    </div>
  );
};

export default CountUpAnimation;

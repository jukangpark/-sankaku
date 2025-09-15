"use client";

import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  description: string;
  backgroundClass?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  maxWidth?: string;
}

const Banner = ({
  title,
  description,
  backgroundClass = "bg-gray-50",
  titleClassName = "text-5xl md:text-6xl font-bold text-gray-900 mb-6",
  descriptionClassName = "text-xl text-gray-600",
  containerClassName = "relative py-32",
  maxWidth = "max-w-3xl",
}: BannerProps) => {
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
      className={`${containerClassName} ${backgroundClass}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 className={titleClassName} variants={itemVariants}>
          {title}
        </motion.h1>
        <motion.p
          className={`${descriptionClassName} ${maxWidth} mx-auto`}
          variants={itemVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Banner;

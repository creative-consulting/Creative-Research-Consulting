// components/ui/scroll-indicator.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <span className="text-sm mb-2">Scroll down</span>
      <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center p-1">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1 h-2 bg-gray-400 dark:bg-gray-300 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;

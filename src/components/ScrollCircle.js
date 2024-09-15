import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollCircle = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollPosition / windowHeight;
    setScrollYProgress(scrollRatio);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-10 right-10 h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center"
      style={{ scale: scrollYProgress + 0.5 }} // Scale the circle as the user scrolls
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-10 w-10 bg-white rounded-full"
        style={{ scale: 1 - scrollYProgress }} // Scale down the inner circle based on scroll
      />
    </motion.div>
  );
};

export default ScrollCircle;

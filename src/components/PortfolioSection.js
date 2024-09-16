import { Image } from "@/data/Image";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PortfolioSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio">
      <div className="bg-secondary px-8 pt-12 pb-16">
        <div className="flex flex-col space-y-4">
          <h2 className="tracking-widest text-gray-500 text-lg font-medium">
            PORTFOLIO
          </h2>
          <h1 className="text-2xl font-medium tracking-[0.1rem] text-black">
            CREATIVE WORKS
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <ProjectItem
            image={Image.project1}
            title="Ecommerce Website"
            description="An ecommerce platform with modern design and seamless user experience."
            link="https://graduation-thesis-frosty-morning-5421.fly.dev/"
            variants={itemVariants}
          />
          <ProjectItem
            image={Image.project2}
            title="Cosmetic Website"
            description="A beautiful cosmetic website built for showcasing products."
            link="https://fe-cosmetic.fly.dev/homepages/homepage1"
            variants={itemVariants}
          />
          <ProjectItem
            image={Image.project3}
            title="Electronic Website"
            description="A sleek electronic store with responsive design."
            link="https://ecommerce-web-livid.vercel.app/"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};
const ProjectItem = ({ image, title, description, link, variants }) => {
  return (
    <motion.a
      href={link}
      className="relative block overflow-hidden rounded-xl shadow-md group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      style={{
        borderRadius: '15px',
        overflow: 'hidden',
      }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-[40vh] object-cover" // Đảm bảo ảnh lấp đầy khung
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-white text-4xl mb-2"
        />
        <span className="text-white text-lg font-bold mb-2">{title}</span>
        <p className="text-gray-300 text-sm text-center px-4">
          {description}
        </p>
      </motion.div>
    </motion.a>
  );
};

export default PortfolioSection;

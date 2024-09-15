import { Image } from "@/data/Image";
import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  // Animation variants for the container and project items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger children with a delay of 0.3 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Start with opacity 0 and slide from the left
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
          <h2 className="tracking-widest text-gray-500 text-lg font-semibold">
            PORTFOLIO
          </h2>
          <h1 className="text-2xl font-bold tracking-[0.1rem]">
            CREATIVE WORKS
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants} // This applies staggerChildren
        >
          <ProjectItem
            image={Image.project1}
            title="Ecommerce Website"
            link="https://graduation-thesis-frosty-morning-5421.fly.dev/"
            variants={itemVariants} // Use the itemVariants for each project
          />
          <ProjectItem
            image={Image.project2}
            title="Cosmetic Website"
            link="https://fe-cosmetic.fly.dev/homepages/homepage1"
            variants={itemVariants}
          />
          <ProjectItem
            image={Image.project3}
            title="Electronic Website"
            link="https://ecommerce-web-livid.vercel.app/"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

const ProjectItem = ({ image, title, link, variants }) => {
  return (
    <motion.a
      href={link}
      className="relative block overflow-hidden rounded-xl shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants} // Each project gets its own animation variants
    >
      <motion.div
        className="w-full h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-lg font-bold">{title}</span>
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default PortfolioSection;

import {
  faCamera,
  faChartLine,
  faDesktop,
  faFaceSmile,
  faLaptop,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const ServiceSection = () => {
  // Animation variants for the container and service items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section id="services">
      <div className="bg-white px-8 pt-12 pb-8">
        <div className="flex flex-col space-y-4 text-left">
          <h2 className="tracking-widest text-lg text-gray-500 font-medium">
            WHAT I DO
          </h2>
          <h1 className="text-2xl font-medium tracking-wide">SERVICES</h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <ServiceItem
            icon={faLaptop}
            title="Web Design"
            description="Custom, responsive designs for modern businesses."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faDesktop}
            title="Web Development"
            description="Building websites using the latest front-end technologies."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faFaceSmile}
            title="UI/UX Design"
            description="Crafting intuitive and visually appealing user interfaces."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faMobile}
            title="Fully Responsive"
            description="Ensuring websites work seamlessly on all devices."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faCamera}
            title="Photography"
            description="Capturing moments with a creative and artistic touch."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faChartLine}
            title="Marketing"
            description="Helping brands grow with digital marketing strategies."
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

// Service Item component with animation
const ServiceItem = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      className="col-span-1 flex flex-col items-center w-full border-2 p-6 rounded-lg shadow-md bg-gray-50"
      whileHover={{ scale: 1.05 }}
      variants={variants}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-500 mb-3" />
      <h2 className="font-semibold text-xl mb-2 text-black">{title}</h2>
      <p className="text-center text-sm tracking-wide text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceSection;

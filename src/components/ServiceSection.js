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
        staggerChildren: 0.2, // Stagger each child with a delay of 0.2 seconds
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
    <section id="services">
      <div className="bg-white px-8 pt-12 pb-8">
        <div className="flex flex-col space-y-4">
          <h2 className="tracking-widest text-lg text-gray-500 font-medium">
            WHAT I DO
          </h2>
          <h1 className="text-2xl font-medium tracking-[0.1rem]">SERVICES</h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <ServiceItem
            icon={faLaptop}
            title="Web Design"
            description="I provide custom web designs for your business needs. I am passionate about creating beautiful and responsive websites that provide a great user experience."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faDesktop}
            title="Web Development"
            description="I specialize in front-end development. I have experience working with modern web technologies such as React, Vue, and Tailwind CSS."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faFaceSmile}
            title="UI/UX Design"
            description="I am passionate about creating beautiful and intuitive user interfaces. I focus on creating designs that are user-friendly and visually appealing."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faMobile}
            title="Fully Responsive"
            description="I create websites that look great on all devices. I focus on creating designs that are responsive and adapt to different screen sizes."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faCamera}
            title="Photography"
            description="I have a passion for photography and enjoy capturing beautiful moments. I specialize in portrait and landscape photography."
            variants={itemVariants}
          />
          <ServiceItem
            icon={faChartLine}
            title="Marketing"
            description="I have experience in digital marketing and social media management. I can help you create a strong online presence and reach your target audience."
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
      className="col-span-1 flex flex-col items-center w-full border-2 p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }} // Scale on hover
      variants={variants} // Each item uses the same animation variants
    >
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-500 mb-2" />
      <h2 className="font-medium text-2xl mb-2">{title}</h2>
      <p className="text-center text-normal tracking-wider text-gray-500">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceSection;

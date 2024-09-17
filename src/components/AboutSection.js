import { ReactTyped } from "react-typed";
import React from "react";
import { motion } from "framer-motion";
import { Image } from "../data/Image";
import {
  SiNodedotjs,
  SiReact,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiExpress,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiSpringsecurity,
  SiTypescript,
  SiNextdotjs,
  SiThymeleaf,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techStack = [
  { icon: FaJava, name: "Java", color: "text-red-600" },
  { icon: SiSpring, name: "Spring", color: "text-green-600" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: SiMysql, name: "MySQL", color: "text-orange-500" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
  { icon: SiMicrosoftsqlserver, name: "SQL Server", color: "text-red-600" },
  { icon: SiHtml5, name: "HTML", color: "text-orange-600" },
  { icon: SiCss3, name: "CSS", color: "text-blue-600" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, name: "React", color: "text-blue-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-500" },
  { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
  { icon: SiSpringsecurity, name: "Spring Security", color: "text-green-600" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  {icon: SiNextdotjs, name: "Next.js", color: "text-black"},
  {icon: SiThymeleaf, name: "Thymeleaf", color: "text-green-600"}
];

const handleSmoothScroll = (e) => {
  e.preventDefault();
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const AboutSection = () => {
  // Variants for staggered entrance animation (left to right)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between animations of children (left to right)
        when: "beforeChildren",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about">
      <div className="bg-white px-8 pt-12 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-lg font-medium text-black tracking-widest mb-2">
              INFORMATION
            </h2>
            <h1 className="text-2xl font-medium tracking-[0.1rem] text-gray-500">
              ABOUT ME
            </h1>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 space-y-4 mt-4"
            variants={fadeInUp}
          >
            <div className="col-span-2 flex flex-col space-y-4 text-lg">
              <div className="text-2xl font-medium text-black h-16 md:h-auto">
                I{"'"}m Trung Vu Van &{" "}
                <ReactTyped
                  strings={["Web Developer", "Freelancer", "UI/UX Designer"]}
                  typeSpeed={10}
                  backSpeed={15}
                  backDelay={2000}
                  cursorChar="|"
                  loop
                  smartBackspace
                />
              </div>
              <motion.p
                className="text-gray-500 leading-loose"
                variants={fadeInUp}
              >
                I{"'"}m a full-stack developer with expertise in creating visually
                appealing and highly functional websites. My focus is on both
                front-end and back-end development, working with technologies
                like React, Spring Boot, and Tailwind CSS.
              </motion.p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <motion.div
                className="flex space-y-4 flex-col"
                variants={fadeInUp}
              >
                <p className="">
                  <span className="font-medium text-lg text-black">
                    Birth day:
                  </span>{" "}
                  <span className="text-lg tracking-wider text-gray-500">
                    01/07/2002
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">
                    Website:{" "}
                  </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    portfolio-sigma-murex-94.vercel.app
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">
                    Phone:{" "}
                  </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    (+84)393217202
                  </span>
                </p>
              </motion.div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <motion.div
                className="flex space-y-4 flex-col"
                variants={fadeInUp}
              >
                <p className="">
                  <span className="font-medium text-lg text-black">Mail: </span>{" "}
                  <span className="text-lg tracking-wider text-gray-500">
                    vuvantrung002@gmail.com
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">
                    Linkedin:{" "}
                  </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    linkedin.com/in/trung-vu-van
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">
                    Facebook:{" "}
                  </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    facebook.com/trungvu.172002
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="pt-4 flex flex-col md:flex-row gap-4 md:gap-10 w-full"
            variants={fadeInUp}
          >
            <motion.a
              href={Image.CV}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex justify-center px-6 py-3 md:px-8 md:py-4 bg-primary rounded-full text-white shadow-black shadow-sm transition-colors duration-300 hover:bg-white hover:text-primary font-medium hover:shadow-primary"
            >
              Download CV
            </motion.a>

            <motion.button
              onClick={handleSmoothScroll}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex justify-center px-6 py-3 md:px-8 md:py-4 bg-white rounded-full text-primary font-semibold shadow-primary shadow-sm transition-colors duration-300 hover:opacity-80 hover:bg-primary hover:text-white hover:shadow-black"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* SKILL SECTION */}
      <section id="abilities" className="bg-white px-8 pt-12 pb-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-medium text-gray-500 tracking-widest">
            ABILITIES
          </h2>
          <h1 className="text-2xl font-medium tracking-[0.1rem] text-black">
            Tech Stack
          </h1>
          <span class="text-xl text-gray-500">
          My technical skill set spans a broad spectrum of abilities, each crucial for thriving in the IT industry.
          </span>
        </div>

        <motion.div
          className="flex justify-center flex-wrap gap-6 mt-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group flex justify-center items-center border-2 border-black rounded-lg hover:shadow-lg transition duration-300 ease-in-out aspect-w-1 aspect-square h-24"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }} // Hover zoom effect
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              {/* Icon */}
              <tech.icon className={`text-5xl ${tech.color}`} />

              {/* Hover text at the bottom */}
              <span className="absolute bottom-0 left-0 right-0 bg-black text-white opacity-0 group-hover:opacity-100 text-center py-1 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

export default AboutSection;


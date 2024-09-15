// import React from "react";
import { ReactTyped } from "react-typed";
import React from "react";
import { motion } from "framer-motion";
import { Image } from "../data/Image";
const AboutSection = () => {
  // Variants for fade-in and slide-in animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between animations of children
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: width,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about">
      <div className="bg-white px-8 pt-12 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
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
              <div className="text-2xl font-medium text-black h-16 md:h-auto ">
                I{"'"}m Trung Vu Van &{" "}
                <ReactTyped
                  strings={["Web Developer", "Freelancer", "UI/UX Designer"]}
                  typeSpeed={10} // Slightly slower typing speed
                  backSpeed={15} // Consistent but slightly slower backspace speed
                  backDelay={2000} // Adds delay before starting to delete
                  cursorChar="|" // Adds a cursor
                  loop
                  smartBackspace // Avoids unnecessary retyping
                />
              </div>
              <motion.p
                className="text-gray-500 leading-loose "
                variants={fadeInUp}
              >
                I am passionate about crafting visually appealing and highly
                functional websites that offer an excellent user experience.
                With a strong focus on both front-end and back-end development,
                I enjoy transforming ideas into reality through clean and
                efficient code. <br />I have hands-on experience working with
                modern web technologies such as React, Spring, Express, and
                Tailwind CSS. My expertise spans the entire web development
                process, from building intuitive interfaces to creating robust
                back-end systems.
              </motion.p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <motion.div
                className="flex space-y-4 flex-col"
                variants={fadeInUp}
              >
                <p className="">
                  <span className="font-medium text-lg text-black">Birth day:</span>{" "}
                  <span className="text-lg tracking-wider text-gray-500">
                    01/07/2002
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">Website: </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    portfolio-sigma-murex-94.vercel.app
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">Phone: </span>
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
                  <span className="font-medium text-lg text-black">Linkedin: </span>
                  <span className="text-lg tracking-wider text-gray-500">
                    linkedin.com/in/trung-vu-van
                  </span>
                </p>
                <p className="">
                  <span className="font-medium text-lg text-black">Facebook: </span>
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
      <div className="bg-secondary px-8 pt-12 pb-8">
        <div className="flex flex-col space-y-4">
          <motion.h2
            className="tracking-widest text-lg font-medium text-gray-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            ABILITIES
          </motion.h2>
          <motion.h1
            className="text-2xl font-medium tracking-[0.1rem] text-black"
            variants={fadeInUp}
          >
            MY SKILLS
          </motion.h1>
        </div>
        <motion.div className="grid grid-cols-2 mt-4 md:space-x-4 text-lg tracking-wider">
          <motion.div
            className="col-span-2 md:col-span-1 pb-8 md:mb-0"
            variants={fadeInUp}
          >
            <p className="text-gray-500 mb-4">
              I have extensive experience in both front-end and back-end
              development, specializing in building visually appealing,
              user-friendly websites with strong functionality.
            </p>
            <p>
              <span className="font-medium text-black"> Technologies I Work With:</span>{" "}
              <br />
              <span className="font-medium text-black">Front-end:</span>{" "}
              <span className="text-gray-500">
                HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap
              </span>
              <br />
              <span className="font-medium  text-black">Back-end:</span>{" "}
              <span className="text-gray-500">
                Java, Spring, Node.js, Express, MongoDB, MySQL, PostgreSQL, SQL
                Server
              </span>
              <br />
              <span className="font-medium text-black">Others:</span>{" "}
              <span className="text-gray-500">
                Git, GitHub, Jira, Azure, Docker, Figma
              </span>
              <br />
              <span className="font-medium  text-black">Languages:</span>{" "}
              <span className="text-gray-500">English, Vietnamese</span>
            </p>
          </motion.div>

          <motion.div className="col-span-2 md:col-span-1 text-lg font-medium">
            <div className="flex flex-col gap-2">
              {/* Front-End */}
              <motion.div className="flex justify-between text-black" variants={fadeInUp}>
                <p>Front-End</p>
                <p>50%</p>
              </motion.div>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="relative h-2 bg-primary rounded-full"
                  custom="50%"
                  variants={skillBarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute h-2 bg-primary rounded-full"></div>
                </motion.div>
              </div>

              {/* Back-End */}

              <motion.div className="flex justify-between text-black" variants={fadeInUp}>
                <p>Back-End</p>
                <p>60%</p>
              </motion.div>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="relative h-2 bg-primary rounded-full"
                  custom="60%"
                  variants={skillBarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute h-2 bg-primary rounded-full"></div>
                </motion.div>
              </div>
              {/* Languages */}
              <motion.div className="flex justify-between text-black" variants={fadeInUp}>
                <p>Languages</p>
                <p>50%</p>
              </motion.div>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="relative h-2 bg-primary rounded-full"
                  custom="60%"
                  variants={skillBarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute h-2 bg-primary rounded-full"></div>
                </motion.div>
              </div>

              {/* Soft Skills */}
              <motion.div className="flex justify-between text-black" variants={fadeInUp}>
                <p>Soft Skills</p>
                <p>70%</p>
              </motion.div>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="relative h-2 bg-primary rounded-full"
                  custom="70%"
                  variants={skillBarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute h-2 bg-primary rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

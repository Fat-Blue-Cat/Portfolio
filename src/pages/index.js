import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function HomePage() {
  // Define basic animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } },
  };

  return (
    <Layout>
      <div className="">
        {/* Hero Section Animation */}
        <motion.div
          id="home"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <HeroSection />
        </motion.div>

        {/* About Section Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <AboutSection />
        </motion.div>

        {/* Service Section Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <ServiceSection />
        </motion.div>

        {/* Portfolio Section Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <PortfolioSection />
        </motion.div>

        {/* Contact Section Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <ContactSection/>
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
}

export default HomePage;



// <div className="font-sans">
//         {/* Hero Section Animation */}
//         <motion.div
//           id="home"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           <HeroSection />
//         </motion.div>

//         {/* About Section Animation */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <AboutSection />
//         </motion.div>

//         {/* Service Section Animation */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <ServiceSection />
//         </motion.div>

//         {/* Portfolio Section Animation */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <PortfolioSection />
//         </motion.div>

//         {/* Contact Section Animation */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <ContactSection/>
//         </motion.div>

//         {/* Footer */}
//         <Footer />
//       </div>
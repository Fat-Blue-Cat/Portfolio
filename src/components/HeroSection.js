import React from "react";
import { Image } from "../data/Image";
import ShootingStars from "./ShootingStars";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to generate a random RGB color
// Function to generate a random color suitable for shooting stars
// function getRandomBrightColor() {
//   // Higher values for R, G, and B to ensure the color is bright and vibrant
//   const r = Math.floor(Math.random() * 156) + 100; // 100-255
//   const g = Math.floor(Math.random() * 156) + 100; // 100-255
//   const b = Math.floor(Math.random() * 156) + 100; // 100-255
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // Apply random bright color to elements with class 'star'
// const stars = document.querySelectorAll('.star');
// stars.forEach(star => {
//   const randomBrightColor = getRandomBrightColor();
//   // Apply to the star's background (tail color)
//   star.style.background = `linear-gradient(-45deg, ${randomBrightColor}, rgba(0, 0, 255, 0))`;
  
//   // Apply the random bright color to the ::before and ::after elements (shining part)
//   const beforeAfterStyle = `linear-gradient(-45deg, rgba(94, 10, 33, 0), ${randomBrightColor}, rgba(0, 0, 255, 0))`;
//   star.style.setProperty('--before-after-color', beforeAfterStyle);
// });



  return (
    <section id="home" className="overflow-hidden relative">
      <div className="relative left-0">
        <ShootingStars />
      </div>
      <section
        className={`h-screen bg-cover bg-center flex items-center justify-center flex-col relative`}
        style={{
          // backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.2)), url(${Image.backgroundv2})`,
          // transform: "rotate(90deg)",
          backgroundImage:`url(${Image.backgroundv2})`
        }}
      >
        {/* Lớp overlay để làm mờ background image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Nội dung chính */}
        <div className="relative z-10 p-4 block">
          <img
            className="rounded-full w-48 shadow-2xl ring-offset-0 ring-8 ring-secondary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            src={Image.avatar}
            alt="Avatar"
          />
        </div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold mb-4 text-secondary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          TRUNG VU VAN
        </h1>
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          I{"'"}m{" "}
          <ReactTyped
            strings={["Web Developer", "Freelancer", "UI/UX Designer"]}
            typeSpeed={10}
            backSpeed={15}
            backDelay={2000}
            cursorChar="|"
            loop
            smartBackspace
          />
        </h2>
        <div
          className="absolute bottom-10 transform cursor-pointer animate-bounce"
          onClick={handleScrollDown}
        >
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="text-white text-4xl"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hàm xử lý cuộn mượt
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  // Hàm để xác định active section
  const handleScroll = () => {
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute w-full md:relative ">
      {/* Hamburger Icon */}
      <button
        className="block md:hidden fixed top-4 left-4 z-50 text-white bg-black p-3 px-4 rounded-full"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon className="text-xl" icon={faBars} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-secondary fixed md:absolute w-full h-screen flex flex-col items-center py-10 transform transition-transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo and Title */}
        <div className="text-center">
          <h1 className="text-4xl mb-2 font-bold">TRUNG</h1>
          <p className="text-gray-500 text-2xl ">TRUNG VU VAN</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 w-full px-12">
          <ul className="space-y-4">
            {/* <li >.........................................................</li> */}
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block text-lg font-medium tracking-wider  border-b-2 mt-10 ${
                      activeSection === item.toLowerCase()
                        ? "text-primary"
                        : "text-gray-600"
                    } hover:text-black`}
                    onClick={(e) => handleSmoothScroll(e, item.toLowerCase())} // Sử dụng hàm cuộn mượt
                  >
                    {item.toUpperCase()}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mt-auto flex space-x-4">
          <a
            href="https://www.facebook.com/trungvu.172002/"
            className="text-gray-600 text-2xl hover:text-black"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-600 text-2xl hover:text-black">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-600  text-2xl hover:text-black">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/trung-vu-van"
            className="text-gray-600 text-2xl hover:text-black"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Fat-Blue-Cat"
            className="text-gray-600 text-2xl hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500 text-sm">
          © 2024 Portfolio by <strong>Trung Vu Van</strong>. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default SideBar;

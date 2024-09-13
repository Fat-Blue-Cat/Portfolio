import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin,faBars } from '@fortawesome/free-brands-svg-icons';
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full md:relative ">
      {/* Hamburger Icon */}
      <button 
        className="block md:hidden fixed top-4 left-4 z-50 bg-black text-white p-3 rounded-full "
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white fixed md:absolute w-full h-screen flex flex-col items-center py-10 transform transition-transform  ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Logo and Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">ADDO</h1>
          <p className="text-gray-500">ADAM DORNAN</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10">
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'News', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-black block text-lg tracking-wide"
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mt-auto flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500 text-sm">
          © 2023 ADDO by DuruThemes
        </footer>
      </div>
    </div>
  );
};

export default SideBar;

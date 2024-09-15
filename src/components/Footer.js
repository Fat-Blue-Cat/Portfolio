import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center bg-gray-800 h-[30vh] place-content-around">
      <div>
        <div className="pt-4 md:py-4 text-white font-medium">
          <p>
            &copy; 2024 <strong>Trung</strong>. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl text-sencondary text-white font-bold">Trung</p>
        <p className="text-2xl text-sencondary text-white font-medium">
          Trung Vu Van
        </p>
      </div>
      <div>
        <div className="mt-auto flex space-x-4 justify-center">
          <a
            href="https://www.facebook.com/trungvu.172002/"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-500">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white  text-2xl hover:text-gray-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/trung-vu-van"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Fat-Blue-Cat"
            className="text-white text-2xl hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

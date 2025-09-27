import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="w-full  text-white">
      {/* Top Section */}
      <div
        className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row justify-between 
        items-center sm:items-start gap-8 sm:gap-12"
      >
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            font-semibold tracking-wider leading-tight"
          >
            Anju
          </h1>
          <h4 className="text-sm sm:text-base text-gray-300">
            MERN Stack Developer
          </h4>
          <p className="text-sm sm:text-base text-gray-400">anjuukumari001@gmail.com</p>
          <p className="text-sm sm:text-base text-gray-400">+91 8409335001</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/logicscienc"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:-translate-y-1 hover:text-green-400"
            >
              <FaGithubAlt size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anju-193484275/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <AiFillLinkedin size={28} />
            </a>
            <a
              href="mailto:anjuukumari001@gmail.com"
              className="transform transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
            >
              <BiMessageRoundedDots size={26} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-start max-w-md text-center sm:text-left">
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold tracking-wider leading-tight"
          >
            "Building scalable 3D & web solutions"
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Currently exploring new tech & working on styling
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 mt-6" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
        <p>Created by <span className="text-green-400 font-semibold">Anju</span> © 2025</p>
        <p className="mt-2 sm:mt-0">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


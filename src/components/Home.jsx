import React, { useState } from "react";
import contact from "../assets/contact.png";
import experience from "../assets/experience.png";
import house from "../assets/house.png";
import projects from "../assets/projects.png";
import teckStack from "../assets/teckStack.png";
import { AiOutlineDownload } from "react-icons/ai";
import Anjuuucv from "../assets/Anjuuucv.pdf";
import download from "../assets/download.jpeg";
import Robo from "../Important/Robo";

const navItems = [
  { name: "Home", icon: house },
  { name: "Teck Stack", icon: teckStack },
  { name: "Experience", icon: experience },
  { name: "Projects", icon: projects },
  { name: "Contacts", icon: contact },
];

const Home = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full h-full px-2 sm:px-4 md:px-6">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-row items-center px-4">
        <div className="flex items-center rounded-full border border-gray-300  px-2 sm:px-4 py-2 space-x-4 sm:space-x-6 md:space-x-8  bg-transparent backdrop-blur-md shadow-md">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <div
                key={item.name}
                onClick={() => setActive(item.name)}
                className="flex flex-col items-center cursor-pointer transition-all duration-500"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                   className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1 transition-transform duration-500 ${
                    isActive
                      ? "scale-150 -translate-y-2"
                      : "scale-100 translate-y-0 grayscale"
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-medium transition-all duration-500 ${
                    isActive
                      ? "text-green-500 scale-110"
                      : "text-gray-400 scale-100"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
        <a
          href={Anjuuucv}
          download="Anju_Resume.pdf"
           className="ml-4 sm:ml-6 group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-green-500 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg"
        >
          {/* Icon */}
          <AiOutlineDownload className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover:opacity-0" />
          <span className="absolute text-white font-semibold text-xs sm:text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
            Resume
          </span>
        </a>
      </div>

      {/* center button with Hire Button */}

      <div className="flex flex-col sm:flex-row items-center my-8 mt-36 px-4">
        {/* Left line */}
        <div className="hidden sm:flex flex-1 h-px bg-gray-400"></div>

        {/* Wrapper to keep image clean and button outside */}
        <div className="mx-4 relative flex flex-col items-center">
          {/* Center image in circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-green-500 flex items-center justify-center overflow-hidden shadow-md">
            <img src={download} alt="Center" className="w-full h-full object-cover" />
          </div>

          {/* Hire Me button with floating indicator BELOW the circle */}
          <div className="sm:absolute top-full mt-4 sm:mt-0 sm:top-1/2 sm:right-[-3rem] sm:transform sm:-translate-y-1/2 flex flex-col items-center">
            {/* Small floating circle */}
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full mb-1 animate-bounce"></div>

            {/* Actual Hire Me button */}
            <a
              href="mailto:your.email@example.com?subject=Hire%20Request&body=Hi%20Anju,%20I%20would%20like%20to%20discuss%20hiring%20you..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 sm:px-4 sm:py-1.5 bg-green-500 text-white text-xs sm:text-sm font-bold rounded-full hover:bg-green-600 transition-colors shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right line */}
        <div className="hidden sm:flex flex-1 h-px bg-gray-400"></div>
      </div>
      <Robo />
    </div>
  );
};

export default Home;

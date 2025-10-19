import React, { useState, useEffect } from "react";
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
  { name: "Home", icon: house, id: "Home" },
  { name: "Teck Stack", icon: teckStack, id: "TeckStack" },
  { name: "Experience", icon: experience, id: "Experience" },
  { name: "Projects", icon: projects, id: "Projects" },
  { name: "Contacts", icon: contact, id: "Contacts" },
];

const Home = () => {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 } // 30% visible
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id); // highlight immediately on click
    }
  };

  return (
    <div className="w-full h-full px-2 overflow-x-hidden">
      {/* Navbar */}
    <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-row items-center px-2 sm:px-4">
        <div className="flex items-center rounded-full border border-gray-300 px-2 sm:px-4 py-2 space-x-3 sm:space-x-4 md:space-x-6 bg-transparent backdrop-blur-md shadow-md">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <div
                key={item.name}
                onClick={() => scrollToSection(item.id)}
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
                  className={`text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-500 ${
                    isActive ? "text-green-500 scale-110" : "text-gray-400 scale-100"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Resume button */}
        <a
          href={Anjuuucv}
          download="Anju_Resume.pdf"
          className="ml-2 sm:ml-4 group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-500 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <AiOutlineDownload className="w-5 h-5 text-white transition-all duration-300 group-hover:opacity-0" />
          <span className="absolute text-white font-semibold text-[10px] sm:text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
            Resume
          </span>
        </a>
      </div> 



      {/* Center Section with Hire Button */}
      <div className="flex flex-col sm:flex-row items-center my-8 mt-28 sm:mt-36 px-2 sm:px-4">
        {/* Left line */}
        <div className="hidden sm:flex flex-1 h-px bg-gray-400"></div>

        {/* Center circle and Hire button */}
        <div className="mx-2 sm:mx-4 relative flex flex-col items-center">
          {/* Center image */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-green-500 flex items-center justify-center overflow-hidden shadow-md">
            <img src={download} alt="Center" className="w-full h-full object-cover" />
          </div>

          {/* Hire Me button */}
          <div className="sm:absolute top-full mt-3 sm:mt-0 sm:top-1/2 sm:right-[-2.5rem] sm:transform sm:-translate-y-1/2 flex flex-col items-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full mb-1 animate-bounce"></div>
            <a
              href="mailto:your.email@example.com?subject=Hire%20Request&body=Hi%20Anju,%20I%20would%20like%20to%20discuss%20hiring%20you..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white text-[10px] sm:text-xs md:text-sm font-bold rounded-full hover:bg-green-600 transition-colors shadow-md"
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


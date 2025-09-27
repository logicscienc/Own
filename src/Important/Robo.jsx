import React from "react";
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Robo = () => {
  return (
    <main
      className="relative flex flex-col lg:flex-row items-center justify-between
      px-4 sm:px-6 lg:px-12
      min-h-[calc(90vh-6rem)] overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div
        className="absolute max-w-xl w-full z-10
    mt-[120%] [@media(max-width:380px)]:mt-[150%] sm:mt-[60%] md:mt-[40%] lg:mt-0
    mb-12 sm:mb-16 lg:mb-0
    transition-all duration-300 ease-in-out lg:ml-20
    px-2 sm:px-0"
      >
        {/* Tag box-with gradient border */}
        <div
          className="relative w-[90%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] 
          shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto sm:mx-0 mb-4"
        >
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white text-sm sm:text-base">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-center sm:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-semibold tracking-wider my-6 sm:my-8 leading-tight"
        >
          Your Next Reliable
          <br />
          MERN Stack Developer
        </h1>

        {/* Description */}
        <p
          className="text-center sm:text-left text-sm sm:text-lg tracking-wider text-gray-400 
          max-w-[22rem] sm:max-w-[25rem] lg:max-w-[30rem] mx-auto sm:mx-0"
        >
          Passionate about creating seamless user experiences and delivering
          clean, efficient code for real-world problems.
        </p>
      </div>

      {/* HELLO Capsule - Positioned near Robot hand */}
<div
        className="absolute 
    top-[40%] sm:top-[38%] md:top-[36%] lg:top-[34%] 
    left-[58%] sm:left-[60%] md:left-[63%] lg:left-[65%] 
    transform -translate-x-1/2 -translate-y-1/2
    w-24 sm:w-28 md:w-32 h-8 sm:h-9 
    bg-gradient-to-r from-[#656565] to-[#e99b63] 
    shadow-[0_0_15px_rgba(255,255,255,0.4)] 
    rounded-full z-20  transition-all duration-300 ease-in-out
    animate-float"
      >
        <div
          className="absolute inset-[2px] sm:inset-[3px] bg-black rounded-full 
    flex items-center justify-center 
    text-white text-xs sm:text-sm md:text-base font-medium tracking-wide"
        >
          HELLO
        </div>
      </div>  





      {/* 3D robot */}
      <Spline
        scene="https://prod.spline.design/ccc-O9i3lKM39c16/scene.splinecode"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
      />
    </main>
  );
};

export default Robo;

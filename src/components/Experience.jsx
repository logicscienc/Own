import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Experience = () => {

     // Custom color scheme
  const theme = {
     light: ["#4B4B4B", "#1ED760", "#1ED760", "#1ED760", "#1ED760"], 
  };
  return (
     <div className="max-w-full mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
      {/* Experience Heading */}
      <div className="flex justify-center mb-8">
        <div className="
  inline-block
  max-w-[90%] 
  rounded-full
  px-4 sm:px-6 md:px-8
  py-2 sm:py-3
  font-semibold text-lg sm:text-xl md:text-2xl
  text-white
  relative overflow-hidden
  bg-gradient-to-r from-black via-gray-800 to-black
  bg-[length:200%_200%]
  animate-glowSlide
">
        <span className="relative z-10">Experience</span>
        </div>
      </div>

      {/* GitHub Contributions Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-gray-800 dark:text-gray-200">
        My GitHub Contributions
      </h2>
       <div className="w-full overflow-x-auto py-4 flex justify-center bg-black rounded-lg">
      <GitHubCalendar
         username="logicscienc"
          blockSize={window.innerWidth < 640 ? 10 : window.innerWidth < 768 ? 14 : 20} // responsive block sizes
          blockMargin={window.innerWidth < 640 ? 3 : window.innerWidth < 768 ? 4 : 6}  // responsive spacing
          fontSize={window.innerWidth < 640 ? 10 : window.innerWidth < 768 ? 12 : 16} // responsive font
          theme={theme}
          colorScheme="light"
          showWeekdayLabels
          style={{
            background: "transparent",
            color: "gray",                  // all text gray
        }}
      />
    </div>
    </div>
  )
}

export default Experience

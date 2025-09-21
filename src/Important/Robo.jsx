import React, {useEffect, useRef} from 'react'
import { BiCodeAlt } from 'react-icons/bi'

const Robo = () => {
    const splineRef = useRef(null);

     useEffect(() => {
    
    if (!document.getElementById("spline-script")) {
      const script = document.createElement("script");
      script.id = "spline-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js";
      document.body.appendChild(script);
    }

     // Prevent scroll zoom
    const viewer = splineRef.current;

    const preventZoom = (e) => {
      if (e.type === 'wheel') {
        e.preventDefault();
      }
    };

    if (viewer) {
      viewer.addEventListener('wheel', preventZoom, { passive: false });
    }

    return () => {
      if (viewer) {
        viewer.removeEventListener('wheel', preventZoom);
      }
    };

   
  }, []);
  return (
    <div className="relative w-full h-[600px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {/* Embed Spline Viewer */}
      <spline-viewer
        ref={splineRef}
        url="https://prod.spline.design/ccc-O9i3lKM39c16/scene.splinecode"
        className="w-full h-full bg-transparent"
          // controls="false"
      ></spline-viewer>


       {/* LEFT: Intro Text */}
      <div
        className=" absolute z-20 max-w-xs sm:max-w-sm md:max-w-md
    text-white
    top-[15%] sm:top-[18%] md:top-[25%] lg:top-[30%]
    left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%]"
        aria-hidden={false}
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-green-400">Anju</span>
        </h1>

        <h2 className="mt-2 text-sm sm:text-lg md:text-2xl text-gray-300 font-medium">
          MERN Stack Developer
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400">
          I build full-stack web apps and interactive 3D experiences. I love 3D
          animations and I'm working towards growing as a developer — in the
          future I aim to move into Data Science.
        </p>
      </div>

      {/* RIGHT: Floating Circular Icon */}
      <div className=" absolute z-20 animate-floatLarge
    w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48
    top-[55%] sm:top-[50%] md:top-[45%] lg:top-[40%]
    right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%]">
        <div className="animate-floatLarge">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-2 border-green-400 flex items-center justify-center bg-[rgba(6,8,12,0.75)] shadow-xl">
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3">
              <BiCodeAlt className="text-xl sm:text-3xl md:text-5xl text-green-300" />
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-green-300 font-medium">
                Fullstack &  Android
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* "Hello" floating text */}
  <div
  className="
    absolute text-center px-2 sm:px-3 py-1 
    border-2 border-green-500 rounded-full 
    bg-black/50 text-white font-bold 
    text-[10px] sm:text-xs md:text-sm 
    animate-float z-30
    top-[40%] sm:top-[38%] md:top-[35%] lg:top-[35%]
    left-[50%] sm:left-[52%] md:left-[55%] lg:left-[60%]
    transform -translate-x-1/2 -translate-y-1/2
  "
>
  Hello
</div>

    </div>
  )
}

export default Robo

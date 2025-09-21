import React from 'react'
import AWS from "../assets/AWS.jpeg";
import C from "../assets/C.jpeg";
import Cpp from "../assets/Cpp.png";
import CSS3 from "../assets/CSS3.png";
import DSA from "../assets/DSA.webp";
import Express from "../assets/Express.jpeg";
import Figma from "../assets/Figma.jpeg";
import GitHub from "../assets/GitHub.jpeg";
import HTML5 from "../assets/HTML5.png";
import js from "../assets/js.png";
import mongoDB from "../assets/mongoDB.webp";
import MySQL from "../assets/MySQL.png";
import Netlify from "../assets/Netlify.jpeg";
import NodeJS from "../assets/NodeJS.png";
import Postman from "../assets/Postman.jpeg";
import ReactJS from "../assets/ReactJS.png";
import Spline from "../assets/Spline.jpeg";
import tailwindCSS from "../assets/tailwindCSS.webp";
import Vercel from "../assets/Vercel.jpeg";
import vscode from "../assets/vscode.png";
import {motion} from "framer-motion";



const skillCategories = [
  {
    title: "FRONTEND (UI)",
    skills: [
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: js },
      { name: "React", icon: ReactJS },
      { name: "Tailwind", icon: tailwindCSS },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "MongoDB", icon: mongoDB },
      { name: "ExpressJS", icon: Express },
      { name: "NodeJS", icon: NodeJS },
      { name: "SQL", icon: MySQL },
    ],
  },
  {
    title: "DEPLOYMENT",
    skills: [
      { name: "Netlify", icon: Netlify },
      { name: "Vercel", icon: Vercel },
      { name: "AWS", icon: AWS },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "GitHub", icon: GitHub },
      { name: "Postman", icon: Postman },
      { name: "VS Code", icon: vscode },
      { name: "Spline", icon: Spline },
      { name: "Figma", icon: Figma },
    ],
  },
  {
    title: "LANGUAGES",
    skills: [
      { name: "C++", icon: Cpp },
      { name: "C", icon: C },
    ],
  },
  {
    title: "DATA STRUCTURES & ALGORITHMS",
    skills: [
      { name: "DSA", icon: DSA },
    ],
  },
];


const floatAnimation = {
  y: [0, -10, 0], // float up and down
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
};


const Skills = () => {
  return (
       <section id="skills" className="bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            {/* Capsule heading (left-aligned like your screenshot) */}
            <div className="flex items-center">
             <div
  className="
    inline-block
    rounded-full
    px-8 py-4
    font-semibold text-sm
    text-white
    relative
    overflow-hidden
    bg-gradient-to-r from-black via-gray-800 to-black
    bg-[length:200%_200%]
    animate-glowSlide
    mb-6
  "
>
  <span className="relative z-10">{category.title}</span>
  <span className="absolute inset-0 bg-black/60 rounded-full"></span>
</div>

            </div>

            {/* grid of cards */}
            <div className="w-full">
              <div
                className="
                  grid
                  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5

                  gap-16
                "
              >
                {category.skills.map((skill, i) => {
                  // make a global-ish index so animation timing varies across categories
                  const globalIndex = catIdx * 10 + i;
                  const dur = 2 + (globalIndex % 4) * 0.35; // slightly different durations
                  const delay = (globalIndex % 5) * 0.08; // small phase offset

                  return (
    <motion.div whileHover={{ scale: 1.08 }} className="transition-transform duration-300">
  <div
    className="
      w-full max-w-[180px] aspect-square
      rounded-xl
      bg-[#0a0a0a]
      flex flex-col
      items-center
      justify-center
      p-4
      shadow-[0_0_10px_rgba(255,255,255,0.05)]
      cursor-pointer
      animate-floatLarge
    "
  >
    <div className="flex items-center justify-center w-full h-3/5">
      <img
        src={skill.icon}
        alt={skill.name}
        className="max-w-14 max-h-14 object-contain"
      />
    </div>

    <p className="mt-3 text-white text-sm font-medium text-center">
      {skill.name}
    </p>
  </div>
</motion.div>


                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

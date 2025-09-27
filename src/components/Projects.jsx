import React from "react";
import { motion } from "framer-motion";
import codingNinjas from "../Projects/codingNinjas.jpg";
import flyAway from "../Projects/flyAway.jpg";
import studyNotion from "../Projects/studyNotion.jpg";
import SweetleyYours from "../Projects/SweetleyYours.jpg";

const projects = [
  {
    id: 1,
    img: studyNotion,
    title: "Full Stack Ed Tech Application",
    desc: "A Udemy-like platform built with MERN stack. Features authentication, dashboards, and course management for students and instructors.",
    link: "https://github.com/logicscienc/StudyNotion",
    status: "completed", // 🟢 Completed
  },
  {
    id: 2,
    img: SweetleyYours,
    title: "Full Stack E-Commerce Website",
    desc: "An online dessert store built with MERN stack, offering global sweets with secure payments and wishlist features.",
    link: "https://github.com/logicscienc/CaramelCorner",
    status: "completed", // 🟢 Completed
  },
  {
    id: 3,
    img: codingNinjas,
    title: "Coding Ninjas Clone",
    desc: "A fully responsive clone of Coding Ninjas built with React and Tailwind, focusing on UI and clean code structure.",
    link: "https://luminous-klepon-115574.netlify.app",
    status: "completed", // 🟢 Completed
  },
  {
    id: 4,
    img: flyAway,
    title: "Travel Booking Website",
    desc: "A MERN stack travel booking site with authentication, bookings, and wishlist features.",
    link: "https://github.com/logicscienc/TravelWithLove",
    status: "in-progress", // 🔴 In Progress
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14 tracking-wide"
        >
          My Personal Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-pink-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image Wrapper */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                />

                {/* Status Dot */}
                <div className="absolute bottom-3 right-3">
                  <div
                    className={`relative w-4 h-4 rounded-full ${
                      project.status === "completed" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {/* Blinking Effect */}
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        project.status === "completed"
                          ? "bg-green-500 animate-ping"
                          : "bg-red-500 animate-ping"
                      }`}
                    ></span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-center text-sm shadow-lg hover:from-purple-600 hover:to-pink-500 transition-all"
                >
                  View Project
                </motion.a>
              </div>

              {/* Subtle glowing border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;




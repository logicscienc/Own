import React, { useEffect, useRef, useState } from 'react';
import "./portfolio.css";
// import { motion, useScroll, useTransform } from 'framer-motion';
import codingNinjas from "../Projects/codingNinjas.jpg";
import flyAway from "../Projects/flyAway.jpg";
import studyNotion from "../Projects/studyNotion.jpg";
import SweetleyYours from "../Projects/SweetleyYours.jpg";
import { motion, useInView, useScroll, useTransform } from "motion/react";




const items = [
    {
        id: 1,
        img: studyNotion,
        title: "Full Stack Ed Tech Application",
        desc: "StudyNotion is a full-stack EdTech platform built with the MERN stack, similar to Udemy. It features secure authentication, role-based access for students, instructors, and admins, and dynamic dashboards. Instructors can create and manage courses, while students can track their learning progress, making it a scalable and engaging online learning solution.",
        link: "https://github.com/logicscienc/StudyNotion",
       
    },
    {
        id: 2,
        img: SweetleyYours,
        title: "Full Stack E Commerce Website",
        desc: "SweetleyYours is a MERN stack e-commerce platform specializing in delivering desserts from around the world, from classic Indian sweets to continental treats. It features secure authentication, cart and wishlist management, order tracking, and integrated payments. Currently built for customers, future updates will include an admin dashboard for managing products and orders.",
        link: "https://github.com/logicscienc/CaramelCorner",
    },
    {
        id: 3,
        img: codingNinjas,
        title: "React and Tailwind a Clone ",
        desc: "A fully responsive and interactive clone of the Coding Ninjas website, built with modern web development technologies. This project replicates the look, feel, and core user experience of the original platform, while offering a modular, clean codebase suitable for further development and experimentation.",
        link: "https://luminous-klepon-115574.netlify.app",
    },
    {
        id: 4,
        img: flyAway,
        title: "Full Stack Travel Booking Website",
        desc: "FlyAway is a MERN stack travel booking platform that allows users to search, book, and manage trips seamlessly. It includes secure authentication, wishlist and booking management, and integrated payments. Currently focused on the customer experience, with future plans to add an admin panel for managing listings and bookings.",
        link: "https://github.com/logicscienc/TravelWithLove",
    },   

];



const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => { 
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );


  return (
    <div className="portfolio " ref={ref}>
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
        <span className="relative z-10">MY Personal Projects</span>
        </div>
      </div>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};


export default Projects

import { useState } from 'react'
import {lazy, Suspense} from "react";
import LazyLoad from "react-lazyload";

import './App.css'
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
const Projects = lazy(() => import("./components/Projects"))
import Contact from './components/Contact';

function App() {
 

    return (
    <div className="w-screen min-h-screen bg-black flex flex-col ">
      <Home/>
      <Skills/>
      <Experience/>
       <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="#portfolio"> */}
          <Projects />
          {/* </section> */}{" "}
        </LazyLoad>
      </Suspense>
      <Contact/>

    </div>
  );
}

export default App

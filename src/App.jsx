import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import gradient from "../src/assets/gradient.png";

import './App.css'
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
const Projects = lazy(() => import("./components/Projects"))
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
   <main >
  {/* gradient image */}
   <img
       className="absolute top-0 right-0 opacity-60 -z-10" src={gradient}
      />

  {/* Blur Effect */}
   <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div> 

  <section id="Home"><Home /></section>
   <section id="TeckStack" ><Skills /></section>
  <section id="Experience"><Experience /></section>

  
      <section id="Projects"><Projects /></section>
   

  <section id="Contacts"><Contact /></section>  
  <Footer/>
</main>

  );
}

export default App;


import React, { useState } from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";
import {useRef} from "react";
import {motion, useInView } from "motion/react";
// import {transition} from 'three/examples/jsm/tsl/display/TRAAPassNode.js'
import ContactSvg from './ContactSvg';




const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    }
  }
}

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();


   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

    const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className='contact' ref={ref} onSubmit={sendEmail}>
      <div className='cSection'>
        <motion.form variants={listVariant}  ref={form} animate={isInView ? "animate" : "initial"}>
          <motion.h1 variants={listVariant} className='cTitle text-white text-3xl'>Let's keep in touch</motion.h1>
          <motion.div variants={listVariant} className='formItem '>
            <label className='text-white text-xl'>Name</label>
            <input type="text" placeholder='John Doe'  name="user_name"  required/>
          </motion.div>

          <motion.div variants={listVariant} className='formItem '>
            <label className='text-white text-xl'>Email</label>
            <input type='email' placeholder='john@gmail.com'  name="user_email"  required/>
          </motion.div>

          <motion.div variants={listVariant} className='formItem '>
            <label className='text-white text-xl'>Message</label>
            <textarea rows={10} placeholder='Write your message...' name="message"  required></textarea>
          </motion.div>

          <motion.button variants={listVariant} className='formButton'>Send</motion.button>
          {success && <span className='text-white'>Your message has been sent!</span>}
          {error && <span className='text-white'>Something went wrong!</span>}

        </motion.form>
      </div>
      <div className="cSection w-full max-w-3xl mx-auto px-4">
  <ContactSvg className="w-full sm:w-3/4 lg:w-1/2 h-auto" />
</div>
    </div>
  )
}

export default Contact

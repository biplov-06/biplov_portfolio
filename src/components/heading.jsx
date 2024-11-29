// src/components/Heading.js
import React,{useEffect} from 'react';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Heading({ title, isDarkMode }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="container landing_head center  my-5" data-aos="fade-up"
     data-aos-duration="1000">
        <h1 className={isDarkMode ? "dark-mode" : "light-mode" }>{title}</h1>
      </div>
      <div className="container my-5 landing_head center my-5" data-aos="fade-up"
     data-aos-duration="2000">
        <p className={isDarkMode ? "dark-mode " : "light-mode"}>
          Scroll Down to Explore My Journey, Skills, and Creations!
        </p>
      </div>
    </>
  );
}

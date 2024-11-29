import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SkillsImg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="text-center skill-width "data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="row">
        <div className="col" ><img className="image" src="../src/assets/html.svg" alt="HTML" /></div>
        <div className="col" ><img className="image" src="../src/assets/css.svg" alt="CSS" /></div>
        <div className="col"><img className="image" src="../src/assets/js.svg" alt="JavaScript" /></div>
        <div className="col"><img className="image" src="../src/assets/reacts.svg" alt="React" /></div>

        <div className="col"><img className="image" src="../src/assets/vite.svg" alt="HTML" /></div>
        <div className="col"><img className="image" src="../src/assets/bootstrap.svg" alt="CSS" /></div>
        <div className="col" ><img className="image" src="../src/assets/material.svg" alt="JavaScript" /></div>
        <div className="col"><img className="image" src="../src/assets/figma.svg" alt="React" /></div>
        <div className="col" ><img className="image" src="../src/assets/Canva.svg" alt="React" /></div>
      </div>
    </div>
  );
}

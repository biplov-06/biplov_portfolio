import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import Js from '../assets/Js.svg';
import react from '../assets/react.svg';
import Vite from "../assets/vite.svg";
import Bootstrap from "../assets/bootstrap.svg";
import github from "../assets/GitHub.png";
import figma from "../assets/figma.svg";
import canva from "../assets/Canva.svg";
import git from "../assets/git.png";



export default function SkillsImg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="text-center skill-width "data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
      <div className="row">
        <div className="col" ><img className="image" src={Html} alt="HTML" /></div>
        <div className="col" ><img className="image" src={Css} alt="CSS" /></div>
        <div className="col"><img className="image" src={Js} alt="JavaScript" /></div>
        <div className="col"><img className="image" src={react} alt="React" /></div>

        <div className="col"><img className="image" src={Vite} alt="Vite" /></div>
        <div className="col"><img className="image" src={Bootstrap} alt="Bootstrap" /></div>
        <div className="col" ><img className="image" src={github} alt="github" /></div>
        <div className="col"><img className="image" src={figma} alt="Figma" /></div>
        <div className="col" ><img className="image" src={canva} alt="Canva" /></div>
        <div className="col" ><img className="image" src={git} alt="git" /></div>

      </div>
    </div>
  );
}

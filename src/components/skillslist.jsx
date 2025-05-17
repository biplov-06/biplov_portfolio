import React from 'react';

import html from '../assets/html5-original.png';
import CSS from '../assets/css3-original.png';
import JS from '../assets/javascript-original.png';
import bootstrap from '../assets/bootstrap-original.png';
import react from '../assets/react-original.png';
import nodejs from '../assets/nodejs-original.png';
import git from '../assets/git-plain.png';
import github from '../assets/download.png';
import figma from '../assets/figma-original.png';
import c from '../assets/c-original.png';

import '../newcss.css'; 
export default function SkillsList({ isDarkMode }) {
  const skills = [
    { name: 'HTML', img: html, color: '#F16529', completed: '80%' },
    { name: 'CSS', img: CSS, color: '#2D66A3', completed: '60%' },
    { name: 'JavaScript', img: JS, color: '#F1D629', completed: '60%' },
    { name: 'React', img: react, color: '#3DB5DE', completed: '70%' },
    { name: 'Git Hub', img: github, color: '#7D268F', completed: '80%' },
    { name: 'Bootstrap', img: bootstrap, color: '#9411E2', completed: '50%' },
    { name: 'Figma', img: figma, color: '#00A65C', completed: '80%' },
    { name: 'Node.js', img: nodejs, color: '#90B825', completed: '50%' },
    { name: 'Git', img: git, color: '#F16529', completed: '60%' },
    { name: 'C', img: c, color: '#1D508C', completed: '70%' },
  ];

  return (
    <div className="skillbase container">
      <div className="skill-scroll-area">
        <div className="componentplate">
          {skills.map((item, index) => (
            <div
              key={index}
              className={isDarkMode ? 'component-dark' : 'component'}
            >
              <div className="component-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="name">{item.name}</div>
              <div className="progress-base">
                <div
                  className="progress-completed"
                  style={{ backgroundColor: item.color, width: item.completed }}
                >
                  <div
                    className="progress-circle"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React ,{useEffect}from 'react'
import CV from '../assets/biplov CV.pdf';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';

export default function abouttitle({isDarkMode}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="container" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
        <p className="title-font">
          <strong>About</strong>
        </p>
        <h2 className="mb-3 about-name">Hi, I'm Biplov Dhakal</h2>
        <p className={isDarkMode?" fw-light  about-font dark-mode":" fw-light about-font light-mode"}>
          <strong>
            I am a BSc.CSIT student at the Asian School of Management with a
            strong passion for web development. Skilled in HTML, CSS,
            JavaScript, libraries like React, and frameworks such as Bootstrap,
            I specialize in creating interactive and user-friendly websites.
          </strong>
        </p>
        <p className={isDarkMode?" fw-light  about-font dark-mode":" fw-light about-font light-mode"}>
          <strong>
            My dedication to learning and innovation drives me to continuously
            enhance my skills and contribute to exciting projects. I also gained
            hands-on experience in networking during the interschool Asian
            Hackathon organized by my institution.
          </strong>
        </p>
        <p className="about-font input-font">
          <strong>Downloard CV for the more information!</strong>
        </p>
        <Button  
        variant="contained" 
        sx={{ 
          backgroundColor: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
          '&:hover': { backgroundColor: isDarkMode ? '#f0f0f0' : '#333333' },

        }}
      >
        
        <a className={isDarkMode?"button-dark":"button-light"} href={CV} download="CV.pdf">
      Download CV
    </a>
      </Button>
      </div>
    </div>
  );
}

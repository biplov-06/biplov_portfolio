import React ,{useEffect}from 'react'
import profileImage from '../assets/profilefinal.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function aboutimg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container about2'data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
     <img
             src={profileImage}
              alt="Can't load"
              
            />
    </div>
  )
}

import React ,{useEffect}from 'react'
import profileImage from '../assets/profile.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function aboutimg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container about2'data-aos="flip-left"data-aos-duration="1000">
     <img
             src={profileImage}
              alt="Can't load"
              
            />
    </div>
  )
}

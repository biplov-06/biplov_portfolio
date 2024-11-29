import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function aboutimg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container about2'data-aos="flip-left"data-aos-duration="1000">
     <img
              src="../src/assets/profile.jpg"
              alt="Can't load"
              
            />
    </div>
  )
}

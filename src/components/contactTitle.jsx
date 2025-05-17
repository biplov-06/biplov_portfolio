import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function contactTitle() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="container my-5" data-aos="zoom-in" >
        <h1 className=" my-4 contact-title-font">Lets Get in <strong>Touch!</strong></h1>
        <p className='contact-discription-font'>The best projects are built by passionate people <br/>working together. Let’s combine our strengths and <br/>bring your vision to life. 
        </p>
        <p className='contact-discription-font'><strong>📬 Reach out — I’d love to be part of your journey.

</strong></p>
      </div>
    </div>
  )
}

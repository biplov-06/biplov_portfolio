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
        <p className='contact-discription-font'>Have a question or need assistance? <br/>Feel free to reach out via email, <br /> phone, or the contact form below.<br/> I'm excited to connect with you and will <br />get back to  you as soon as possible.
        </p>
        <p className='contact-discription-font'><strong>Looking forward to hearing from you!

</strong></p>
      </div>
    </div>
  )
}

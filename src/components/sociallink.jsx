import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function sociallink({isDarkMode}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={isDarkMode?'social-link dark-mode':'social-link light-mode'}  data-aos="fade-right">
      <ul className="container sites">
       <li><a className={isDarkMode?'s dark-mode':' light-mode'} href="https://www.facebook.com/biplov11"><i className="bi bi-facebook"></i></a></li> 
       <li><a className={isDarkMode?'s dark-mode':' light-mode'} href="https://wa.me/9779761896393"><i className="bi bi-whatsapp"></i></a></li> 
       <li><a className={isDarkMode?'s dark-mode':' light-mode'} href="https://github.com/biplov-06"><i className="bi bi-github"></i></a></li> 
       <li><a className={isDarkMode?'s dark-mode':' light-mode'} href="https://www.linkedin.com/in/bip-lov-b7140928a/"><i className="bi bi-linkedin"></i></a></li> 

       
      </ul>
    </div>
  )
}

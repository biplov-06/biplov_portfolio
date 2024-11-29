import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function contactdetails() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="container my-4" data-aos="zoom-in">
        <p className="discription-font">
          <strong>Personal Contact</strong>
        </p>
        <p className="dt">
          <i className="bi bi-telephone-fill"></i> +977 9761896393
        </p>
        <p className="dt">
          <i className="bi bi-envelope-fill"></i> biplovdhakal@gmail.com
        </p>
        <p className="dt">
          <i className="bi bi-geo-alt-fill"></i> Kathmandu, Nepal
        </p>
      </div>
    </div>
  );
}

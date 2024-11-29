import React from "react";
import Form from "./form";
import ContactTitle from "./contactTitle";
import Contactdetails from "./contactdetails";
import Sociallink from "./sociallink";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function contactPage({isDarkMode}) {
  return (
    <div>
      <div className={isDarkMode?"upper1 contact-dark":"upper1 contact-light"}>
        <div className="container upperdiv ">
          <ContactTitle/>
          <Form isDarkMode={isDarkMode}/>
        </div>
      </div>
      <div className="lower1 container">
      <Sociallink isDarkMode={isDarkMode}/>
      <Contactdetails />
      </div>
    </div>
  );
}

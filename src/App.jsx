import React, { useState,useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Togglebutton from "./components/togglebutton";
import SwipleftButton from "./components/swipleft_button";
import Heading from "./components/heading";
import About from './components/aboutPage';
import Skill from './components/Skill';
import Projects from './components/projectmain';
import Contact from './components/contactPage';
import Footer from './components/footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => setIsDarkMode(!isDarkMode);
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div>
      <div className={isDarkMode ? "dark-mode center-div" : "light-mode center-div"}>
      <Heading title="From Code to Completion." isDarkMode={isDarkMode} />
      <SwipleftButton isDarkMode={isDarkMode} />
      <Togglebutton onToggle={handleToggle} isDarkMode={isDarkMode} />
    </div>
    <hr />
      <About isDarkMode={isDarkMode}/><hr />
      <Skill isDarkMode={isDarkMode}/><hr />
      <Projects isDarkMode={isDarkMode}/><hr />
      <Contact isDarkMode={isDarkMode}/><hr />
      <Footer/>
    </div>
  );
}

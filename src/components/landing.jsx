// src/App.js
import React, { useState,useEffect } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Togglebutton from "./togglebutton";
import SwipleftButton from "./swipleft_button";
import Heading from "./heading";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => setIsDarkMode(!isDarkMode);
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);


  return (
    <div className={isDarkMode ? "dark-mode center-div" : "light-mode center-div"}>
      <Heading title="From Code to Completion." isDarkMode={isDarkMode} />
      <SwipleftButton isDarkMode={isDarkMode} />
      <Togglebutton onToggle={handleToggle} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App; 
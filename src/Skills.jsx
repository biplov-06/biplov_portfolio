import React from 'react';
import "../App.css";

export default function Skills({ isDarkMode }) {
  return (
    <div className="skills-container">
      <h2 className={isDarkMode ? "dark-mode" : "light-mode"}>My Skills</h2>
      <p className={isDarkMode ? "light-mode" : "dark-mode"}>
        Here, you can list your skills, technologies you're familiar with, and any other relevant information.
      </p>
    </div>
  );
}

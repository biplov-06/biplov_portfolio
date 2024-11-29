import React, { useState } from "react";
import Title from "./Title";
import SkillsImg from "./skillsImg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Skill({ isDarkMode }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // Function to handle description update from SkillsImg
  const updateDescription = (key, desc) => {
    setTitle(key.toUpperCase());
    setDescription(desc);
  };

  return (
    <div className={isDarkMode ? "dark-mode skill-main container my-5" : "light-mode skill-main container my-5"}>
      <Title isDarkMode={isDarkMode}/>
      <SkillsImg onDescriptionChange={updateDescription} />
    </div>
  );
}

export default Skill;

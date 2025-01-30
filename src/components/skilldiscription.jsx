import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SkillDescription({ newDescription, describe }) {
  return (
    <div className="my-4 sd">
      <h5 className="card-header title-discription-font">{newDescription}</h5>
      <div >
        <p className="title-discription-font">{describe}</p>
      </div>
    </div>
  );
}

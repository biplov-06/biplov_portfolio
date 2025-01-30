import React from "react";
import Title from "./projecttitle";
import "bootstrap/dist/css/bootstrap.css";
import Projectbody from "./projectbody";

export default function projectmain() {
  return (
    <div className="pp">
      <Title />
      <Projectbody />
    </div>
  );
}

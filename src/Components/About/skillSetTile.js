import React from "react";
import "./skillSetTile.css";

function SkillSetTab({ imageURL }) {
  console.log("Rendering image URL:", imageURL);

  return (
    <div className="skill-set-tab">
      <img className="skill-set-img" src={imageURL} alt="Skill" />
    </div>
  );
}

export default SkillSetTab;

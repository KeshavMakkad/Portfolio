import React from "react";
import "./skills.css";
import SkillSetTab from "./skillSetTile.js";
import reactImage from "./../../assets/Skills/react.png";
import html from "./../../assets/Skills/html.png";
import CSS from "./../../assets/Skills/css.png";
import JS from "./../../assets/Skills/js.png";
import spring from "./../../assets/Skills/spring.png";
import java from "./../../assets/Skills/java.png";

export default function Skills() {
  const images = [reactImage, html, CSS, JS, spring, java];

  return (
    <div className="skills-container">
      {images.map((image, index) => (
        <SkillSetTab key={index} imageURL={image} />
      ))}
    </div>
  );
}

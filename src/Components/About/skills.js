import "./skills.css";
import SkillSetTab from "./skillSetTile.js";
import reactImage from "./../../assets/Skills/react.png";

export default function skills() {
  const skills = (
    <div className="skills-container">
      <SkillSetTab imageURL={reactImage} />
    </div>
  );

  return skills;
}

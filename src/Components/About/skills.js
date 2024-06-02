import "./skills.css";
import SkillSetTab from "./skillSetTile.js";
import reactImage from "./../../assets/Skills/react.png";
import html from "./../../assets/Skills/html.png";
import CSS from "./../../assets/Skills/css.png";
import JS from "./../../assets/Skills/js.png";
import spring from "./../../assets/Skills/spring.png";
import java from "./../../assets/Skills/java.png";

export default function skills() {
  const skills = (
    <div className="skills-container">
      <SkillSetTab imageURL={reactImage} />
      <SkillSetTab imageURL={html} />
      <SkillSetTab imageURL={CSS} />
      <SkillSetTab imageURL={JS} />
      <SkillSetTab imageURL={spring} />
      <SkillSetTab imageURL={java} />
      <SkillSetTab imageURL={java} />
      <SkillSetTab imageURL={java} />
      <SkillSetTab imageURL={java} />
      <SkillSetTab imageURL={java} />
      <SkillSetTab imageURL={java} />
    </div>
  );

  return skills;
}

import "./skillSet.css";
import Skills from "./skills.js";

function skillSet() {
  const skillSet = (
    <div className="skill-set-container">
      <h1 className="skills-heading"> Professional SkillSet</h1>
      <Skills />
    </div>
  );

  return skillSet;
}

export default skillSet;

import SkillSetTab from "./skillSetTab"
import "./skillSet.css"

function skillSet(){
    const skillSet = (
        <div className="skill-set-container">
            <h1 className="skills-heading"> Porfessional SkillSet</h1>
            <div className="skills-conatiner">
                <SkillSetTab className="skill-set-tab" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" />
            </div>
        </div>
    )

    return skillSet;
}

export default skillSet
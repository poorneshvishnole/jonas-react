import React from "react";
import Skill from "./Skill";

const SkillsList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map(({ skill, level, color }) => (
        <Skill skill={skill} color={color} level={level} key={skill} />
      ))}
    </div>
  );
};

export default SkillsList;

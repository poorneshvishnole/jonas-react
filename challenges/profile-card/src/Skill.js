import React from "react";

const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? " 💯" : level === "intermediate" ? "✌️" : "👶"}
      </span>
    </div>
  );
};

export default Skill;

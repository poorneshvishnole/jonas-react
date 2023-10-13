import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillsList from "./SkillsList";

const skillsData = [
  {
    skill: "HTML + CSS ",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "lightgreen",
  },
  {
    skill: "Git and Github",
    level: "beginner",
    color: "red",
  },
  {
    skill: "React",
    level: "advanced",
    color: "blue",
  },
];
const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList skills={skillsData} />
      </div>
    </div>
  );
};

export default App;

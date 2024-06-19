import React, { useState } from "react";
import { FaJs, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
const btnLbl = ["Education", "Skills"];
const skills = [
  {
    skillName: "HTML 5",
    skillIcon: <FaHtml5 />,
  },
  {
    skillName: "Javascript",
    skillIcon: <FaJs />,
  },
  {
    skillName: "CSS3",
    skillIcon: <FaCss3 />,
  },
  {
    skillName: "ReactJS",
    skillIcon: <FaReact />,
  },
  {
    skillName: "Tailwind",
    skillIcon: <RiTailwindCssFill />,
  },
  {
    skillName: "NextJS",
    skillIcon: <RiNextjsFill />,
  },
];
const education = [
  {
    grade: "Elementary School",
    year: "2010 - 2016",
    schoolName: "Exodus Elementary School",
  },
  {
    grade: "High School",
    year: "2016-2020",
    schoolName: "Christ The King College of Angono",
  },
  {
    grade: "Senior High School",
    year: "2020-2022",
    schoolName: "Systems Technology Institute",
  },
  {
    grade: "College",
    year: "2022 - Present",
    schoolName: "Systems Technology Institute",
    course: "Bachelor of Science in Computer Science",
  },
];

function About() {
  const [toRender, setToRender] = useState("education");
  function handleClick(name) {
    setToRender(name);
  }
  console.log(toRender);
  return (
    <div className="flex flex-wrap gap-4 max-[820px]:flex-col min-h-[600px] ">
      <div className="flex-1 flex-col max-[820px]:text-center max-w-[300px] max-[820px]:max-w-[100%] w-full space-y-4 justify-center items-center text-[15px]">
        <h1 className="font-bold text-[30px] w-full">About</h1>
        {btnLbl.map((label) => (
          <button
            key={label}
            className={`w-full bg-[#1a2231] rounded-md p-3 hover:bg-[#eb4646] transition-all duration-300 ${
              label.toLowerCase() == toRender ? "bg-[#eb4646]" : "bg-[#1a2231] "
            }`}
            onClick={() => handleClick(label.toLocaleLowerCase())}
          >
            {label}
          </button>
        ))}
      </div>
      {toRender === "education" ? (
        <div className="flex-1 space-y-4">
          <h1 className="font-bold text-[30px]">My Education</h1>
          <p className="text-[18px]">
            This section is my educational background
          </p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3">
            {education.map((edu) => (
              <div className="text-[15px] bg-[#1a2231] rounded-lg p-4 flex flex-col justify-between h-full">
                <div>
                  <p className="text-[#eb4646]">{edu.year}</p>
                  <h1 className="font-bold text-[20px]">{edu.schoolName}</h1>
                  <p>{edu.course}</p>
                </div>
                <div className="mt-auto flex items-center gap-1">
                  <div className="text-[#eb4646]">
                    <GoDotFill />
                  </div>
                  <p className="items-end">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 space-y-4">
          <h1 className="font-bold text-[30px]">My Skills</h1>
          <p className="text-[18px]">
            My skills revolve around front-end languages that I&apos;m
            proficient in
          </p>
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div
                key={skill.skillName}
                className="bg-[#1a2231] h-[150px] rounded-lg flex justify-center items-center flex-col"
              >
                <div className="text-6xl mb-2">{skill.skillIcon}</div>
                <p>{skill.skillName}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

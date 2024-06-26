import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function Project() {
  const projects = [
    {
      name: "Amazon Clone",
      img: "/amazon-clone.png",
      description:
        "Using vanilla JS, CSS, and HTML i created one of my first big project. It has CRUD operation with simple data save using local storage. You can search, add to car, buy, track order, and deleter order",
      language: "HTML CSS JS",
      link: "https://github.com/DanieruuDev/AmazonProject",
      live: "https://danieruudev.github.io/AmazonProject/amazon",
    },
    {
      name: "Architech",
      img: "/Architech.png",
      description:
        "A website task by our CSA subject. We created a website that store our module and handout for our subject. A learning web site dedicated to the CSA subject only. It also has it's own database for it's user to login and register",
      language: "NEXTJS REACTJS TAILWIND SHADCN MONGODB",
      link: "https://github.com/elwynynion/architech",
      live: "https://architech-bscs401.vercel.app/",
    },
    {
      name: "Weather App API",
      img: "/weather.png",
      description:
        "A simple weather applciation made with weather.api and next js. That allwos to see the weather in each city you input",
      language: "NEXTJS TAILWIND WEATHERAPI",
      link: "https://github.com/DanieruuDev/WeatherAPI",
      live: "https://dan-weather-api.netlify.app/",
    },
  ];
  return (
    <div>
      <h1 className="text-[50px] font-bold text-center">MY WORK</h1>
      <div className="space-y-10">
        {projects.map((project) => (
          <div className="flex flex-wrap items-center max-lg:flex-col max-lg:space-y-4">
            <div className="max-w-[600px] w-full flex flex-1 mr-[15px] box-border items-center justify-center">
              <img
                src={project.img}
                alt=""
                className="rounded-xl shadow-lg w-[100%] object-cover max-h-[300px] object-top"
              />
            </div>
            <div className=" flex-1 max-w-[400px] ml-auto space-y-1 max-lg:ml-0 max-lg:text-center">
              <div className="flex gap-2 text-[30px] max-lg:justify-center">
                <a href={project.link} className="hover:text-[#eb4646]">
                  <FaGithub />
                </a>
                {project.live && (
                  <a href={project.live} className="hover:text-[#eb4646]">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <div className="font-bold text-[25px] text-[#eb4646]">
                {project.name}
              </div>
              <div className=" text-[18px] text-[#b6b6b6]">
                {project.description}
              </div>
              <div className=" text-[15px]">{project.language}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

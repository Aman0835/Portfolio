import React from "react";
import ProjectCards from "./smallComponents/ProjectCards";

const Projects = () => {
  return (
    <div className="w-full p-8 bg-[#080807] text-[#D1D1C7]">
      <hr className="border-t border-[#A29E9A] opacity-60 mt-0" />

      <div className="w-full ">
        <div className="text-[7rem] font-semibold mb-8">SELECTED WORKS /</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A29E9A]">
          <div className="flex justify-end items-start">
            <div className="text-[#6B645C] text-2xl">(Projects)</div>
          </div>

          <div className="text-2xl w-[40ch]">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </div>
        </div>

        <ProjectCards
          num="1"
          working={"project 1 working"}
          projectname={"Project 1 Name"}
        />
        <ProjectCards
          num="2"
          working={"project 2 working"}
          projectname={"Project 2 Name"}
        />
        <ProjectCards
          num="3"
          working={"project 3 working"}
          projectname={"Project 3 Name"}
        />
        <ProjectCards
          num="4"
          working={"project 4 working"}
          projectname={"Project 4 Name"}
        />
        <ProjectCards
          num="5"
          working={"project 5 working"}
          projectname={"Project 5 Name"}
        />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCards from "./smallComponents/ProjectCards";

const Projects = () => {
  return (
    <section className="w-full bg-[#080807] text-[#D1D1C7] px-5 sm:px-8 lg:px-16 py-10 rounded-t-[40px] rounded-b-[40px] overflow-hidden">
      <hr className="border-[#A29E9A]/50" />

      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-semibold leading-none">
          SELECTED
          <br className="sm:hidden" />
          WORKS /
        </h1>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="flex lg:justify-end">
          <p className="text-[#6B645C] text-lg sm:text-xl lg:text-2xl">
            (Projects)
          </p>
        </div>

        <div>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-16 space-y-24">
        <ProjectCards
          num="1"
          working="Listen Together, Wherever You Are."
          projectname="One Music"
          link="https://onemusic-eta.vercel.app"
          image="/OneMusic.png"
        />

        <ProjectCards
          num="2"
          working="PROJECT 2 WORKING"
          projectname="Project 2 Name"
        />

        <ProjectCards
          num="3"
          working="PROJECT 3 WORKING"
          projectname="Project 3 Name"
        />

        <ProjectCards
          num="4"
          working="PROJECT 4 WORKING"
          projectname="Project 4 Name"
        />

        <ProjectCards
          num="5"
          working="PROJECT 5 WORKING"
          projectname="Project 5 Name"
        />
      </div>
    </section>
  );
};

export default Projects;
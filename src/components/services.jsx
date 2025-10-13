import React from "react";
import SectionCards from "./smallComponents/sectionCards";  

const Services = () => {
  return (
    <div className="w-full min-h-screen  my-font">
      <div className=" flex flex-col gap-4 overflow-hidden hide-scrollbar bg-[#080807] text-[#D1D1C7] rounded-t-4xl">
        <div className="text-[8rem] pl-10 font-semibold mb-8   ">
          WHAT I DO/
        </div>
        <div className="flex justify-end text-[#A29E9A]   ">
          <div className="text-2xl px-4   w-[50ch]  flex p-4 gap-8 mr-16">
            <div className=" text-[#6B645C]">(Service)</div>
            I’m Aman Vishwakarma, a passionate Full Stack Developer. I love
            turning ideas into fast, reliable, and user-friendly web
            applications. Skilled in both frontend and backend technologies, I
            bridge the gap between design and functionality. I help businesses,
            startups, and teams bring their digital visions to life.
          </div>
        </div>
        <hr className="mr-auto ml-auto border-t border-[#A29E9A] opacity-60 w-[95%] " />
      </div>

      <SectionCards
        number="1"
        title="Full-Stack Development"
        description=" From frontend interactions to backend APIs, I build complete web
              solutions. I work with modern stacks to deliver apps that are
              scalable, maintainable, and ready for real-world users."
        skills={[
          "React, Node.js, Express.js",
          "REST APIs, Firebase, Docker",
          "Git, GitHub, Postman",
        ]}
      />
      <hr className=" border-t border-[#A29E9A] opacity-60 mt-0  " />
      <SectionCards
        number="2"
        title="UI/UX & Frontend "
        description="I’m Aman Vishwakarma — a developer who builds experiences, not just code. I create modern, responsive web apps where design and function blend seamlessly, delivering scalable, maintainable, user-focused solutions."
        skills={[
          "NextJs, TailwindCSS, GSAP",
          "Figma to Code",
          "HTML, CSS, JavaScript",
        ]}
      />
      <hr className=" border-t border-[#A29E9A] opacity-60 mt-0  " />
      <SectionCards
        number="3"
        title="Optimization "
        description=" Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability."
        skills={[
          "Data Structures & Algorithms",
          "DBMS, OOP, OS Fundamentals",
          "Data Pipelines, ETL, and Scalability",
        ]}
      />
    </div>
  );
};

export default Services;

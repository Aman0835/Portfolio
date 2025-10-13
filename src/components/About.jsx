import React from "react";
import TextAnimation from "./smallComponents/TextAnimation";
import profile from "../assets/p2.png";

const About = () => {
  return (
    <div className="min-h-screen  bg-[#080807] rounded-b-4xl">
      <div className=" min-h-screen    p-20 text-[#A29E9A] flex flex-col gap-16  ">
        <div className="flex ">
          <div className=" text-[#D1D1C7] text-[6rem] w-1/2 leading-30 font-bold p-8 mt-16 pl-0">
            DEVELOPER DESIGNER CREATOR /
          </div>
          <div className="  flex flex-col  w-1/2">
            <div className="text-[6rem] font-semibold mb-8 flex  justify-center text-[#D1D1C7]">
              Skills
            </div>
            <div className="flex h-full ">
              <div className="w-3/12 ml-16">
                <div className="text-3xl p-2 text-[#D1D1C7] font-semibold">
                  Languages & Tools
                </div>
                <div className="p-2  text-xl cursor-pointer">
                  <TextAnimation
                    text="JAVA"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="JavaScript"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="SQL"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Docker"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Kubernative"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Git"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Github"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Firebase"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
              </div>
              <div className="w-3/12 ml-8">
                <div className="text-3xl p-2 text-[#D1D1C7] font-semibold">
                  Frameworks & Libraries
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="React"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Node.js"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Express.js"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="TailwindCSS"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="GSAP"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="JQuery"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="Framer Motion"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
              </div>
              <div className="w-3/12 ml-8 ">
                <div className="text-3xl p-2 text-[#D1D1C7] font-semibold">
                  Core CS Concepts
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="DSA"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="DBMS"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer">
                  <TextAnimation
                    text="OOPS"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer ">
                  <TextAnimation
                    text="System Design"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
                <div className="p-2 text-xl cursor-pointer w-[10ch]">
                  <TextAnimation
                    text="Operating System"
                    animateOn="both"
                    revealDirection="center"
                    speed={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="   p-8 pl-0  grid grid-cols-7 gap-8 text-[#D1D1C7] ">
          <div className=" h-[70%]  overflow-hidden  col-span-2">
            <img
              src={profile}
              alt=""
              className="h-full  overflow-hidden rounded-lg "
            />
          </div>
          <div className="col-end-8 col-start-4 text-[#A29E9A] ">
            <div className="flex gap-16 flex-col">
              <p className="text-4xl font-bold">
                I'm a software engineer driven by a passion for turning ideas
                into clean,intuitive digital experiences.
              </p>
              <div className=" flex  gap-16">
                <div className="text-[#6B645C] capitalize w-[15ch] "> (About me)</div>
                <div className="w-[40ch] text-2xl  ">
                  <p>
                    I am a passionate Software Engineer with a knack for
                    building full-stack web applications using modern
                    technologies like Next.js and TailwindCSS.My journey in tech
                    began with a curiosity for solving real-world problems
                    through innovative solutions,which evolved into a love for
                    crafting user-centric digital experiences. 
                    
                  </p>
                  <p className="pt-8">Beyond coding,I
                    thrive in collaborative environments and enjoy tackling
                    challenging problems with creative solutions.I aim to
                    contribute to impact full projects that make a difference in
                    users' lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

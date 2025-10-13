import React from "react";

const ProjectCards = ({ num ,projectname,working}) => {
  return (
    <div >
      <div className="w-full min-h-screen flex p-8  ">
        <div className="text-[20rem] text-[#A29E9A] font-bold  w-1/2">
          {num.padStart(2, "0")}
        </div>
        <div className="w-1/2 bg-gray-600 rounded-2xl min-h-screen cursor-pointer ">
          <a href="https://gymsync.42web.io/home"></a>
        </div>
      </div>
      
        
          <div className="flex justify-between  items-start p-4 text-[#6B645C] ">
            <div className="flex-col text-sm  ">
              <div >{working}</div>
                <div className="text-4xl text-[#A29E9A]">{projectname}</div>
            </div>
            <div className="flex justify-between gap-8">
                <div className="border-2 rounded-4xl p-2">Development</div>
                <div className="border-2 rounded-4xl p-2 bg-[#A29E9A] text-[#080807]">2025</div>
            </div>
          </div>
      
    </div>
  );
};  

export default ProjectCards;

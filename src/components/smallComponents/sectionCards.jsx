import React from "react";

const SectionCards = ({ number, title, description, skills = [] }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#080807] text-[#D1D1C7] flex justify-between gap-8 p-8  ">
        <div className="text-[4rem] pl-10 font-semibold mb-8 mt-4">
          ({number.padStart(2, "0")})
        </div>
        <div className="w-1/2">
          <div className="text-[4rem] font-semibold mr-16 p-8 pl-0">
            {title}
          </div>
          <div className="w-[40ch] text-2xl p-8 pt-0 text-[#A29E9A]">
            {description}
          </div>
          <div className="flex flex-col gap-6 mt-6">
            {skills.map((item, index) => (
              <div key={index}>
                <p className="text-[#A29E9A]">
                  ({String(index + 1).padStart(2, "0")})
                </p>
                <h3 className="text-3xl font-semibold mt-1">{item}</h3>
                <hr className="border-t border-[#A29E9A] opacity-60 mt-3 w-[90%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCards;

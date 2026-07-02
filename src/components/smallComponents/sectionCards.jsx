import React from "react";

const SectionCards = ({ number, title, description, skills = [] }) => {
  return (
    <section className="w-full bg-[#080807] text-[#D1D1C7] px-5 sm:px-8 lg:px-16 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-50 sm:gap-12 gap-8 ">

        {/* Left Number */}
        <div className="lg:col-span-3 ">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#A29E9A]">
            ({number.padStart(2, "0")})
          </h2>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-9 ">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-[#A29E9A] text-lg sm:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Skills */}
          <div className="mt-12 space-y-8">

            {skills.map((item, index) => (
              <div key={index}>

                <p className="text-[#6B645C] text-sm">
                  ({String(index + 1).padStart(2, "0")})
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  {item}
                </h3>

                <hr className="mt-4 border-[#A29E9A]/40" />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SectionCards;
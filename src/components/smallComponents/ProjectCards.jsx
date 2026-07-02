const ProjectCards = ({ num, projectname, working, link, image }) => {
  return (
    <div className="w-full py-8 border-b border-[#2A2A2A]">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Left Number */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <h1 className="font-bold text-[#A29E9A] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[15rem] leading-none">
            {num.padStart(2, "0")}
          </h1>
        </div>

        {/* Project Preview */}
        <div className="w-full lg:w-1/2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div
              className={`
                relative
                group
                w-full
                h-[220px]
                sm:h-[280px]
                md:h-[350px]
                lg:h-[500px]
                rounded-2xl
                overflow-hidden
                cursor-pointer
                transition-all
                duration-500
                ease-in-out
                ${image ? "bg-[#080807]" : "bg-[#3B465A]"}
              `}>
              {image ? (
                <img
                  src={image}
                  alt={projectname}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {projectname}
                  </h3>
                </div>
              )}
            </div>
          </a>
        </div>
      </div>

      {/* Bottom */}
      {/* Bottom */}
      <div className="mt-6 flex justify-end">
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-[#6B645C] text-sm uppercase tracking-wider">
            {working}
          </p>

          <h2 className="text-[#A29E9A] text-2xl sm:text-3xl md:text-4xl font-semibold">
            {projectname}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;

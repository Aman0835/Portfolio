import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-[2rem] text-[#6B645C] my-font text-xl font-medium">
      <div>Web Developer & Designer</div>
      <div className="flex gap-8">
        <a href="#services" className="relative group">
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B645C] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="relative group">
          Works
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B645C] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B645C] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="relative group">
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B645C] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

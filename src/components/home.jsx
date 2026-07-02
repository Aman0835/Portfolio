import React from "react";
import { ArrowDownRight } from "lucide-react";

import profile from "../assets/profile.png";
import aman from "../assets/Aman Vishwakarma.svg";

import Contactme from "./smallComponents/Contactme";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#E8E8E3] px-5 sm:px-8 lg:px-16 py-8">
      {/* Name */}
      <div className="w-full mb-8 lg:mb-12">
        <img
          src={aman}
          alt="Aman Vishwakarma"
          className="w-full select-none"
        />
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div className="text-center lg:text-left">
            {/* Hide Arrow on Mobile */}
            <ArrowDownRight
              size={52}
              color="#8C8C73"
              strokeWidth={1.5}
              className="hidden lg:block"
            />

            <p className="mt-4 lg:mt-8 text-[#6B645C] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-md mx-auto lg:mx-0">
              Building fast, scalable, and user-focused digital experiences
              with modern web technologies.
            </p>
          </div>

          {/* Contact Button */}
          <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
            <Contactme />
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 flex justify-center order-3 lg:order-none">
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-[500px] overflow-hidden rounded-3xl border border-[#d8d8d0] shadow-lg">
            <img
              src={profile}
              alt="Aman Vishwakarma"
              className="w-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-3 flex flex-col justify-end items-center lg:items-end text-center lg:text-right order-2 lg:order-none">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#171717]">
            Available For Work
          </h2>

          <p className="mt-4 text-[#6B645C] text-lg lg:text-xl leading-relaxed max-w-xs">
            Open to full-time opportunities,
            <br className="hidden lg:block" />
            freelance projects,
            <br className="hidden lg:block" />
            and exciting collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
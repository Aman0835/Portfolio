import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import aman from "../assets/Aman Vishwakarma.svg";
import Contactme from "./smallComponents/Contactme";
import "../index.css";
import { ArrowDownRight } from "lucide-react";

const Home = () => {
  return (
        <div className="flex flex-col gap-8 w-full p-[2rem] flex-1 min-h-screen overflow-hidden hide-scrollbar">
        <div className="font-black text-white">
          <img src={aman} className="w-full text-[#171717]" alt="Aman" />
        </div>
        <div className="flex flex-row gap-10 text-lg text-[#6B645C] flex-1 ">
          <div className="rounded-lg flex-1 p-8 relative">
            <ArrowDownRight
              size={50}
              className="absolute top-0 left-0"
              color="#8C8C73"
              strokeWidth={1.5}
            />
            <p className="mt-12 ml-12 text-2xl absolute bottom-45 left-0">
              Open to job opportunities worldwide. Passionate about building
              polished, intuitive, and thoughtful digital experiences that leave
              a mark.
            </p>
            <Link to="/contact" className="absolute bottom-20 p-4">
              <Contactme />
            </Link>
          </div>
          <div className=" rounded-lg flex-1  flex items-center justify-center h-[60vh] ">
            <div className=" h-[80%]  flex justify-center items-center  overflow-hidden">
              <img
                src={profile}
                alt=""
                className="h-full grayscale overflow-hidden rounded-lg "
              />
            </div>
          </div>
          <div className="rounded-lg flex-1 p-8 flex flex-col items-end justify-end gap-4">
            <p className="capitalize text-2xl font-bold w-full text-right text-[#171717]">
              Available For Work
            </p>
            <p className="w-full text-right text-2xl">
              I am currently open to   new <br />opportunities and collaborations.
            </p>
          </div>
        </div>
      </div>
   
  )
}

export default Home
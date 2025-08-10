import React from 'react';
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-8">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-black font-mono text-center">Working in:</h1>
        <div className="flex flex-wrap justify-center gap-11 border border-black/35 rounded-xl px-3 py-4 bg-blue-300">
          {[<SiHtml5 className='text-orange-600-'/>, <IoLogoCss3 className='text-blue-600'/>, <IoLogoJavascript className='text-amber-400 bg-black'/>, <RiTailwindCssFill className='text-blue-600'/>, <FaReact className='text-blue-700'/>, <RiFirebaseFill className='text-orange-600 bg-black'/>, <FaGithub />].map((skill, index) => (
            <span
              key={index}
              className=" shadow-sm hover:shadow-xl flex justify-around text-3xl items-center transition text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-2xl mb-4 text-black font-mono font-bold text-center">I’m currently exploring:</h2>
        <div className="flex flex-wrap justify-center gap-11 border border-black/35 rounded-xl px-3 py-4 bg-blue-300">
          {[<RiNextjsFill />, <FaNodeJs className='text-green-600'/>, <SiMongodb className='bg-black text-green-600'/>].map((skill, index) => (
            <span
              key={index}
              className="shadow-sm hover:shadow-xl transition translate- text-4xl text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

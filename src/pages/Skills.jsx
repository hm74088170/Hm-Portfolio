import React from "react";
import { SiHtml5, SiMongodb } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Skills = () => {
  const workingSkills = [
    <SiHtml5 className="text-orange-600" />,
    <IoLogoCss3 className="text-blue-600" />,
    <IoLogoJavascript className="text-amber-500" />,
    <RiTailwindCssFill className="text-cyan-500" />,
    <FaReact className="text-sky-600" />,
    <RiFirebaseFill className="text-yellow-500" />,
    <FaGithub className="text-slate-800" />,
  ];

  const exploringSkills = [
    <RiNextjsFill className="text-slate-800" />,
    <FaNodeJs className="text-green-600" />,
    <SiMongodb className="text-green-700" />,
  ];

  return (
    <>
    <Link to="/" className="flex justify-center text-2xl bg-slate-50 w-full">Home</Link>
    <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-12 space-y-12">
   
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-slate-800 font-mono text-center">
          Working in:
        </h1>
        <div className="flex flex-wrap justify-center gap-8 border border-slate-300 rounded-2xl px-4 py-6 bg-white shadow-md">
          {workingSkills.map((skill, index) => (
            <span
              key={index}
              className="flex justify-center items-center text-4xl p-2 rounded-lg hover:scale-110 transition-transform shadow-sm hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

     
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 font-mono text-center">
          I’m currently exploring:
        </h2>
        <div className="flex flex-wrap justify-center gap-8 border border-slate-300 rounded-2xl px-4 py-6 bg-white shadow-md">
          {exploringSkills.map((skill, index) => (
            <span
              key={index}
              className="flex justify-center items-center text-4xl p-2 rounded-lg hover:scale-110 transition-transform shadow-sm hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;

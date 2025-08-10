import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-1 left-1/2 -translate-x-1/2 w-11/12 max-w-9xl z-50 backdrop-blur bg-black/15 text-white shadow-lg border border-black/35 rounded-xl">
      <div className="flex justify-between items-center px-6 py-4">
        
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-black leading-tight">Creative Developer & Problem Solver</h1>
          <p className="text-xs sm:text-sm font-bold font-mono text-gray-200">Himanshu Mishra</p>
        </div>

        
        <div className="hidden md:flex items-center gap-8 font-extrabold text-black text-3xl ">
          <Link to="/" className="hover:text-gray-300 transition"><FaHome /></Link>
          <Link to="/projects" className="hover:text-gray-300 transition"><FaProjectDiagram /></Link>
          <Link to="/resume" className="hover:text-gray-300 transition"><PiReadCvLogoFill /></Link>
          <Link to="/contact" className="hover:text-gray-300 transition"><MdContactMail /></Link>
        </div>

       
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 bg-black/70 rounded-b-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Projects</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Resume</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
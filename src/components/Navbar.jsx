import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white md:bg-slate-300 border-b border-emerald-200 md:border-slate-700">
      <div className="flex items-center justify-between px-6 py-4 text-slate-800 md:text-white">
        
        <div>
          <h1 className="text-lg font-semibold leading-tight">
            Creative Developer & Problem Solver
          </h1>
          <Link
            to="/admin"
            className="text-xs font-medium text-black"
          >
            HIMANSHU MISHRA
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
        <div className="md:hidden bg-white border-t border-emerald-200 px-6 py-5 space-y-4">
          <Link onClick={() => setIsOpen(false)} className="block text-lg text-slate-700 hover:text-emerald-600" to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} className="block text-lg text-slate-700 hover:text-emerald-600" to="/projects">Projects</Link>
          <Link onClick={() => setIsOpen(false)} className="block text-lg text-slate-700 hover:text-emerald-600" to="/resume">Resume</Link>
          <Link onClick={() => setIsOpen(false)} className="block text-lg text-slate-700 hover:text-emerald-600" to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

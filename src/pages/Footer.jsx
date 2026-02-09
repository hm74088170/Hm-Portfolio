import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Himanshu Mishra</h2>
          <p className="text-sm text-gray-400">Portfolio</p>
        </div>

        <div className="flex space-x-6 text-sm">
          <Link to='/projects' className="hover:text-gray-300">Projects</Link>
          <Link to='/contact' className="hover:text-gray-300">Contact</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://instagram.com/hm74088170?igsh=YTh6YWg1aXZwbTBv" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
          </a>
          <a href="https://facebook.com/profile.php?id=100053441303961" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-blue-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/himanshumishra-559377312" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="text-xl hover:text-sky-400 transition" />
          </a>
          <a href="https://github.com/hm74088170" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="text-xl hover:text-gray-500 transition" />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Himanshu Mishra. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

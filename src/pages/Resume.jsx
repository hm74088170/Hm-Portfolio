import { motion } from "framer-motion";
import { PiReadCvLogoBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Skills from "./Skills";

const Resume = () => {
  return (
    <>
    <Link to="/" className="flex justify-center text-2xl bg-slate-50 w-full">Home</Link>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-50 flex flex-col items-center px-4 pt-32"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-mono text-slate-800 mb-10 text-center">
        My Resume
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 w-full max-w-3xl">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white min-w-[210px] flex justify-center items-center gap-2 px-6 py-3 rounded-2xl border border-emerald-700 hover:bg-emerald-700 transition"
        >
          View Resume <PiReadCvLogoBold size={20} />
        </a>
        <a
          href="/resume.pdf"
          download="My_Resume.pdf"
          className="bg-slate-800 text-white min-w-[210px] flex justify-center items-center gap-2 px-6 py-3 rounded-2xl border border-slate-900 hover:bg-slate-900 transition"
        >
          Download Resume <FaDownload size={18} />
        </a>
      </div>
      <Skills/>
    </motion.div>
    </>
  );
};

export default Resume;

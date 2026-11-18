
import { motion } from "framer-motion";
import { PiReadCvLogoBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white px-6 md:px-10 pt-28">

      <div className="max-w-7xl mx-auto">

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors mb-12"
        >
          ← Back to Home
        </Link>

        {/* Resume Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-4">
            My Professional Profile
          </p>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            My <span className="text-[#ff6b35]">Resume.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Explore my professional journey, technical skills and experience.
            Download my resume to know more about my background and projects.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="relative overflow-hidden bg-[#191919] border border-white/10 rounded-3xl p-8 md:p-12 text-center">

            {/* Decorative Background */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#ff6b35]/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mb-7">
                <PiReadCvLogoBold size={38} className="text-[#ff6b35]" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Professional Resume
              </h2>

              <p className="text-gray-400 text-sm mb-9">
                View my resume online or download a copy in PDF format.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">

                {/* View Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff6b35] text-black px-7 py-4 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  View Resume
                  <FiArrowUpRight size={19} />
                </a>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  download="Himanshu_Mishra_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-4 rounded-full font-semibold hover:border-[#ff6b35] hover:text-[#ff6b35] hover:scale-105 transition-all duration-300"
                >
                  Download Resume
                  <FaDownload size={16} />
                </a>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-20"
        >
          <div className="text-center mb-10">
            <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-3">
              Technical Expertise
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              My <span className="text-[#ff6b35]">Skills.</span>
            </h2>
          </div>

          <Skills />
        </motion.div>

      </div>
    </div>
  );
};

export default Resume;

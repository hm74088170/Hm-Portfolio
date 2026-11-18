
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX, FiLock } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#101010]/90 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ff6b35] flex items-center justify-center text-black font-bold text-lg">
            H
          </div>

          <div>
            <h2 className="font-bold text-white text-lg leading-tight">
              Himanshu Mishra
            </h2>
            <p className="text-xs text-gray-500 tracking-wider">
              FRONTEND DEVELOPER
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm text-gray-400 hover:text-[#ff6b35] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/admin"
            className="flex items-center gap-2 border border-white/15 text-gray-300 px-4 py-3 rounded-full text-sm font-semibold hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300"
          >
            <FiLock size={15} />
            Admin Login
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#ff6b35] text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300"
          >
            Let's Talk
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#151515] border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#ff6b35] text-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[#ff6b35] text-lg font-semibold border-t border-white/10 pt-5"
              >
                <FiLock />
                Admin Login
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#ff6b35] text-black px-5 py-3 rounded-full font-semibold"
              >
                Let's Talk
                <FiArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/hm74088170?igsh=YTh6YWg1aXZwbTBv",
      hover: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com/profile.php?id=100053441303961",
      hover: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/himanshumishra-559377312",
      hover: "hover:text-sky-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/hm74088170",
      hover: "hover:text-white",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                Himanshu<span className="text-[#ff6b35]">.</span>
              </h2>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-5 max-w-sm">
              Passionate developer focused on building modern,
              responsive and user-friendly web experiences.
            </p>

            <p className="text-[#ff6b35] text-sm font-medium mt-5">
              Building Digital Experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 text-sm hover:text-[#ff6b35] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Connect With Me
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Let's connect and create something meaningful together.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-[#191919] text-gray-400 text-lg transition-colors duration-300 ${social.hover}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Himanshu Mishra.
            All rights reserved.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff6b35] transition-colors"
          >
            Let's Work Together
            <FiArrowUpRight size={16} />
          </Link>

          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs text-gray-500 hover:text-[#ff6b35] transition-colors"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;


import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#151515] text-white py-28 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-4">
            Get to know me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            About <span className="text-[#ff6b35]">Me.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
              Passionate about building useful and engaging web experiences.
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I'm Himanshu Mishra, a frontend developer who enjoys
              transforming ideas into responsive and interactive web
              applications.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              I work with HTML, CSS, JavaScript, React and Tailwind CSS.
              I also have experience working with Firebase and building
              full-stack projects. I'm continuously learning and improving
              my development skills.
            </p>

            <a
              href="https://github.com/hm74088170"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#ff6b35] font-semibold hover:gap-5 transition-all"
            >
              Explore My GitHub
              <FiArrowUpRight size={20} />
            </a>
          </motion.div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#202020] border border-white/10 p-7 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-3">
                React
              </h3>
              <p className="text-gray-400 text-sm">
                Component-based UI development
              </p>
            </div>

            <div className="bg-[#202020] border border-white/10 p-7 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-3">
                JS
              </h3>
              <p className="text-gray-400 text-sm">
                Interactive application logic
              </p>
            </div>

            <div className="bg-[#202020] border border-white/10 p-7 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-3">
                UI
              </h3>
              <p className="text-gray-400 text-sm">
                Responsive web interfaces
              </p>
            </div>

            <div className="bg-[#202020] border border-white/10 p-7 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-3">
                API
              </h3>
              <p className="text-gray-400 text-sm">
                Connecting frontend with backend
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

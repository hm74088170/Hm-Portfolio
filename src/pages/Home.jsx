import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 bg-slate-50 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 px-6">

            <Link
              to="/projects"
              className="group relative h-64 md:w-1/3 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src="/1.jpg"
                alt="Projects"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-4 left-4 text-black text-4xl font-mono font-light drop-shadow">
                Projects
              </div>
            </Link>
            <Link
              to="/skills"
              className="group relative h-64 md:w-1/3 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src="/2.jpg"
                alt="Skills"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-4 left-4 text-black text-4xl font-mono font-light drop-shadow">
                Skills
              </div>
            </Link>
            <Link
              to="/contact"
              className="group relative h-64 md:w-1/3 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src="/3.jpg"
                alt="Contact"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-4 left-4 text-black text-4xl font-mono font-light drop-shadow">
                Contact
              </div>
            </Link>
          </div>

          <h1 className="mt-24 text-3xl md:text-5xl font-bold font-mono text-slate-800">
            Crafting Scalable, Interactive Web Apps
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-600 px-6">
            I'm{" "}
            <span className="text-emerald-600 font-semibold">
              Himanshu Mishra
            </span>
            , a frontend developer building fast and reliable applications
            using{" "}
            <span className="text-emerald-600">React</span>,{" "}
            <span className="text-emerald-600">Firebase</span>, and{" "}
            <span className="text-emerald-600">Tailwind CSS</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiHtml5,
  SiMongodb,
} from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  RiTailwindCssFill,
  RiFirebaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa6";

const workingSkills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: IoLogoCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Firebase", icon: RiFirebaseFill, color: "text-yellow-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
];

const exploringSkills = [
  { name: "Next.js", icon: RiNextjsFill, color: "text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -7, scale: 1.03 }}
      className="group bg-[#1c1c1c] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#ff6b35]/50 transition-colors duration-300"
    >
      <Icon className={`text-5xl ${skill.color}`} />

      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white px-6 md:px-10 py-28">

      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors mb-12"
        >
          ← Back to Home
        </Link>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-4">
            My Technical Skills
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Technologies I <span className="text-[#ff6b35]">Use.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            Technologies and tools I use to build responsive,
            interactive and modern web applications.
          </p>
        </motion.div>

        {/* Working Skills */}
        <section className="mb-20">

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Working <span className="text-[#ff6b35]">With</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Technologies I have worked with in my projects.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {workingSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>

        </section>

        {/* Exploring Skills */}
        <section>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Currently <span className="text-[#ff6b35]">Exploring</span>
            </h2>

            <p className="text-gray-500 mt-2">
              Technologies I am learning and exploring.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {exploringSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>

        </section>

      </div>
    </div>
  );
};

export default Skills;

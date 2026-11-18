import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-white px-6 md:px-10 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors mb-10"
          >
            ← Back to Home
          </Link>

          <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-4">
            My Recent Work
          </p>

          <h1 className="text-4xl md:text-7xl font-bold">
            Selected <span className="text-[#ff6b35]">Projects.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            A collection of applications and projects that showcase my
            development skills, creativity and problem-solving approach.
          </p>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-[#ff6b35] border-t-transparent rounded-full animate-spin mx-auto mb-5" />
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No projects found.</p>
        ) : (
          /* Project Grid */
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                whileHover={{ y: -8 }}
                className={`${
                  expandedProjects.includes(project.id)
                    ? "min-h-[460px] h-auto"
                    : "h-[460px]"
                } flex flex-col group bg-[#191919] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6b35]/50 transition-colors duration-300`}
              >
                {/* Project Image */}
                <div className="h-56 shrink-0 overflow-hidden bg-[#252525]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title || "Project preview"}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No preview available
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-[#ff6b35] transition-colors duration-300">
                    {project.title}
                  </h2>

                  <div className="flex-1 ">
                    <p
                      className={`text-gray-400 text-[15px] leading-7 ${
                        expandedProjects.includes(project.id)
                          ? "line-clamp-none"
                          : "line-clamp-1"
                      }`}
                    >
                      {project.description || "No description available."}
                    </p>

                    {project.description?.length > 80 && (
                      <button
                        onClick={() => {
                          setExpandedProjects((prev) =>
                            prev.includes(project.id)
                              ? prev.filter((id) => id !== project.id)
                              : [...prev, project.id],
                          );
                        }}
                        className="text-[#ff6b35] text-sm font-semibold mt-2"
                      >
                        {expandedProjects.includes(project.id)
                          ? "Read Less"
                          : "... Read More"}
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-7 pt-4 border-t border-white/10">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#ff6b35] text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-300"
                      >
                        Live Demo
                        <FiArrowUpRight size={18} />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project source code on GitHub"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full text-sm font-semibold hover:border-[#ff6b35] hover:text-[#ff6b35] hover:scale-105 transition-all duration-300"
                      >
                        <FiGithub size={18} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;

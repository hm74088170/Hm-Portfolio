import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        const data = snapshot.docs.map(doc => ({
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

  if (loading) {
    return (
      <p className="text-center text-slate-800 mt-10 font-mono">
        Loading projects...
      </p>
    );
  }

  return (
    <>
    <Link to="/" className="flex justify-center text-2xl bg-slate-50 w-full">Home</Link>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-8 min-h-screen bg-slate-50"
    >
      <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-800 text-center mb-10">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-center text-slate-700 font-mono">
          No projects found.
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white w-full max-w-sm rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-gray-200 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
    </>
  );
};

export default Projects;

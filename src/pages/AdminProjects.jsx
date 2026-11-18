
import { useState } from "react";
import { motion } from "framer-motion";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import {
  FiPlus,
  FiLogOut,
  FiImage,
  FiLink,
  FiFileText,
  FiType,
  FiArrowUpRight,
} from "react-icons/fi";

const AdminProjects = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    liveLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "projects"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setForm({
        title: "",
        description: "",
        image: "",
        liveLink: "",
      });
    } catch (err) {
      console.error("Error adding project:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  const inputClass =
    "w-full bg-[#101010] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/30 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#101010] text-white px-6 md:px-10 py-16">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-12"
        >
          <div>
            <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-3">
              Admin Dashboard
            </p>

            <h1 className="text-3xl md:text-5xl font-bold">
              Manage <span className="text-[#ff6b35]">Projects.</span>
            </h1>

            <p className="text-gray-400 mt-3 text-sm">
              Add a new project to your portfolio.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 border border-white/10 px-5 py-3 rounded-full text-gray-300 hover:text-red-400 hover:border-red-400/40 transition-colors"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#191919] border border-white/10 rounded-3xl p-6 md:p-10"
        >
          <div className="flex items-center gap-4 mb-9">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] text-xl">
              <FiPlus />
            </div>

            <div>
              <h2 className="text-xl font-bold">Add New Project</h2>
              <p className="text-gray-500 text-sm mt-1">
                Enter your project information below.
              </p>
            </div>
          </div>

          <form onSubmit={addProject} className="space-y-6">

            {/* Project Title */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <FiType className="text-[#ff6b35]" />
                Project Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter project title"
                required
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <FiFileText className="text-[#ff6b35]" />
                Project Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your project, its features and technologies..."
                rows={5}
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <FiImage className="text-[#ff6b35]" />
                Project Image URL
              </label>

              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
                className={inputClass}
              />

              {/* Image Preview */}
              {form.image && (
                <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-[#101010]">
                  <p className="text-xs text-gray-500 px-4 py-3 border-b border-white/10">
                    Image Preview
                  </p>

                  <img
                    src={form.image}
                    alt="Project preview"
                    className="w-full max-h-64 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.display = "block";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Live Link */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <FiLink className="text-[#ff6b35]" />
                Live Project Link
              </label>

              <input
                type="url"
                name="liveLink"
                value={form.liveLink}
                onChange={handleChange}
                placeholder="https://your-project.vercel.app"
                required
                className={inputClass}
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <p role="status" className="text-green-400 text-sm">
                Project added successfully!
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <div className="pt-4 border-t border-white/10">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff6b35] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Adding Project..." : "Add Project"}
                {!loading && <FiArrowUpRight size={19} />}
              </button>
            </div>

          </form>
        </motion.div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Portfolio Admin Panel · Manage your projects
        </p>

      </div>
    </div>
  );
};

export default AdminProjects;

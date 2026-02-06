import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const AdminProjects = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    liveLink: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "projects"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      alert("Project Added Successfully!");
      setForm({ title: "", description: "", image: "", liveLink: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    }
    setLoading(false);
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col items-center px-6 pt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
        Add New Project
      </h2>

      <form
        onSubmit={addProject}
        className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8 flex flex-col gap-4"
      >
        {/* Project Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Project Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project description..."
            rows="4"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Image URL
          </label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Live Link */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Live Project Link
          </label>
          <input
            name="liveLink"
            value={form.liveLink}
            onChange={handleChange}
            placeholder="https://example.com"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition flex-1 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>

          <button
            type="button"
            onClick={() => signOut(auth)}
            className="bg-slate-800 text-white py-2 rounded-xl hover:bg-slate-900 transition flex-1"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProjects;

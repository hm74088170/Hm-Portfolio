import { motion } from "framer-motion";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Link to="/" className="flex justify-center text-2xl bg-slate-50 w-full">Home</Link>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full bg-slate-50 pt-10 px-6 flex flex-wrap gap-10 justify-center"
    >
        
      <div className="w-full md:w-2/5 p-8 rounded-2xl bg-white shadow-md">
        <h2 className="text-4xl font-mono font-bold mb-4 text-slate-800">
          Let’s Build Something <br /> Great
        </h2>

        <p className="mb-6 text-slate-600">
          Have a project idea, collaboration proposal, or just want to say hello?
          I’m always open to connecting with developers and creators.
        </p>

        <div className="space-y-3 text-slate-700">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:hm74088170@gmail.com"
              className="text-emerald-600 hover:underline"
            >
              hm74088170@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/hm74088170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              github.com/hm74088170
            </a>
          </p>

          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/himanshu-mishra-559377312/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline break-all"
            >
              linkedin.com/in/himanshu-mishra-559377312
            </a>
          </p>
        </div>
      </div>


      <div className="w-full md:w-2/5 p-8 rounded-2xl bg-white shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-slate-800">
          Send me a message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition min-w-[200px] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      
    </motion.div>
    </>
  );
};

export default Contact;

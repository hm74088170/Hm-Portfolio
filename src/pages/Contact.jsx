
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "hm74088170@gmail.com",
      link: "mailto:hm74088170@gmail.com",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "github.com/hm74088170",
      link: "https://github.com/hm74088170",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/himanshu-mishra-559377312/",
    },
  ];

  const inputClass =
    "w-full bg-[#101010] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/30 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#101010] text-white px-6 md:px-10 pt-28 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors mb-12"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff6b35] uppercase tracking-[0.25em] text-sm mb-4">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Let's Talk<span className="text-[#ff6b35]">.</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            Have a project idea, collaboration proposal, or just want to say
            hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#191919] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] text-2xl mb-7">
                <FiMail />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let's Build Something Great
              </h2>

              <p className="text-gray-400 leading-7 mb-10">
                I'm always interested in discussing new opportunities,
                creative ideas and interesting projects. Feel free to
                reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactDetails.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#101010] border border-white/5 hover:border-[#ff6b35]/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] text-xl">
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-[#ff6b35] transition-colors break-all">
                      {item.value}
                    </p>
                  </div>

                  <FiArrowUpRight className="text-gray-500 group-hover:text-[#ff6b35] transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <div className="border-t border-white/10 pt-6 flex items-center gap-3 text-gray-400 text-sm">
                <FiMapPin className="text-[#ff6b35]" />
                Based in India
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#191919] border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold mb-2">
              Send Me a Message
            </h2>

            <p className="text-gray-400 text-sm mb-8">
              Fill out the form below and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <p role="status" className="text-green-400 text-sm">
                  Message sent successfully! Thank you for reaching out.
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff6b35] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FiSend size={18} />}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

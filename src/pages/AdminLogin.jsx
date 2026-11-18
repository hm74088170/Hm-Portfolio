
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLock, FiMail, FiArrowLeft } from "react-icons/fi";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/projects");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#101010] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-[120px] top-10 left-10" />
      <div className="absolute w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-[120px] bottom-10 right-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors mb-8"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="bg-[#191919] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center mx-auto mb-5">
              <FiLock className="text-[#ff6b35]" size={28} />
            </div>

            <p className="text-[#ff6b35] text-sm uppercase tracking-[0.25em] mb-3">
              Secure Access
            </p>

            <h1 className="text-3xl font-bold">
              Admin <span className="text-[#ff6b35]">Login.</span>
            </h1>

            <p className="text-gray-400 text-sm mt-3">
              Sign in to manage your portfolio projects.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="username"
                  className="w-full bg-[#101010] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#ff6b35] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <FiLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full bg-[#101010] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#ff6b35] transition-colors"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff6b35] text-black font-bold py-3 rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login to Dashboard"}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-8">
            Protected Admin Area
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

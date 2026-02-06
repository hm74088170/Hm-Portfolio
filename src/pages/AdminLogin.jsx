import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/projects");
    } catch (err) {
      alert("Invalid admin credentials");
    }
    setLoading(false);
  };

  return (
    <>
    <Link to="/" className="flex justify-center text-2xl bg-slate-50 w-full">Home</Link>
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            E-Mail
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
    </>
  );
};

export default AdminLogin;

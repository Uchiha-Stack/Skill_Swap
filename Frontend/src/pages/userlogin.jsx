import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/userSlice"; // Adjust the import path as needed
const UserLogin = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("/api/auth/login", form);
      // Destructure your API response here — adjust as needed!
      const { token, user } = res.data; // assuming user = { id, email, image }

      // Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Login successful:", user);

      // Dispatch to Redux store
      dispatch(loginUser({ 
        token, 
        id: user.id, 
        email: user.email, 
        image: user.image || null 
      }));

      alert("Login successful!");
      window.location.href = "/profile";
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f74c4c] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-[#f74c4c]">Skill Swap Platform</h1>
          <button
            onClick={() => (window.location.href = "/")}
            className="text-sm border border-[#f74c4c] text-[#f74c4c] px-4 py-1 rounded-full hover:bg-[#f74c4c] hover:text-white transition"
          >
            Home
          </button>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mb-4">User Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f74c4c]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f74c4c]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f74c4c] text-white py-2 rounded-md hover:bg-[#d83c3c] transition font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-[#f74c4c] hover:underline">
            Forgot username/password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

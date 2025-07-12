import React, { useState } from "react";
// import axios from "axios";

const UserRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registration Submitted:", form);
    // TODO: backend/localStorage logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Form Section */}
      <div className="w-full md:w-[40%] bg-white px-8 py-12 flex items-center justify-center shadow-md z-10 relative">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-[#f74c4c]">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#f74c4c] text-white py-2 rounded-md font-semibold hover:bg-red-500 transition"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-[#f74c4c] font-medium hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>

      {/* Right: Background Section */}
      <div className="hidden md:block md:w-[60%] bg-[#fef2f2] relative">
        {/* Add decoration here later (image, quote, etc.) */}
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-5xl text-[#f74c4c33] font-bold"></h1>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
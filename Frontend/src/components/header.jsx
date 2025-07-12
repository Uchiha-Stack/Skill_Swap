import React from 'react';

// Simulate login status
const isLoggedIn = true; // Change to false to test Login view

const Header = () => {
  return (
    <header className="bg-[rgba(228,77,58,1)] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-white shadow-sm">
          <img
            src="/skillswap-logo.png"
            alt="Skill Swap Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
        <h1 className="text-xl font-bold tracking-wide">Skill Swap</h1>
      </div>

      {/* Right: Conditional Render */}
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#51a5fb] px-4 py-2 rounded-full font-semibold hover:bg-[#f2f2f2] transition">
            Swap Request
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
            <img
              src="/assets/user-avatar.jpg" // Replace with actual user image path
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div>
          <button className="bg-white text-[rgba(228,77,58,1)] px-4 py-2 rounded-full font-semibold hover:bg-[#f2f2f2] transition">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

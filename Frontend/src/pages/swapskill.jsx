import React from 'react';

const Swapskill = () => {
  return (
    <div className="bg-white min-h-screen font-sans p-6">
      {/* Solid Color Header */}
      <header className="flex justify-between items-center mb-10 px-6 py-4 rounded-xl shadow-md bg-[rgba(228,77,58,1)] text-white">
        <h1 className="text-3xl font-bold tracking-wide">Skill Swap</h1>
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#51a5fb] px-4 py-2 rounded-md font-semibold hover:scale-105 transition transform duration-200 ease-in-out">
            Swap Request
          </button>
          <button className="bg-white text-[rgba(228,77,58,1)] px-4 py-2 rounded-md font-semibold hover:scale-105 transition transform duration-200 ease-in-out">
            Home
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="bg-[#f2f2f2] p-6 rounded-xl shadow-lg hover:shadow-xl transition">
        <h2 className="text-2xl font-semibold text-[rgba(228,77,58,1)] mb-4">Marc Demo</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-lg text-[#51a5fb]">Skills Offered</h3>
          <p className="mt-1 text-gray-700">🔧 Web Development, 📝 Copywriting</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg text-[#51a5fb]">Skills Wanted</h3>
          <p className="mt-1 text-gray-700">🎨 Graphic Design, 📈 Marketing</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg text-[#51a5fb]">Rating and Feedback</h3>
          <p className="mt-1 text-gray-700">⭐️⭐️⭐️⭐️ – "Very professional and fast communicator."</p>
        </div>

        <button className="bg-[rgba(228,77,58,1)] text-white px-6 py-2 rounded-md hover:bg-opacity-90 hover:scale-105 transition transform duration-200 ease-in-out">
          Request
        </button>
      </section>
    </div>
  );
};

export default Swapskill;

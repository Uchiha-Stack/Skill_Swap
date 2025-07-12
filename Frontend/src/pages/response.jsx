import React from 'react';

const Response = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans px-6 py-4">
      {/* Header */}
      <header className="bg-[rgba(228,77,58,1)] text-white px-6 py-5 rounded-xl flex justify-between items-center shadow-md mb-6">
        <h1 className="text-2xl font-bold tracking-wide">Skill Swap</h1>
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#51a5fb] px-4 py-2 rounded-full font-semibold hover:bg-[#f2f2f2] transition">
            Home
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
        </div>
      </header>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <select className="p-2 border rounded-md bg-white text-gray-700">
          <option>Pending</option>
          <option>Accepted</option>
          <option>Rejected</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded-md bg-white w-full md:w-1/2"
        />
      </div>

      {/* Request Card */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-500">
            Profile
          </div>
          <div>
            <h2 className="text-xl font-bold text-[rgba(228,77,58,1)]">Marc Demo</h2>
            <p className="text-gray-700"><strong>Skills Offered:</strong> JavaScript</p>
            <p className="text-gray-700"><strong>Skill Wanted:</strong> Python</p>
            <p className="text-gray-700">Rating: 3.9/5</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Status: <span className="font-semibold">Pending</span></span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">Accept</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">Reject</button>
          </div>
        </div>
      </div>

      {/* Rejected Request */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-500">
            Profile
          </div>
          <div>
            <h2 className="text-xl font-bold text-[rgba(228,77,58,1)]">Name</h2>
            <p className="text-gray-700"><strong>Skills Offered:</strong> –</p>
            <p className="text-gray-700"><strong>Skill Wanted:</strong> –</p>
            <p className="text-gray-700">Rating: 3.9/5</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-red-500 font-semibold">Status: Rejected</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200">&lt;</button>
        <button className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200">1</button>
        <button className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200">2</button>
        <button className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200">3</button>
        <button className="px-3 py-1 bg-white rounded shadow hover:bg-gray-200">&gt;</button>
      </div>
    </div>
  );
};

export default Response;

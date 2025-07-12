import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] font-sans px-6 py-8">
      {/* Header */}
      <header className="bg-[rgba(228,77,58,1)] text-white px-6 py-4 rounded-xl shadow-md flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold tracking-wide">Skill Swap Admin</h1>
        <button className="bg-white text-[#51a5fb] px-4 py-2 rounded-full font-semibold hover:bg-[#f2f2f2] transition">
          Logout
        </button>
      </header>

      {/* Control Panel */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Review Skill Descriptions */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[rgba(228,77,58,1)] mb-2">Review Skill Descriptions</h2>
          <p className="text-gray-700">Approve or reject reported skills that violate platform policies.</p>
          <button className="mt-4 bg-[rgba(228,77,58,1)] text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Review Reports
          </button>
        </div>

        {/* Ban Users */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[rgba(228,77,58,1)] mb-2">Manage User Violations</h2>
          <p className="text-gray-700">Ban or warn users who break community guidelines.</p>
          <button className="mt-4 bg-[rgba(228,77,58,1)] text-white px-5 py-2 rounded-full hover:scale-105 transition">
            View Violators
          </button>
        </div>

        {/* Monitor Swaps */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[#51a5fb] mb-2">Monitor Swap Status</h2>
          <p className="text-gray-700">Track all pending, accepted, and cancelled swap requests.</p>
          <button className="mt-4 bg-[#51a5fb] text-white px-5 py-2 rounded-full hover:scale-105 transition">
            View Swaps
          </button>
        </div>

        {/* Broadcast Messages */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[#51a5fb] mb-2">Platform Announcements</h2>
          <p className="text-gray-700">Send feature updates, downtime notices, or announcements.</p>
          <button className="mt-4 bg-[#51a5fb] text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Send Message
          </button>
        </div>

        {/* Download Reports */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-[rgba(228,77,58,1)] mb-2">User Activity & Reports</h2>
          <p className="text-gray-700">Export logs and data for feedback, swap history, and user stats.</p>
          <button className="mt-4 bg-[rgba(228,77,58,1)] text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Download Reports
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

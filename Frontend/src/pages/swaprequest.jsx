import React from 'react';

const Swaprequest = () => {
  return (
    <div className="bg-white p-8 min-h-screen">
        
      <h1 className="text-2xl font-bold text-[rgba(228,77,58,1)] mb-6">Send Skill Swap Request</h1>

      <form className="bg-[#f2f2f2] p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block font-semibold text-lg">Your Offered Skill</label>
          <select className="mt-2 w-full p-2 border border-gray-300 rounded">
            <option>Web Development</option>
            <option>Copywriting</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-lg">Their Wanted Skill</label>
          <select className="mt-2 w-full p-2 border border-gray-300 rounded">
            <option>Graphic Design</option>
            <option>Marketing</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-lg">Message</label>
          <textarea rows="4" className="w-full mt-2 p-2 border border-gray-300 rounded" placeholder="Write your message..."></textarea>
        </div>

        <button type="submit" className="bg-[#51a5fb] text-white px-6 py-2 rounded hover:opacity-90">Submit</button>
      </form>
    </div>
  );
};

export default Swaprequest;

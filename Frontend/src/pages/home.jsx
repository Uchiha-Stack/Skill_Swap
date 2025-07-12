import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import axios from 'axios';

export default function Home() {
  const [search, setSearch] = useState('');
  const [availability, setAvailability] = useState(''); // added for availability filter
  const [users, setUsers] = useState([]);

  const fetchUsers = async (skill = '', availability = '') => {
    try {
      // Build params dynamically
      const params = {};
      if (skill) params.skill = skill;
      if (availability) params.availability = availability;

      const res = await axios.get('api/users/public', { params });
      setUsers(res.data.users || []);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  const handleSearch = () => {
    fetchUsers(search, availability);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <header className="flex justify-between items-center bg-white shadow-md rounded-xl px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-red-600">Skill Swap Platform</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search by skill offered"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Availability dropdown */}
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Availabilities</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Evenings">Evenings</option>
            <option value="Mornings">Mornings</option>
            {/* Add more options as needed */}
          </select>

          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Search
          </button>
        </div>
      </header>

      <div className="grid gap-4">
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user._id || user.id} user={user} />)
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
}

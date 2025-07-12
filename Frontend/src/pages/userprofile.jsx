import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

// Reusable tag input component (unchanged)
const TagInput = ({ label, placeholder, tagList, setTagList }) => {
  const [input, setInput] = useState("");

  const addTag = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed && !tagList.includes(trimmed)) {
      setTagList([...tagList, trimmed]);
    }
    setInput("");
  };

  const removeTag = (indexToRemove) => {
    setTagList(tagList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tagList.map((tag, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#f74c4c] text-white rounded-full px-3 py-1 text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(idx)}
              className="ml-2 text-white hover:text-gray-200 font-bold"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={addTag}>
        <input
          type="text"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#f74c4c]"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

const UserProfile = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [availability, setAvailability] = useState("");
  const [profileVisibility, setProfileVisibility] = useState("Public");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load user profile on mount
  const email = useSelector((state) => state.user.email);
  const token = useSelector((state) => state.user.token);
  console.log("Fetching profile for:", email);
  // Fetch user profile when email (logged in) changes
  
  useEffect(() => {
    if (!email || !token) return;

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('/api/users/userProfile',email, {
          headers: {
            Authorization: `Bearer ${token}`, }});
        const data = res.data;
        setName(data.name || '');
        setLocation(data.location || '');
        setSkillsOffered(data.skillsOffered || []);
        setSkillsWanted(data.skillsWanted || []);
        setAvailability(data.availability || '');
        setProfileVisibility(data.profileVisibility || 'Public');
      } catch (err) {
        setError('Failed to load profile');
        console.error(err);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [email, token]);
  
// Save profile changes
  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(
        "api/users/profile",
        {
            email,
          name,
          location,
          skillsOffered,
          skillsWanted,
          availability,
          profileVisibility,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile saved successfully!");
    } catch (err) {
      setError("Failed to save profile");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fef2f2] px-4 py-10 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow p-4 flex justify-between items-center mb-8">
        <div className="space-x-4">
          <button
            onClick={handleSave}
            disabled={loading}
            className="text-green-600 font-semibold hover:underline disabled:opacity-50"
          >
            Save
          </button>
          <button
            onClick={() => window.location.reload()}
            disabled={loading}
            className="text-red-600 font-semibold hover:underline disabled:opacity-50"
          >
            Discard
          </button>
        </div>
        <div className="space-x-6 flex items-center">
          <button className="hover:underline font-medium">Swap request</button>
          <button className="hover:underline font-medium">Home</button>
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=user"
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full border-2 border-[#f74c4c]"
          />
        </div>
      </div>

      {/* Show error if any */}
      {error && (
        <p className="text-red-600 mb-4 font-semibold">{error}</p>
      )}

      {/* Profile Form */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form Fields */}
          <div className="md:col-span-2 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Location</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="City, Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Skills Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TagInput
                label="Skills Offered"
                placeholder="Type and press Enter..."
                tagList={skillsOffered}
                setTagList={setSkillsOffered}
              />

              <TagInput
                label="Skills Wanted"
                placeholder="Type and press Enter..."
                tagList={skillsWanted}
                setTagList={setSkillsWanted}
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Availability</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#f74c4c]"
                placeholder="e.g. weekends, evenings"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              />
            </div>

            {/* Profile Visibility */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Profile</label>
              <select
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#f74c4c]"
                value={profileVisibility}
                onChange={(e) => setProfileVisibility(e.target.value)}
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-32 h-32 rounded-full border-2 border-[#f74c4c] flex items-center justify-center bg-gray-100 text-gray-500 text-sm mb-2">
              Profile Photo
            </div>
            <div className="flex gap-4 text-sm">
              <button className="text-[#f74c4c] hover:underline">Add/Edit</button>
              <button className="text-red-500 hover:underline">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

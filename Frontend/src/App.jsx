import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/adminDashboard.jsx';
import Home from './pages/home.jsx';
import UserRegister from './pages/registerUser.jsx';
import Response from './pages/response.jsx';
import Swaprequest from './pages/swaprequest.jsx';
import Swapskill from './pages/swapskill.jsx';
import UserLogin from './pages/userlogin.jsx';
import UserProfile from './pages/userprofile.jsx';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/swapskill" element={<Swapskill />} />
      <Route path="/swaprequest" element={<Swaprequest />} />
      <Route path="/response" element={<Response />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<div>404 Not Found</div>} />

    </Routes>
  );
};

export default App;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-gray-700 mt-10 px-6 py-8 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-[rgba(228,77,58,1)] mb-2">Skill Swap</h2>
          <p className="text-sm">
            Connect. Collaborate. Grow. Share your skills and learn from others in your community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#51a5fb] mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Home</a></li>
            <li><a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Requests</a></li>
            <li><a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Messages</a></li>
            <li><a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Profile</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#51a5fb] mb-2">Stay Connected</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-5 h-5 ml-30" />
              <a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5 ml-30" />
              <a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-5 h-5 ml-30" />
              <a href="#" className="hover:text-[rgba(228,77,58,1)] transition">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-[rgba(228,77,58,1)] transition">Email: support@skillswap.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Skill Swap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

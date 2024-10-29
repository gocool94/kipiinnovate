import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaLightbulb, FaClipboardList, FaEnvelope, FaBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Logo and Site Name */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-8 mr-3" />
        <h1 className="text-2xl font-bold text-green-600">kipi.innovate</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <NavLink
          exact
          to="/"
          activeClassName="text-green-600 font-bold border-b-2 border-green-600"
          className="text-gray-700 hover:text-green-600 flex items-center"
        >
          <FaHome className="mr-2" /> Homepage
        </NavLink>
        <NavLink
          to="/browse-ideas"
          activeClassName="text-green-600 font-bold border-b-2 border-green-600"
          className="text-gray-700 hover:text-green-600 flex items-center"
        >
          <FaLightbulb className="mr-2" /> Browse Ideas
        </NavLink>
        <NavLink
          to="/my-ideas"
          activeClassName="text-green-600 font-bold border-b-2 border-green-600"
          className="text-gray-700 hover:text-green-600 flex items-center"
        >
          <FaClipboardList className="mr-2" /> My Ideas
        </NavLink>
        <NavLink
          to="/contact-us"
          activeClassName="text-green-600 font-bold border-b-2 border-green-600"
          className="text-gray-700 hover:text-green-600 flex items-center"
        >
          <FaEnvelope className="mr-2" /> Contact Us
        </NavLink>
      </nav>

      {/* Notification and User Icon */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 text-xl hover:text-green-600 cursor-pointer" />
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              G
            </div>
            <FiUser className="text-gray-600 text-xl" />
          </button>
          {/* Dropdown for user actions */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-2">
                <li>
                  <button
                    onClick={() => console.log("Logout clicked")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
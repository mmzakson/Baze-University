// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container w-2/3 mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full"
          />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">Link 1</a>
          <a href="#" className="text-white">Link 2</a>
          <a href="#" className="text-white">Link 3</a>
          <a href="#" className="text-white">Link 4</a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white"
            >
              Dropdown
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 3</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

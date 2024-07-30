import React from 'react';
import logo from '../assets/baze-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container w-4/5 mx-auto flex justify-between items-center">
      <img src={logo} alt="Baze University Logo" className="h-10 mr-3" />

      <div className="flex items-center border border-gray-300 rounded-full p-2 w-80">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        <input
            type="text"
            placeholder="Search"
            className="ml-2 border-none focus:ring-0 outline-none w-full"
        />
      </div>

        <nav className='font-normal font-medium text-xs leading-4'>
          <a href="#" className="px-3">About Baze <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Admissions <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Academics <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Research <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Resources <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Portals <FontAwesomeIcon icon={faAngleDown} /></a>
          <a href="#" className="px-3">Contact <FontAwesomeIcon icon={faAngleDown} /></a>
        </nav>

        <button className="flex flex-row items-center p-2 gap-1 w-[81px] h-[32px] left-[1239px] top-[31px] bg-[#B2B3B3] rounded-[5px] hover:bg-gray-400 transition duration-200 font-bold text-xs leading-4 text-gray-900">
        Apply Now</button>
      </div>
    </header>
  );
};

export default Header;

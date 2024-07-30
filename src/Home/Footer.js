import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import fbIcon from "../assets/fbIcon.svg";
import xIcon from "../assets/xIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";


const Footer = () => {
  return (
    <footer className="border-t-2 py-10 px-10 mt-8">
      <div className="flex justify-around items-center container">
        <p className='footer-copy'>&copy; 2024 Baze University. All Rights Reserved</p>
        <p>Privacy Policy</p>
        <p>Accessibility Policy</p>
        <p>Disclaimer</p>
        <div className="flex justify-between footer-icons">
          <span><img src={xIcon} alt="Baze University Logo" className="flex-none" /></span>
          <span><img src={fbIcon} alt="Baze University Logo" className="flex-none" /></span>
          <span><img src={linkedInIcon} alt="Baze University Logo" className="flex-none" /></span>
          <span><img src={youtubeIcon} alt="Baze University Logo" className="flex-none" /></span>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

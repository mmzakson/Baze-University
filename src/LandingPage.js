// src/LandingPage.js
import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Landing Page</h1>
        <p className="text-center mt-4">This is a simple landing page with a navbar created using React and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default LandingPage;

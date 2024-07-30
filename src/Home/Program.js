import React from 'react';

const Program = ({ name, description, applyLink }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <a href={applyLink} className="text-blue-500">Apply Now</a>
    </div>
  );
};

export default Program;

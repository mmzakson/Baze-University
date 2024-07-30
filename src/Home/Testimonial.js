import React from 'react';

const Testimonial = ({ quote, author }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <p className="italic">"{quote}"</p>
      <p className="mt-2 text-right font-bold">- {author}</p>
    </div>
  );
};

export default Testimonial;

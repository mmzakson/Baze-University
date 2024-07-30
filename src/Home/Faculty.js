import React from 'react';

const faculties = [
  {
    name: "Faculty of Engineering",
    programs: 10,
    description: "Offers innovative programs in various engineering disciplines."
  },
  {
    name: "Faculty of Management and Social Sciences",
    programs: 5,
    description: "Provides comprehensive education in business, economics, sociology, and related fields."
  },
  // Add other faculties as needed
];

const Faculty = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculties.map((faculty, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded">
              <h3 className="text-xl font-semibold">{faculty.name}</h3>
              <p>{faculty.description}</p>
              <p><strong>Programs:</strong> {faculty.programs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;

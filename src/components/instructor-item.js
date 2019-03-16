import React from 'react';
import { Link } from 'gatsby';

function InstructorItem({ instructor }) {
  return (
    <div className="w-full px-2 py-2 h-24 rounded overflow-hidden shadow-lg">
      <h2><Link to={`/instructors/${instructor.slug}`} className='text-black no-underline hover:underline'>{instructor.fullName}</Link></h2>
    </div>
  );
}

export default InstructorItem;

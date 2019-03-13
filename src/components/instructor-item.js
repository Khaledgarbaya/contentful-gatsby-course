import React from 'react';
import { Link } from 'gatsby';

function InstructorItem({ instructor }) {
  return (
    <div className="instructors__item">
      <h2><Link to={`/instructors/${instructor.slug}`}>{instructor.fullName}</Link></h2>
    </div>
  );
}

export default InstructorItem;

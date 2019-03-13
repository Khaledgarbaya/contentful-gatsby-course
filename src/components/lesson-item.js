import React from 'react';
import { Link } from 'gatsby';

function LessonItem({ lesson }) {
  return (
    <div className="lessons__item">
      <h2><Link to={`/lessons/${lesson.slug}`}>{lesson.title}</Link></h2>
    </div>
  );
}

export default LessonItem;

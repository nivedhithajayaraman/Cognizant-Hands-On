import React from 'react';

function CourseDetails() {
  const course = {
    name: "React Full Course",
    duration: "3 Months",
    instructor: "Nivedhitha J"
  };

  return (
    <div>
      <h2>Course Details</h2>
      <p>Name: {course.name}</p>
      <p>Duration: {course.duration}</p>
      <p>Instructor: {course.instructor}</p>
    </div>
  );
}

export default CourseDetails;

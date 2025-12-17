import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div 
      className="course_card"
      onClick={() => navigate(`/course/${course.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={course.image} alt={course.title} className="course_img" />
      <span className="badge">{course.category}</span>
      <span className="discount">-{course.discount}%</span>
      <h3>{course.title}</h3>
      <p>{course.author}</p>
      <div className="stats">
        ⭐ {course.rating} ({course.reviews})
      </div>
      <div className="meta">
        <span>👥 {course.students}</span>
        <span>⏱ {course.hours} ч</span>
        <span>📚 {course.lessons} уроков</span>
      </div>
      <div className="price">
        {course.price} ₸ <span className="old">{course.oldPrice} ₸</span>
      </div>
    </div>
  );
}

export default CourseCard;
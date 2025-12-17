import React, { useState, useEffect } from "react";
import CourseCard from "../Coursers/CourceCard";
import coursesData from "../data/courses.json";
import mycourses from "../data/mycourses.json"
import "../Coursers/CourseCard.css";

function MyStudy() {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {

    const savedCourses = localStorage.getItem('myCourses');
    if (savedCourses) {
      const courseIds = JSON.parse(savedCourses);
      const courses = coursesData.filter(course => courseIds.includes(course.id));
      setMyCourses(courses);
    }
  }, []);

  const removeCourse = (courseId) => {
    const savedCourses = localStorage.getItem('myCourses');
    if (savedCourses) {
      let courseIds = JSON.parse(savedCourses);
      courseIds = courseIds.filter(id => id !== courseId);
      localStorage.setItem('myCourses', JSON.stringify(courseIds));
    
      const courses = coursesData.filter(course => courseIds.includes(course.id));
      setMyCourses(courses);
    }
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', color: '#1e40af', marginBottom: '10px' }}>
        Мое обучение
      </h1>
      <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px' }}>
        Курсы, которые вы добавили для изучения
      </p>

      {myCourses.length > 0 ? (
        <div className="courses_container">
          {myCourses.map(course => (
            <div key={course.id} style={{ position: 'relative' }}>
              <CourseCard course={course} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeCourse(course.id);
                }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '80px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 15px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 'bold',

                  zIndex: 10
                }}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '80px 20px',
          background: '#f8fafc',
          borderRadius: '16px'
        }}>
          <h2 style={{ fontSize: '32px', color: '#64748b', marginBottom: '16px' }}>
            У вас пока нет курсов 😭
          </h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '24px' }}>
            Добавьте курсы, чтобы начать обучение
          </p>
          <button
            onClick={() => window.location.href = '/courses'}
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Перейти к курсам
          </button>
        </div>
      )}
    </div>
  );
}

export default MyStudy;
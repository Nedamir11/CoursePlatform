import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json";
import "../CoursePage/CoursePage.css"

function CoursePage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === Number(id));
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const savedCourses = localStorage.getItem('myCourses');
    if (savedCourses) {
      const courseIds = JSON.parse(savedCourses);
      setIsAdded(courseIds.includes(Number(id)));
    }
  }, [id]);

  const toggleCourse = () => {
  const savedCourses = localStorage.getItem('myCourses');
  let courseIds = savedCourses ? JSON.parse(savedCourses) : [];

  // 👉 mycourses (курсы для MyStudy)
  const savedMyCourses = localStorage.getItem('mycourses');
  let myCoursesList = savedMyCourses ? JSON.parse(savedMyCourses) : [];

  if (isAdded) {
    courseIds = courseIds.filter(courseId => courseId !== Number(id));
    myCoursesList = myCoursesList.filter(c => c.id !== Number(id));
    setIsAdded(false);
  } else {
    courseIds.push(Number(id));
    myCoursesList.push(course);
    setIsAdded(true);
  }

  localStorage.setItem('myCourses', JSON.stringify(courseIds));
  localStorage.setItem('mycourses', JSON.stringify(myCoursesList));
};


  if (!course) return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '48px', color: '#64748b' }}>Курс не найден 🙁</h1>
    </div>
  );

  return (
    <div className="course_page">
      <img src={course.image} alt={course.title} className="big_image" />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>{course.title}</h1>
        <button
  className={`professional-btn ${isAdded ? 'red' : ''}`}
  onClick={toggleCourse}
>
  {isAdded ? '❌ Удалить из обучения' : '➕ Добавить в мое обучение'}
</button>

      </div>

      <p><b>Автор:</b> {course.author}</p>
      <p><b>Категория:</b> {course.category}</p>
      <p><b>Уровень:</b> {course.difficulty}</p>
      <p><b>Описание:</b> {course.description}</p>

      <h3>Программа курса</h3>
      <ul>
        {course.program.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Цена: {course.price} ₸</h2>
    </div>
  );
}

export default CoursePage;
import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/courses.json";
import "/Users/damirbeknazarov/notes/src/components/CoursePage/CoursePage.css"
function CoursePage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === Number(id));

  if (!course) return <h1>Курс не найден 🙁</h1>;

  return (
    <div className="course_page">
      <img src={course.image} className="big_image" />
      <h1>{course.title}</h1>

      <p><b>Автор:</b> {course.author}</p>
      <p><b>Категория:</b> {course.category}</p>
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

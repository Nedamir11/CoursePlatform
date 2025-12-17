import React, { useEffect, useState } from "react";
import CourseCard from "../Coursers/CourceCard";
import mycoursesJson from "../data/mycourses.json";
import "../Coursers/CourseCard.css";

function MyStudy() {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("mycourses");
    const localCourses = saved ? JSON.parse(saved) : [];

    const merged = [
      ...mycoursesJson,
      ...localCourses.filter(
        lc => !mycoursesJson.some(jc => jc.id === lc.id)
      )
    ];

    setMyCourses(merged);
  }, []);

  const removeCourse = (courseId) => {
    if (courseId === 999) return;

    const updated = myCourses.filter(c => c.id !== courseId);
    setMyCourses(updated);

    const saved = localStorage.getItem("mycourses");
    if (saved) {
      const filtered = JSON.parse(saved).filter(c => c.id !== courseId);
      localStorage.setItem("mycourses", JSON.stringify(filtered));
    }
  };

  const handleCourseClick = (course) => {
    if (course.id === 999) {
      window.open(
        "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
        "_blank"
      );
    }
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", color: "#1e40af", marginBottom: "20px" }}>
        Мое обучение
      </h1>

      <div className="courses_container">
        {myCourses.map(course => (
          <div
            key={course.id}
            style={{ position: "relative" }}
            onClick={() => handleCourseClick(course)}
          >
            <CourseCard course={course} />

            {course.id !== 999 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeCourse(course.id);
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "80px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                Удалить
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyStudy;

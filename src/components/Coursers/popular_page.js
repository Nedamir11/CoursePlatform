import React, { useEffect, useState } from "react";
import coursesData from "../data/courses.json";
import { useNavigate } from "react-router-dom";

import "/Users/damirbeknazarov/notes/src/components/Coursers/CourseCard.css";

function Pop() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeDiff, setActiveDiff] = useState("Все");
  const navigate = useNavigate();
  
  const categories = ["Все", "Разработка", "Бизнес", "Дизайн", "Маркетинг", "Data Science", "Кибербезопасность"];
  const difficult = ["Все", "Начальный", "Средний", "Продвинутый"];
  
  useEffect(() => {
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);
  
  // Фильтрация при изменении категории или сложности
  useEffect(() => {
    let filtered = courses;
    
    // Фильтр по категории
    if (activeCategory !== "Все") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Фильтр по сложности
    if (activeDiff !== "Все") {
      filtered = filtered.filter(course => course.difficulty === activeDiff);
    }
    
    setFilteredCourses(filtered);
  }, [activeCategory, activeDiff, courses]);
  
  return (
    <>
      <div className="categories">
        <div className="test">
          <div className="types">
            <label>Категория</label>
            <div className="btn_types">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`types_btn_item ${activeCategory === cat ? "box" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="diff">
            <label>Уровень сложности</label>
            <div className="btn_diff">
              {difficult.map(cat => (
                <button
                  key={cat}
                  className={`types_btn_item ${activeDiff === cat ? "box" : ""}`}
                  onClick={() => setActiveDiff(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="courses_container">
        {filteredCourses.map(course => (
          <div 
            key={course.id} 
            className="course_card"
            onClick={() => navigate(`/course/${course.id}`)}
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
        ))}
      </div>
    </>
  );
}

export default Pop;
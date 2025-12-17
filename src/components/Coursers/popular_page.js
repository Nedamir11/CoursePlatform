import React, { useEffect, useState } from "react";
import coursesData from "../data/courses.json";
import CourseCard from "./CourceCard";
import "../Coursers/CourseCard.css";

function Pop({ searchQuery = "" }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeDiff, setActiveDiff] = useState("Все");
  
  const categories = ["Все", "Разработка", "Бизнес", "Дизайн", "Маркетинг", "Data Science", "Кибербезопасность"];
  const difficult = ["Все", "Начальный", "Средний", "Продвинутый"];
  
  useEffect(() => {
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);
  
  // Фильтрация при изменении категории, сложности или поиска
  useEffect(() => {
    let filtered = courses;
    
    // Фильтр по поиску
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Фильтр по категории
    if (activeCategory !== "Все") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Фильтр по сложности
    if (activeDiff !== "Все") {
      filtered = filtered.filter(course => course.difficulty === activeDiff);
    }
    
    setFilteredCourses(filtered);
  }, [activeCategory, activeDiff, courses, searchQuery]);
  
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
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
            <h2>Курсы не найдены 😢</h2>
            <p>Попробуйте изменить фильтры или поисковый запрос</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Pop;
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/Users/damirbeknazarov/notes/src/components/assets/images/logo.png";
import '/Users/damirbeknazarov/notes/src/components/styles/App.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="navbar">
        <div className="logo_items" onClick={() => navigate("/")} style={{cursor: "pointer"}}>
          <img src={logo} alt="logo" className="logo" />
          <span style={{fontSize:"25px"}}>CoursePlatform</span>  
        </div>
        <div className="navigation">
          <ul className="nav_items">
            <li className="list-nav_items hv" id="back" onClick={() => navigate("/")}>
              Главная
            </li>
            <li className="list-nav_items hv" onClick={() => navigate("/courses")}>
              Курсы
            </li>
            <li className="list-nav_items hv" onClick={() => navigate('/mystudy')}>Мое обучение</li>
          </ul>
        </div>
        <div className="search-panel">
          <input type="search" placeholder="Поиск курсов" className="search_in"></input>
        </div>
        <div className="profile">
          <button className="profile-btn hv">Профиль</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
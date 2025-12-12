import React from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Coursers/сoursers";
import Pop from "./components/Coursers/popular_page";
import CoursePage from "./components/CoursePage/CoursePage";
import './components/styles/App.css';
import mystudy from "./components/my_study/mystudy"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Pop />
          </>
        } />

        <Route path="/courses" element={<Pop />} />

        <Route path="/course/:id" element={<CoursePage />} />

        <Route path="/mystudy" element={<mystudy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

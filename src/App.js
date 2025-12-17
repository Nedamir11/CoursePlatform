import React, { useState } from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pop from "./components/Coursers/popular_page";
import CoursePage from "./components/CoursePage/CoursePage";
import MyStudy from "./components/my_study/mystudy";
import './components/styles/App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header onSearchChange={setSearchQuery} />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Pop searchQuery={searchQuery} />
          </>
        } />

        <Route path="/courses" element={<Pop searchQuery={searchQuery} />} />

        <Route path="/course/:id" element={<CoursePage />} />

        <Route path="/mystudy" element={<MyStudy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
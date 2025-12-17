import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";


function Main(){
      const navigate = useNavigate();
    return(

        <>
            <section className="main_section">
                <div className="Main-items">
                    <div className="texts">
                        <p style={{fontSize:"45px"}}>Учитесь новому каждый <br />день</p>
                        <p style={{fontSize:"20px"}}>Получите доступ к тысячам онлайн-курсов от ведущих экспертов. Развивайте свои навыки и достигайте новых карьерных высот.</p>
                        
                        <div className="buttons">
                            <button className="StartEdu" onClick={() => navigate('/courses')}>Начать обучение</button>
                            <button className="how_it_works">Как это работает?</button>
                        </div>

                        <div className="about_us">
                            <div className="ab_item">
                                <p style={{fontSize:"28px"}}>10,000+</p>
                                <p style={{fontSize:"18px"}}>Курсов</p>
                            </div>

                            <div className="ab_item">
                                <p style={{fontSize:"28px"}}>500K+</p>
                                <p style={{fontSize:"18px"}}>Студентов</p>
                            </div>

                            <div className="ab_item">
                                <p style={{fontSize:"28px"}}>1,200+</p>
                                <p style={{fontSize:"18px"}}>Экспертов</p>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <img className="mainimage" src="https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzY1MzczMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"></img>
                    </div>
                </div>
            </section>

            <section>
                <div className="popular_courses">

                    <div className="c_text">
                        <p style={{fontSize:"50px"}}>Популярные курсы</p>
                        <p style={{fontSize:"25px", color:"gray"}}>Выберите курс и начните учиться прямо сейчас!</p>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Main;
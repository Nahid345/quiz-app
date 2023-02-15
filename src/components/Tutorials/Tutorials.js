import React, { useEffect, useState } from 'react';
import Quiz from '../Quiz/Quiz';
import'./Tutorial.css'

const Tutorials = () => {

    const [quizs, setQuiz] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res =>res.json())
        .then(data => setQuiz(data.data))
    })

    return (
        <div>
             <div className="multisteps_form_panel">
            <p>Test Your Skills</p>
            <div className="step_content d-flex justify-content-start pt-5 pb-2">
            
            <h1>QUIZ</h1>
            </div>
            <div className='quiz-container'>
                {
                    quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
            
            
        </div>
        
        </div>
    );
};

export default Tutorials;
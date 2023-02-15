import React from 'react';
import { Link } from 'react-router-dom';
import'./Quiz.css'

const Quiz = ({quiz}) => {
    const{name,logo,id} =quiz;
    return (
        <div className='col-sm-12'>
        <div className="content rounded shadow">
            <div class="container overflow-hidden text-center">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-6 py-5">
                        <img src={logo} alt="not-found" className='img-fluid bg-img'/>
                        <h4 className="step_box_desc my-2">
                        {name}
                        </h4>
                        <div className=''>
                        <Link to={`quiz/${id}`}>
                        <button type="button" className="rounded  text-uppercase shadow border-0 startButton">Start</button>
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Quiz;
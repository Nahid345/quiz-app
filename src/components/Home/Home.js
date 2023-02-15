import React from 'react';
import img1 from '../../banar.jpg'
import Tutorials from '../Tutorials/Tutorials';
import'./Home.css'

const Home = () => {
    return (
        
           <div className="wrapper position-relative overflow-hidden">
            <div className="container-md-fluid p-3 p-lg-0 me-5">
                <div className="row">
                    <div className="col-xl-4">
                    <div className="steps_area step_area_fixed d-none d-xl-block">
                        <div className="image_holder">
                            <img className="overflow-hidden" src={img1} alt="not-found"/>
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-7 ps-5 pt-5">
                        <Tutorials></Tutorials>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; 
import './Hero.css';
// import  './QuizPage'

const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <div className="hero" ref={ref}>
            <div className="hero-left">
                <h1 className={`hero-text ${inView ? 'animate' : ''}`}>
                    Get <span className="highlight">PMP Certified</span> <br /> 
                    & Manage <span className="highlight">Projects</span><br />
                    Better
                </h1>
                
                <button className="hero-button">Book a Demo</button>
                
                
                <p className="hero-quiz-text">
                    Don't know where to start? Take our quiz!
                </p>
                
                <Link to="/quiz" className="quiz-button">
                    Take a Quiz.  
                </Link>
            </div>
            <div className="hero-right">
            </div>
        </div>
    );
};

export default Hero;

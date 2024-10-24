// Hero.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

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
                {/* Button below the text */}
                <button className="hero-button">Book a Demo</button>
            </div>
            <div className="hero-right">
                {/* You can place additional content here, like images or illustrations */}
            </div>
        </div>
    );
};

export default Hero;

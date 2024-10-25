import React, { useState } from 'react';
import './AboutTrainer.css'; // Ensure this file is created

const AboutTrainer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            title: "Training",
            content: "Amit has conducted over 50 training sessions, focusing on practical project management skills that prepare participants for the PMP® exam."
        },
        {
            title: "Education",
            content: "Amit holds an MBA from XYZ University and is a certified Project Management Professional (PMP®) with specialized training in agile methodologies."
        },
        {
            title: "Experience",
            content: "With over 10 years of experience in project management across various industries, Amit has led numerous successful projects, ensuring timely and on-budget delivery."
        },
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
    };

    return (
        <div className="about-trainer-section">
            <div className="trainer-image-container">
                <img src="https://static.wixstatic.com/media/fb0d7e_821b2a72624749f99fed9c759caff658~mv2.png/v1/fill/w_423,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Website%20Photo.png" alt="Amit, PMP Trainer" className="trainer-image" />
            </div>
            <div className="trainer-info">
                <h2 className="trainer-title">About PMP® Trainer</h2>
                <p className="trainer-description">
                    Amit is a PMI Authorised instructor for PMP® who has helped more than 500 participants from 45 countries in the last 3 years.<br></br> A friendly, considerate trainer who believes in helping you achieve your certification and developing the skills to manage projects better.
                </p>
                <div className="carousel-controls">
                    <button className="carousel-button" onClick={handlePrev}>Prev</button>
                    <button className="carousel-button" onClick={handleNext}>Next</button>
                </div>
                <div className="sub-section fade-in">
                    <h3 className="sub-section-title">{sections[activeIndex].title}</h3>
                    <p className="sub-section-content">{sections[activeIndex].content}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutTrainer;

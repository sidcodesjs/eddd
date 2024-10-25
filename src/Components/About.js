import React from 'react';
import './About.css'; // Ensure to create this CSS file for styling

const About = () => {
    const cardData = [
        {
            title: "8 Weeks Program",
            subject: "4 weeks of regular training and 4 weeks of revision through group discussions and mock exams that prepares you to take the exam with confidence.",
            icon: "📅", // You can replace this with an image or SVG icon
        },
        {
            title: "65 hrs. Training",
            subject: "35 hrs. of instructor-led online training on weekends and 30 hrs. of recorded videos to strengthen conceptual knowledge and build a Project Manager's mindset.",
            icon: "👨‍🏫",
        },
        {
            title: "1,500+ Questions",
            subject: "Exam-like questions provided to you through 7 mini mock exams and 5 full-length mock exams (180 questions each) with many regular practice quizzes for every topic.",
            icon: "📝",
        },
        {
            title: "Expert Mentorship",
            subject: "Get guidance from experienced mentors who will help you navigate through the complexities of project management.",
            icon: "👔",
        },
    ];

    return (
        <section className="about-section">
            <h2 className="about-title">About the Program</h2>
            <div className="cards-container">
                {cardData.map((card, index) => (
                    <div key={index} className="card animate">
                        <div className="card-icon">{card.icon}</div>
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-subject">{card.subject}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;

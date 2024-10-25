import React, { useState } from 'react';
import './FAQ.css'; // Make sure to create a CSS file for styling

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the purpose of this platform?",
            answer: "This platform is designed to help users learn and excel in their respective fields with comprehensive courses and resources.",
        },
        {
            question: "How do I enroll in a course?",
            answer: "You can enroll in a course by visiting the course page and clicking the 'Enroll Now' button. Follow the prompts to complete your enrollment.",
        },
        {
            question: "Are there any prerequisites for the courses?",
            answer: "Some courses may have prerequisites, which will be listed in the course description. Please check before enrolling.",
        },
        {
            question: "Can I access the courses on mobile devices?",
            answer: "Yes, our platform is mobile-friendly, allowing you to access courses from any device with an internet connection.",
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept various payment methods, including credit cards, debit cards, and PayPal. Please check our payment page for more details.",
        },
        {
            question: "Is there a refund policy?",
            answer: "Yes, we have a 30-day refund policy for all courses. If you're not satisfied, you can request a refund within 30 days of purchase.",
        },
        {
            question: "How do I contact support?",
            answer: "You can contact our support team via the contact form on our website or through the email provided in the footer.",
        },
        {
            question: "Will I receive a certificate upon completion?",
            answer: "Yes, upon successful completion of a course, you will receive a certificate that you can share on your LinkedIn profile.",
        },
        {
            question: "Are there live sessions included in the courses?",
            answer: "Some courses may include live sessions, which will be indicated in the course details. Be sure to check for live session schedules.",
        },
        {
            question: "Can I change my course after enrollment?",
            answer: "Yes, you can switch courses within a certain timeframe after enrollment. Please contact support for assistance with this process.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3>{faq.question}</h3>
                            <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>▼</span>
                        </div>
                        <div
                            className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

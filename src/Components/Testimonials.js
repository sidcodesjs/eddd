import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        name: "John Doe",
        testimonial: "The PMP® training was phenomenal! Amit made complex concepts easy to understand.",
        location: "USA",
        image: "https://via.placeholder.com/100" // Placeholder image URL
    },
    {
        name: "Sara Smith",
        testimonial: "Thanks to Amit, I passed my PMP® exam on the first try! Highly recommended.",
        location: "Canada",
        image: "https://via.placeholder.com/100" // Placeholder image URL
    },
    {
        name: "Raj Patel",
        testimonial: "A fantastic learning experience! Amit's insights were invaluable for my project management skills.",
        location: "India",
        image: "https://via.placeholder.com/100" // Placeholder image URL
    },
    {
        name: "Emily Johnson",
        testimonial: "Amit's engaging teaching style made the classes enjoyable and effective.",
        location: "UK",
        image: "https://via.placeholder.com/100" // Placeholder image URL
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <h2 className="testimonials-title">What Our Participants Say</h2>
            <div className="carousel-container">
                <div className="carousel-content">
                    {testimonialsData.map((item, index) => (
                        <div className="testimonial-card" key={index}>
                            <img src={item.image} alt={item.name} className="testimonial-image" />
                            <p className="testimonial-quote">"{item.testimonial}"</p>
                            <p className="testimonial-author">{item.name}, <span className="testimonial-location">{item.location}</span></p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-controls">
                <button className="carousel-button prev" onClick={() => handlePrevClick()}>❮</button>
                <button className="carousel-button next" onClick={() => handleNextClick()}>❯</button>
            </div>
        </div>
    );
};

let currentIndex = 0;

const handleNextClick = () => {
    const totalTestimonials = testimonialsData.length;
    currentIndex = (currentIndex + 1) % totalTestimonials;
    const carouselContent = document.querySelector('.carousel-content');
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const handlePrevClick = () => {
    const totalTestimonials = testimonialsData.length;
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    const carouselContent = document.querySelector('.carousel-content');
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
};

export default Testimonials;

// Footer.js
import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Stay Connected</h2>
                <p className="footer-description">
                    Subscribe to our newsletter for the latest updates and offers.
                </p>
                <form className="footer-form">
                    <input type="email" placeholder="Enter your email" required className="footer-input" />
                    <button type="submit" className="footer-button">Subscribe</button>
                </form>
                <div className="footer-links">
                    <a href="#about" className="footer-link">About Us</a>
                    <a href="#services" className="footer-link">Services</a>
                    <a href="#faq" className="footer-link">FAQ</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Edzest Education Services. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { auth, signInWithPopup, provider } from '../firebase'; // Import Firebase functions
const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed in as:', user.displayName); // You can also set user info in state or context
    } catch (error) {
      console.error('Sign-in error:', error.message);
    }
  };
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">edZest</h1>
      <ul className={isMobile ? "nav-links-mobile show" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="/recorded-videos">Recorded Videos</a></li>
        <li><a href="/mock-exams">Mock Exams</a></li>
        <li><a href="#" onClick ={handleSignIn}>Sign In</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;

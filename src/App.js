// App.js
import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero'; 
import About from './Components/About'; 
import Events from './Components/UpcomingEvents'; 
import TrainingOptions from './Components/TrainingOptions';
import AboutTrainer from './Components/AboutTrainer';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
// import SignInButton from './Components/SignInButton'; // Import the SignInButton

import RecordedVideos from './Components/RecordedVideos'; // Import the RecordedVideos component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={
          <>
            <Navbar />
            {/* <SignInButton /> */}
            <Hero />
            <About />
            <Events />
            <TrainingOptions />
            <AboutTrainer />
            <Testimonials />
            <FAQ />
            <ContactUs />
            <Footer />
          </>
        } />

        {/* Route for the Recorded Videos page */}
        <Route path="/recorded-videos" element={<RecordedVideos />} />
      </Routes>
    </Router>
  );
}

export default App;


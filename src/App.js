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
import RecordedVideos from './Components/RecordedVideos'; 
import QuizPage from './Components/QuizPage'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page with all components */}
        <Route path="/" element={
          <>
            <Navbar />
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
        
        
        <Route path="/quiz" element={<QuizPage />} />
        
       
        <Route path="/recorded-videos" element={<RecordedVideos />} />
      </Routes>
    </Router>
  );
}

export default App;

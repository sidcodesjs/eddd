import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import MockExams from './Components/MockExams';
import CoursePayment from './Components/CoursePayment'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/mock-exams" element={<MockExams />} />
        <Route path="/course-payment" element={<CoursePayment />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;

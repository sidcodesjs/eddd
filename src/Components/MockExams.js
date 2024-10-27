import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MockExams.css';

const MockExam = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  // Mock exam data
  const mockExams = [
    {
      id: 1,
      title: 'PMP Mock Exam 1',
      imgSrc: 'https://i.ibb.co/SdTw6Kb/1706770738229-PMP-mock-exams-by-edzest-lyst5405.png',
    },
    {
      id: 2,
      title: 'PMP Mock Exam 2',
      imgSrc: 'https://i.ibb.co/myKqqWs/1695130276552-Learnyst.png',
    },
    {
      id: 3,
      title: 'Building a Team Mock Exam',
      imgSrc: 'https://i.ibb.co/B20QJ9B/1683520921513-Building-a-team.png',
    },
    {
      id: 4,
      title: 'Learning Management Mock Exam 1',
      imgSrc: 'https://i.ibb.co/0n7h19Z/1684382882156-Learnyst-1.png',
    },
    {
      id: 5,
      title: 'Learning Management Mock Exam 2',
      imgSrc: 'https://i.ibb.co/5LmQTpB/1684721541469-Learnyst-2.png',
    },
  ];

  const handleNavigateToPayment = (exam) => {
    navigate('/course-payment', { state: { exam } }); // Pass the exam data to CoursePayment page
  };

  const filteredExams = mockExams.filter(exam =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mockexam-container">
      <h1>Mock Exam</h1>
      

      
      <section className="description-section">
        <h2>About the Mock Exams</h2>
        <p>Prepare for your PMP exam with our carefully designed mock exams. Each mock is crafted to simulate the eal exam experience.</p>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <input
          type="text"
          placeholder="Search mock exams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
          <option value="All">All</option>
          <option value="PMP">PMP</option>
          <option value="Team Building">Team Building</option>
          <option value="Management">Management</option>
        </select>
      </section>

      {/* Mock Exam Video List */}
      <section className="video-list">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="video-card">
            <img src={exam.imgSrc} alt={exam.title} className="video-thumbnail" />
            <h3>{exam.title}</h3>
            <button onClick={() => handleNavigateToPayment(exam)} className="pay-button">
              Buy Access for ₹500
            </button>
          </div>
        ))}
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>User Reviews</h2>
        <div className="review-card">
          <p>"These mock exams were extremely helpful for my exam prep. Highly recommended!"</p>
          <p>- Alex</p>
        </div>
        <div className="review-card">
          <p>"Best preparation experience. The exams mimic the actual test perfectly!"</p>
          <p>- Jordan</p>
        </div>
      </section>
    </div>
  );
};

export default MockExam;

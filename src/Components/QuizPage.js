import { useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import './QuizPage.css';

const quizQuestions = [
    {
        question: "Which of the following is not a Project Management Process Group?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Testing"
        ],
        answer: "Testing"
    },
    {
        question: "What is the primary role of the Project Manager?",
        options: [
            "To deliver the project on time and on budget",
            "To manage stakeholder expectations",
            "To manage the project team",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which document authorizes the start of a project?",
        options: [
            "Project Charter",
            "Project Plan",
            "Risk Register",
            "Scope Statement"
        ],
        answer: "Project Charter"
    },
    {
        question: "Which of the following is a project constraint?",
        options: [
            "Time",
            "Cost",
            "Scope",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which technique is used to identify the root cause of issues in a project?",
        options: [
            "Risk Analysis",
            "Root Cause Analysis",
            "Performance Reporting",
            "Stakeholder Analysis"
        ],
        answer: "Root Cause Analysis"
    },
    {
        question: "Which process group focuses on completing the project work?",
        options: [
            "Executing",
            "Monitoring and Controlling",
            "Closing",
            "Initiating"
        ],
        answer: "Executing"
    },
    {
        question: "What is the critical path method (CPM) used for?",
        options: [
            "Calculating project risks",
            "Determining the longest path in the project schedule",
            "Resource allocation",
            "Stakeholder engagement"
        ],
        answer: "Determining the longest path in the project schedule"
    },
    {
        question: "Which of the following is a risk management strategy?",
        options: [
            "Mitigation",
            "Exclusion",
            "Revision",
            "Stakeholder Engagement"
        ],
        answer: "Mitigation"
    },
    {
        question: "Which process is responsible for measuring and monitoring project progress?",
        options: [
            "Planning",
            "Executing",
            "Monitoring and Controlling",
            "Initiating"
        ],
        answer: "Monitoring and Controlling"
    },
    {
        question: "Which of the following describes the triple constraint in project management?",
        options: [
            "Risk, Time, Quality",
            "Scope, Time, Cost",
            "Time, Budget, Resources",
            "Stakeholders, Risk, Cost"
        ],
        answer: "Scope, Time, Cost"
    }
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index) => {
    if (quizQuestions[currentQuestion].options[index] === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  const getRecommendation = () => {
    if (score >= 8) return 'PMP';
    if (score >= 5) return 'Agile';
    return 'Basic Project Management Concepts';
  };

  return (
    <div className="quiz-page">
      <h1>Know where you stand</h1> 
      <div className="quiz-container">
        {quizCompleted ? (
          <>
            <h1>Congratulations! You've completed the quiz.</h1>
            <h2>Your score: {score} / {quizQuestions.length}</h2>
            <h3>Based on your score, we recommend starting with: <strong>{getRecommendation()}</strong></h3>
            <Link to="/recorded-videos" className="watch-videos-link">Watch our recorded videos</Link>
            <Confetti />
          </>
        ) : (
          <>
            <h2>{quizQuestions[currentQuestion].question}</h2>
            <div className="options-container">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)} className="option-button">
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizPage;

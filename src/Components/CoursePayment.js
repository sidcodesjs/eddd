import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CoursePayment.css'; 

const CoursePayment = () => {
  const location = useLocation();
  const { exam } = location.state; // Get the exam data passed from MockExam
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_3PFXPjHqus22aW", // Your Razorpay key
      amount: "50000", // Amount in paise
      currency: "INR",
      name: "Mock Exam Payment",
      description: `Payment for ${exam.title}`, // Dynamic description
      image: "/your-logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact
      },
      theme: {
        color: "#4748ac"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handlePayment(); 
  };

  return (
    <div className="course-payment-container">
      <div className="course-details">
        <h2>{exam.title}</h2>
        <img src={exam.imgSrc} alt={exam.title} className="course-image" />
        <p>This bundle consists of all the mock exams and mini mock exams from 
            edzest prep. Mini mock exams consists of 60 questions each and full length mock exam
            consists of 120 questions each.All the questions are explained in details to help you understand why one option
            is better than others. Along with exam tips to help you learn how to answer the similar question in future.</p>
      </div>
      <div className="payment-form">
        <h2>Pay Securely 🔒 </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <button type="submit" className="pay-button">
            Pay ₹500
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoursePayment;

import React from 'react';
import './TrainingOptions.css';

const TrainingOptions = () => {
    return (
        <div className="training-options-section">
              <div className="background-shape">
              <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
              </div>
            <h2 className="training-options-title">Training Options</h2>
            <p>
                You can join us for a 35-hrs. live online training (Sat & Sun, 5 PM to 9:30 PM IST(GMT +5:30)
                by PMI authorised instructor to gain the knowledge & skills to pass the exam in the first attempt.
                Or choose the option to revise and strengthen your knowledge and skillsets for the PMP® exam.
            </p>

            <div className="options-container">
                <div className="option-card">
                    <h3 className="option-title">PMP® Training</h3>
                    <p className="option-description">
                        For those who are starting the preparation
                    </p>
                    <p className="option-description"><strong>35 hrs. of training</strong></p>
                    <p className="option-description"><strong>65+ hrs. of recorded videos</strong></p>
                    <p className="option-description"><strong>35 contact hours (PDUs)</strong></p>
                    <p className="option-description"><strong>Concept building exercises</strong></p>
                    <p className="option-description"><strong>Weekly Mini mocks</strong></p>
                    <p className="option-description"><strong>5 full-length mock exams</strong></p>
                    <p className="option-description"><strong>500 terms Flash cards</strong></p>
                    <p className="option-description"><strong>Application support</strong></p>
                    <p className="option-description"><strong>1:1 coaching calls</strong></p>
                    <button className="learn-more-button">Learn More</button>
                </div>

                <div className="option-card">
                    <h3 className="option-title">PMP® Revision</h3>
                    <p className="option-description">
                        For those who are about to take the exam
                    </p>
                    <p className="option-description"><strong>18 hrs. of videos</strong></p>
                    <p className="option-description"><strong>Exam prep Textbook</strong></p>
                    <p className="option-description"><strong>5 full-length mock exams</strong></p>
                    <p className="option-description"><strong>Concept building exercises</strong></p>
                    <p className="option-description"><strong>Question bank</strong></p>
                    <p className="option-description"><strong>500 terms Flash cards</strong></p>
                    <p className="option-description"><strong>Application support</strong></p>
                    <button className="learn-more-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default TrainingOptions;

// ProjectManagementWheel.js
import React, { useState } from 'react';
import './ProjectManagementWheel.css';

const segments = [
    { title: 'Agile', description: 'An iterative approach to project management.' },
    { title: 'Waterfall', description: 'A linear and sequential approach to project management.' },
    { title: 'Scrum', description: 'An agile framework for managing complex projects.' },
    { title: 'Kanban', description: 'A visual approach to managing work as it moves through a process.' },
    { title: 'Lean', description: 'Focuses on minimizing waste within manufacturing systems.' },
    { title: 'Six Sigma', description: 'A set of techniques and tools for process improvement.' },
    { title: 'PMBOK', description: 'Project Management Body of Knowledge framework.' },
    { title: 'Prince2', description: 'A structured project management method and practitioner certification.' },
];

const ProjectManagementWheel = () => {
    const [currentSegment, setCurrentSegment] = useState(segments[0]);

    const spinWheel = () => {
        const randomIndex = Math.floor(Math.random() * segments.length);
        setCurrentSegment(segments[randomIndex]);
    };

    return (
        <div className="wheel-container">
            <div className="wheel" onClick={spinWheel}>
                {/* Wheel structure can be enhanced with images and styles */}
                <div className="wheel-segment">
                    <h2>{currentSegment.title}</h2>
                </div>
            </div>
            <div className="description">
                <p>{currentSegment.description}</p>
            </div>
            <button className="spin-button" onClick={spinWheel}>
                Spin the Wheel
            </button>
        </div>
    );
};

export default ProjectManagementWheel;

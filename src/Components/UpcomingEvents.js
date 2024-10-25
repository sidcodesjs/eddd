import React from 'react';
import './UpcomingEvents.css'; // Import the CSS file

const UpcomingEvents = () => {
    const events = [
        {
            title: 'Project Management Workshop',
            date: 'November 15, 2024',
            description: 'Join us for an intensive workshop to enhance your project management skills.',
            image: 'https://via.placeholder.com/300x200?text=Event+3', // Placeholder image
        },
        {
            title: 'Agile Methodology Seminar',
            date: 'November 22, 2024',
            description: 'Learn about Agile practices from industry experts.',
            image: 'https://via.placeholder.com/300x200?text=Event+3', // Placeholder image
        },
        {
            title: 'Networking Event',
            date: 'November 30, 2024',
            description: 'Connect with fellow professionals and expand your network.',
            image: 'https://via.placeholder.com/300x200?text=Event+3', // Placeholder image
        },
    ];

    return (
        <div className="upcoming-events-section">
            <h2 className="upcoming-events-title">Upcoming Events</h2>
            <div className="events-container">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <img src={event.image} alt={event.title} className="event-image" />
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                        <p className="event-description">{event.description}</p>
                        <button className="notify-button">Notify Me</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;

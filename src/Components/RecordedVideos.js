// RecordedVideos.js
import React, { useState } from 'react';
import './RecordedVideos.css';

const RecordedVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videos = [
    {
      id: 1,
      title: "PMP Fundamentals",
      description: "Learn the basics of project management.",
      date: "2023-09-01",
      price: "$29.99",
      category: "Fundamentals",
      videoUrl: "https://example.com/video1.mp4",
      imgSrc: "https://picsum.photos/350/200?random=1", // Dummy image URL
    },
    {
      id: 2,
      title: "Agile Project Management",
      description: "Master Agile methodologies for project management.",
      date: "2023-10-01",
      price: "$34.99",
      category: "Agile",
      videoUrl: "https://example.com/video2.mp4",
      imgSrc: "https://picsum.photos/350/200?random=2", // Dummy image URL
    },
    {
      id: 3,
      title: "Waterfall vs Agile",
      description: "A comparative guide on Waterfall and Agile.",
      date: "2023-08-15",
      price: "$39.99",
      category: "Agile",
      videoUrl: "https://example.com/video3.mp4",
      imgSrc: "https://picsum.photos/350/200?random=3", // Dummy image URL
    },
    {
      id: 4,
      title: "Advanced PMP Techniques",
      description: "Advanced project management skills.",
      date: "2023-07-25",
      price: "$49.99",
      category: "Advanced",
      videoUrl: "https://example.com/video4.mp4",
      imgSrc: "https://picsum.photos/350/200?random=4", // Dummy image URL
    },
    {
      id: 5,
      title: "Project Lifecycle Management",
      description: "Understand the full lifecycle of project management.",
      date: "2023-06-30",
      price: "$27.99",
      category: "Lifecycle",
      videoUrl: "https://example.com/video5.mp4",
      imgSrc: "https://picsum.photos/350/200?random=5", // Dummy image URL
    },
    // You can add more dummy videos here
  ];

  const filteredVideos = videos.filter(video =>
    (selectedCategory === 'All' || video.category === selectedCategory) &&
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const continueWatching = videos[0]; // Dummy video for continue watching
  const youMayLike = filteredVideos.filter(video => video.id !== continueWatching.id);

  return (
    <div className="recorded-videos-container">
      <h1 className="recorded-videos-title">Recorded Sessions</h1>

      {/* Search Bar */}
      <div className="search-bar1">
        <input
          type="text"
          placeholder="Search for a video..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Fundamentals">Fundamentals</option>
          <option value="Agile">Agile</option>
          <option value="Advanced">Advanced</option>
          <option value="Lifecycle">Lifecycle</option>
        </select>
      </div>

      {/* Continue Watching */}
      <section className="continue-watching">
        <h2>Continue Watching</h2>
        <div className="video-card">
          <img src={continueWatching.imgSrc} alt={continueWatching.title} className="video-image" />
          <h2 className="video-title">{continueWatching.title}</h2>
          <p className="video-description">{continueWatching.description}</p>
          <p className="video-date">Date: {continueWatching.date}</p>
          <p className="video-price">Price: {continueWatching.price}</p>
          <a href={continueWatching.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button">
            Continue Watching
          </a>
        </div>
      </section>

      {/* You May Like */}
      <section className="you-may-like">
        <h2>You May Like</h2>
        <div className="videos-grid">
          {youMayLike.map(video => (
            <div key={video.id} className="video-card">
              <img src={video.imgSrc} alt={video.title} className="video-image" />
              <h2 className="video-title">{video.title}</h2>
              <p className="video-description">{video.description}</p>
              <p className="video-date">Date: {video.date}</p>
              <p className="video-price">Price: {video.price}</p>
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button">
                Watch Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecordedVideos;

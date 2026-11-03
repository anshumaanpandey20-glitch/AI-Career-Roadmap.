import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Guide() {
  return (
    <div className="app guide-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          Learner Roadmap AI
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/start">Get Started</Link>
        </div>
      </nav>

      <section className="guide-hero">
        <h1>Don't Know Where to Start?</h1>
        <p>
          Your learning journey starts here. Follow these simple steps
          to build skills and achieve your career goals.
        </p>
        <Link to="/courses" className="primary-button">
          Explore Courses
        </Link>
      </section>

      <section className="guide-content">
        <h2>5 Steps to Start Learning</h2>

        <div className="guide-grid">
          <div className="guide-card">
            <span>01</span>
            <h3>Discover Your Interest</h3>
            <p>Explore technology, design, business, and other fields.</p>
          </div>

          <div className="guide-card">
            <span>02</span>
            <h3>Choose a Course</h3>
            <p>Select a beginner-friendly course based on your interests.</p>
          </div>

          <div className="guide-card">
            <span>03</span>
            <h3>Learn the Basics</h3>
            <p>Start with free resources and learn at your own pace.</p>
          </div>

          <div className="guide-card">
            <span>04</span>
            <h3>Practice Every Day</h3>
            <p>Spend 30–60 minutes learning and practicing new skills.</p>
          </div>

          <div className="guide-card">
            <span>05</span>
            <h3>Build Your First Project</h3>
            <p>Apply your knowledge by creating a real project.</p>
          </div>
        </div>
      </section>

      <section className="guide-tip">
        <h2>Remember</h2>
        <p>You don't need a college degree to start learning new skills.</p>
        <p>Start small, stay consistent, and keep improving.</p>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getLearningHistory,
  clearLearningHistory,
} from "../utils/history";
import "../App.css";

export default function History() {
  const navigate = useNavigate();
  const [user] = useState(() =>
    JSON.parse(localStorage.getItem("learnerRoadmapUser") || "null")
  );
  const [history, setHistory] = useState(getLearningHistory);

  function handleLogout() {
    localStorage.removeItem("learnerRoadmapUser");
    navigate("/login");
  }

  function handleClearHistory() {
    clearLearningHistory();
    setHistory([]);
  }

  if (!user) {
    return (
      <div className="app history-page history-login-prompt">
        <h2>Please login to view your learning history.</h2>
        <Link to="/login" className="primary-button">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="app history-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          LearnerRoadmap AI
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/recommendations">Recommendations</Link>
        </div>
      </nav>

      <section className="history-header">
        <h1>Welcome, {user.name}!</h1>
        <p>Here is your recent learning activity.</p>

        <div className="history-actions">
          <Link to="/courses" className="primary-button">
            Explore Courses
          </Link>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>

      <section className="history-content">
        <div className="history-title-row">
          <h2>Your Learning History</h2>

          {history.length > 0 && (
            <button
              className="clear-history-button"
              onClick={handleClearHistory}
            >
              Clear History
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="history-empty">
            <h3>No learning history yet</h3>
            <p>Visit a course to start building your learning history.</p>
            <Link to="/courses" className="primary-button">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="history-list">
            {history.map((item, index) => (
              <div className="history-item" key={`${item.id}-${index}`}>
                <div>
                  <span className="history-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>
                    Visited: {new Date(item.visitedAt).toLocaleString()}
                  </p>
                </div>

                <Link
                  to={`/course/${item.id}`}
                  className="primary-button course-button"
                >
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

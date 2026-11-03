import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import "../App.css";

export default function Courses() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          Learner<span>Roadmap</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/start">Get Started</Link>
        </div>
      </nav>

      <section className="courses-hero">
        <span className="eyebrow">YOUR LEARNING JOURNEY</span>

        <h1>Explore Courses</h1>

        <p>
          Discover new skills, follow structured learning roadmaps,
          and build your future one step at a time.
        </p>
      </section>

      <section className="courses-section">
        <div className="courses-heading">
          <div>
            <h2>Popular Learning Paths</h2>
            <p>Choose a course that matches your interests.</p>
          </div>

          <span className="course-count">
            {courses.length} Courses
          </span>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-icon">{course.icon}</div>

              <div className="course-meta">
                <span>{course.category}</span>
                <span>{course.level}</span>
              </div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-details">
                <span>🕒 {course.duration}</span>
                <span>📚 {course.roadmap.length} learning stages</span>
              </div>

              <div className="course-skills">
                {course.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <Link
                to={`/course/${course.id}`}
                className="primary-button course-button"
              >
                Explore Roadmap →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Learner Roadmap</span>
        <span>Learn at your own pace. Build your future.</span>
      </footer>
    </div>
  );
}

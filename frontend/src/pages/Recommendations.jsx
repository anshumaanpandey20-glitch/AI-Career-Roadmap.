import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import "../css/recommendations.css";

export default function Recommendations() {
  const [interest, setInterest] = useState("Technology");
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("Get a job");
  const [results, setResults] = useState(null);

  function getRecommendations() {
    let recommended = courses.filter((course) => {
      const category = course.category.toLowerCase();
      const title = course.title.toLowerCase();

      if (interest === "Technology") {
        return (
          category.includes("technology") ||
          title.includes("web") ||
          title.includes("python") ||
          title.includes("data") ||
          title.includes("artificial") ||
          title.includes("cyber")
        );
      }

      if (interest === "Design") {
        return title.includes("design");
      }

      if (interest === "Business") {
        return (
          title.includes("marketing") ||
          title.includes("excel") ||
          title.includes("analytics")
        );
      }

      if (interest === "Creative") {
        return (
          title.includes("design") ||
          title.includes("marketing")
        );
      }

      return true;
    });

    if (level === "Beginner") {
      recommended = recommended.filter((course) =>
        course.level.toLowerCase().includes("beginner")
      );
    } else if (level === "Intermediate") {
      recommended = recommended.filter((course) =>
        course.level.toLowerCase().includes("intermediate")
      );
    } else if (level === "Advanced") {
      recommended = recommended.filter((course) =>
        course.level.toLowerCase().includes("advanced")
      );
    }

    setResults(recommended);
  }

  return (
    <div className="app recommendation-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          Learner Roadmap AI
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/guide">Beginner Guide</Link>
        </div>
      </nav>

      <section className="recommendation-hero">
        <h1>Find Your Career Path</h1>
        <p>
          Answer a few questions to discover courses that match your
          interests.
        </p>
      </section>

      <section className="recommendation-form">
        <h2>Personalized Course Finder</h2>

        <label htmlFor="recommendation-interest">
          What are you interested in?
        </label>
        <select
          id="recommendation-interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          <option>Technology</option>
          <option>Design</option>
          <option>Business</option>
          <option>Creative</option>
          <option>Anything</option>
        </select>

        <label htmlFor="recommendation-level">
          What is your learning level?
        </label>
        <select
          id="recommendation-level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label htmlFor="recommendation-goal">
          What is your main goal?
        </label>
        <select
          id="recommendation-goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        >
          <option>Get a job</option>
          <option>Learn a new skill</option>
          <option>Start freelancing</option>
          <option>Build my own project</option>
        </select>

        <button
          className="primary-button"
          type="button"
          onClick={getRecommendations}
        >
          Find My Courses
        </button>

        {results !== null && results.length > 0 && (
          <div className="recommendation-results">
            <h2>Recommended Courses for You</h2>

            <div className="course-grid">
              {results.map((course) => (
                <article className="course-card" key={course.id}>
                  <div className="course-icon">{course.icon}</div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <Link
                    to={`/course/${course.id}`}
                    className="primary-button course-button"
                  >
                    View Roadmap
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {results !== null && results.length === 0 && (
          <p className="recommendation-note" role="status">
            No courses match those preferences yet. Try another interest
            or learning level.
          </p>
        )}
      </section>
    </div>
  );
}

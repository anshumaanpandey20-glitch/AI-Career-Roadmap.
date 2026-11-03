import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { courses } from "../data/courses";
import { addLearningHistory } from "../utils/history";
import "../css/course-details.css";

function getCareerProject(goal, index) {
  const normalizedGoal = goal.toLowerCase();

  if (normalizedGoal.includes("frontend")) {
    return [
      "Create your first HTML webpage.",
      "Build a responsive CSS portfolio.",
      "Create interactive JavaScript features.",
      "Build a React application.",
      "Create a professional frontend portfolio.",
      "Deploy a complete frontend project.",
    ][index];
  }

  if (normalizedGoal.includes("full stack")) {
    return [
      "Build a basic webpage.",
      "Create a responsive website.",
      "Build interactive website features.",
      "Connect a frontend to a backend.",
      "Create a full-stack application.",
      "Deploy a full-stack portfolio project.",
    ][index];
  }

  if (normalizedGoal.includes("data analyst")) {
    return [
      "Collect and organize a small dataset.",
      "Analyze data using spreadsheets.",
      "Create charts and visualizations.",
      "Practice SQL data queries.",
      "Build a data analysis dashboard.",
      "Create a portfolio-ready analysis project.",
    ][index];
  }

  if (normalizedGoal.includes("business analyst")) {
    return [
      "Understand a business problem.",
      "Analyze business data using Excel.",
      "Create business reports and charts.",
      "Practice SQL and data analysis.",
      "Build a business performance dashboard.",
      "Present a business analysis project.",
    ][index];
  }

  if (normalizedGoal.includes("graphic designer")) {
    return [
      "Practice design fundamentals.",
      "Create posters and social media designs.",
      "Design a brand identity.",
      "Create UI design concepts.",
      "Build a design portfolio.",
      "Present your portfolio to potential clients.",
    ][index];
  }

  if (normalizedGoal.includes("digital marketing")) {
    return [
      "Understand marketing fundamentals.",
      "Create a content strategy.",
      "Practice SEO techniques.",
      "Learn social media campaign planning.",
      "Analyze marketing performance.",
      "Create a complete marketing campaign.",
    ][index];
  }

  return undefined;
}

export default function CourseDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const course = courses.find((item) => item.id === id);
  const careerGoal =
    searchParams.get("goal") ||
    JSON.parse(
      localStorage.getItem("learnerRoadmapProfile") || "{}"
    ).careerGoal ||
    "Explore career options";

  useEffect(() => {
    if (course) {
      addLearningHistory(course);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="app course-not-found">
        <h2>Course not found</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

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

      <section className="course-details-hero">
        <div className="course-details-icon">{course.icon}</div>

        <span className="eyebrow">{course.category}</span>

        <h1>{course.title}</h1>

        <p>{course.description}</p>

        <div className="career-goal-banner">
          <span>Your Career Goal</span>
          <h2>{careerGoal}</h2>
          <p>
            This learning roadmap is designed to help you work toward
            your selected career.
          </p>
        </div>

        <div className="course-info">
          <span>🎯 {course.level}</span>
          <span>🕒 {course.duration}</span>
          <span>📚 {course.roadmap.length} stages</span>
        </div>

        <a href="#roadmap" className="primary-button">
          Start Learning
        </a>
      </section>

      <section className="course-content">
        <div className="course-content-section">
          <h2>Skills You Will Learn</h2>

          <div className="course-skills">
            {course.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div id="roadmap" className="course-content-section">
          <h2>Your Learning Roadmap</h2>

          <p className="section-description">
            Follow these stages in order to build your skills.
          </p>

          <div className="course-roadmap">
            {course.roadmap.map((step, index) => (
              <article className="course-roadmap-step" key={step.title}>
                <div className="roadmap-number">{index + 1}</div>

                <div className="roadmap-content">
                  <span className="roadmap-duration">
                    {step.duration}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="project-box">
                    <strong>Practice Project:</strong>{" "}
                    {getCareerProject(careerGoal, index) || step.project}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="course-content-section">
          <h2>Recommended Books</h2>

          <div className="resource-grid">
            {course.books.map((book) => (
              <article className="resource-card" key={book.title}>
                <div className="resource-icon">📖</div>

                <h3>{book.title}</h3>

                <p>Author: {book.author}</p>

                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(book.title)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Find Book →
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="course-content-section">
          <h2>Recommended YouTube Channels</h2>

          <div className="resource-grid">
            {course.youtube.map((channel) => (
              <article className="resource-card" key={channel.name}>
                <div className="resource-icon">▶️</div>

                <h3>{channel.name}</h3>

                <p>Recommended learning channel</p>

                <a
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Channel →
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="course-content-section beginner-note">
          <h2>How to Start Learning</h2>

          <p>
            Start with the first roadmap stage. Watch the recommended
            tutorials, read the suggested material, and complete the
            practice project before moving to the next stage.
          </p>

          <Link to="/guide" className="primary-button">
            Read Beginner Guide
          </Link>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Learner Roadmap</span>
        <span>Learn at your own pace. Build your future.</span>
      </footer>
    </div>
  );
}


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../services/authService";

export default function Home() {
  const [user, setUser] = useState(getCurrentUser);

  function handleLogout() {
    logoutUser();
    setUser(null);
  }

  return (
    <div className="app">
      <header className="navbar">
        <Link className="logo" to="/">
          Learner<span>Roadmap</span> AI
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/guide">Beginner Guide</Link>
          <Link to="/recommendations">Career Recommendations</Link>
          {user ? (
            <>
              <Link to="/history">Learning History</Link>
              <button className="nav-link-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        {user ? (
          <span className="nav-user">Hi, {user.name}</span>
        ) : (
          <Link className="nav-button" to="/login">
            Login
          </Link>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">
            YOUR LEARNING JOURNEY STARTS HERE
          </p>

          <h1>
            Learn at your own pace.
            <br />
            Build your own future.
          </h1>

          <p className="hero-description">
            Discover personalized learning paths, build practical
            skills, and prepare for your dream career — whether
            you study at school, college, or independently.
          </p>

          <Link className="primary-button" to="/start">
            Explore Your Roadmap →
          </Link>

          <Link className="primary-button" to="/recommendations">
            Find My Career Path
          </Link>

          <p className="hero-note">
            Your goals. Your pace. Your future.
          </p>
        </section>

        <section className="features" id="features">
          <p className="eyebrow">WHAT YOU CAN DO</p>
          <h2>Everything you need to keep learning</h2>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Roadmaps</h3>
              <p>
                Find a learning path based on your current
                skills and career goals.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Guided Learning</h3>
              <p>
                Organize topics and resources into clear,
                manageable learning steps.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Practical Projects</h3>
              <p>
                Practice your skills by building projects
                as you progress.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>© 2026 Learner Roadmap AI</p>
        <p>Learn today. Grow tomorrow.</p>
      </footer>
    </div>
  );
}

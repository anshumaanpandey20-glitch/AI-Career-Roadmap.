import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { roadmaps } from "../data/rosdmap.js";
import "../App.css";

export default function Roadmap() {
  const location = useLocation();

  const [profile] = useState(() => {
    // First, use the profile passed by navigation.
    if (location.state?.profile) {
      return location.state.profile;
    }

    // Otherwise, load the profile saved in the browser.
    try {
      const savedProfile = sessionStorage.getItem("learnerProfile");

      return savedProfile ? JSON.parse(savedProfile) : null;
    } catch (error) {
      console.error("Could not load the saved profile:", error);
      return null;
    }
  });

  const careerGoal = profile?.careerGoal || "";
  const steps = roadmaps[careerGoal] || [];

  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      const savedSteps = sessionStorage.getItem(
        "completedRoadmapSteps"
      );

      return savedSteps ? JSON.parse(savedSteps) : [];
    } catch (error) {
      console.error("Could not load saved progress:", error);
      return [];
    }
  });

  // Keep progress saved whenever completed steps change.
  useEffect(() => {
    sessionStorage.setItem(
      "completedRoadmapSteps",
      JSON.stringify(completedSteps)
    );
  }, [completedSteps]);

  // Calculate the completion percentage.
  const progress = steps.length
    ? Math.round(
        (completedSteps.filter((id) =>
          steps.some((step) => step.id === id)
        ).length /
          steps.length) *
          100
      )
    : 0;

  function handleStepToggle(stepId, isCurrentlyCompleted) {
    setCompletedSteps((previous) => {
      if (isCurrentlyCompleted) {
        return previous.filter((id) => id !== stepId);
      }

      return [...new Set([...previous, stepId])];
    });
  }

  // Show this message if no profile has been selected.
  if (!profile) {
    return (
      <div className="app">
        <main className="start-section">
          <h2>No learning plan selected</h2>
          <p>Please complete your profile first.</p>

          <Link className="primary-button" to="/start">
            Create My Roadmap
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <Link className="logo" to="/">
          Learner<span>Roadmap</span> AI
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/start">Edit Profile</Link>
        </nav>

        <Link className="nav-button" to="/start">
          Back to Profile
        </Link>
      </header>

      <main>
        <section className="roadmap-result">
          <p className="eyebrow">YOUR NEXT STEPS</p>

          <h2>{careerGoal} Roadmap</h2>

          <p>
            Here is your suggested learning path, {profile.name}.
          </p>

          {steps.length > 0 ? (
            <>
              <div className="progress-summary">
                <div className="progress-labels">
                  <span>Overall Progress</span>
                  <strong>{progress}%</strong>
                </div>

                <div
                  className="progress-track"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-label="Roadmap completion"
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="progress-count">
                  {
                    steps.filter((step) =>
                      completedSteps.includes(step.id)
                    ).length
                  }{" "}
                  of {steps.length} steps completed
                </p>
              </div>

              <div className="roadmap-list">
                {steps.map((step, index) => {
                  const isCompleted = completedSteps.includes(step.id);

                  return (
                    <article
                      className={`roadmap-card ${
                        isCompleted ? "completed" : ""
                      }`}
                      key={step.id}
                    >
                      <div className="roadmap-number">
                        {index + 1}
                      </div>

                      <div className="roadmap-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>

                        <span className="roadmap-duration">
                          Duration: {step.duration}
                        </span>

                        <label className="step-checkbox">
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() =>
                              handleStepToggle(step.id, isCompleted)
                            }
                          />

                          {isCompleted
                            ? "Completed"
                            : "Mark as completed"}
                        </label>
                      </div>
                    </article>
                  );
                })}
              </div>

              {progress === 100 && (
                <p className="roadmap-finished">
                  Congratulations! You have completed this learning
                  roadmap!
                </p>
              )}
            </>
          ) : (
            <p>
              No roadmap is available for this career goal yet.
              Please choose another career goal.
            </p>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Learner Roadmap AI</p>
        <p>Learn today. Grow tomorrow.</p>
      </footer>
    </div>
  );
}

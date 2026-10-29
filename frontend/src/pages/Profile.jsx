import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { createStudentProfile } from "../services/studentService";

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    education: "",
    course: "",
    semester: "",
    skills: "",
    careerGoal: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const profileData = {
      ...profile,
      skills: profile.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    try {
      const result = await createStudentProfile(profileData);

      console.log("Backend response:", result);

      sessionStorage.setItem(
        "learnerProfile",
        JSON.stringify(profileData)
      );

      navigate("/roadmap", {
        state: {
          profile: profileData,
        },
      });
    } catch (error) {
      console.error("Profile submission failed:", error);

      alert(
        "Could not submit your profile. Please check that the backend is running and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <Link className="logo" to="/">
          Learner<span>Roadmap</span> AI
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#features">Features</a>
          <a href="/#about">About</a>
        </nav>

        <Link className="nav-button" to="/">
          Back to Home
        </Link>
      </header>

      <main>
        <section
          className="start-section profile-section"
          id="start"
        >
          <p className="eyebrow">
            YOUR PERSONAL LEARNING PLAN
          </p>

          <h2>Tell us about yourself</h2>

          <p>
            Share your current education, skills, and career goal
            to get started.
          </p>

          <form
            className="profile-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="education">
              Education level
            </label>
            <select
              id="education"
              name="education"
              value={profile.education}
              onChange={handleChange}
              required
            >
              <option value="">
                Choose your education level
              </option>
              <option value="School">School student</option>
              <option value="Open College">
                Open-college student
              </option>
              <option value="Regular College">
                Regular college student
              </option>
              <option value="Independent Learner">
                Independent learner
              </option>
            </select>

            <label htmlFor="course">
              Course or class
            </label>
            <input
              id="course"
              name="course"
              value={profile.course}
              onChange={handleChange}
              placeholder="e.g. BCA or Class 12"
              required
            />

            <label htmlFor="semester">
              Semester or class year
            </label>
            <input
              id="semester"
              name="semester"
              value={profile.semester}
              onChange={handleChange}
              placeholder="e.g. Semester 3 or Class 12"
              required
            />

            <label htmlFor="skills">
              Current skills
            </label>
            <textarea
              id="skills"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="e.g. HTML, CSS, basic Python"
              rows={3}
              required
            />

            <label htmlFor="careerGoal">
              Career goal
            </label>
            <select
              id="careerGoal"
              name="careerGoal"
              value={profile.careerGoal}
              onChange={handleChange}
              required
            >
              <option value="">
                Choose your career goal
              </option>
              <option value="Web Developer">
                Web Developer
              </option>
              <option value="AI/ML Engineer">
                AI/ML Engineer
              </option>
              <option value="Data Analyst">
                Data Analyst
              </option>
              <option value="Cybersecurity Specialist">
                Cybersecurity Specialist
              </option>
              <option value="Not Sure Yet">
                Not sure yet
              </option>
            </select>

            <button
              className="primary-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Profile"}
            </button>
          </form>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>© 2026 Learner Roadmap AI</p>
        <p>Learn today. Grow tomorrow.</p>
      </footer>
    </div>
  );
}

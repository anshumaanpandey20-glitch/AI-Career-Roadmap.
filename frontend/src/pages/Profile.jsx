import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import "../App.css";

const careerGoals = {
  "web-development": [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Web Designer",
    "Freelance Web Developer",
  ],
  python: [
    "Python Developer",
    "Software Developer",
    "Automation Engineer",
    "Backend Developer",
  ],
  "data-science": [
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "Business Intelligence Analyst",
  ],
  "artificial-intelligence": [
    "AI Engineer",
    "Machine Learning Engineer",
    "AI Researcher",
    "Deep Learning Engineer",
  ],
  "graphic-design": [
    "Graphic Designer",
    "UI Designer",
    "Brand Designer",
    "Freelance Designer",
  ],
  "digital-marketing": [
    "Digital Marketing Specialist",
    "SEO Specialist",
    "Social Media Manager",
    "Content Marketer",
  ],
  cybersecurity: [
    "Cybersecurity Analyst",
    "Ethical Hacker",
    "Security Engineer",
    "Network Security Specialist",
  ],
  // Business analytics is the available business course; no separate BBT course exists.
  "excel-analytics": [
    "Business Analyst",
    "Data Analyst",
    "MIS Executive",
    "Financial Analyst",
    "Business Intelligence Analyst",
  ],
};

export default function Profile() {
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState(
    courses[0]?.id || ""
  );
  const [careerGoal, setCareerGoal] = useState("");
  const [education, setEducation] = useState("School Student");
  const [error, setError] = useState("");

  const selectedCourseData = courses.find(
    (course) => course.id === selectedCourse
  );

  const availableGoals = careerGoals[selectedCourse] || [
    "Learn a new skill",
    "Get a job",
    "Start freelancing",
  ];

  function handleCourseChange(event) {
    setSelectedCourse(event.target.value);
    setCareerGoal("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedCourse || !careerGoal) {
      setError("Please select a course and career goal.");
      return;
    }

    const selectedCourseData = courses.find(
      (course) => course.id === selectedCourse
    );

    const roadmapProfile = {
      education,
      courseId: selectedCourse,
      courseName: selectedCourseData?.title,
      careerGoal,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "learnerRoadmapProfile",
      JSON.stringify(roadmapProfile)
    );

    navigate(
      `/course/${selectedCourse}?goal=${encodeURIComponent(careerGoal)}`
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          LearnerRoadmap AI
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/guide">Beginner Guide</Link>
        </div>
      </nav>

      <main>
        <section className="start-section profile-section">
          <h1>Build Your Learning Roadmap</h1>

          <p>
            Choose your course and career goal to discover your
            personalized learning path.
          </p>

          <form className="profile-form" onSubmit={handleSubmit}>
              <label htmlFor="education">Your Education Level</label>
              <select
                id="education"
                value={education}
                onChange={(event) => setEducation(event.target.value)}
              >
                <option>School Student</option>
                <option>Open College Student</option>
                <option>College Student</option>
                <option>Graduate</option>
                <option>Self Learner</option>
              </select>

              <label htmlFor="course">Select Your Course</label>
              <select
                id="course"
                value={selectedCourse}
                onChange={handleCourseChange}
                required
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>

              <label htmlFor="careerGoal">Select Your Career Goal</label>
              <select
                id="careerGoal"
                value={careerGoal}
                onChange={(event) => setCareerGoal(event.target.value)}
                required
              >
                <option value="">Choose your career goal</option>

                {availableGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>

              {error && (
                <p className="auth-error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="primary-button">
                Generate My Roadmap →
              </button>
          </form>
        </section>
      </main>
    </div>
  );
}

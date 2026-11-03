import { useState, useEffect } from "react";
import { courses } from "../data/courses";
import "../css/progress.css";

const STORAGE_KEY = "learnerRoadmapProgress";

function getTopics(course) {
  const source =
    course.roadmap?.length > 0
      ? course.roadmap
      : course.skills?.length > 0
        ? course.skills
        : ["Getting Started", "Fundamentals", "Practice", "Final Project"];

  return source.map((item, index) => {
    const title =
      typeof item === "string"
        ? item
        : item.title ||
          item.name ||
          item.topic ||
          item.phase ||
          `Lesson ${index + 1}`;

    return {
      id: `${course.id}-${index}`,
      title,
    };
  });
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export default function Progress() {
  const [selectedCourse, setSelectedCourse] = useState(
    courses[0]?.id || ""
  );
  const [progress, setProgress] = useState(readProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const course = courses.find((item) => item.id === selectedCourse);
  const topics = course ? getTopics(course) : [];
  const completed = progress[selectedCourse] || [];

  const percentage =
    topics.length === 0
      ? 0
      : Math.round((completed.length / topics.length) * 100);

  function toggleTopic(topicId) {
    setProgress((previous) => {
      const current = previous[selectedCourse] || [];
      const updated = current.includes(topicId)
        ? current.filter((id) => id !== topicId)
        : [...current, topicId];

      return {
        ...previous,
        [selectedCourse]: updated,
      };
    });
  }

  function resetProgress() {
    setProgress((previous) => ({
      ...previous,
      [selectedCourse]: [],
    }));
  }

  const nextTopic = topics.find(
    (topic) => !completed.includes(topic.id)
  );

  const totalCompleted = courses.reduce((total, item) => {
    const itemTopics = getTopics(item);
    const itemCompleted = progress[item.id] || [];

    return (
      total +
      itemCompleted.filter((id) =>
        itemTopics.some((topic) => topic.id === id)
      ).length
    );
  }, 0);

  const totalTopics = courses.reduce(
    (total, item) => total + getTopics(item).length,
    0
  );

  const overallPercentage = totalTopics
    ? Math.round((totalCompleted / totalTopics) * 100)
    : 0;

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>My Progress Report</h1>
        <p>Track your learning journey and celebrate your achievements.</p>
      </div>

      <div className="progress-overview">
        <div className="progress-card">
          <span>Overall Progress</span>
          <h2>{overallPercentage}%</h2>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={overallPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Overall progress"
          >
            <div style={{ width: `${overallPercentage}%` }} />
          </div>
        </div>

        <div className="progress-card">
          <span>Completed Lessons</span>
          <h2>{totalCompleted}</h2>
          <p>Out of {totalTopics} lessons</p>
        </div>

        <div className="progress-card">
          <span>Courses Started</span>
          <h2>
            {
              courses.filter(
                (item) => (progress[item.id] || []).length > 0
              ).length
            }
          </h2>
          <p>Keep learning every day!</p>
        </div>
      </div>

      <div className="progress-course">
        <label htmlFor="progress-course">Select Your Course</label>

        <select
          id="progress-course"
          value={selectedCourse}
          onChange={(event) => setSelectedCourse(event.target.value)}
        >
          {courses.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {course && (
        <>
          <div className="course-progress-card">
            <div>
              <h2>{course.title}</h2>
              <p>
                {completed.length} of {topics.length} lessons completed
              </p>
            </div>

            <strong>{percentage}%</strong>
          </div>

          <div
            className="progress-bar large"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${course.title} progress`}
          >
            <div style={{ width: `${percentage}%` }} />
          </div>

          {nextTopic && (
            <div className="next-lesson">
              <h3>Continue Learning</h3>
              <p>
                Your next lesson: <strong>{nextTopic.title}</strong>
              </p>
            </div>
          )}

          {!nextTopic && topics.length > 0 && (
            <div className="next-lesson">
              <h3>🎉 Course Completed!</h3>
              <p>
                Congratulations! You have completed all lessons in this
                course.
              </p>
            </div>
          )}

          <h2 className="lesson-heading">Your Learning Checklist</h2>

          <div className="lesson-list">
            {topics.map((topic, index) => {
              const isCompleted = completed.includes(topic.id);

              return (
                <label
                  key={topic.id}
                  className={`lesson-item ${isCompleted ? "completed" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleTopic(topic.id)}
                  />

                  <span className="lesson-copy">
                    <small>Lesson {index + 1}</small>
                    <strong>{topic.title}</strong>
                  </span>

                  <span className="lesson-status">
                    {isCompleted ? "Completed" : "Not completed"}
                  </span>
                </label>
              );
            })}
          </div>

          <button
            className="reset-progress"
            type="button"
            onClick={resetProgress}
          >
            Reset Course Progress
          </button>
        </>
      )}
    </div>
  );
}

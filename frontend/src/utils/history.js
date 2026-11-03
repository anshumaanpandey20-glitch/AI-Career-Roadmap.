const HISTORY_KEY = "learnerRoadmapHistory";

export function addLearningHistory(course) {
  const user = localStorage.getItem("learnerRoadmapUser");

  // Save history only after the student has logged in.
  if (!user) return;

  const existingHistory = JSON.parse(
    localStorage.getItem(HISTORY_KEY) || "[]"
  );

  const newEntry = {
    id: course.id,
    title: course.title,
    type: "Course",
    visitedAt: new Date().toISOString(),
  };

  const updatedHistory = [
    newEntry,
    ...existingHistory,
  ].slice(0, 50);

  localStorage.setItem(
    HISTORY_KEY,
    JSON.stringify(updatedHistory)
  );
}

export function getLearningHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

export function clearLearningHistory() {
  localStorage.removeItem(HISTORY_KEY);
}

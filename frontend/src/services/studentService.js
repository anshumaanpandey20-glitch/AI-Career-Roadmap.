
const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

export async function createStudentProfile(profile) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: profile.name,
      course: profile.course,
      skills: profile.skills,
      careerGoal: profile.careerGoal,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit profile");
  }

  return data;
}

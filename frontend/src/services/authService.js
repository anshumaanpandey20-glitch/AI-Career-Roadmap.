const API_URL = import.meta.env.VITE_API_URL;

async function authRequest(endpoint, payload) {
  const response = await fetch(`${API_URL}/api/auth/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Authentication failed");
  }

  return data;
}

export async function registerUser({ name, email, password }) {
  return authRequest("register", { name, email, password });
}

export async function loginUser({ email, password }) {
  const data = await authRequest("login", { email, password });

  // Store JWT and safe user details, never the password.
  localStorage.setItem("learnerRoadmapToken", data.token);
  localStorage.setItem("learnerRoadmapUser", JSON.stringify(data.user));

  return data;
}

export function logoutUser() {
  localStorage.removeItem("learnerRoadmapToken");
  localStorage.removeItem("learnerRoadmapUser");
}

export function getCurrentUser() {
  try {
    return JSON.parse(
      localStorage.getItem("learnerRoadmapUser") || "null"
    );
  } catch {
    return null;
  }
}

export function getAuthToken() {
  return localStorage.getItem("learnerRoadmapToken");
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/authService";
import "../css/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("register");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        await registerUser(form);
      }

      await loginUser({
        email: form.email,
        password: form.password,
      });

      navigate("/history");
    } catch (requestError) {
      setError(requestError.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function toggleMode() {
    setMode((currentMode) =>
      currentMode === "register" ? "login" : "register"
    );
    setError("");
  }

  return (
    <div className="app auth-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          LearnerRoadmap AI
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </nav>

      <main className="auth-card">
        <h1>{mode === "register" ? "Create Account" : "Login"}</h1>

        <p>
          {mode === "register"
            ? "Create your account and start learning."
            : "Welcome back! Continue your learning journey."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label htmlFor="auth-name">Name</label>
              <input
                id="auth-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                required
              />
            </>
          )}

          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button auth-submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : mode === "register"
                ? "Create Account"
                : "Login"}
          </button>
        </form>

        <p className="auth-switch">
          {mode === "register"
            ? "Already have an account?"
            : "Don't have an account?"}
          <button type="button" onClick={toggleMode}>
            {mode === "register" ? "Login" : "Create Account"}
          </button>
        </p>
      </main>
    </div>
  );
}

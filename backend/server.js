
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const studentRoutes = require("./routes/studentRoutes");
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

// Allow requests from your React frontend.
app.use(cors());

// Allow Express to read JSON request bodies.
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Learner Roadmap AI backend is running!",
  });
});

// Health-check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is healthy",
  });
});

const db = require("./config/db");

app.get("/api/health-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS connected");

    res.json({
      success: true,
      message: "MySQL connection successful",
      result: rows[0],
    });
  } catch (error) {
    console.error("MySQL connection failed:", error.message);

    res.status(500).json({
      success: false,
      message: "MySQL connection failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

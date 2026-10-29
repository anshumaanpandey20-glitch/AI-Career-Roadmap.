
const express = require("express");
const db = require("../config/db");

const router = express.Router();

// GET /api/students
// Retrieve the latest 100 student profiles.
router.get("/", async (req, res) => {
  try {
    const [students] = await db.execute(
      `SELECT id, name, education, course, semester,
              skills, career_goal, created_at
       FROM students
       ORDER BY id DESC
       LIMIT 100`
    );

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error("Error retrieving students:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not retrieve student profiles.",
    });
  }
});

// GET /api/students/:id
// Retrieve one student by database ID.
router.get("/:id", async (req, res) => {
  try {
    const studentId = Number(req.params.id);

    if (!Number.isSafeInteger(studentId) || studentId < 1) {
      return res.status(400).json({
        success: false,
        message: "A valid student ID is required.",
      });
    }

    const [students] = await db.execute(
      `SELECT id, name, education, course, semester,
              skills, career_goal, created_at
       FROM students
       WHERE id = ?
       LIMIT 1`,
      [studentId]
    );

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student profile not found.",
      });
    }

    return res.status(200).json({
      success: true,
      student: students[0],
    });
  } catch (error) {
    console.error("Error retrieving student:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not retrieve student profile.",
    });
  }
});

// POST /api/students
// Save a student profile to MySQL.
router.post("/", async (req, res) => {
  try {
    const {
      name,
      education,
      course,
      semester,
      skills,
      careerGoal,
    } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof course !== "string" ||
      !course.trim() ||
      typeof careerGoal !== "string" ||
      !careerGoal.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, course and career goal are required.",
      });
    }

    const skillsArray = Array.isArray(skills)
      ? skills
      : typeof skills === "string"
        ? skills.split(",").map((skill) => skill.trim()).filter(Boolean)
        : [];

    const [result] = await db.execute(
      `INSERT INTO students
        (name, education, course, semester, skills, career_goal)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name.trim(),
        education || null,
        course.trim(),
        semester || null,
        JSON.stringify(skillsArray),
        careerGoal.trim(),
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Student profile saved successfully.",
      student: {
        id: result.insertId,
        name: name.trim(),
        education: education || null,
        course: course.trim(),
        semester: semester || null,
        skills: skillsArray,
        careerGoal: careerGoal.trim(),
      },
    });
  } catch (error) {
    console.error("Error saving student profile:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not save student profile.",
    });
  }
});

module.exports = router;

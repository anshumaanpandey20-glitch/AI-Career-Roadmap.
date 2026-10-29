
const express = require("express");
const db = require("../config/db");

const router = express.Router();

// POST /api/students
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

    // Validate required fields.
    if (!name || !course || !careerGoal) {
      return res.status(400).json({
        success: false,
        message: "Name, course and career goal are required.",
      });
    }

    // Ensure skills are stored as a JSON array.
    const skillsArray = Array.isArray(skills)
      ? skills
      : typeof skills === "string"
        ? skills.split(",").map((skill) => skill.trim()).filter(Boolean)
        : [];

    // Insert the profile into MySQL.
    const sql = `
      INSERT INTO students
        (name, education, course, semester, skills, career_goal)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name.trim(),
      education || null,
      course.trim(),
      semester || null,
      JSON.stringify(skillsArray),
      careerGoal,
    ];

    const [result] = await db.execute(sql, values);

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
        careerGoal,
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

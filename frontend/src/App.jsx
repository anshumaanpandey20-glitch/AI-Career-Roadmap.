
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Guide from "./pages/Guide.jsx";
import Recommendations from "./pages/Recommendations.jsx";
import Login from "./pages/Login.jsx";
import History from "./pages/History.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Profile />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

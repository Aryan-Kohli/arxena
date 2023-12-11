import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/loginpage.jsx";
import Signupage from "./pages/signuppage.jsx";
import Homepage from "./pages/homepage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signupage />} />
      </Routes>
    </>
  );
}

export default App;

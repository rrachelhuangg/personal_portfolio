import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import ProjectsPage from "./pages/ProjectsPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/cv" element={<CvPage/>}/>
        <Route path = "/projects" element={<ProjectsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

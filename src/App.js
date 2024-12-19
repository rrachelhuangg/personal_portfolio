import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import './App.css';

function App() {
  return (
    <Router basename = "/personal_portfolio">
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/cv" element={<CvPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

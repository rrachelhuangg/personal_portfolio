import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename = "/personal_portfolio">
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

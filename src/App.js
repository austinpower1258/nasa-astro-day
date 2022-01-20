import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nasaphoto" element={<NasaPhoto />} />
        </Routes>
    </Router>
  );
}

export default App;
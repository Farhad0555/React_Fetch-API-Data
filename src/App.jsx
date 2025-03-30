import React from "react";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Service from "./Pages/Service.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/Contact/:id" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

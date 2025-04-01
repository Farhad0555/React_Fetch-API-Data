import React from "react";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Service from "./Pages/Service.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerer from "./Component/Register.jsx";
import Loginn from "./Component/Login.jsx";
import Logoutut from "./Component/Logout.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/Contact/:id" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/register" element={<Registerer />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/logout" element={<Logoutut />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

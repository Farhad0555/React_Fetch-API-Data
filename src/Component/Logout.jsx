// src/components/Logout.js
import React from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <button className="btn btn-success" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;

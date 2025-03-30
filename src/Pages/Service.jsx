import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainlayout from "../Component/Mainlayout.jsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Service = () => {
  const [users, setUsers] = useState([]); // Correct state declaration
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // Correct JSON parsing
      .then((data) => setUsers(data)) // Correctly setting state
      .catch((error) => console.error("Error fetching users:", error)); // Handle errors
  }, []); // Add dependency array to prevent infinite re-renders

  return (
    <Mainlayout>
      <div className="text-center">
        <h1 className="text-success">Fetch API Data</h1>
        <div className="container">
          <div className="row">
            {users.map((user, index) => (
              <div className="col-md-3 mb-4" key={index}>
                {" "}
                {/* 4 cards per row */}
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.username}</p>
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/Contact/${user.id}`)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Service;

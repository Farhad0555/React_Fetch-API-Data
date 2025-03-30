import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useParams to get id and useNavigate for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import Mainlayout from "../Component/Mainlayout.jsx";

const Contact = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch the user based on the id from the URL
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleRemove = () => {
    // In this case, the removal won't affect the users list directly
    // It could either be removed by navigating back to the previous page with updated data
    // Or you can implement a global state to remove the user from the list in Service component
    // For now, we'll simply navigate back to the Service page
    navigate("/Service");
  };

  if (!user) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <Mainlayout>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
          <div className="card-body text-center">
            <h3 className="card-title text-success">{user.name}</h3>
            <p className="card-text">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>
            <button className="btn btn-danger" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundcolor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontsize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontsize: "18px", marginBottom: "30px" }}>
        Figma Template Desing Home.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/task" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Task
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

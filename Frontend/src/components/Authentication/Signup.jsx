import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useAuth } from "../ContextApi/AuthContext";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    course: "",
    password: "",
  });
  const {signup} = useAuth();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signup(user);
    } catch (error) {
      console.error("Client-side error:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-container d-flex shadow-lg rounded">
        {/* Welcome Section */}
        <div className="welcome-section bg-primary text-white p-4 border rounded-start">
          <h2>Welcome</h2>
          <p>Join us today!</p>
        </div>

        {/* Signup Form Section */}
        <div className="form-section p-4 bg-light border rounded-end">
          <h4 className="mb-3 text-center">Signup</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" placeholder="Enter name" onChange={handleChange} value={user.name} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} value={user.email} required />
            </div>
            <div className="mb-2">
              <label className="form-label">Course</label>
              <input type="text" name="course" className="form-control" placeholder="Enter course name" onChange={handleChange} value={user.course} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange} value={user.password} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <p className="text-center mt-3 mb-3">or</p>
          <div className="border rounded p-1 d-flex justify-content-center">
            <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            <span>Signup with Google</span>
          </div>
          <div className="text-center mt-1">
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

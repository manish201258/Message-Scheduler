import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../ContextApi/AuthContext';



const Login = () => {
  const {login} = useAuth();

  const [userData, setUserData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      login(userData);
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-container d-flex shadow-lg rounded">
        {/* Welcome Section */}
        <div className="welcome-section bg-primary text-white p-4 border rounded-start">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
        </div>

        {/* Login Form Section */}
        <div className="form-section p-4 bg-light border rounded-end">
          <h4 className="mb-3 text-center">Login</h4>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
                value={userData.email}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                value={userData.password}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-3 mb-3">or</p>
          <div className="border rounded p-1 d-flex justify-content-center">
            <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
            <span>Login with Google</span>
          </div>
          <div className="text-center mt-1">
            <span>
              Create an account? <Link to="/register">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

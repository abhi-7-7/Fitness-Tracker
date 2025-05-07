import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';


const Signup = () => {
  const router = useNavigate();
  // Simple form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Simple input handler
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Simple form submit with navigation
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data
    const userData = {
      name: form.name,
      email: form.email
    };
    localStorage.setItem('user', JSON.stringify(userData));
    // Redirect to home page
    router('/');
    // window.location.pathname = '/';
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleInput}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup; 
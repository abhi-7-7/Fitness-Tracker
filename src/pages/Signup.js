import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Auth.css';


const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  // const router = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Simple form submit with navigation
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Save user data
  //   const userData = {
  //     name: form.name,
  //     email: form.email
  //   };
  //   localStorage.setItem('user', JSON.stringify(userData));
  //   // Redirect to home page
  //   router('/');
  //   // window.location.pathname = '/';
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setError('');
    
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.some(user => user.email === form.email)) {
      setError('Email already registered!');
      return;
    }

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      isLoggedIn: true,
      joinDate: new Date().toISOString()
    };

    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    localStorage.setItem('user', JSON.stringify(userData));
    
    setWelcomeMessage(`Welcome, ${form.name}!`);
    setSuccess(true);
    
    setTimeout(() => {
      window.location.pathname = '/';
    }, 2000);
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-box success-box">
            <h2 className="auth-title">Welcome!</h2>
            <p className="welcome-message">{welcomeMessage}</p>
            <p className="redirect-message">Redirecting to home page...</p>
          </div>
        </div>
      </div>
    );
  }

  // if already signed up account sign up again page will not react to it 

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
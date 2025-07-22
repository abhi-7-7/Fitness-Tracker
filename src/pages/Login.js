import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  // const router = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [storageCleared, setStorageCleared] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      try {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = existingUsers.find(u => u.email === form.email && u.password === form.password);

        if (user) {
          const userData = {
            ...user,
            isLoggedIn: true,
            lastLogin: new Date().toISOString()
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          
          window.location.pathname = '/';
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError('');

    if (!forgotPasswordEmail || !forgotPasswordEmail.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(u => u.email === forgotPasswordEmail);

    if (!user) {
      setError('No account found with this email address');
      return;
    }

    
    setTimeout(() => {
      setResetSuccess(true);
      
      console.log('Reset password email sent to:', forgotPasswordEmail);
    }, 1500);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
    setError('');
    setResetSuccess(false);
  };

  const handleClearStorage = () => {
    setShowWarning(true);
  };

  const confirmReset = () => {
    if (userPassword !== '0000') {
      setPasswordError('Invalid password');
      return;
    }
    localStorage.clear();
    setStorageCleared(true);
    
    
    setForm({
      email: '',
      password: ''
    });
    setError('');
    setForgotPasswordEmail('');
    setResetSuccess(false);
    
    
    setShowWarning(false);
    
    
    setTimeout(() => {
      setStorageCleared(false);
    }, 2000);
  };

  const cancelReset = () => {
    setShowWarning(false);
  };

  if (showForgotPassword) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2 className="auth-title">Reset Your Password</h2>
            <p className="auth-subtitle">Enter your email to receive reset instructions</p>
            
            {error && <div className="error-message">{error}</div>}
            {resetSuccess && (
              <div className="success-message">
                <p>Password reset instructions have been sent to your email.</p>
                <p>Please check your inbox.</p>
              </div>
            )}
            
            {!resetSuccess ? (
              <form className="auth-form" onSubmit={handleForgotPassword}>
                <div className="form-group">
                  <label htmlFor="forgotEmail">Email</label>
                  <input
                    type="email"
                    id="forgotEmail"
                    name="forgotEmail"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-action">
                  <button type="submit" className="auth-button">Send Reset Link</button>
                </div>
                
                <div className="form-footer">
                  <button 
                    type="button" 
                    className="back-to-login" 
                    onClick={handleBackToLogin}
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            )    :     (
              <div className="form-footer">
                <button 
                  type="button" 
                  className="back-to-login" 
                  onClick={handleBackToLogin}
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="auth-page">
      {showWarning && (
        <div className="warning-popup">
          <div className="warning-content">
            <h3>Warning!</h3>
            <p>This action will reset all accounts and clear all stored data.</p>
            <p>Are you sure you want to continue?</p>
            <p>Please enter your password to confirm:</p>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <div className="warning-buttons">
          <button 
            className="warning-button confirm"
            onClick={() => {
              if (userPassword === '0000') {
                confirmReset();
              } else {
                setPasswordError('Invalid password');
              }
            }}
          >
                Yes, Reset All
              </button>
              <button 
                className="warning-button cancel"
                onClick={cancelReset}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="auth-container">
        <div className="auth-box">
          <h2 className="auth-title">Login to Your Account</h2>
          <p className="auth-subtitle">Continue your fitness journey</p>
          
          {error && <div className="error-message">{error}</div>}
          {storageCleared && (
            <div className="success-message">
              Storage cleared successfully!
            </div>
          )}
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-action">
              <button 
                type="submit" 
                className="auth-button"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            
            <div className="form-footer">
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
              <button 
                type="button" 
                className="forgot-link" 
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>
              <button 
                type="button" 
                className="reset-account-button"
                onClick={handleClearStorage}
              >
                Reset All Accounts
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 


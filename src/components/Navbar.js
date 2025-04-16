import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Check for user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Simple state for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Simple navigation function
  const goToPage = (path) => {
    window.location.pathname = path;
    setMenuOpen(false);
  };

  // Check if current page is active
  const checkActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    goToPage('/');
  };

  // Basic styles
  const styles = {
    navbar: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      cursor: 'pointer',
    },
    menuButton: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    menuButtonSpan: {
      width: '25px',
      height: '3px',
      backgroundColor: '#333',
      margin: '2px 0',
      transition: '0.3s',
    },
    menuItems: {
      display: 'flex',
      gap: '20px',
    },
    menuItem: {
      cursor: 'pointer',
      padding: '5px 10px',
      color: '#333',
    },
    menuItemActive: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    authButtons: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo} onClick={() => goToPage('/')}>
          Health & Fitness
        </div>

        {/* Navigation Menu */}
        <div style={styles.menuItems}>
          <span 
            style={{
              ...styles.menuItem,
              ...(checkActive('/') && styles.menuItemActive)
            }}
            onClick={() => goToPage('/')}
          >
            Home
          </span>
          <span 
            style={{
              ...styles.menuItem,
              ...(checkActive('/about') && styles.menuItemActive)
            }}
            onClick={() => goToPage('/about')}
          >
            About
          </span>
          <span 
            style={{
              ...styles.menuItem,
              ...(checkActive('/services') && styles.menuItemActive)
            }}
            onClick={() => goToPage('/services')}
          >
            Services
          </span>
          <span 
            style={{
              ...styles.menuItem,
              ...(checkActive('/blog') && styles.menuItemActive)
            }}
            onClick={() => goToPage('/blog')}
          >
            Blog
          </span>
        </div>

        {/* User Info or Auth Buttons */}
        <div style={styles.authButtons}>
          {user ? (
            <div className="user-info">
              <span>Hello, {user.name}</span>
              <button 
                style={styles.button}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button 
                style={styles.button}
                onClick={() => goToPage('/login')}
              >
                Login
              </button>
              <button 
                style={styles.button}
                onClick={() => goToPage('/signup')}
              >
                Sign Up
              </button>
            </>
          )}

          {/* Menu Button */}
          <div 
            style={{
              ...styles.menuButton,
              display: 'flex', padding: '10px 20px',justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span style={styles.menuButtonSpan}></span>
            <span style={styles.menuButtonSpan}></span>
            <span style={styles.menuButtonSpan}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check for user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Add scroll event listener
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check for scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simple navigation function
  const goToPage = (path) => {
    window.location.pathname = path;
    setMenuOpen(false);
  };

  // Check if current page is active
  const checkActive = (path) => {
    return window.location.pathname === path ? 'menuItemActive' : '';
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    goToPage('/');
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.menuItems') && !event.target.closest('.menuButton')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => goToPage('/')}>
          Health & Fitness
        </div>

        {/* Navigation Menu */}
        <div className={`menuItems ${menuOpen ? 'active' : ''}`}>
          <span 
            className={`menuItem ${checkActive('/')}`}
            onClick={() => goToPage('/')}
          >
            Home
          </span>
          <span 
            className={`menuItem ${checkActive('/about')}`}
            onClick={() => goToPage('/about')}
          >
            About
          </span>
          <span 
            className={`menuItem ${checkActive('/services')}`}
            onClick={() => goToPage('/services')}
          >
            Services
          </span>
          <span 
            className={`menuItem ${checkActive('/blog')}`}
            onClick={() => goToPage('/blog')}
          >
            Blog
          </span>
        </div>

        {/* User Info or Auth Buttons */}
        <div className={`authButtons ${menuOpen ? 'active' : ''}`}>
          {user ? (
            <div className="user-info">
              <span className="user-greeting">Hello, {user.name}</span>
              <button 
                className="button"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button 
                className="button"
                onClick={() => goToPage('/login')}
                aria-label="Login"
              >
                Login
              </button>
              <button 
                className="button"
                onClick={() => goToPage('/signup')}
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Menu Button */}
        <button 
          className={`menuButton ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="menuButtonSpan"></span>
          <span className="menuButtonSpan"></span>
          <span className="menuButtonSpan"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
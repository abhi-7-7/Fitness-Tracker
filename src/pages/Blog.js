import React from 'react';

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="page-title">Our Blog</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <h2>5 Tips for Starting Your Fitness Journey</h2>
          <p>--------------------------------------</p>
        </div>
        <div className="blog-post">
          <h2>Nutrition Myths Debunked</h2>
          <p>--------------------------------------</p>
        </div>
        <div className="blog-post">
          <h2>Workout Recovery: Why It Matters</h2>
          <p>--------------------------</p>
        </div>
      </div>





        {/* Footer Section */}
        <footer className="about-footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li><i className="fas fa-phone"></i> +91 9999999999</li>
                <li><i className="fas fa-envelope"></i> info@fitlife.com</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Fitness Street Dehradun, Uttarakhand, India</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://facebook.com/fitlife" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/fitlife" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/fitlife" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/fitlife" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 FitLife. All rights reserved.</p>
          </div>
        </footer>


    </div>
  );
};

export default Blog; 
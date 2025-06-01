import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.2
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section" ref={heroRef}>
        <div className="services-hero-background"></div>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <div className="services-hero-text">
            <h1 className="services-hero-title">Transform Your Life</h1>
            <h2 className="services-hero-subtitle">Premium Fitness Services Tailored for Your Success</h2>
            <p className="services-hero-description">
              Experience personalized training, expert guidance, and innovative programs 
              designed to help you achieve your fitness goals. Our comprehensive services 
              combine cutting-edge technology with proven methodologies to deliver 
              exceptional results.
            </p>
            <div className="services-hero-cta">
              <a href="#services-grid" className="cta-button primary">Explore Services</a>
              <a href="/contact" className="cta-button secondary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="services-grid-section">
        <h2 className="services-grid-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3>Personal Training</h3>
            <p>One-on-one customized training programs designed to help you achieve your specific fitness goals with expert guidance and support.</p>
            <a href="/services/personal-training" className="service-link">Learn More</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Group Classes</h3>
            <p>Dynamic group workouts that combine motivation, community, and effective training methods for an engaging fitness experience.</p>
            <a href="/services/group-classes" className="service-link">Learn More</a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-apple-alt"></i>
            </div>
            <h3>Nutrition Planning</h3>
            <p>Personalized nutrition programs and meal planning services to complement your fitness journey and optimize your results.</p>
            <a href="/services/nutrition" className="service-link">Learn More</a>
          </div>
        </div>
        </section>
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

export default Services; 
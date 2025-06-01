import React, { useEffect, useRef, useState } from 'react';

import './About.css';

const About = () => {
  const timelineRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay based on the element's position
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('timeline-item')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          }, delay);
        }
      });
    }, observerOptions);

    // Observe timeline items with staggered delays
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.dataset.delay = index * 150; // 150ms delay between each item
      observer.observe(item);
    });

    // Observe content section
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Observe hero section
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Observe mission section
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    // Observe vision section
    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    // Observe image
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Handle scroll animations
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Animate sections on scroll
      const sections = document.querySelectorAll('.about-hero-section, .content-section, .history-section, .mission-vision-section, .team-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate');
        }
      });

      // Animate fade-in elements
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    // Handle scroll to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add click event listener for scroll to top button
    const scrollTopButton = document.querySelector('.scroll-to-top');
    if (scrollTopButton) {
      scrollTopButton.addEventListener('click', scrollToTop);
    }

    // Initial check for animations
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTopButton) {
        scrollTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <div className="about-page">
      {/* Add scroll progress indicator */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Add scroll to top button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <div className="about-content">
      <h1 className="page-title">About Us</h1>
        
        {/* Hero Section */}
        <section className="about-hero-section" ref={heroRef}>
          <div className="about-hero-background"></div>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h2 className="about-hero-title">Welcome to FitLife</h2>
              <h3 className="about-hero-subtitle">Your Journey to a Healthier Life Starts Here</h3>
              <p className="about-hero-description">
                At FitLife, we believe that everyone deserves access to quality fitness and wellness resources. 
                Our mission is to empower individuals to achieve their health and fitness goals through 
                personalized guidance, innovative technology, and a supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section" ref={contentRef}>
        <p className="about-text">
            FitLife is more than just a fitness platform – it's a comprehensive wellness ecosystem 
            designed to support your journey to better health. Our team of certified professionals 
            and cutting-edge technology work together to provide you with the tools, knowledge, 
            and motivation you need to succeed.
          </p>
        </section>

        {/* History Section */}
        <section className="history-section">
          <h2 className="history-title">Our History</h2>
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2020</h3>
                <h4 className="timeline-heading">The Beginning</h4>
                <p className="timeline-text">FitLife was founded in San Francisco with a vision to revolutionize personal fitness through technology.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2021</h3>
                <h4 className="timeline-heading">First Major Milestone</h4>
                <p className="timeline-text">Launched our innovative AI-powered workout planning system, reaching 10,000 active users.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2022</h3>
                <h4 className="timeline-heading">Expansion</h4>
                <p className="timeline-text">Expanded our team to include certified nutritionists and personal trainers, enhancing our service offerings.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2023</h3>
                <h4 className="timeline-heading">Mobile App Launch</h4>
                <p className="timeline-text">Released our mobile application, making fitness tracking and coaching accessible on the go.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2024</h3>
                <h4 className="timeline-heading">Global Reach</h4>
                <p className="timeline-text">Expanded our services to 20 countries, helping over 100,000 users achieve their fitness goals.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-year">2025</h3>
                <h4 className="timeline-heading">Future Vision</h4>
                <p className="timeline-text">Planning to launch advanced AI personal trainers and expand to 50 countries worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="mission-vision-section">
          <div className="mission-vision-container">
            {/* Mission Section */}
            <div className="mission-section" ref={missionRef}>
              <h2 className="mission-title">Our Mission</h2>
              <div className="mission-content">
                <p className="mission-text">
                  To empower individuals worldwide with accessible, personalized fitness solutions that transform lives through innovative technology and expert guidance, making health and wellness achievable for everyone.
                </p>
                <div className="mission-points">
                  <div className="mission-point">
                    <h3>Personalized Approach</h3>
                    <p>We believe in creating customized fitness journeys that adapt to each individual's unique needs, goals, and lifestyle.</p>
                  </div>
                  <div className="mission-point">
                    <h3>Expert Guidance</h3>
                    <p>Our team of certified professionals provides expert support and motivation to help you achieve your fitness goals.</p>
                  </div>
                  <div className="mission-point">
                    <h3>Innovative Technology</h3>
                    <p>We leverage cutting-edge technology to make fitness tracking, planning, and progress monitoring seamless and effective.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="mission-vision-image" ref={imageRef}>
              <img 
                src="/img.jpg" 
                alt="Fitness Motivation"
                className="fitness-image"
              />
            </div>

            {/* Vision Section */}
            <div className="vision-section" ref={visionRef}>
              <h2 className="vision-title">Our Vision</h2>
              <div className="vision-content">
                <p className="vision-text">
                  To become the global leader in digital fitness transformation, creating a world where everyone has access to personalized health and wellness solutions that inspire lasting lifestyle changes and foster a healthier, happier society.
                </p>
                <div className="vision-points">
                  <div className="vision-point">
                    <h3>Global Impact</h3>
                    <p>Expanding our reach to make fitness accessible to people across all continents, breaking down barriers to health and wellness.</p>
                  </div>
                  <div className="vision-point">
                    <h3>Community Building</h3>
                    <p>Creating a supportive global community where members motivate and inspire each other to achieve their fitness goals.</p>
                  </div>
                  <div className="vision-point">
                    <h3>Future Innovation</h3>
                    <p>Continuously evolving our platform with advanced AI technology and personalized coaching to revolutionize the fitness industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-carousel-container">
            <div className="team-carousel">
              <div className="team-member">
                <div className="member-image">
                  <img src="/John.jpg" alt="John Smith" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>John Smith</h3>
                  <span className="member-role">CEO & Founder</span>
                  <p>Former Olympic athlete with 15+ years of experience in fitness and wellness. Led multiple successful fitness startups before founding FitTrack.</p>
                  <div className="member-achievements">
                    <div className="achievement">
                      <i className="fas fa-trophy"></i>
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="achievement">
                      <i className="fas fa-medal"></i>
                      <span>Olympic Medalist</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="/Sarah.jpg" alt="Sarah Johnson" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Sarah Johnson</h3>
                  <span className="member-role">Head of Training</span>
                  <p>Certified personal trainer with expertise in sports psychology. Developed innovative training programs used by professional athletes worldwide.</p>
                  <div className="member-achievements">
                    <div className="achievement">
                      <i className="fas fa-certificate"></i>
                      <span>Certified Trainer</span>
                    </div>
                    <div className="achievement">
                      <i className="fas fa-star"></i>
                      <span>10K+ Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="/Michael.jpg" alt="Michael Chen" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Michael Chen</h3>
                  <span className="member-role">Technical Director</span>
                  <p>Tech innovator with a passion for fitness technology. Led the development of our AI-powered workout tracking system and mobile applications.</p>
                  <div className="member-achievements">
                    <div className="achievement">
                      <i className="fas fa-code"></i>
                      <span>AI Expert</span>
                    </div>
                    <div className="achievement">
                      <i className="fas fa-mobile-alt"></i>
                      <span>5+ Apps Launched</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <img src="/Emily.jpg" alt="Emily Rodriguez" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Emily Rodriguez</h3>
                  <span className="member-role">Nutrition Specialist</span>
                  <p>Registered dietitian and nutrition expert. Created personalized meal plans and nutrition programs that have helped thousands achieve their fitness goals.</p>
                  <div className="member-achievements">
                    <div className="achievement">
                      <i className="fas fa-book"></i>
                      <span>Published Author</span>
                    </div>
                    <div className="achievement">
                      <i className="fas fa-users"></i>
                      <span>20K+ Success Stories</span>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default About; 

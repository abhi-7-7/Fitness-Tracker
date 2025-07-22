import React, { useEffect } from 'react';
import './Blog.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const blogPosts = [
  {
    title: '5 Tips for Starting Your Fitness Journey',
    description: 'Kickstart your fitness lifestyle with these beginner-friendly tips that ensure long-term success.',
    image: '/bl_1.jpg',
    author: 'John Doe',
  },
  {
    title: 'Nutrition Myths Debunked',
    description: 'Discover the truth behind common diet myths and learn what actually works for a healthy lifestyle.',
    image: '/bl_2.jpg',
    author: 'Jane Smith',
  },
  {
    title: 'Workout Recovery: Why It Matters',
    description: 'Understand the importance of rest and recovery in maximizing your workout performance and results.',
    image: '/bl_3.jpg',
    author: 'Alex Johnson',
  },
  {
    title: 'Best Pre-Workout Snacks for Energy',
    description: 'Fuel your body before a workout with these nutritionist-approved snack ideas that boost stamina.',
    image: '/bl_4.jpg',
    author: 'Emily Davis',
  },
  {
    title: '10-Minute Full Body Stretch Routine',
    description: 'Loosen up and improve mobility with this effective stretching sequence, perfect for any time of day.',
    image: '/bl_5.jpg',
    author: 'Mark Thompson',
  },
  {
    title: 'How Sleep Affects Your Fitness Goals',
    description: 'Explore the science behind sleep and why it’s a crucial component of your fitness journey.',
    image: '/bl_6.jpg',
    author: 'Sophia Lee',
  },
  {
    title: 'HIIT vs. Cardio: Which is Better?',
    description: 'Compare high-intensity interval training and traditional cardio to see what suits your goals best.',
    image: '/bl_7.jpg',
    author: 'Chris Evans',
  },
  {
    title: 'Hydration Hacks for Active Lifestyles',
    description: 'Learn simple hydration strategies to stay energized, focused, and healthy all day long.',
    image: '/bl_8.jpg',
    author: 'Laura Bennett',
  },
  {
    title: 'Building Muscle with Bodyweight Workouts',
    description: 'You don’t need a gym! These bodyweight exercises help you build lean muscle at home.',
    image: '/bl_9.jpg',
    author: 'Daniel Kim',
  },
  {
    title: 'Mindfulness and Fitness: A Perfect Match',
    description: 'Discover how being mindful during workouts can improve focus, form, and overall results.',
    image: '/bl_10.jpg',
    author: 'Priya Mehta',
  },
];


const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <h1 className="page-title">Our Blog</h1>

      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-background"></div>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Stay Fit, Stay Informed</h1>
          <p className="blog-hero-subtitle">
            Your source for the latest fitness tips, nutrition advice, and wellness trends.
          </p>
        </div>
      </section>
      {/* Blog Section */}
      <section className="blog-carousel-section">
      <h2 className="carousel-heading">Latest Articles</h2>
      <div className="carousel-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-carousel">
            <img src={post.image} alt={post.title} className="carousel-image" />
            <div className="carousel-content">
              <h3 className="carousel-title">{post.title}</h3>
              <p className="carousel-description">{post.description}</p>
              <a className="read-more-link" href="#">Read More</a>
              <p className="carousel-author">By {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <div className="footer-container">
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-phone"></i> +91 9999999999</li>
              <li><i className="fas fa-envelope"></i> info@fitlife.com</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Fitness Street, Dehradun, Uttarakhand, India</li>
            </ul>
          </div>

          {/* Social Links */}
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

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 FitLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;

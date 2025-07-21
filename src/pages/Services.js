import React, { useEffect, useRef ,useState} from 'react';
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
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const faqData = [
  {
    question: 'How do I purchase a product?',
    answer: 'You can purchase products via our website. Add them to your cart and complete checkout securely.',
  },
  {
    question: 'What is the duration of the service?',
    answer: 'Service durations vary—details are listed on each individual service page.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel at any time from your account settings.',
  },
  {
    question: 'Do you offer online consultations?',
    answer: 'Absolutely! We provide video consultations for training and nutrition plans.',
  },
  {
    question: 'Are your trainers certified?',
    answer: 'All our trainers are certified professionals with years of experience.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, our FitLife app is available on both Android and iOS platforms.',
  },
  {
    question: 'Do you provide meal plans?',
    answer: 'Yes, custom meal plans are included in our nutrition planning services.',
  },
  {
    question: 'Can beginners join group classes?',
    answer: 'Yes, we have beginner-friendly classes and sessions designed for all fitness levels.',
  },
  {
    question: 'Do I need equipment for home workouts?',
    answer: 'Most home workouts require no equipment, but some may suggest resistance bands or dumbbells.',
  }
];


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
              <a href="/" className="cta-button secondary">Get Started</a>
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
        
        {/* FAQ Section */}

        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
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
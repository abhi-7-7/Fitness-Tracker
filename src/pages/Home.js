import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [sellingPointsVisible, setSellingPointsVisible] = useState(false);
  const modalRef = useRef(null);
  const sellingPointsRef = useRef(null);
  

  const handleOpenPricingModal = () => {
    setShowModal(true);
    setSelectedFeature(features[0]); 
    setAnimateCards(false);
    setTimeout(() => {setAnimateCards(true);}, 100);
  };

  useEffect(() => {
    const container = document.querySelector('.testimonial-carousel');
    const interval = setInterval(() => {
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {const observer = new IntersectionObserver(
           (entries) => {
              if (entries[0].isIntersecting) {
                  setSellingPointsVisible(true);
                  observer.disconnect();
                }},{ threshold: 0.2 }
          );

    if (sellingPointsRef.current) {
        observer.observe(sellingPointsRef.current);
    }


    return () => {
                  if (sellingPointsRef.current) {
                      observer.unobserve(sellingPointsRef.current);
                      }
            };
    }, []);

  const features = [
    {
      id: 1,
      title: "Personal Training",
      description: "Get personalized workout plans and one-on-one guidance from expert trainers.",
      image: "/photo1.jpg",
      link: "/services/personal-training",
      plans: [
        {
          level: "Beginner",price: "₹3,499",period: "per month",
          features: ["2 sessions per week","Basic workout plans","Nutrition guidelines","Email support"]
        },
        
        {
          level: "Intermediate",price: "₹5,999",period: "per month",
          features: ["3 sessions per week","Customized workout plans","Meal planning","Progress tracking","Priority support"]
        },

        {
          level: "Advanced",price: "₹9,999",period: "per month",
          features: ["5 sessions per week","Advanced training techniques","Personalized nutrition plans","Video form analysis","24/7 support","Recovery sessions"]
        }
      ]
    },
    
    {
      id: 2,
      title: "Nutrition Planning",
      description: "Custom meal plans and dietary guidance to support your fitness goals.",
      image: "/photo2.jpg",
      link: "/services/nutrition",
      plans: [
        {
          level: "Basic",price: "₹2,999",period: "per month",
          features: ["Weekly meal plans","Basic nutrition guidelines","Shopping lists","Email support"]
        },

        {
          level: "Standard",price: "₹4,999",period: "per month",
          features: ["Customized meal plans","Macro tracking","Recipe database access","Weekly check-ins","Priority support"]
        },

        {
          level: "Premium",price: "₹7,999",period: "per month",
          features: ["Personalized nutrition coaching","Meal prep guides","Supplement recommendations","Regular consultations","24/7 support","Restaurant guides"]
        }
      ]
    },

    {
      id: 3,
      title: "Group Classes",
      description: "High-energy group workouts for motivation and community support.",
      image: "/photo3.jpg",
      link: "/services/group-classes",
      plans: [
        {
          level: "Starter",price: "₹1,999",period: "per month",
          features: ["2 classes per week","Basic equipment access","Class schedule app","Email support"]
        },

        {
          level: "Regular",price: "₹3,999",period: "per month",
          features: ["Unlimited classes","All equipment access","Class booking app","Community forum","Priority booking"]
        },

        {
          level: "Elite",price: "₹5,999",period: "per month",
          features: ["Unlimited premium classes","Early access booking","Exclusive workshops","Personal locker","Towel service","Guest passes"]
        }
      ]
    },

    {
      id: 4,
      title: "Online Coaching",
      description: "Virtual training sessions and progress tracking from anywhere.",
      image: "/photo4.jpg",
      link: "/services/online-coaching",
      plans: [
        {
          level: "Basic",price: "₹2,999",period: "per month",
          features: ["Weekly check-ins","Basic workout plans","Progress tracking app","Email support"]
        },

        {
          level: "Standard",price: "₹4,999",period: "per month",
          features: ["Bi-weekly video calls","Customized workout plans","Nutrition guidance","Progress tracking","Priority support"]
        },

        {
          level: "Premium",price: "₹7,999",period: "per month",
          features: ["Weekly video calls","Personalized training","Meal planning","Form analysis","24/7 support","Recovery guidance"]
        }
      ]
    }
  ];
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      photo: "/Michael.jpg",
      text: "Joining this program completely transformed my fitness journey. Highly recommend!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      photo: "/Sarah.jpg",
      text: "Amazing trainers and personalized guidance. I feel stronger and more confident."
    },
    {
      id: 3,
      name: "Rohan Verma",
      photo: "/Michael.jpg",
      text: "The online coaching fits perfectly with my busy schedule. Worth every rupee!"
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      photo: "/Sarah.jpg",
      text: "Group classes are so fun and effective. Love the community vibe!"
    },
    {
      id: 5,
      name: "Karan Singh",
      photo: "/Michael.jpg",
      text: "Consistent results and amazing motivation from the coaches. Best fitness decision ever!"
    },
    {
      id: 6,
      name: "Ananya Joshi",
      photo: "/Sarah.jpg",
      text: "Their fat-loss routines actually work! I lost 6 kg in just one month."
    },
    {
      id: 7,
      name: "Vikram Chauhan",
      photo: "/Michael.jpg",
      text: "I was skeptical at first, but now I genuinely enjoy working out every day."
    },
    {
      id: 8,
      name: "Neha Iyer",
      photo: "/Sarah.jpg",
      text: "Perfect mix of strength training and flexibility. My energy levels are amazing now."
    },
    {
      id: 9,
      name: "Siddharth Menon",
      photo: "/Michael.jpg",
      text: "As someone recovering from an injury, the modifications offered were a blessing!"
    },
    {
      id: 10,
      name: "Meera Desai",
      photo: "/Sarah.jpg",
      text: "The weekly challenges keep me pumped. So interactive and engaging!"
    },
    {
      id: 11,
      name: "Arjun Bhatia",
      photo: "/Michael.jpg",
      text: "Love how I can train at home with just a mat and still feel the burn!"
    },
    {
      id: 12,
      name: "Tanvi Reddy",
      photo: "/Sarah.jpg",
      text: "Great for busy professionals! I train during lunch breaks and feel refreshed."
    },
    {
      id: 13,
      name: "Rahul Dey",
      photo: "/Michael.jpg",
      text: "I finally feel confident in my body. Thank you for the push and support!"
    },
    {
      id: 14,
      name: "Simran Kaur",
      photo: "/Sarah.jpg",
      text: "This program is not just about workouts—it's a complete mindset shift!"
    }    
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {setActiveIndex((current) => (current + 1) % features.length);}, 5000);
    return () => clearInterval(interval);
    }, []);

    
  useEffect(() => {if (showModal) {
      setAnimateCards(false);
      const timer = setTimeout(() => {setAnimateCards(true);}, 300);
      return () => clearTimeout(timer);
    }}, [showModal]);

    
  const handleOpenModal = (feature) => {
    setSelectedFeature(feature);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };


  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  
  const handleModalClick = (e) => {
    if (e.target.className === 'pricing-modal-overlay') {
      handleCloseModal();
    }
  };


  return (
    <div className="home-page">
      <div className="search-container">
        <div className="search-bar enhanced">
          <input type="text" placeholder="Search for workouts, nutrition plans, or trainers..." />
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="fitness-text"></div>
        <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Transform Your Body, Transform Your Life</h1>
              <h2 className="hero-subtitle">Join Our Fitness Community Today</h2>
              <p className="hero-description">
                Experience personalized training, expert nutrition guidance, and a supportive community dedicated to helping you achieve your fitness goals.
              </p>
              <button className="hero-button" onClick={handleOpenPricingModal}>
                View Plans
              </button>
            </div>

            {/* Contact Form on the right */}
            <div className="hero-contact-form-container">
              <form className="hero-contact-form">
                <h3>Contact Us</h3>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="hero-contact-submit">Submit</button>
              </form>
            </div>
        </div>
      </section>


      <button className="sticky-join-button" onClick={handleOpenPricingModal}>
        <span className="icon">💪</span> Join Us
      </button>

      {/* Feature Carousel Section */}
      <section className="feature-carousel-section">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="feature-carousel-container">
          <div className="feature-carousel">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`feature-card ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                  <div className="feature-overlay"></div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <button 
                    className="feature-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(feature);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Selling Points Section */}
      <section className={`selling-points-section ${sellingPointsVisible ? 'animate-in' : ''}`} ref={sellingPointsRef}>
        <h2 className="section-title">Why Choose Us</h2>
        
        {/* First Selling Point */}
        <div className={`selling-point ${sellingPointsVisible ? 'animate-in' : ''}`}>
          <div className="selling-point-content">
            <h3>Expert Trainers & Personalized Plans</h3>
            <p>
              Our certified fitness professionals create customized workout and nutrition plans tailored to your specific goals, body type, and fitness level. With years of experience and ongoing education, our trainers stay at the forefront of fitness science to deliver results that last.
            </p>
            <ul className="selling-point-features">
              <li style={{"--index": 1}}>One-on-one personalized attention</li>
              <li style={{"--index": 2}}>Customized workout routines</li>
              <li style={{"--index": 3}}>Nutrition guidance and meal planning</li>
              <li style={{"--index": 4}}>Regular progress tracking and adjustments</li>
            </ul>
          </div>
          <div className="selling-point-image">
            <img 
              src="/photo4.jpg" 
              alt="Expert Trainer" 
            />
          </div>
        </div>
        
        {/* Second Selling Point */}
        <div className={`selling-point reverse ${sellingPointsVisible ? 'animate-in' : ''}`}>
          <div className="selling-point-image">
            <img 
              src="/photo3.jpg" 
              alt="Community Support" 
            />
          </div>
          <div className="selling-point-content">
            <h3>Supportive Community & Flexible Options</h3>
            <p>
              Join a vibrant community of like-minded individuals who share your fitness goals. Our flexible membership options and diverse class offerings make it easy to fit fitness into your busy schedule. Whether you prefer one-on-one training, group classes, or online coaching, we have the perfect solution for you.
            </p>
            <ul className="selling-point-features">
              <li style={{"--index": 1}}>Supportive community environment</li>
              <li style={{"--index": 2}}>Flexible scheduling options</li>
              <li style={{"--index": 3}}>Variety of class types and intensities</li>
              <li style={{"--index": 4}}>Online and in-person options</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Testimonials*/}
      
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                {testimonial.photo && (
                  <div className="testimonial-photo">
                    <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} />
                  </div>
                )}
                <div className="testimonial-text">“{testimonial.text}”</div>
                <div className="testimonial-name">— {testimonial.name}</div>
              </div>
            ))}
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


      {/* Pricing Modal */}
      {showModal && (
        <div className="pricing-modal-overlay" onClick={handleModalClick}>
          <div className="pricing-modal" ref={modalRef}>
            <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            <h2 className="modal-title">{selectedFeature?.title} Plans</h2>
            <div className="pricing-plans">
              {selectedFeature?.plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`pricing-plan ${animateCards ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="plan-header">
                    <h3>{plan.level}</h3>
                  </div>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button className="plan-button">Select Plan</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 